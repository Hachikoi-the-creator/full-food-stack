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

  // const router = useRouter();

  // ! Handler
  // ? pseudo fix
  const verifyData = (e) => {
    e.preventDefault();
    // console.log(+mealNumberOfDishInputRef.current.value);
    // console.log(mealNumberOfDishInputRef.current.value.length);
    console.log("name", mealNameInputRef.current.value.length > 3);
    console.log("num", +mealNumberOfDishInputRef.current.value > 0);
    console.log("link", mealImagePathInputRef.current.value.length > 3);
    console.log("chef name", chefInputRef.current.value.length > 3);
    const validInputs =
      mealNameInputRef.current.value.length > 3 &&
      +mealNumberOfDishInputRef.current.value > 0 &&
      mealImagePathInputRef.current.value.length > 20 &&
      chefInputRef.current.value.length > 3;

    if (true) {
      document.querySelector(".hidden").click();
    } else {
      console.log("Incorrect data input");
    }
  };

  const INPUT_STYLE =
    "my-2 p-2 border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-50 focus:outline-none w-full h-10 rounded-md";

  return (
    <div className="flex-col px-12 py-12 max-w-3xl mx-auto shadow-xl rounded-2xl">
      <h1 className="font-light text-4xl">Add a new Meal </h1>
      <form action="/api/new-meal" method="post">
        <input
          name="meal_name"
          type="text"
          placeholder="Meal Name"
          required
          ref={mealNameInputRef}
          className={INPUT_STYLE}
        />
        <input
          name="meal_img_link"
          type="text"
          placeholder="Image Path"
          required
          ref={mealImagePathInputRef}
          className={INPUT_STYLE}
        />
        <input
          name="amount_of_dishes"
          type="number"
          // max="5"
          // min="1"
          placeholder="Number of Dishes"
          required
          ref={mealNumberOfDishInputRef}
          className={INPUT_STYLE}
        />
        <input
          name="chef_name"
          type="text"
          placeholder="Name of Chef"
          required
          ref={chefInputRef}
          className={INPUT_STYLE}
        />
        <button
          onClick={verifyData}
          className="bg-yellow-500 text-gray-800 font-medium text-xl inline-flex  w-full items-center px-4 py-4 rounded-xl"
        >
          Add Now
        </button>
        <button className="hidden" type="submit"></button>
      </form>
    </div>
  );
}
