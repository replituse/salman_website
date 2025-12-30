import { sql } from "drizzle-orm";
import { pgTable, text, varchar, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  examName: text("exam_name").notNull(),
  duration: text("duration").notNull(),
  mode: text("mode").notNull(), // Online / Offline
  learningOutcome: text("learning_outcome").notNull(),
  country: text("country").notNull(),
  examType: text("exam_type").notNull(),
  academicLevel: text("academic_level").notNull(),
  overview: text("overview").notNull(),
  whoItIsFor: text("who_it_is_for").notNull(),
  teachingApproach: text("teaching_approach").notNull(),
  outcomes: text("outcomes").notNull(),
  counsellingInfo: text("counselling_info").notNull(),
  bannerImage: text("banner_image"),
  thumbnailImage: text("thumbnail_image"),
});

export const physicsFields = pgTable("physics_fields", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  explanation: text("explanation").notNull(),
  examRelevance: text("exam_relevance").notNull(),
  realWorldApps: text("real_world_apps").notNull(),
  teachingApproach: text("teaching_approach").notNull(),
  youtubeLinks: text("youtube_links").array().notNull(),
  relatedCourseIds: text("related_course_ids").array(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertCourseSchema = createInsertSchema(courses);
export const insertPhysicsFieldSchema = createInsertSchema(physicsFields);

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type Course = typeof courses.$inferSelect;
export type PhysicsField = typeof physicsFields.$inferSelect;
export type InsertCourse = z.infer<typeof insertCourseSchema>;
export type InsertPhysicsField = z.infer<typeof insertPhysicsFieldSchema>;
