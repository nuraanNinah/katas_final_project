// function Hello()

function Hello() {
    console.log("Hello Tshepo!");
    return;
     }
   Hello();

// function evenOrOdd

function evenOrOdd(num){
    let remainder = num % 2;
        if ( remainder == 0) {
    console.log('even');
}
else {
    console.log('odd')
    }
}
evenOrOdd(10) 

function longest(list){
  let long = 0;
  let str = '';
  for (let i = 0; i < list.length; i++){
    if(list[i].length > long){
      str = list[i];
    }
  }
  return str;
}

let ourList = ["the","quick","brown", "fox", "ate", "my", "chickens"];
console.log(longest(ourList));


function myList(list){
    let long = 3;
    let str = '';
    for (let i = 0; i < list.length; i++){
      if(list[i].length > long){
        str = list[i];
        console.log(str);
      }
    }
    return str;
  }
  
  let list=["Once","Upon","a","Time"];
  myList(list);

// combine 2 lists

const Array1 = [11,22,33];
const Array2 = [1,2,3];

const mixedArray = [];

mixedArray.push(Array1[0],Array2[0],Array1[1],Array2[1],Array1[2],Array2[2]);

console.log(mixedArray);

  function printFrame(arr) {
    function fill (str, length, char) {
        return (str.length < length) ? fill(str + char, length, char) : str;
    }
    let size = arr.map((str) => {
            return str.length;
})
.reduce((a, b) => {
        return Math.max(a, b);
});
    let line = fill('', size + 4, '*');
    arr = arr.map((element) => {
            return '* '+ fill(element, size, ' ') + ' *';
})
    arr.unshift(line);
    arr.push(line);
    return arr.join('\n');;
}
console.log(printFrame(["Write","good","code","every","day"]));
 
