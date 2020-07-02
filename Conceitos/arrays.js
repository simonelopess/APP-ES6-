const arr = [1,2,3,4,5,8,9];

//criar novo array
const newArr = arr.map(function(item, index){
  return item + index;
})

console.log(newArr);

const sum = arr.reduce(function(total, next){
  return total + next; //soma de todos os itens
    // pega o total do current + o próximo elemento
})

console.log(sum);


//filtra a lista
const filter = arr.filter(function(item){
  return item % 2 ===0;
})

console.log(filter);

//encontrar item
const find = arr.find(function(item){
  return item === 4;
})

console.log(find);