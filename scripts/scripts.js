//  const b = ["xD"];
// c = ["aya","ya","aya"];

// for (let i=0; i<c.length; i++) {
//  b.push(c);
// }
// b.push(c)

//  const a = b.concat(c)

//  console.log(a);


// var hello = "The best";
// var maxChar = 128;
// var charLeft = maxChar - hello.length;

// var message = "You have written " + hello.length + " and you have " + charLeft + " left";


// console.log(message);



// var count = 100;
// var countN = 99;

// function song(){
//     while(count > 0){
//        console.log(count + " bottles of beer on the wall, " + count + " bottles of beer. Take 1 down, pass it around, " + countN + " bottles of beer on the wall.");
//        --count;
//        --countN;
//     }
//     console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store buy some more , 99 bottles of beer on the wall.")
// }\


// song();


var b = []

function fibonacciGenerator(a){
    for(var i = 0; i<a; i++){
           b.push(i);
        if (b.length>1){
            var c = b.slice(-2);
            b.push(c[0]+c[1]);
        }
    }
}

fibonacciGenerator(5);