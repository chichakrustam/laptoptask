
//Polinrom
let input = prompt("Bir söz və ya rəqəm daxil edin:");

let start = 0;
let end = input.length - 1;
let polindrom = true; 

while (start<end) {
  if (input[start]!==input[end]) {
    polindrom=false;
  break;
}
start++;
end--;
}
if (polindrom) {
  console.log("Polindromdur.");
} else{
  console.log("Polindrom deyil.");
}




// ###Task-01
let x=Number(prompt("Ikireqemli eded daxil edin:"));
while (x<93) {
    x+=7;
    console.log(x);
}




// ###Task-02
let x=Number(prompt("Musbet eded daxil edin:"));
text="I know how to use cycles";
let i=0;
while(i<x) {
    console.log(text);
    i++;
}



// ###Task-03
let i=0;
while(i<1000) {
    if (i>=100) {
        console.log(i);
    }
    i+=10;
}




// ###Task-04
let i = 10;
let sum = 0;

while (i <= 99) {
  if (i % 2 !== 0) {
    sum += i;
  }
  i++; 
}

console.log(sum);




// ###Task-05
let x=Number(prompt("Musbet eded daxil edin:"));
i=100;
sum=0;
while (i<1000) {
    if (i%x==0) {
        sum+=i;
    }
    i++;
}
console.log(sum);



// ###Task-06




// ###Task-07

let result=1;
for (let i=1; i<=10; i++) {
    result*=i;
}
console.log(result);




// ###Task-08
let text= prompt("Bir mətn daxil edin:");
let reversed = "";

for (let i = text.length - 1; i >= 0; i--) {
  reversed += text[i];
}

console.log(reversed);



// ###Task-09
let text = prompt("Bir mətn daxil edin:");

for (let i = 0; i < text.length; i++) {
  if (text[i] === ".") {
    console.log("Metndeki ilk noqtenin indexi:" + i);
    break;
  }
}





// ###Task-10
let text = prompt("Bir metn daxil edin:");
let hasNumber = false;

for (let i = 0; i < text.length; i++) {
  if (text[i] >= '0' && text[i] <= '9') {
    hasNumber = true;
    break;
  }
}

if (hasNumber) {
  console.log("Metnde reqem var.");
} else {
  console.log("Metnde reqem yoxdur.");
}