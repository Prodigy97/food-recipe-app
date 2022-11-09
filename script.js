// stating out 3 functions to get meals: randomly, by Id and by search
const getRandomMeal = async () => {
    const randomMeal = await fetch(
        "www.themealdb.com/api/json/v1/1/random.php"
    ).json().meals;

    console.log(randomMeal);
};
getRandomMeal();

// const getMealById = async (id) => {
//   const meal = await fetch("www.themealdb.com/api/json/v1/1/lookup.php?i=52772" + id);
// }

// const getMealBySearchTerm = async (term) => {
//   const meals = await fetch("www.themealdb.com/api/json/v1/1/search.php?f=a
// ") + term;
// }
