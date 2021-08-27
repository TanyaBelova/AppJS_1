"use strict";

//Task#1
let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
console.log(numberOfFilms);
 
//Task#2
const personalMovieDB = {
count: numberOfFilms,
movies:{},
actors:{},
genres:[],
privat: false
};

//Task3
const filmName1 = prompt("Один из последних просмотренных фильмов?", ""),
      filmEstimate1 = prompt("На сколько оцените его?", ""),
      filmName2 = prompt("Один из последних просмотренных фильмов?", ""),
      filmEstimate2 = prompt("На сколько оцените его?", "");


personalMovieDB.movies[filmName1] = filmEstimate1;
personalMovieDB.movies[filmName2] = filmEstimate2;

console.log(personalMovieDB);