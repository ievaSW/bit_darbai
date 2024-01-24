const objektas ={
    // {} skliaustai objekto notacija
    // spalva - savybė (property)
    // raudona - reikšmė 

    spalva: "raudona",

    // sayHello() yra metodas
    sayHello() {console.log("Hellos")},

    // hello yra savybė, kurios reikšmė yra funkcija(šiuo atveju anoniminė arrow funkcija)
    hello: () => {console.log("Hello")},

    // hi yra savybė, kurios reikšmė yra funkcija(šiuo atveju anoniminė funkcija)
    hi: function() {console.log("HI")},
}

objektas.sayHello();

// KLASĖS (blueprint)
// Jos rašomos iš didžiosios raidės
// Klasė yra šablonas objektui
class Person {

   
   
    // Konstruktoriaus paskirtis nustatyti objekto laukus
    static countOfPeople = 0;
    constructor(name, height) {
        // console.log("name: " + name);
        // console.log(" height: " + height);
        this.name = name;
        this.height = height;
        this.nationality = "Lithuanian";
        Person.countOfPeople++;
    }
    // Jei funkcija yra klaseje, ji vadinama metodu
    sayHello(){
        console.log(`Labas, aš ${this.name}`);
    }
    // Statinis metodas skirtas ne atskiram objektui, o visiems objektams
    static countArea(height, width){
    console.log( height * width)
    }
}

// Naujo objekto, pasinaudojant klase sukūrimas
const Uoga = new Person("Uoga",1.87);
const Vyšnia = new Person("Vyšnia", 1.62)
const Trešnė = new Person("Trešnė", 1.55)

console.log(Uoga);
console.log(Uoga.name, Uoga.height, Uoga.nationality)

// Objekto metodų panaudojimas
Uoga.sayHello();
Vyšnia.sayHello();

// Statinis metodas(savybė) iškviečiamas per klasę
Person.countArea(4,5);
console.log(Person.countOfPeople)