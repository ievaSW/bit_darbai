// class Color{
//     #red = 0
//     #green = 0 
//     #blue = 0
//     constructor(red,green,blue){
//         this.#red = red;
//         this.#green = green;
//         this.#blue = blue;
//         // this.RGB = this.#red, this.#green, this.#blue;
        
//     }

//     get red(){
//         if(255 >= this.#red >= 0) 
//         return  this.#red
//         else throw new Error ("Blogos reikšmės!")
//     }
//     get green(){
//         if(255 >=this.#green>=0)
//         return this.#green
//         else throw new Error ("Blogos reikšmės!")
//     }
//     get blue(){
//         if(255 >=this.#blue>=0)
//         return this.#blue
//         else throw new Error ("Blogos reikšmės!")
//     }

//     }
// const NewColor = new Color (255,268,0)

class Color{
    #red
    #green
    #blue
    constructor(red,green,blue){
        this.#red = red;
        this.#green = green;
        this.#blue = blue;
        
    }
    get red(){
        if(this.#red >= 0 && this.#red) 
        return  this.#red
        else throw new Error ("Blogos reikšmės!")
    }
    get green(){
        if(255 >=this.#green>=0 && this.#green<= 255)
        return this.#green
        else throw new Error ("Blogos reikšmės!")
    }
    get blue(){
        if(255 >=this.#blue>=0 && this.#blue<= 255)
        return this.#blue
        else throw new Error ("Blogos reikšmės!")
    }

}

const NewColor = new Color (255,200,2);

// NewColor.Integer
console.log(NewColor)

// console.log(NewColor.red, NewColor.green, NewColor.blue);







    









