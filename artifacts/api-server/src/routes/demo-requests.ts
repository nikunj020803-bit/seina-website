import { Router } from "express";
import { db, demoRequestsTable } from "@workspace/db";
import { desc } from "drizzle-orm";
import { supabaseInsert } from "../lib/supabase-admin";

const router = Router();

router.post("/", async (req, res) => {
  const { full_name, email, company, role, team_size, demo_focus, timeslot } = req.body as {
    full_name: string;
    email: string;
    company: string;
    role: string;
    team_size: string;
    demo_focus?: string;
    timeslot?: string;
  };

  if (!full_name || !email || !company || !role || !team_size) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const [record] = await db
    .insert(demoRequestsTable)
    .values({ full_name, email, company, role, team_size, demo_focus, timeslot })
    .returning();

  supabaseInsert("demo_requests", {
    full_name, email, company, role, team_size,
    demo_focus: demo_focus ?? null,
    timeslot: timeslot ?? null,
  }).catch(() => {});

  return res.status(201).json(record);
});

router.get("/", async (_req, res) => {
  const records = await db
    .select()
    .from(demoRequestsTable)
    .orderBy(desc(demoRequestsTable.created_at));
  return res.json(records);
});

export default router;
