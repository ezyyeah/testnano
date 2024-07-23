import { When, whenAmI } from "@it-astro:when";
import type { WritableAtom } from "nanostores";
import { type Component, onMount } from "solid-js";

export function storeLoader<T = any>(
  store: WritableAtom<T>
): Component<{
  value?: T;
}> {
  return (props) => {
    if (!props.value) return;
    store.set(props.value);
    return <></>;
  };
}
