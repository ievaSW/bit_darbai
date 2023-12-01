let  diena = 4;

if (diena === 7) 
{
    console.log('pirmadienis');

} else if (diena === 2){
    console.log('antradienis');
}
 else if (diena === 3){
    console.log('trečiadienis');
}
 else if (diena === 4){
    console.log('ketvirtadienis');
}
 else if (diena === 5){
    console.log('penktadienis');
}
 else if (diena === 6){
    console.log('šeštadienis');
}
 else if (diena === 7){
    console.log('sekmadienis');
}
else {
    console.log('ne savaites diena');
}

if(diena <= 7 && diena >= 1){
    if(diena % 2 === 0)
    {
        console.log('diena yra lygine');
    }
    else {
        console.log('diena yra nelygine');
    }
}
