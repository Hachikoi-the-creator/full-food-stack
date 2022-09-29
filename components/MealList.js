import React from "react";
import MealItem from "./MealItem";

export default function MealList({ meals }) {
  return (
    <div className="flex flex-wrap">
      <MealItem />
    </div>
  );
}
