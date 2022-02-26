console.log("sajim");
const inputFild = document.getElementById("input-Search");
const buttonFild = document
  .getElementById("button-Search")
  .addEventListener("click", function () {
    inputValu = inputFild.value;
    inputFild.value = "";
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValu}`;
    fetch(url)
      .then((res) => res.json())
      .then((searchData) => searchFood(searchData.meals));
  });
const searchFood = (food) => {
  const foodThamnillFiled = document.getElementById("foodThamnill");
  food.forEach((foods) => {
    console.log(foods);
    const themnill = document.createElement("div");
    themnill.innerHTML = `<div class="col" style="pading:5px">
      <div class="card" >
        <img src="${foods.strMealThumb}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${foods.strMeal}</h5>
          <p class="card-text">
            ${foods.strInstructions.slice(0, 100)}
          </p>
        </div>
      </div>
    </div>`;
    foodThamnillFiled.appendChild(themnill);
  });
};
