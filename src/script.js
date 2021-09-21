"use strict";

const personalMovieDB = {
count: 0,
movies:{},
actors:{},
genres:[],
privat: true,
start: function (){
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", ""); 
    }  
},
rememberMyFilms:function (){
    for (let i=0; i <2; ){
        let filmName = prompt("Один из последних просмотренных фильмов?", ""),
            filmEstimate = prompt("На сколько оцените его?", "");
        if( filmName !== null &&  filmEstimate !== null && filmName !== "" && filmEstimate !== ""
        && filmName.length < 50 && filmEstimate.length < 50){
            personalMovieDB.movies[filmName] = filmEstimate;
            i++;
        }
    }
},
detectPersonalLevel:function (){
    if (personalMovieDB.count < 10){
        console.log("просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && this.count < 30){
        console.log("Вы - классический зритель");
    }else if (personalMovieDB.count >= 30){
        console.log("Вы - киноман");
    } else console.log("Произошла ошибка");
},
writeYourGenres:function (){
    // for(let i=1; i<=3; i++){
    //     const genre = prompt(`Ваш любимый жанр под номером ${i}`,"");
    //     if(genre !== '' && genre !== null && genre!==undefined){
    //         personalMovieDB.genres[i-1] = genre;
    //     }
    //     else i--;
    // }
   
    for(let i=1; i<2; i++){
        let genres = prompt("Введите ваши любимые жанры через запятую", "").toLowerCase();
        if(genres !== '' && genres !== null && genres!==undefined){
            personalMovieDB.genres = genres.split(", ");
            personalMovieDB.genres.sort();
        }
        else i--;
    }

    personalMovieDB.genres.forEach((item, i) => {
        console.log(`Любимый жанр #${i+1} - это ${item}`);
    });
},
toggleVisibleMyDB: function(){
    if(personalMovieDB.privat){
        personalMovieDB.privat=false;
    }
    else{
        personalMovieDB.privat=true; 
    }
},
showMyDB:function (hidden){
    if (!hidden){
     console.log(personalMovieDB);
    }
 }
};

//  personalMovieDB.start();
//  personalMovieDB.rememberMyFilms();
//  personalMovieDB.detectPersonalLevel();
//  personalMovieDB.writeYourGenres();
//  personalMovieDB.toggleVisibleMyDB();
//  personalMovieDB.showMyDB();