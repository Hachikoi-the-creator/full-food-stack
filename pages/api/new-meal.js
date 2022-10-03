// require("dotenv").config();
import mongoose from "mongoose";
import DishModel from "../../model/model";

const handler = async (req, res) => {
  const USER_NICK = process.env.NEXT_PUBLIC_MANGO_USER;
  const USER_PSW = process.env.NEXT_PUBLIC_MANGO_PSW;

  if (req.method === "GET") {
    res.status(200).json({ ups: "stry" });
  }

  if (req.method === "POST") {
    const { meal_name, meal_img_link, amount_of_dishes, chef_name } = req.body;

    mongoose.connect(
      `mongodb+srv://${USER_NICK}:${USER_PSW}@crusty-owo.zzjowue.mongodb.net/?retryWrites=true&w=majority`
    );

    const dish = await DishModel.create({
      meal_name,
      meal_img_link,
      amount_of_dishes,
      chef_name,
    });

    console.log("Dish: \n", dish, "\n Has been added succesfully");

    await mongoose.disconnect();

    res.status(201).send({ Message: "Meal inserted" });
    // res.redirect("/")
  }
};

export default handler;
