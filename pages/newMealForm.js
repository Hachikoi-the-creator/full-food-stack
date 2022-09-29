import { useRef } from "react";
import { useRouter } from "next/router";
import React from "react";

/** INPUT EXAMPLE
 * name: Some tasty name
 * img_path: /img/meal1.jpg USUING IMAGES FROM THE SAME APP...
 * n: 77
 * chef_name: Jhonny bravo
const as = {1:"111",2:"2222"}
const be = JSON.stringify(as)
 *  */

export default function newMealForm() {
  // use of useRef to capture input value
  const mealNameInputRef = useRef();
  const mealImagePathInputRef = useRef();
  const mealNumberOfDishInputRef = useRef();
  const chefInputRef = useRef();

  // use of useRouter from next/router to redirect this page to the Homepage
  const router = useRouter();

  // ! Handler
  const newMealHandler = async (event) => {
    event.preventDefault();

    const mealData = {
      name: mealNameInputRef.current.value,
      // image_path: mealImagePathInputRef.current.value,
      // servings_amount: mealNumberOfDishInputRef.current.value,
      // chef: chefInputRef.current.value,
    };

    // use of Fetch API to make a request to the new-meal api and get back a response
    console.log(JSON.parse(JSON.stringify(mealData)));
    const response = await fetch("/api/new-meal", {
      method: "POST",
      // method: "GET",
      body: JSON.stringify(mealData),
      headers: {
        "content-Type": "text/javascript",
      },
    });

    // parses JSON response into native JavaScript objects
    const data = await response.json();

    console.log(data);

    // redirects this page to the Homepage
    router.replace("/");
  };

  const INPUT_STYLE =
    "my-2 p-2 border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-50 focus:outline-none w-full h-10 rounded-md";

  return (
    <div className="flex-col px-12 py-12 max-w-3xl mx-auto shadow-xl rounded-2xl">
      <h1 className="font-light text-4xl">Add a new Meal </h1>
      <form action="/api/new-meal" method="post">
        <input
          type="text"
          name="meal name"
          placeholder="Meal Name"
          required
          // ref={mealNameInputRef}
          className={INPUT_STYLE}
        />
        {/* <input
          type="text"
          placeholder="Image Path"
          required
          ref={mealImagePathInputRef}
          className={INPUT_STYLE}
        />
        <input
          type="number"
          max="5"
          min="1"
          placeholder="Number of Dishes"
          required
          ref={mealNumberOfDishInputRef}
          className={INPUT_STYLE}
        />
        <input
          type="text"
          placeholder="Name of Chef"
          required
          ref={chefInputRef}
          className={INPUT_STYLE}
        /> */}
        <button
          type="submit"
          className="bg-yellow-500 text-gray-800 font-medium text-xl inline-flex  w-full items-center px-4 py-4 rounded-xl"
        >
          Add Now
        </button>
      </form>
    </div>
  );
}
