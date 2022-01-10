// var a = 10

// var a = '1'

// var result = a + 10;

// let b = 10;

// b = "1"

// var result = b + 10;

// const b = 10;

// b = "1"

// var result = b + 10;


// console.log(result);


// console.log(a);

// var a = 0;

// console.log(a);

// console.log(b);

// const b = 0;

// console.log(b);

// function sum(a, b) {
//   // var a = 5;
//   // var b = 6;
//   return a + b;
// }

// var result = sum(9,11)
// console.log(result);



// function logUsername() {
//   var username = 'React Native';
//   var lop = 4
//   console.log(username +" 0" + lop);
//   // return username;
// }

// logUsername()
// console.log(username);
// console.log(lop);


// function blockScope() {
//   if (true) {
//     var x = 0
//   }
  
//   console.log(x);
// }

// blockScope()



// function logUsername() {
//   var username = 'React Native';
//   var lop = 4
//   return username +" 0" + lop;
// }

// var logUsername = function() {
//   var username = 'React Native';
//   var lop = 4
//   return username +" 0" + lop;
// }

// const logUsername = () => {
//   var username = 'React Native';
//   var lop = 4
//   return username +" 0" + lop;
// }

// console.log(logUsername());

// function sum(a, b) {
//   return a + b
// }

// const sumArrow = (a, b) => a + b;


// const student = {
//   hoTen: 'Nguyen Van A',
//   lop: 'React Native 04',
//   diaChi: 'TP.HCM',
//   tuoi: 18,
//   hienThiThongTin: function(){
//     console.log('hienThiThongTin', this);
//     const _bind = this
//     function getInfo() {
//       console.log('this', _bind);
//       console.log('Họ tên: ' + _bind.hoTen);
//     }
//     getInfo()
//   },
//   hienThiThongTinArrow: function(){
//     const getInfo = () => {
//       console.log('this', this);
//       console.log('Họ tên: ' + this.hoTen);
//     }
//     getInfo()
//   }
// }

//2022 tuoi 18
// console.log(student);
// console.log(student.tuoi);
//2023 tuoi 19
// student.tuoi = 19
// student.xe = 'SH'
// console.log(student);
// console.log('2023 => student.tuoi = ', student.tuoi);
// student.hienThiThongTin()
// student.hienThiThongTinArrow()

// function sum(b, a) {
//   // a = a || 6
//   if(a === undefined ) {
//     a = 6
//   }
//   b = b || 5
//   console.log(a + b);
// }
// function sum(b = 6, a = 5) {
//   console.log(a + b);
// }
// sum(7,)
// sum(7, 2)

// const array = ['Nguyen Van A', 'React Native']
// for (let index = 0; index < array.length; index++) {
//   console.log(array[index]);
// }

// function sum(a = 6, b = 5) {
//   // console.log(a + b);
//   return a + b;
// }
// // a = 7 , b = 6 , c = 5, d = 
// console.log(sum(sum(7,6), 5))

function sum(...numbers) {
  console.log(numbers);
}
sum()