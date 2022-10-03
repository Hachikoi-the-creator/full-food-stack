import mongoose from "mongoose";
const { Schema, model } = mongoose;

const dish = new Schema({
  meal_name: {
    type: String,
    required: true,
    default: "Nameless like the phantom of the opera",
  },
  meal_img_link: {
    type: String,
    required: true,
    default: "Linkless like all those guys asking for souce in the internet",
  },
  amount_of_dishes: {
    type: String,
    required: true,
    default: "No amont of dishes, somehow!",
  },
  chef_name: {
    type: String,
    required: true,
    default: "This chef is so good that his name is not even known!",
  },
});

const DishModel = model("Dish", dish);

export default DishModel;
