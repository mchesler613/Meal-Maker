/*
Author: Merilyn Chesler
Date: August 6, 2019

Topic: JAVASCRIPT ITERATORS, OBJECTS, AND CLASSES
Assignment: Meal Maker
As a frequent diner, you love trying out new restaurants and experimenting with different foods. However, having to figure out what you want to order can be a time-consuming ordeal if the menu is big, and you want an easier way to be able to figure out what you are going to eat.

In this project, you’ll use JavaScript to randomly create a three-course meal based on what is available on a menu. We’ll keep running it until we’re satisfied with the generated meal!

*/

/*
This function returns an object with a name and price tag and saves it to a variable 'dish'
*/
const dish = (name, price) => {
    return {
    name : name,
    price : price
    }
  };
  
  /*
  The menu object contains three type of courses: 
  appetizers, main dishes and desserts, 
  setter and getter methods, 
  as well as 3 functions: 
    add a dish to a course, 
    generate a random dish, and
    generate a random meal
  */
  const menu = {
    /* private variable */
    _courses : {
      appetizers : [],
      mains : [],
      desserts : []
    },
    
    /* getter methods */
    get appetizers() { 
      return this._courses.appetizers;
    },
    get mains() { 
      return this._courses.mains; 
    },
    get desserts() {
      return this._courses.desserts;
    },
    
    get courses() {
      return this._courses;
    },
    
    /* setter methods */
    set appetizers(dish) {
            this._courses.appetizers.push(dish);
    },
    set mains(dish) {
        this._courses.mains.push(dish);
    },
    set desserts(dish) {
        this._courses.desserts.push(dish);
    },
    
    /* Add a Dish to a Course */
    addDishToCourse(courseName, dishName, dishPrice) {
      switch (courseName) {
        case "appetizers" :
          this.appetizers = dish(dishName, dishPrice);
          break;
        case "mains" :
          this.mains = dish(dishName, dishPrice);
          break;
        case "desserts" :
          this.desserts = dish(dishName, dishPrice);
          break;
      }
    },
    
    /* return a random Dish from a particular course: appetizer, main dish, dessert */
    getRandomDishFromCourse(courseName) {
      let index = 0;
      switch (courseName) {
        case 'appetizers':
               index = Math.floor(Math.random()*this.appetizers.length);
               return this.appetizers[index];
          break;
        case 'mains':
               index = Math.floor(Math.random()*this.mains.length);
               return this.mains[index];
          break;
        case 'desserts':
               index = Math.floor(Math.random()*this.desserts.length);
          return this.desserts[index];
          break;
      }
    },
    
    /* print out a random Meal with price tag */
    generateRandomMeal() {
        let appetizer = this.getRandomDishFromCourse('appetizers');
        let main = this.getRandomDishFromCourse('mains');
        let dessert = this.getRandomDishFromCourse('desserts');
        let price = appetizer.price + main.price + dessert.price;
        return `Your $${price} meal consists of : ${appetizer.name}, ${main.name} and ${dessert.name}.`
      }
  };
  
  /* testing Setter methods */
  menu.appetizers = dish("salad", 1.0);
  menu.appetizers = dish("fruit salad", 2.0);
  menu.mains = dish("tacos", 3.50);
  menu.mains = dish("salmon", 4.59);
  menu.desserts = dish("ice cream", 2.50);
  
  /* testing adding a dish to a course */
  console.log('\n Add Dish to Course')
  menu.addDishToCourse("appetizers","soup",1.75);
  menu.addDishToCourse("mains","chicken",3.75);
  menu.addDishToCourse("desserts","cookie",1.75);
  menu.addDishToCourse("desserts","chocolate mint",1.75);
  console.log(menu.courses);
  
  /* testing returning a random Dish from a particular course: appetizer, main dish, dessert */
  console.log("\nRandom Dish")
  let randomDish = menu.getRandomDishFromCourse('appetizers');
  console.log(randomDish);
  randomDish = menu.getRandomDishFromCourse('mains');
  console.log(randomDish);
  randomDish = menu.getRandomDishFromCourse('desserts');
  console.log(randomDish);
  
  /* testing returning a random Meal */
  console.log("\nRandom Meal")
  console.log(menu.generateRandomMeal());