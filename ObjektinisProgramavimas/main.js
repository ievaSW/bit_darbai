const objektas ={
    // skliaustai objekto notacija
    // spalva savybės reikšmė (property viena is obj. savybių)
    spalva: "raudona",
    sayHello() {console.log("Hellos")},
    hello: () => {console.log("Hello")},
    hi: function() {console.log("HI")},
}

objektas.sayHello();

// KLASĖS
// Jos rašomos iš didžiosios raidės

class Person {
    // name;
    // height;
   
    // Konstruktoriaus paskirtis nustatyti objekto laukus
    static countOfPeople = 0;
    constructor(name, height) {
        console.log("name: " + name);
        console.log(" height: " + height);
        this.name = name;
        this.height = height;
        this.nationality = "Lithuanian";
        Person.countOfPeople++;
    }
    sayHello(){
        console.log(`Labas, aš ${this.name}`);
    }
// Statinis metodas
static countArea(height, width){
   console.log( height * width)
}
}

const Uoga = new Person("Uoga",1.87);
const Vyšnia = new Person("Vyšnia", 1.62)
console.log(Uoga);
// Funkcijų iškvietimas 
Uoga.sayHello();
Vyšnia.sayHello();

Person.countArea(4,5);
console.log(Person.countOfPeople)