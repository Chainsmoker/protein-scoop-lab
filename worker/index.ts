/** Cloudflare Worker entry point for Protein Scoop Lab. */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
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

    // 1. Image optimization endpoint
    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      return handleImageOptimization(
        request,
        {
          fetchAsset: async (path) => {
            try {
              if (env?.ASSETS) {
                return await env.ASSETS.fetch(new Request(new URL(path, request.url)));
              }
              return await fetch(new URL(path, request.url));
            } catch {
              return new Response(null, { status: 404 });
            }
          },
          transformImage: env?.IMAGES
            ? async (body, { width, format, quality }) => {
                const result = await env.IMAGES.input(body)
                  .transform(width > 0 ? { width } : {})
                  .output({ format, quality });
                return result.response();
              }
            : undefined,
        },
        allowedWidths
      );
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

    // 4. Default handler for all static assets and subpaths
    return handler.fetch(request, env, ctx);
  },
};

export default worker;
