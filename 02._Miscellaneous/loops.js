// loop methods
// for each, map, filter, sort, find, reduce

const dogs = [
    { name: "Lassie", famelevel: 13 },
    { name: "Beethoven", famelevel: 8},
    { name: "Hachiko", famelevel: 18 },
    { name: "Balto", famelevel: 5},
];

// add famelevel of +3 for all dogs

const updatedDogs = dogs.map(dog => (
    {...dog, famelevel: dog.famelevel + 3}
    ));

//would give one to one but all undefined
//const updatedDogs = dogs.map((dog) => {})
const increasedFamelevelDogs = dogs.map((dog) => {
    dog.famelevel += 3;
    return dog;
});

console.log(updatedDogs);
console.log(increasedFamelevelDogs);

// task add the key male and value true except for Lassie

const dogsWithSex = increasedFamelevelDogs.map((dog) => {
    if(dog.name !== "Lassie") dog.male = true;
    return dog;
});

console.log(dogsWithSex);

const dogsGender = increasedFamelevelDogs.map((dog) => ({
    ...dog, 
    male: dog.name === "Lassie" ? false : true
}));

console.log(dogsGender);


const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => number *2);

console.log(doubledNumbers);

numbers.map((number, index, originalArray) => console.log(number, index, originalArray));
