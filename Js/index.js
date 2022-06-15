let movie = JSON.parse(localStorage.getItem("watchMovie"))||[];
let timerID="";

let movieImageData = [
   "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1331/641331-h",
   "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2886/892886-h",
   "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1527/571527-h",
   "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/MOVIE/2789/1000212789/1000212789-h",
   "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/700/600700-h",
   "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/MOVIE/3314/1770003314/1770003314-h",
   "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/MOVIE/1354/1000001354/1000001354-h",
   "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5001/705001-h",
   "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2068/1062068-h-54b155e41999",
   "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6535/846535-h"
]
localStorage.setItem("movieImage", JSON.stringify(movieImageData));

let imageData = JSON.parse(localStorage.getItem("movieImage"));
let i = 1;
let image1=imageData[0];
document.getElementById("slideshow");

let img1 = document.createElement("img");
img1.src = image1;
document.getElementById("imageContainer").append(img1);

setInterval(function(){
   if(i===imageData.length){
       i= 0;
   }
   let image1=imageData[i];
   document.getElementById("imageContainer").innerHTML="";

   let img1= document.createElement("img");
   img1.src=image1;

   document.getElementById("imageContainer").append(img1);
   i++;
},2000);

async function getData(){
    try {
        let movie = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=e3fcb255eefa05dc3f212b541bee8cba`);
        let data = await movie.json();
        let dataArr = data.results;
        showTrendingData(dataArr)
       
        
    } catch (error) {
        console.log(error);
        
    }
}
getData();

function showTrendingData(dataArr){
    document.getElementById("movieContainer").innerHTML="";

    dataArr.map(function(elem){
        let div = document.createElement("div");
        div.id = "movieBox";

        let image = document.createElement("img");
        image.src=`https://image.tmdb.org/t/p/w500${elem.poster_path}`;

        div.append(image);
        document.getElementById("movieContainer").append(div);
    });
}

async function getData2(){
  try {
      let movie = document.getElementById("search").value;
      let res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=596b5ce0&s=${movie}`);
      let data = await res.json();
      let movieArr =data.Search
   
    return movieArr;
      
  } catch (error) {
      console.log(error);
          }
}


function appendData(movieArr){
document.getElementById("hidden").innerHTML="";

let cont=document.createElement("div");
    cont.id = "hiddenBox";

  movieArr.map(function(elem){
  
    let p = document.createElement("p");
    p.textContent=elem.Title;
    p.addEventListener("click", function(){
        showMovie(elem);
    })

    cont.append(p);
    document.getElementById("hidden").append(cont);
  })
}

function showMovie(data){
  movie.push(data);
  localStorage.setItem("watchMovie", JSON.stringify(movie));
  window.location.href="movie.html";

}

async function main(){
try {
    let data = await getData2();

    if(data === undefined){
        return false;
    }
    appendData(data);
    
} catch (error) {
    console.log(data);
    
}
}

function debounce(func, delay){
  if(timerID){
      clearTimeout(timerID);
  }

  timerID=setTimeout(function(){
      func();
  }, delay);

}
