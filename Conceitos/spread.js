
//SPREAD

//Executa a união dos valores

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);



//criar um novo objeto com os dados do anterior, modificando atributo.
const usuario1 = {
  nome:'Diego',
  idade: 23,
  empresa: 'Rockectseat'
};


const usuario2 = {...usuario1, nome: 'Gabriel'};
console.log(usuario2);