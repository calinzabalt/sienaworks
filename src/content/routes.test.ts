import assert from "node:assert/strict";
import test from "node:test";
import { matchRoute, pathFor, routes, switchLocale } from "./routes";
import { routeIds } from "./types";

test("every public route has a unique English and Romanian path", () => {
  const seen = new Set<string>();

  for (const id of routeIds) {
    const english = routes[id].en;
    const romanian = routes[id].ro;
    assert.equal(pathFor(id, "en"), english);
    assert.equal(pathFor(id, "ro"), romanian);
    assert.equal(seen.has(english), false);
    assert.equal(seen.has(romanian), false);
    seen.add(english);
    seen.add(romanian);
    assert.equal(english.endsWith("/"), english === "/");
    assert.equal(romanian.startsWith("/ro"), true);
    assert.equal(romanian.endsWith("/"), false);
  }
});

test("language switching keeps the equivalent page", () => {
  assert.equal(switchLocale("/services/website-performance", "ro"), "/ro/servicii/optimizare-performanta");
  assert.equal(switchLocale("/ro/despre", "en"), "/about");
  assert.equal(switchLocale("/ro", "en"), "/");
  assert.equal(switchLocale("/", "ro"), "/ro");
  assert.equal(switchLocale("/missing", "ro"), "/ro");
  assert.equal(switchLocale("/ro/missing", "en"), "/");
});

test("matching is exact", () => {
  assert.equal(matchRoute("/ro")?.id, "home");
  assert.equal(matchRoute("/ro/despre")?.id, "about");
  assert.equal(matchRoute("/contact")?.locale, "en");
  assert.equal(matchRoute("/ro/contact")?.locale, "ro");
});
