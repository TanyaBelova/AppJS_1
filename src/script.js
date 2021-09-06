"use strict";

let numberOfFilms;

function start (){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", ""); 
    }
}

start();

const personalMovieDB = {
count: numberOfFilms,
movies:{},
actors:{},
genres:[],
privat: false
};

function rememberMyFilms(){
    for (let i=0; i <2; ){
        let filmName = prompt("Один из последних просмотренных фильмов?", ""),
            filmEstimate = prompt("На сколько оцените его?", "");
        if( filmName !== null &&  filmEstimate !== null && filmName !== "" && filmEstimate !== ""
        && filmName.length < 50 && filmEstimate.length < 50){
            personalMovieDB.movies[filmName] = filmEstimate;
            i++;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        console.log("просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Вы - классический зритель");
    }else if (personalMovieDB.count >= 30){
        console.log("Вы - киноман");
    } else console.log("Произошла ошибка");
}

detectPersonalLevel();

function writeYourGenres(){
    for(let i=1; i<=3; i++){
        const genre = prompt(`Ваш любимый жанр под номером ${i}`,"");
        if(genre !== '' && genre !== null){
            personalMovieDB.genres[i-1] = genre;
        }
        else i--;
    }
}

writeYourGenres();

function showMyDB(hidden){
    if (!hidden){
     console.log(personalMovieDB);
    }
 }

 showMyDB(personalMovieDB.privat);