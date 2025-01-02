export async function POST(req: Request) {

    const body = await req.json();
    const response = await fetch("https://deisishop.pythonanywhere.com/buy", {
        method: "POST",
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        return Response.json({ error: response.statusText }, { status: response.status })
    }

    const data = await response.json();

    if (data.hasOwnProperty("error")) {
        Response.json({ error: data.error }, { status:500 })
    }
    
    return Response.json(data);
    
}