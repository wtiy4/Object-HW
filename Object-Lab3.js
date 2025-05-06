const movies = [{
        title: "The Matrix",
        director: "Wachowski Brothers",
        year: 1999,
        rating: 8.7,
    },
    {
        title: "Inception",
        director: "Christopher Nolan",
        year: 2010,
        rating: 8.8,
    },
    {
        title: "Interstellar",
        director: "Christopher Nolan",
        year: 2014,
        rating: 8.6,
    },
    {
        title: "The Godfather",
        director: "Francis Ford Coppola",
        year: 1972,
        rating: 9.2,
    },
    {
        title: "The Dark Knight",
        director: "Christopher Nolan",
        year: 2008,
        rating: 9.0,
    },
    {
        title: "Fight Club",
        director: "David Fincher",
        year: 1999,
        rating: 8.8
    },
];

let first2000 = movies.find(el => el.year > 2000)
console.log(first2000)



let firstGreater9 = movies.find(el => el.rating > 9)
console.log(firstGreater9)


let nolanMovies = movies.filter(movie => movie.director.includes("Christopher Nolan"))
console.log(nolanMovies)


let before2000 = movies.filter(movie => movie.year < 2010)
console.log(before2000)



let moviesTitle = movies.map(el => el.title)
console.log(moviesTitle)


let moviesAverege = movies.reduce((sum, movie) => sum + movie.rating, 0) / 6;

console.log(moviesAverege)

// 7. قم بترتيب الأفلام حسب السنة (الأقدم إلى الأحدث).
let oldToNew = movies.sort((a, b) => a.year - b.year);
console.log(oldToNew);

// 8. قم بترتيب الأفلام حسب التقييم (من الأعلى إلى الأقل).
let hightToLow = movies.sort((a, b) => b.rating - a.rating);
console.log(hightToLow);

// 9. هل جميع الأفلام تقييمها أعلى من 8؟
let isAll = movies.every(movie => movie.rating > 8)
console.log(isAll)


// 10. هل يوجد فيلم واحد على الأقل تم إصداره في عام 1999؟
let Release1999 = movies.some(movie => movie.year === 1999)
console.log(Release1999)


// 11. هل جميع الأفلام أخرجها نفس المخرج؟
let sameDirector = movies.every(movie => movie.director === movies[0].director)
console.log(sameDirector)


// 12. هل يوجد فيلم واحد على الأقل تقييمه أقل من 8.5؟

let underEight = movies.some(movie => movie.rating < 8.5)
console.log(underEight)