import React from "react";
import MealList from "../components/MealList";
require("dotenv").config();

export default function Home({ mealList }) {
  return (
    <div>
      {mealList.map((oneMeal) => {
        <MealList meals={oneMeal} key={oneMeal.id} />;
      })}
    </div>
  );
}

export async function getStaticProps() {
  const USER_NICK = process.env.MANGO_USER;
  const USER_PSW = process.env.MANGO_PSW;

  const client = await MongoClient.connect(
    `mongodb+srv://${USER_NICK}:${USER_PSW}@crusty-owo.zzjowue.mongodb.net/?retryWrites=true&w=majority`
  );

  const db = client.db();
  const mealsCollection = db.collection("meals");
  // ! TF WHIT .TOARRAY()??
  const meals = await mealsCollection.find().toArray();

  client.close();

  return {
    props: {
      mealList: meals.map((meal) => ({
        id: meal._id.toString(),
        name: meal.name,
        image: meal.image_path,
        dish: meal.dishes,
        chef: meal.chef,
      })),
    },
  };
}
