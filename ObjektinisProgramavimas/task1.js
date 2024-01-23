class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
        // this.area = width*height;
        // this.perimeter = 2*(width+height);
    }
    CalculateArea(){
        return this.width * this.height;
    }
    CalculatePerimeter(){
        return 2 * (this.width + this.height);
    }
}

const rectangle1 = new Rectangle(10,5);
const rectangle2 = new Rectangle(13,6);

rectangle1.CalculatePerimeter;
rectangle2.CalculateArea;
console.log(rectangle1.CalculateArea);
console.log(rectangle2.CalculatePerimeter);

console.log(rectangle1)

class Circle{
    constructor(radius){
        this.radius = radius;
    }
    get area(){
        return Math.PI * this.radius**
    }
    get perimeter(){
        return 2 * Math.PI * this.radius;
    }
}

const circkle = new Circle(10)
console.log(circkle.area)
console.log(circkle.perimeter)