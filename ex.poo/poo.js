//class: basicamente impressoras de objetos

class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullname() {
        console.log(`${this.firstName} ${this.lastName}`);
        
    }

    static speak(){
        console.log('olá mundo');
        
    }
}
const person = new Person('jonatas', 'silva', 26)

console.log(person);

//também podemos utilizar metodos dentro de uma classe utilizando get.
 person.getFullname();
 
//metodos estaticos: são metodos dentro da classe que não tuliza nenhum dado da class person. Exemplo de speak.
//para utilizar o metodo static, precisamos declarar a class que neste caso é Person.

Person.speak();


//Herança em POO: 

class Animal {
    constructor(name) {
        this.name = name
    }
    speak() {
        console.log(`${this.name} fez algum barulho`);
        
    }

}

class Dog extends Animal {
    constructor(name) {
        super(name)
    }

    speak() {
        console.log(`${this.name} latiu`);
        
    }
}
const animal = new Animal('simba');
const dog = new Dog('bob')
animal.speak();
dog.speak();