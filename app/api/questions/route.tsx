import fs from 'fs';
import path from 'path';
export async function GET() {
    const data = await fs.promises.readFile(  path.join("./questions.json"),"utf8")
    const jsonData = JSON.parse(data);
    return new Response(JSON.stringify(jsonData));
}