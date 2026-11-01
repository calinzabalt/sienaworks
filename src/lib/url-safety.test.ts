import assert from "node:assert/strict";
import test from "node:test";
import { validatePublicUrl } from "./url-safety";

test("public websites are accepted", () => {
  const result = validatePublicUrl("https://example.com/path");
  assert.equal(result.ok, true);
});

test("private, local and metadata targets are blocked", () => {
  const blocked = [
    "http://localhost",
    "http://127.0.0.1",
    "http://10.0.0.8",
    "http://192.168.1.4",
    "http://172.16.0.2",
    "http://169.254.169.254",
    "http://metadata.google.internal",
    "http://[::1]",
    "javascript:alert(1)",
    "file:///etc/passwd",
  ];

  for (const value of blocked) {
    const result = validatePublicUrl(value);
    assert.equal(result.ok, false, value);
  }
});
