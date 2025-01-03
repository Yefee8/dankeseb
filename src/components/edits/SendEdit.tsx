"use server";

export async function SendEdit(data: { name: string; editLink: string }) {
  const req = await fetch(`https://dankeseb.vercel.app/api/edits`, {
    method: "POST",
    body: JSON.stringify({ ...data }),
  });

  const res = await req.json();

  return res;
}
