import { type User, type InsertUser, type Course, type PhysicsField } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getCourses(): Promise<Course[]>;
  getPhysicsFields(): Promise<PhysicsField[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private courses: Course[];
  private physicsFields: PhysicsField[];

  constructor() {
    this.users = new Map();
    this.courses = [
      {
        id: 1,
        examName: "JEE Advanced",
        duration: "2 Years",
        mode: "Offline",
        learningOutcome: "Master complex problem-solving for IIT admissions.",
        country: "India",
        examType: "Engineering",
        academicLevel: "High School",
        overview: "The most prestigious engineering entrance exam in India.",
        whoItIsFor: "Aspiring engineers aiming for IIT admission.",
        teachingApproach: "Deep conceptual understanding and rigorous practice.",
        outcomes: "Advanced problem-solving skills for JEE Advanced.",
        counsellingInfo: "Complete JoSAA guidance and institute selection support.",
        bannerImage: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=2000",
        thumbnailImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 2,
        examName: "NEET",
        duration: "2 Years",
        mode: "Online",
        learningOutcome: "Score 700+ in medical entrance with clear concepts.",
        country: "India",
        examType: "Medical",
        academicLevel: "High School",
        overview: "Common entrance for medical colleges in India.",
        whoItIsFor: "Medical aspirants seeking admission to top MBBS colleges.",
        teachingApproach: "NCERT-centric approach with speed-building techniques.",
        outcomes: "Exceptional speed and accuracy in Biology, Chemistry, and Physics.",
        counsellingInfo: "MCC and state-level counselling guidance.",
        bannerImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000",
        thumbnailImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 3,
        examName: "A-Levels Physics",
        duration: "1 Year",
        mode: "Online",
        learningOutcome: "Excel in UK board exams with deep theoretical clarity.",
        country: "UK",
        examType: "Boards",
        academicLevel: "High School",
        overview: "The standard high school qualification in the UK.",
        whoItIsFor: "Students preparing for UK university admissions.",
        teachingApproach: "Focus on application-based questions and practical skills.",
        outcomes: "Deep understanding of A-Level Physics syllabus and high exam scores.",
        counsellingInfo: "UCAS application support and personal statement review.",
        bannerImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=2000",
        thumbnailImage: "https://images.unsplash.com/photo-1523050335102-c3250c82232c?auto=format&fit=crop&q=80&w=800"
      }
    ];
    this.physicsFields = [
      {
        id: 1,
        name: "Mechanics",
        explanation: "The study of motion and its causes. Think of it as the foundation of how things move!",
        examRelevance: "Crucial for all competitive exams (JEE, NEET, AP Physics).",
        realWorldApps: "Car safety, sports, bridge building, and space flight.",
        teachingApproach: "Using real-world demonstrations and Newton's laws.",
        youtubeLinks: ["https://youtube.com/sample1"],
        relatedCourseIds: ["1", "3"]
      },
      {
        id: 2,
        name: "Electromagnetism",
        explanation: "How electricity and magnetism work together to power our world.",
        examRelevance: "High weightage in advanced physics courses.",
        realWorldApps: "Smartphones, MRI machines, and power grids.",
        teachingApproach: "Visualizing fields using interactive simulations.",
        youtubeLinks: ["https://youtube.com/sample2"],
        relatedCourseIds: ["1", "2"]
      }
    ];
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getCourses(): Promise<Course[]> {
    return this.courses;
  }

  async getPhysicsFields(): Promise<PhysicsField[]> {
    return this.physicsFields;
  }
}

export const storage = new MemStorage();
