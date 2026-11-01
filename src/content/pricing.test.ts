import assert from "node:assert/strict";
import test from "node:test";
import { formatPrice, pricingPlans } from "./pricing";

test("Romanian starters stay in RON and EUR amounts stay unset", () => {
  const plans = Object.fromEntries(pricingPlans.map((plan) => [plan.id, plan]));

  assert.equal(plans.health?.ron.kind, "free");
  assert.equal(plans.health?.eur.kind, "free");
  assert.equal(plans.audit?.ron.amount, 450);
  assert.equal(plans.performance?.ron.amount, 900);
  assert.equal(plans.fix?.ron.amount, 350);
  assert.equal(plans.care?.ron.amount, 299);
  assert.equal(plans.care?.ron.period, "month");
  assert.equal(plans.woo?.ron.amount, 599);
  assert.equal(plans.woo?.ron.period, "month");
  assert.equal(plans.custom?.ron.kind, "quote");
  assert.equal(plans.custom?.eur.kind, "quote");

  for (const plan of pricingPlans) {
    if (plan.ron.kind === "from") {
      assert.equal(plan.eur.kind, "from");
      assert.equal(plan.eur.amount, null);
    }
  }

  assert.equal(formatPrice({ kind: "from", amount: null }, "en", "EUR"), "EUR starting price confirmed on request");
  assert.equal(formatPrice({ kind: "from", amount: 450 }, "ro", "RON"), "De la 450 RON");
  assert.match(formatPrice({ kind: "from", amount: 450 }, "en", "EUR"), /450/);
  assert.doesNotMatch(formatPrice({ kind: "from", amount: null }, "en", "EUR"), /450/);
});
