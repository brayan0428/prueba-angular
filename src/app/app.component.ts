import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostrarForm = false;
  editar = false;
  public titulo = '';
  public descripcion = '';
  mis_Notas = [
    {id: 1 , titulo : 'Nota 1', descripcion : 'Descripción Nota 1'},
    {id: 2 , titulo : 'Nota 2', descripcion : 'Descripción Nota 2'},
    {id: 3 , titulo : 'Nota 3', descripcion : 'Descripción Nota 3'},
    {id: 4 , titulo : 'Nota 4', descripcion : 'Descripción Nota 4'},
    {id: 5 , titulo : 'Nota 5', descripcion : 'Descripción Nota 5'},
  ];

  nota = {id : null , titulo : null , descripcion : null};

  nuevaNota(){
    this.mostrarForm = true;
  }

  guardarNota(){
    if(this.editar == false){
      this.nota.id = this.mis_Notas.length + 1;
      this.nota.titulo = this.titulo;
      this.nota.descripcion = this.descripcion;
      this.mis_Notas.push(this.nota);
    }else{
      var n = this;
      this.mis_Notas.forEach(function(el,i){
        if(el.id ==  n.nota.id){
          n.mis_Notas[i].titulo = n.titulo;
          n.mis_Notas[i].descripcion = n.descripcion;
        }
      })
    }
    this.mostrarForm = false;
    this.editar = false;
    alert('Información guardada correctamente');
    this.limpiar();
  }

  eliminarNota(nota){
    var n = this;
    this.mis_Notas.forEach(function(el,i){
      if(el.id ==  nota.id){
        n.mis_Notas.splice(i,1);
      }
    })
    this.limpiar();
  }

  verNota(nota){
    this.editar = true;
    this.nota.id = nota.id; 
    this.titulo = nota.titulo;
    this.descripcion = nota.descripcion;
    this.mostrarForm = true;
  }

  cancelar(){
    this.mostrarForm = false;
  }

  limpiar(){
    this.titulo = '';
    this.descripcion = '';
    this.nota = {id : null , titulo : null , descripcion : null};
  }
}
