import clientPromise from "@/app/lib/mongodb"
export async function POST(request) {
    const body = await request.json()
    console.log(body)
    const client = await clientPromise
    const db = client.db("bitlinks")
    const collection = db.collection("url")
    //Check if the short url exists
    const doc = await collection.findOne({ shorturl: body.shorturl })
    if (doc) {
        return Response.json({ success: true, error: true, message: 'URL Already exits' })
    }
    const result = await collection.insertOne({
        url: body.url,
        shorturl: body.shorturl
    })
    return Response.json({ success: true, error: false, message: 'URL Genrated Successfully' })
}
// import clientPromise from "@/app/lib/mongodb";

// export async function POST(request) {
//     try {
//         const body = await request.json();
//         console.log(body);

//         const client = await clientPromise;
//         const db = client.db("bitlinks");
//         const collection = db.collection("url");

//         // Insert the URL into the database
//         const result = await collection.insertOne({ 
//             url: body.url,
//             shorturl: body.shorturl
//         });

//         return Response.json({ success: true, error: false, message: "URL Generated" });

//     } catch (error) {
//         console.error("Error in POST /api/generate:", error);
//         return Response.json({ success: false, error: true, message: "Internal Server Error" }, { status: 500 });
//     }
// }
