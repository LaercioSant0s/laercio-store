export async function GET() {

    const response = await fetch("https://deisishop.pythonanywhere.com/products");
    const data = await response.json();
    return Response.json(data);

}