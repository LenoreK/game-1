let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)

let pineTree = document.createElement('img')

function newImage(name, source, left, bottom) {
    $(name).src = $(source)
    $(name).style.position = 'fixed'
    $(name).style.left = $(left)
    $(name).style.bottom = $(bottom)
    document.body.append($(name))
}

newImage('pineTree', 'assets/pine-tree.png', '450px', '200px');

/*
Function Declaration:
function greet() {
    console.log('hello there');
}

Call / Invoke the Function:
greet();

Function Expression:
const speak = function(){
    console.log('good day!')
};

Invoke the Function:
speak()

Pass Values into Functions - Name is an Argument:
const speak = function(name){
    console.log('good day $(name)');
};

Takes value and assigns it to name variable - Function Parameter:
speak('mario');

const speak = function(name = 'luigi', time = 'night'){
    console.log('good $(time) $(name)');
}

const calcArea = function(radius){
    let area = 3.14 * radius**2;
    return area;
}

const calcArea = function(radius){
    return 3.14 * radius**2;
}

const area = calcArea(5);
console.log(area);
*/
