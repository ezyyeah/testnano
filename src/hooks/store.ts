import { When, whenAmI } from "@it-astro:when";
import { useStore } from "@nanostores/solid";
import type { WritableAtom } from "nanostores";
import type { Accessor, Component } from "solid-js";

let Astro: any;

if (import.meta.env.SSR) {
  Astro = (await import("astro:global")).default;
}

export default Astro;

export const createStoreHook = <T = any>(
  store: WritableAtom<T>,
  defaultValuePathOnAstro: (astro: any) => T,
  defaultValueIfNotFound: T
): Accessor<T> => {
  if (whenAmI === When.DevServer || whenAmI === When.Server) {
    return () =>
      defaultValuePathOnAstro(Astro.locals) ?? defaultValueIfNotFound;
  }
  return useStore(store);
};
