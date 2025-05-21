import { defineConfig } from "prisma/config";

export default defineConfig({
  earlyAccess: true,
  schema: "./src/db/schema.prisma",
});
