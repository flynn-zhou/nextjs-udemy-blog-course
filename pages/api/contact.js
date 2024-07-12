import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    console.log(email);
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input value" });
      return;
    }

    //stored it in a DB

    const newData = {
      email,
      name,
      message,
    };

    let client;

    const connectString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.vebvsxd.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority&appName=${process.env.mongodb_clustername}`;
    console.log("connectString:" + connectString);
    try {
      client = await MongoClient.connect(connectString);
    } catch (error) {
      res.status(500).json({ message: "connect DB failed!" });
      return;
    }

    const db = client.db("nextjs-blog-db");
    try {
      const result = await db.collection("messages").insertOne(newData);
      newData.id = result.insertedId;
    } catch (error) {
      client.close;
      res.status(500).json({ message: "storing message failed!" });
    }

    client.close;

    res.status(201).json({ message: "successfully", data: newData });
  }
}

export default handler;
