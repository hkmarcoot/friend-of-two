import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

// This is our schema for the database
export default defineSchema({
  ...authTables,
  groups: defineTable({
    description: v.string(),
    icon_url: v.string(),
    name: v.string(),
    ai_name: v.string(),
    ai_description: v.string(),
  }),
  messages: defineTable({
    content: v.string(),
    group_id: v.id("groups"),
    user: v.string(),
    file: v.optional(v.string()),
  }),
});
