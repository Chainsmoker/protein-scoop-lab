/** Cloudflare Worker entry point for Protein Scoop Lab. */
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS?: Fetcher;
  DB?: D1Database;
  IMAGES?: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    // 1. Handle image optimization / passthrough endpoint
    if (url.pathname === "/_vinext/image") {
      const imageUrl = url.searchParams.get("url");
      if (imageUrl && imageUrl.startsWith("/")) {
        return Response.redirect(new URL(imageUrl, request.url).toString(), 302);
      }
    }

    // 2. Redirect root '/' to '/protein-scoop-lab'
    if (url.pathname === "/" || url.pathname === "") {
      const targetUrl = new URL("/protein-scoop-lab", request.url);
      targetUrl.search = url.search;
      return Response.redirect(targetUrl.toString(), 307);
    }

    // 3. Handle '/protein-scoop-lab' by internally routing to the root App Router page
    if (url.pathname === "/protein-scoop-lab" || url.pathname === "/protein-scoop-lab/") {
      const rewrittenUrl = new URL(request.url);
      rewrittenUrl.pathname = "/";
      const rewrittenRequest = new Request(rewrittenUrl.toString(), request);
      return handler.fetch(rewrittenRequest, env, ctx);
    }

    // 4. Try serving static assets directly if available
    if (env?.ASSETS) {
      try {
        const assetResponse = await env.ASSETS.fetch(request);
        if (assetResponse.status !== 404) {
          return assetResponse;
        }
      } catch {
        // Fall through to router handler
      }
    }

    // 5. Default handler for all other routes
    return handler.fetch(request, env, ctx);
  },
};

export default worker;
