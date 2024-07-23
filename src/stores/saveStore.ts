import { atom } from "nanostores";
import { createStoreHook } from "../hooks/store";
import { storeLoader } from "../hooks/storeLoader";

export const testStore = atom<number[]>([]);
export const testStoreHook = createStoreHook<number[]>(
  testStore,
  (locals: any) => locals.saved_ids,
  []
);
export const TestStoreLoader = storeLoader<number[]>(testStore);
