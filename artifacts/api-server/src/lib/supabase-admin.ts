export function getSupabaseBaseUrl(): string {
  const url = process.env.SUPABASE_URL;
  if (!url) throw new Error("SUPABASE_URL must be set");
  return url.replace(/\/rest\/v1\/?$/, "").replace(/\/$/, "");
}

export async function supabaseInsert(table: string, data: Record<string, unknown>): Promise<void> {
  const base = getSupabaseBaseUrl();
  const url = `${base}/rest/v1/${table}`;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceKey) throw new Error("SUPABASE_SERVICE_ROLE_KEY must be set");

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apikey": serviceKey,
      "Authorization": `Bearer ${serviceKey}`,
      "Prefer": "return=minimal",
    },
    body: JSON.stringify(data),
  });

  const text = await res.text();
  if (!res.ok) {
    console.error(`[supabase] Insert failed ${res.status} on ${table}: ${text}`);
  } else {
    console.log(`[supabase] Insert success into ${table}`);
  }
}
