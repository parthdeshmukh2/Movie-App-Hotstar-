let movie = JSON.parse(localStorage.getItem("watchMovie"))||[];
let data = movie.length-1;
console.log(data);
showData(movie);
function showData(movie){
    // let movie="";
    // movie.map(function(elem){
        let div = document.createElement("div");
    div.id = "leftimg";

    let image = document.createElement("img");
    image.src=movie[movie.length-1].Poster;

    div.append(image);

    let div2 = document.createElement("div");
    div.id = "rightdetail"

    let name = document.createElement("h2");
    name.textContent=movie[movie.length-1].Title;

    let year = document.createElement("p");
    year.textContent=`Realsed in:-${movie[movie.length-1].Year}`;

    let random = getInt(5, 9.9);
   let ratings = document.createElement("p");
    ratings.textContent=`Ratings:- ${random.toFixed(1)}`;

    div2.append(name, year, ratings);




    document.getElementById("container").append(div,div2);   


    // })
  


}

function getInt(min, max) {
   return (Math.random() * (max - min + 1) ) + min;
 }