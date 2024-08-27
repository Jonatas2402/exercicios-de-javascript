var x = 1;

var y = 3;


console.log(x + y);


function escopo () {
    var z = 8;
    console.log(z);

    console.log(x);
    
    
}

escopo()