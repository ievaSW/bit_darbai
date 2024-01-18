// File system
const fileSystem = require('fs');
const data =require('./data.json');
const express= require('express');
// console.log(data);
const app = express();

// 
//     const fileData = await FileSystem.readFile("./data.json", (error) => {
//         // console.log(`error: ${error}`);
//     });
//     console.log(fileData)
// }
// readFile();


async function readFile(){
const fileData = await fileSystem.promises.readFile( "data.json", (error) => {
    if (error) console.log(error);
});

console.log(JSON.parse(fileData));
}


  async function writeFile(obj){
    "./data.json", JSON.stringify(obj)
    "utf-8",
    (error) => {
        if (error) {
            console.log(error);
        }
        console.log(data);
    }
  }
readFile();

app.get('/', async(req, res


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
 

