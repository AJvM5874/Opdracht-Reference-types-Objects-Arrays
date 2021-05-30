//Objects
const person = {
    name: "Alex",
    age: 47,
    evaluations: [7, 10, 9],
}
console.log(person);
// log naam dot
console.log(person.name);
//log leeftijd dot
console.log(person.age);
//log naam bracket
console.log(person["name"]);
//log leeftijd bracket
console.log(person["age"]);
//log property evaluations
console.log(person.evaluations[0] + person.evaluations[1]  + person.evaluations[2]);
// Arrays
const kleuren = [];

kleuren[0] = "geel";
kleuren[1] = "rood";
kleuren[2] = "blauw";
// log array
console.log(kleuren);
//log lengte array
console.log(kleuren.length);
// log eerste element
console.log(kleuren[0]);
// log laatste element
console.log(kleuren[kleuren.length -1]);
//voeg vierde element to
kleuren.push("bruin");
console.log(kleuren);
//voeg een cijfer toe
kleuren.push(8);
console.log(kleuren);
//voeg een object toe
kleuren.push({greetings: "Hi ik ben een object" });
console.log(kleuren[kleuren.length -1]);
//real life object
const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
                food: {
                        favourite_food: "fish",
      medium_liked_food: "dried fruits", 
      disliked_food: "walnuts"
     }
  },
        {
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: [ "Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
                        favourite_food: "tuna",
      medium_liked_food: "canned food", 
      disliked_food: "all fruits"
     }
  },
        {
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: [ "Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
                        favourite_food: "meaty things",
      medium_liked_food: "tuna", 
      disliked_food: "canned food"
     }
  }
]
//Log de naam van het laatste kattenras
console.log("Naam van het laatste kattenras:", catBreeds[2].name);
//Log de energy levels van de eerste kat
console.log("Energy levels van eerste kattenras:", catBreeds[0].energy_level);
// log het eerste temperament van de temperamenten van de tweede kat
console.log("Het eerste temperament van het tweede kattenras:" ,catBreeds[1].temperament[0]);
// Log het laatst temperament van de temperamenten van de derde kat
console.log("Het eerste temperament van de temperamenten het tweede kattenras:", catBreeds[2].temperament[4]);
//Log het favoriete voedsel van de derde kat
console.log("Het favoriete voedsel het derde kattenras:", catBreeds[2].food.favourite_food);