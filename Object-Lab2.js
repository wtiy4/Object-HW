const characters = [{
        name: "Luke Skywalker",
        height: 177,
        gender: "male",
        mass: 77,
        eye_color: "brown",
    },
    {
        name: "Leia Organa",
        height: 160,
        gender: "female",
        mass: 56,
        eye_color: "blue",
    },
    {
        name: "Han Solo",
        height: 180,
        gender: "male",
        mass: 80,
        eye_color: "brown",
    },
    {
        name: "Chewie",
        height: 222,
        gender: "male",
        mass: 190,
        eye_color: "black",
    },
    {
        name: "Kevin",
        height: 106,
        gender: "male",
        mass: 32.2,
        eye_color: "red",
    },
];



console.log("question - 1")
let firstName = characters.find(el => el.mass > 75)
console.log(firstName)





console.log("question - 2")
let shoerterThan = characters.find(char => char.height < 180);
let eyeColor = shoerterThan.eye_color;
console.log(eyeColor);




console.log("question - 3")
let heightMore = characters.filter(el => el.height > 150)
console.log(heightMore)




console.log("question - 4")

let femaleChar = characters.filter(el => el.gender == "female")
console.log(femaleChar)



console.log("question - 5")
let allClrs = characters.map(el => el.eye_color)
console.log(allClrs)



console.log("question - 6")
let masses = characters.map(char => char.mass);
console.log(masses);

console.log("question - 7")
let sortAlpha = characters.slice().sort((a, b) => a.name.localeCompare(b.name));
console.log(sortAlpha)


console.log("** Q8 **")
let sortedByHeight = characters.sort((a, b) => a.height - b.height);
console.log(sortedByHeight);

console.log("** Q9 **")
let Above100 = characters.every(char => char.height > 100);
console.log(Above100);


console.log("** Q10 **")
let lighterThan = characters.every(char => char.mass < 200);
console.log(lighterThan);

console.log("** Q11 **")
let BlackEyes = characters.some(char => char.eye_color === 'black');
console.log(BlackEyes);

console.log("** Q12 **")
let atLeast = characters.some(el => el.height === 177)
console.log(atLeast)