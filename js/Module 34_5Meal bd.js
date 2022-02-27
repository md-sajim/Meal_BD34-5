document.getElementById("alart").style.display = "none";
document.getElementById("alart1").style.display = "none";
console.log("sajim");
const inputFild = document.getElementById("input-Search");
const buttonFild = document
  .getElementById("button-Search")
  .addEventListener("click", function () {
    let inputValu = inputFild.value;
    inputFild.value = "";
    if (inputValu == "") {
      document.getElementById("alart1").style.display = "block";
      inputValu = 1;
    }

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValu}`;
    fetch(url)
      .then((res) => res.json())
      .then((searchData) => searchFood(searchData.meals));
  });
const display = (alart) => {};
const searchFood = (food) => {
  console.log(food);
  const foodThamnillFiled = document.getElementById("foodThamnill");
  foodThamnillFiled.textContent = "";
  if (food == null) {
    document.getElementById("alart").style.display = "block";
  }
  food.forEach((foods) => {
    // console.log(foods);
    const themnill = document.createElement("div");
    themnill.innerHTML = `<div class="col" onclick=detileMale1('${
      foods.idMeal
    }')>
      <div class="card" >
        <img src="${foods.strMealThumb}" class="card-img-top" alt="..." />
        <div >
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
const detileMale1 = (mealInformation) => {
  const convartValue = parseInt(mealInformation);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${convartValue}`;
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((foodsData) => foodsDetailsDisplay(foodsData.meals[0]));
};
const foodsDetailsDisplay = (displayFoodsInfo) => {
  const detailsField = document.getElementById("detailsCrds");
  const createDiv = document.createElement("div");
  createDiv.innerHTML = ` <div><img height="800px" src="${displayFoodsInfo.strMealThumb}" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">${displayFoodsInfo.strMeal}</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </p>
    <a href="${displayFoodsInfo.strYoutube}" class="btn btn-primary">Go somewhere</a>
  </div></div>`;
  console.log(displayFoodsInfo);
  detailsField.appendChild(createDiv);
};
