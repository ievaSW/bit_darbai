// ciklus (loop) naudojame, kai norime pakartoti veikima daug 
let i = 0;
while (i<5) {
    console.log(i);
  
    if (i===100) break;
    i++;
//  kartojame salyga tol kol salyga atitinka i<5, kai nebeatitinka, ciklas sustoja. Nutraukti cikla naudojame break, jis naudojamas ciklams nutraukti.

}

// Do while naudojame kai norime pirma atlikti operacija, o tik po to patikriname

for (let indeksas = "*"; indeksas<400; indeksas+=4 ) {
    console.log(indeksas);
    document.write("************<br>");
}
// kai apsisukimu skaiciu apibreztas, tuomet naudojamas for




