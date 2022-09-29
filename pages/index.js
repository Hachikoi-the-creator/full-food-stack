import React from "react";
import { MongoClient } from "mongodb";
import MealList from "../components/MealList";
// require("dotenv").config();

export default function Home(props) {
  // console.log(process.env.NEXT_PUBLIC_MANGO_USER);
  console.log("owo?", props);
  return (
    // <div>
    //   {mealList.map((oneMeal) => {
    //     <MealList meals={oneMeal} key={oneMeal.id} />;
    //   })}
    // </div>
    <h1>NOTHING TO SEE BITCH</h1>
  );
}

export async function getStaticProps() {
  const USER_NICK = process.env.NEXT_PUBLIC_MANGO_USER;
  const USER_PSW = process.env.NEXT_PUBLIC_MANGO_PSW;
  // const shit = await process.env.NEXT_PUBLIC_MANGO_USER;
  // console.log("lemme see", shit);
  // return { props: { res: "some data", cum: shit } };
  const client = await MongoClient.connect(
    `mongodb+srv://${USER_NICK}:${USER_PSW}@crusty-owo.zzjowue.mongodb.net/?retryWrites=true&w=majority`
  );

  const db = client.db();
  const mealsCollection = db.collection("meals");
  const meals = await mealsCollection.find();
  console.log(meals);
  client.close();
  return { props: { item1: "one", item2: "two" } };
}

// export async function getStaticProps() {
//   // ! TF WHIT .TOARRAY()??
// const meals = await mealsCollection.find().toArray();

//   return {
//     props: {
//       mealList: meals.map((meal) => ({
//         id: meal._id.toString(),
//         name: meal.name,
//         image: meal.image_path,
//         dish: meal.dishes,
//         chef: meal.chef,
//       })),
//     },
//   };
// }
