import { validateConditions } from "../src/content/conditions";

try {
  const conditions = validateConditions();
  const published = conditions.filter((c) => c.status === "published");
  console.log(
    `Content check passed: ${conditions.length} conditions, ${published.length} published.`,
  );
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}