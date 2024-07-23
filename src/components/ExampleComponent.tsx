import type { Component } from "solid-js";
import { testStore, testStoreHook } from "../stores/saveStore";

export const ExampleComponent: Component<{}> = () => {
  const test = testStoreHook();

  return (
    <>
      Products: {test.length}
      <button
        onClick={() => {
          testStore.set([...test, 1]);
        }}
      >
        Add Products
      </button>
    </>
  );
};
