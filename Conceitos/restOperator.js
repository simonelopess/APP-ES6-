//REST
//Pega todo o resto 
const usuario = {
  nome: 'Diego',
  idade: 23,
  empresa:'Rocketseat'
};

//Exemplo

const{nome, ...resto} = usuario;

console.log(nome); //atributo selecionado
console.log(resto);//todo conteudo restante 


//EXEMPLO COM VETOR

const arr = [ 1,2,3,4];

const [a,b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

//uso com Parametros de funções


//com o uso do params, é possível definir os valores na chamada da função, no lugar do corpo.
function soma(...params){
  return params;
}

console.log(soma(1,2,3,4))


//somando usando o reduce
function soma2(...params){
  return params.reduce((total, next)=>total+next);
}

console.log(soma2(1,2,3,4))