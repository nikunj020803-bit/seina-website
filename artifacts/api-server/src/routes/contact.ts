import { Router } from "express";
import { db, contactMessagesTable } from "@workspace/db";
import { supabaseInsert } from "../lib/supabase-admin";

const router = Router();

router.post("/", async (req, res) => {
  const { full_name, email, subject, message } = req.body as {
    full_name: string;
    email: string;
    subject: string;
    message: string;
  };

  if (!full_name || !email || !subject || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const [record] = await db
    .insert(contactMessagesTable)
    .values({ full_name, email, subject, message })
    .returning();

  supabaseInsert("contact_messages", {
    full_name, email, subject, message,
  }).catch(() => {});

  return res.status(201).json(record);
});

export default router;
