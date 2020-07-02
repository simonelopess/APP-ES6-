class List{
  constructor(){
    this.data = [];
  }

  add(data){
    this.data.push(data);
    console.log(this.data)
  }
}

class todoList extends List{
 constructor(){
   super();

   this.usuario = 'Diego';
 }

 mostraUsuario(){
   console.log(this.usuario);
 }
}

const MinhaLista = new todoList();

document.getElementById('novo-todo').onclick = function(){
  MinhaLista.add('Novo Todo');
}

MinhaLista.mostraUsuario();