export async function GET(request: Request) {
  const API_ADDRESS: any = process.env.API_ADDRESS;
  const req = await fetch(API_ADDRESS + "/edits", {
    method: "GET",
    cache: "no-cache",
    headers: {
      "Content-type": "application/json",
    },
  });

  if (req.ok) {
    const res = await req.json();
    return Response.json({
      message: "Passed",
      data: res.data,
    });
  } else {
    return Response.json({
      message: "Not Passed",
    });
  }
}
export async function POST(request: Request) {
  const body = await request.json();
  const API_ADDRESS: any = process.env.API_ADDRESS;
  const req = await fetch(API_ADDRESS + "/edits", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json",
    },
  });

  if (req.ok) {
    return Response.json({
      message: "Passed",
    });
  } else {
    return Response.json({
      message: "Not Passed",
    });
  }
}
