import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * False on the server and while the page is still hydrating, true once React runs in the browser.
 * The forms keep their submit button disabled until then: an earlier click would make the browser
 * submit the form by itself, losing the message.
 */
export function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
