import assert from "node:assert/strict";
import test from "node:test";
import { parseContact, parseHealthCheck } from "./enquiry";

const contact = {
  name: "Ada",
  email: "ada@example.com",
  website: "example.com",
  service: "fix",
  message: "The contact form stopped sending.",
  consent: "true",
};

test("contact form accepts a complete enquiry", () => {
  const result = parseContact(contact);
  assert.equal(result.ok, true);
  if (result.ok) assert.equal(result.data.website.startsWith("https://"), true);
});

test("contact form rejects missing consent, service and email", () => {
  assert.equal(parseContact({ ...contact, consent: false }).ok, false);
  assert.equal(parseContact({ ...contact, service: "nope" }).ok, false);
  assert.equal(parseContact({ ...contact, email: "ada" }).ok, false);
  assert.equal(parseContact({ ...contact, company_website: "spam" }).ok, false);
});

test("health check requires a public URL and ownership", () => {
  const result = parseHealthCheck({
    url: "https://example.com",
    email: "ada@example.com",
    websiteType: "wordpress",
    ownership: true,
  });
  assert.equal(result.ok, true);
  assert.equal(parseHealthCheck({ url: "https://example.com", email: "ada@example.com" }).ok, false);
  assert.equal(
    parseHealthCheck({
      url: "http://127.0.0.1",
      email: "ada@example.com",
      ownership: true,
    }).ok,
    false,
  );
});
