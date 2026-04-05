export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body;

  if (email === "test@test.com" && password === "123") {
    return Response.json({ success: true });
  }

  return Response.json({ success: false });
}