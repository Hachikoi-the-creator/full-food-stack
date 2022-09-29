require("dotenv").config();

const handler = async (req, res) => {
  // if (req.method == "GET") {
  //   console.log("Loggins some USER", );
  //   console.log("Loggins some PSW", process.env.MANGO_PSW);
  //   res.status(200).json({ ups: "true" });
  // }
  const USER_NICK = process.env.MANGO_USER;
  const USER_PSW = process.env.MANGO_PSW;

  if (req.method === "POST") {
    const client = await MongoClient.connect(
      `mongodb+srv://${USER_NICK}:${USER_PSW}@crusty-owo.zzjowue.mongodb.net/?retryWrites=true&w=majority`
    );
    const db = client.db();
    const mealsCollection = db.collection("meals");
    await mealsCollection.insertOne(req.body);

    client.close();

    res.status(201).send({ Message: "Meal inserted" });
  }
};

export default handler;
