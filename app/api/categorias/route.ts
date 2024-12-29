export async function GET() {

    const response = await fetch("https://deisishop.pythonanywhere.com/categories");
    const data = await response.json();
    return Response.json(data);

}