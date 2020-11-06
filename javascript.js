var Person = function(name,age){
	this.name = name
	this.age = age

}
Person.prototype = {
	greet: function(information){
		this.information = information
		console.log("Hi, I'm "+this.name+" and I'm "+ this.ag+ " years old")
		console.log(information)
	}
}

var Developer = function(name,age,skillset){
	this.name = name
	this.age = age
	this.skillset =  skillset
}

var Manager = function(name,age,managees){
	this.name = name
	this.age = age
	this.managees = managees
}
Developer.prototype = Object.create(Person.prototype);
Manager.prototype = Object.create(Person.prototype);

let maria = new Developer('Maria Popova', 23, ['Python', 'Machine Learning']);
let pesho = new Developer('Petar Petrov', 19, ['JavaScript', 'Angular', 'React', 'Vue']);

// Manager instance
let gates = new Manager('Bill Gates', 43, [maria, pesho]);
maria.greet("I know Python,Machine Learning");
pesho.greet("I know JavaScript,Angular,React,Vue");
gates.greet("I manage Maria Popova,Petar Petrov");