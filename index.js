/******************************
	Q1) Create an object called person with properties name, age, and city.
 Set appropriate values for these properties.
********************************/
let person ={
  name: `Adam`, 
  age: 30,
  city: `Kuwait`
};//obj

console.log(person);

/******************************
Q2) Add a new key email to the person object and assign it an email address.
********************************/
person.email = "adam@gmail.com";
console.log(person);
//another way
// person[email]="adam@gmail.com";// if not found undefined

/******************************
Q3) Write a JavaScript function called hasKey that takes two arguments:
an object and a key. The function should return true if the object contains
the specified key, and false otherwise. For example, if the object is
{ name: 'John', age: 25 }, and the key is 'name', the function should return true,
but if the key is 'city', it should return false.
********************************/
function hasKey ( obj, key){
  if(obj[key]){
      console.log("found the key");
      return true;
  }
      else{
          console.log("key not found");
          return false;
      }
}
//another way to solve
function haskey1(obj, key){
return obj[key];
}

hasKey(person,'name');
hasKey(person,'city');
hasKey(person,'country');

/******************************
Q4) Create a function that checks if all properties in an object have values
(i.e., no properties are undefined or null).
- running the function on this object should return false
  const myObject = {
    name: "John",
    age: 30,
    city: null,
  };
- running the function on this object should return true 
  const myObject = {
    name: "John",
    age: 30,
    city: "Kuwait",
  };
********************************/
const myObject = {
  name: "John",
  age: 30,
  city: null,
};

const myObject2 = {
  name: "Ali",
  age: 40,
  city: "Kuwait",
};


//another way
function hasValues1(x){

for(let key in x)
{
  if(x[key] != null || x[key] != undefined ){
    console.log(`${key} has value : ${x[key]}`);
    return true;
  }
  
else{
  console.log(`${key} no properties are undefined or null`);
  return false; 
}

}
}
hasValues1(myObject);
hasValues1(myObject2);

///

const movies = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    genre: "Drama",
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: "Crime",
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genre: "Crime",
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Action",
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    genre: "Drama",
  },
];
/******************************
    Q5) Create a function that accepts an array of objects called 'movies' 
and iterates through it to log the titles of all the movies.
********************************/
function logTitles(x){
  console.log(x.title);

}
movies.forEach(logTitles);

//another way 

// function printtitles(x){
//   x.forEach(logTitles);
// }
// printtitles(movies);


/******************************
    Q6) Create a function that accepts an array of objects called 'movies' 
and iterates through it to count how many movies were released in the year 1994.
********************************/


function countYear(x){
  return x.year == 1994;
  }


 let f = movies.filter(countYear).length;
 console.log(` the number of movies released in 1994 are : ${f}`);

/******************************
    Q7) Write a function that updates the genre of the movie "The Dark Knight"
 to "Action/Drama" and returns the modified array of movies.
********************************/
// function updatesName(){
//   movies[3].genre="Action/Drama";
//   return movies;
// }
// updatesName();
// //another way

// function updatesName1(x){
//   const a = x ;
//   z.forEach((y) => {
//     if(x.title == "The Dark Knight"){
//       y.genre = "Action/Drama";
//     }
//   })
//   return movies;
// }

//another way

function editname(arr){
  const newarr = arr.map( (x) => {
    if(x.title == "The Dark Knight"){
        x.genre = "Action/Drama";
    }
    return x;
  });
  console.log(newarr);
  return newarr;
}

editname(movies);

