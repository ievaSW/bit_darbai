class Vehicle{
    // Tevinis construktorius
   constructor(speed,marker){
    this.speed  = speed;
    this.marker = marker;
    this.color = "red;"
   }
horn(){
    console.log("Makes a sound...");
}
}

class Car extends Vehicle{
constructor(speed, marker, doorCount){
    super(speed, marker)
    this.doorCount = doorCount;
}
}
class Bike extends Vehicle{
constructor(speed, marker){
    super(speed, marker)
}
}

const Toyota = new Car(190, "Toyota Auris",4);
const Bmx = new Bike(12, "BMX Turbo");
console.log(Toyota)
console.log(Bmx)