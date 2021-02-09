import { Todo } from './components/Todo.js';

const blynai = new Todo('Blynu kepimas');

//randomuzduotys.add('');
//namuDarbai.add('');ynai.add('Uzmaisyti tesla');


blynai.add('Uzmaisyti tesla');
blynai.add('Ijungti kaitlente');
blynai.add('Istraukti keptuve');
blynai.add('Ipilti tesla i keptuve');
blynai.add('Apversti blynus');
blynai.add('Isimti blynus');
blynai.add('Isjungti kaitlente');

blynai.edit(0, 'Isplauti dubeni ir uzmaisyti tesla');

blynai.remove(4);
blynai.taskCompleted(0);
blynai.taskCompleted(1);
blynai.taskCompleted(2);


blynai.summary();

blynai.print();
blynai.printCompletedOnly();
blynai.printNotCompletedOnly();

console.clear();

 // arrow functions (naujasis metodas):

// function suma(a, b) {
//     return a + b; 
// }
// console.log(suma(4, 5));

// const skirtumas = function (a, b) {
//    return a - b;
// }

// console.log(skirtumas(4, 5));

// const daugyba = (a, b) => {
//    return a * b;
// }
// console.log(daugyba(4, 5));

// console.log(skirtumas(4, 5));

// const dalyba = (a, b) => a / b;
// console.log(dalyba(4, 5));

// const kvadratu = a => a * a;
// console.log(kvadratu(4));


// senasis metodas:

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(a);

const aKvadratu = [];
for ( let i = 0; i < a.length; i++) {
aKvadratu.push(a[i] * a[i])
}
console.log(aKvadratu);

const bMap = a.map(n => n * n);
console.log(bMap);

console.log('-----------------------------');

const lygyniai = [];
for (let i = 0; i < a.length; i++) {
   if (a[i] %2 === 0) {
      lygyniai.push(a[i]);
   }
}
console.log(lygyniai);

const cFilter = a.filter(n => n% 2 === 0);
console.log(cFilter);

console.log('-----------------------------');

const lygyniuKvadratai = [];
for (let i = 0; i < a.length; i++) {
   if (a[i] % 2 === 0) {
       lygyniuKvadratai.push(a[i] * a[i]);
   }
}
console.log(lygyniuKvadratai);

const dMapFilter = a.filter(n => n % 2 === 0)
      .map(n => n * n);
      console.log(dMapFilter);
