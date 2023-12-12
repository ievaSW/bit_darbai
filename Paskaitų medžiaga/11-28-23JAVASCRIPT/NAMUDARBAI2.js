// 2. Atstumas tarp automobilių lygus s0 km. Jie vienu metu pradeda važiuoti. Antrasis automobilis vejasi pirmąjį. Automobilių greičiai  v1 ir v2 km/h - sveikieji skaičiai. Parašykite programą, kuri apskaičiuotų atstumą s tarp automobilių po t valandų ir apibūdintų situaciją (niekada nepavys, aplenkė, pavys, pasivijo).
// Pvz.: s0 = 200, v1 = 80, v2 = 50, t = 2, s = 260 km. Niekada nepavys;
// s0 = 20, v1 = 70, v2 = 80, t = 3, s = 10 km. Aplenkė.

// s2 = v1*t
// s1 = v2*t
// Atstumas tarp automobiliu po t valandu = v1*t - v2*t


// Skaičiai t1, t2, t3 reiškia vidutinę trijų iš eilės einančių dienų temperatūrą. Kelias dienas temperatūra buvo neigiama, o kelias - teigiama? Rezultatą išspausdinkite žodžiais. Šiuo atveju 0 skaitome, kaip teigiamą temperatūrą.
// Pvz.: t1 = 2, t2 = -5, t3 = 8, Rezultatas: Dvi dienas teigiama, vieną - neigiama.

// const temperatura = document.querySelector(".temperatura");

// temperatura.addEventListener("click", temperatura1)

// function temperatura1() {
//     const TemperaturuVidurkiai = [rand(-30, 25), rand(-30, 25), rand(-30, 25)];
//     let countNeigiamaTemperatura = 0;
//     countTeigiamaTemperatura = 0;
//     for (let index = 0; index < TemperaturuVidurkiai.length; index++) {
//         if (TemperaturuVidurkiai[index] < 0)  countNeigiamaTemperatura++;
//         else if (TemperaturuVidurkiai[index] >=0) countTeigiamaTemperatura++;
//     }
// temperatura1.innerHTML = `${countNeigiamaTemperatura++}`
// }

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// let t1 = rand(-30, 25),
//     t2 = rand(-30, 25),
//     t3 = rand(-30, 25);
// console.log(t1,t2,t3)


const TemperaturuVidurkiai = [rand(-30, 25), rand(-30, 25), rand(-30, 25)];
console.log(TemperaturuVidurkiai);


let countNeigiamaTemperatura = 0;
    countTeigiamaTemperatura = 0;

for (let index = 0; index < TemperaturuVidurkiai.length; index++) {
    if (TemperaturuVidurkiai[index] < 0)  countNeigiamaTemperatura++;
    else if (TemperaturuVidurkiai[index] >=0) countTeigiamaTemperatura++;
}

console.log(`${countTeigiamaTemperatura} "Teigiamos", ${countNeigiamaTemperatura} "Neigiamos"`);




   


// if (TemperaturuVidurkiai[0] > 0 || TemperaturuVidurkiai[1] > 0 || TemperaturuVidurkiai[2] > 0){
//     console.log("Viena diena")
// }

// if (sk1 !== didziausias && sk1 !== maziausias) console.log(sk1);
// else if (sk2 !== didziausias && sk2 !== maziausias) console.log(sk2);
// else console.log(sk3);
