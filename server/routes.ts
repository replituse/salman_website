import { Express } from "express";
import { Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(_httpServer: Server, app: Express): Promise<Server> {
  app.get("/api/courses", async (_req, res) => {
    const courses = await storage.getCourses();
    res.json(courses);
  });

  app.get("/api/physics-fields", async (_req, res) => {
    const fields = await storage.getPhysicsFields();
    res.json(fields);
  });

  return _httpServer;
}
