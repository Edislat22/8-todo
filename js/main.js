import { Todo } from './components/Todo.js';

const randomuzduotys = new Todo('Random uzduotys');
const namuDarbai = new Todo('Namu darbai');

randomuzduotys.summary();

randomuzduotys.add('Sukurti pirma uzduoti');
namuDarbai.add('Susitvarkyti Serloko projekta');
namuDarbai.add('Susitvarkyti Serloko projekta');
namuDarbai.add('Susitvarkyti Serloko projekta');
randomuzduotys.add('Uzmaisyti tesla');
namuDarbai.add('Susitvarkyti Serloko projekta');
randomuzduotys.add('Nusiskusti');
namuDarbai.add('Susitvarkyti Serloko projekta');
namuDarbai.add('Susitvarkyti Serloko projekta');

console.log(randomuzduotys);
console.log(namuDarbai);

randomuzduotys.summary();
namuDarbai.summary();




// const namuDarbai = new Todo('Namu darbai');
// console.log(namuDarbai.summary());