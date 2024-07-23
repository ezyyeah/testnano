import type { APIContext, MiddlewareNext } from "astro";
import { sequence } from "astro/middleware";

async function fetchSavedIdsMiddleware(
  context: APIContext,
  next: MiddlewareNext
) {
  const products = context.url.searchParams.get("products");
  const product_ids = products?.split(",").map(Number) ?? [];

  console.log("product ids:", product_ids);
  context.locals.saved_ids = product_ids;

  return next();
}

export const onRequest = sequence(fetchSavedIdsMiddleware);
