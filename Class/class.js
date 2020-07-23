class Person {

    constructor(){
        this.name = "Kiran";
    }
    static getName(){
        return this.name
    }

}

class Car{
    constructor(brand){
        this.brand = brand;
    }
}

class Model extends Car{

    constructor(brand,model){
        super(brand)
        this.model = model;
    }
}

var modelCar = new Model("Audi","Q7");
console.log(modelCar);


// default Params
function sum (a=0 , b=0){
    return a+b;
}

console.log(sum(1,2)); //0