let numbers = [2, 5, 12, 13, 15, 18, 22]; 
function isEven(num){
    console.log(num + 'は偶数です');
}

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        let num = numbers[i];
        
        
        isEven(num);

        
    }

}





class car{
    constructor(gas, num){
        this.gas = gas;
        this.num = num;
    }

    getNumGas(){
        console.log(`ガソリンは${this.gas}です。ナンバーは${this.num}です`);
    }
}
let cars = new car(20.5, 1234);
cars.getNumGas();