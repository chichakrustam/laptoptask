// Task 1
console.log("My name is Cicek");

// Task 2
const name = "Cicek";
console.log(name);

// Task 3
Person
Console
$add


// Task 4
const bookPrice=10;     
const bookAmount=14;   
const totalPrice = bookPrice * bookAmount;

console.log(totalPrice)


// Task 5
let kmhSpeed=60;
let msSpeed=kmhSpeed* 1000/3600;
Console.log(msSpeed)



// Task 6
let year = prompt("Doguldugunuz ili daxil edin:");
let days = (2025 - Number(year)) * 365;
console.log(`Siz bu günə qədər ${days} gün yaşamısınız!`);



// Task 7
let num = 42;

let a = num ** 5;
let b= num % 3;

console.log(a);     
console.log(b); 



// Task 8
let firstName = prompt("Adinizi daxil edin:");
let lastName = prompt("Soyadinizi daxil edin:");
console.log(`Sizin adiniz ${firstName} ${lastName}. Tanishligimiza chox shadam!`);


// Task 9
let firstName = "Cicek" ;
let lastName = "Rustamova" ;
console.log(`Sizi bir daha gormeyimize shadiq ${firstName} ${lastName}`);


// Task 10
let fullName = "Cicek Rustamova";
console.log(fullName.length);



// Task 11
let fullName= "Cicek Rustamova";
let fullName_split= fullName.split(" ");
console.log(fullName_split[0][0], fullName_split[1][0]);


// Task 12
let fullName=prompt("Ad ve soyadinizi daxil edin:");
let fullName_split= fullName.split(" ");
console.log(fullName_split[0], fullName_split[1]);


// Task 13
let name=prompt("Adinizi daxil edin:");
console.log('Salam ${name}!');


// Task 14
let num1=prompt("Birinci ededi daxil edin:");
let num2=prompt("Ikinci ededi daxil edin:");
console.log(Number(num1)+Number(num2));
console.log(Number(num1)-Number(num2));
console.log(Number(num1)*Number(num2));
console.log(Number(num1)/Number(num2));

// Task 15
let num1=12345;
let num2=98765;
let a=num1*num2;
let aStr=a.toString();

console.log(aStr[5]);




// Task 16

"" + 1 + 0 =
//"10"
"" - 1 + 0 =
//-1
"true" - false =
//NaN
6 / "3" =
//2
4 + 5 + "px" =
//"9px"
"$" + 4 + 5 =
//"$45"
"4" - 2 =
//2
NaN + "px" =
//NaN
7 / 0 =
//Infinity
"-9" + 5 =
//"-95"
"-9" - 5 =
//-14
null + 1 =
//1
undefined + 1 =
//NaN



// Task 17
let num=prompt("4reqemli eded daxil edin");
sum=Number( Number(num[0])+ Number(num[1])+ Number(num[2])+ Number(num[3]));
console.log(sum);

// Task 18
let fullName = prompt("Ad soyadinizi daxil edin:");
let fullName_split= fullName.split(" ");
console.log(`Salam, ${fullName_split[0]} !`);

// Task 19
let num=prompt("Ondaliq eded daxil edin:");
let num_split=num.split(".");
console.log(`${num_split[0]}azn ${num_split[1]}qepik`);


// Task 20
let salary= Number(prompt("Maashinizi daxil edin:"));
let tax=salary*0.13;
console.log(salary-tax);

// Task 21
let fullName=prompt("soyad, ad və ata adını daxil edin:");
let fullName_split= fullName.split(" ");
console.log(`${fullName_split[0]} ${fullName_split[1][0]} . ${fullName_split[2][0]} `);

// Task 22
let money = Number (prompt ("Meblegi daxil edin:"));
let percent = Number (prompt ("Faiz derecesini daxil edin:"));
let years = Number (prompt ("Muddeti daxil edin:"));
console.log(money + (money * years * percent) / 100);

// Task 24
let age = prompt("Yashinizi daxil edin:");

if (age < 18) {
  alert("Access denied");
} else {
  alert("Access granted");
}

// Task 26
let year = prompt("İli daxil edin:");

if (year % 4 === 0) {
  console.log("İl uzun ildir");
} else {
  console.log("İl uzun il deyil");
}


// Task 27
let id = prompt("enter product id:");

switch (id) {
  case "1":
    alert("Available 10 pcs.");
    break;
  case "2":
    alert("Available 256 pcs.");
    break;
  case "3":
    alert("Available 53 pcs.");
    break;
  case "4":
    alert("There are 3 available.");
    break;
  default:
    alert("Out of stock");
}


// Task 28
let input= prompt("Cinsinizi daxil edin M ve ya F:");
let gender;

if (input === "M") {
  gender = "male";
} else if (input === "F") {
  gender = "female";
} 

console.log(gender);


// Task 29
let monthNumber = prompt("Ayin nomresini daxil edin (1-12 arasi):");
let monthName;

switch (monthNumber) {
  case "1":
    monthName = "Yanvar";
    break;
  case "2":
    monthName = "Fevral";
    break;
  case "3":
    monthName = "Mart";
    break;
  case "4":
    monthName = "Aprel";
    break;
  case "5":
    monthName = "May";
    break;
  case "6":
    monthName = "İyun";
    break;
  case "7":
    monthName = "İyul";
    break;
  case "8":
    monthName = "Avqust";
    break;
  case "9":
    monthName = "Sentyabr";
    break;
  case "10":
    monthName = "Oktyabr";
    break;
  case "11":
    monthName = "Noyabr";
    break;
  case "12":
    monthName = "Dekabr";
    break;
  default:
    monthName = "Belə bir ay mövcud deyil!";
}

console.log(monthName);

// Task 30
let date = prompt("Tarixi bu formada daxil edin: YYYY.MM.DD");

let fullDate = date.split(".");
let year = fullDate[0];
let month = fullDate[1];
let day = fullDate[2];



// Task 31
let p = 8;
let q = p-- - --p + p++ + ++p;
//p= 8   q=16


// Task 32
let a = 6, b = 4, c = 2;

let x = ++a - b-- + c++ - --b + a++;
let y = a-- + --c - ++b + x++ - --a;

//a= 6   b= 3   c=2    x=11


// Task 33
let a = 7, b = 3, c = 5;

let x = a-- - ++b + c++ - --a + b++ - --c + a++ - b-- + c++;
let y = --x + a++ - --b + c-- - x++ + ++a - b++ + --c - x--;
let z = a-- + ++b - --c + x++ - --y + b-- - ++x + c++ - --a + y++;

//a=6    b=3    c=  44  x=8    y=11     z=10
