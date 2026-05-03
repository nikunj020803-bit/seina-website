import { Router } from "express";
import { createClient } from "@supabase/supabase-js";

const router = Router();

function getSupabase() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;
  if (!url || !key) throw new Error("SUPABASE_URL and SUPABASE_ANON_KEY must be set");
  return createClient(url, key);
}

// POST /api/auth/login
router.post("/login", async (req, res) => {
  const { email, password } = req.body as { email: string; password: string };
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  const supabase = getSupabase();
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return res.status(401).json({ error: error.message });
  }

  const user = data.user;
  return res.json({
    user: {
      id: user.id,
      email: user.email ?? "",
      created_at: user.created_at,
    },
    message: "Login successful",
  });
});

// POST /api/auth/logout
router.post("/logout", async (req, res) => {
  const supabase = getSupabase();
  await supabase.auth.signOut();
  return res.json({ message: "Logged out" });
});

// GET /api/auth/me
router.get("/me", async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  const token = authHeader.slice(7);
  const supabase = getSupabase();
  const { data, error } = await supabase.auth.getUser(token);

  if (error || !data.user) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  const user = data.user;
  return res.json({
    id: user.id,
    email: user.email ?? "",
    created_at: user.created_at,
  });
});

export default router;
