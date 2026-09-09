export const projectTypes = [
  "WordPress Development",
  "WooCommerce",
  "Performance",
  "React / Headless",
  "Website Rebuild",
  "Ongoing Support",
  "Agency Partnership",
  "Other",
] as const;

export const budgetOptions = [
  "Under €500",
  "€500–€1,000",
  "€1,000–€2,500",
  "€2,500–€5,000",
  "€5,000+",
  "Not sure yet",
] as const;

export type ProjectType = (typeof projectTypes)[number];
export type BudgetOption = (typeof budgetOptions)[number];

export function isProjectType(value: string): value is ProjectType {
  return (projectTypes as readonly string[]).includes(value);
}
