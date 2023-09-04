function createJuice(fruits){
    console.log(`${fruits}を受け取りました。ジュースにして返します。`);
    createJuice = `${fruits}ジュース`;
    
    return createJuice;
}

createJuice("みかん"); 

let orangeJuice = createJuice;
console.log( `${orangeJuice}が届きました`);