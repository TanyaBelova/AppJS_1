"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

// for (let i=0; ; i++){
//     let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
//     console.log(numberOfFilms);
//     if(numberOfFilms.length !== 0 && numberOfFilms !== null
//     && numberOfFilms !== undefined && numberOfFilms.length < 50 ){
//        console.log('ok');
//         break;
//     } 
// }
 
const personalMovieDB = {
count: numberOfFilms,
movies:{},
actors:{},
genres:[],
privat: false
};

for (let i=0; i <2; ){
    let filmName = prompt("Один из последних просмотренных фильмов?", ""),
        filmEstimate = prompt("На сколько оцените его?", "");
    if( filmName !== null &&  filmEstimate !== null && filmName !== "" && filmEstimate !== ""
    && filmName.length < 50 && filmEstimate.length < 50){
        personalMovieDB.movies[filmName] = filmEstimate;
        i++;
    }
}

console.log(personalMovieDB);

if (personalMovieDB.count < 10){
    console.log("просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log("Вы - классический зритель");
}else if (personalMovieDB.count >= 30){
    console.log("Вы - киноман");
} else console.log("Произошла ошибка");