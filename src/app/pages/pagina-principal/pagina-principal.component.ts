import { Component, OnInit } from '@angular/core';
import { Alarma } from 'src/app/interfaces/alarma.interface';


@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  momentoActual = new Date();
  listaAlarmas: Alarma[] = [];
  nombre="";
  hora="";

  ngOnInit(): void {
    this.mueveReloj();
  }


  mueveReloj() {
    this.momentoActual = new Date();

    setTimeout(() => {
      this.mueveReloj()
    }, 1000)
  }

  crearAlarma() {
    console.log(this.nombre);
    console.log(this.hora);
    
    const nuevaAlarma = {
      nombre: this.nombre,
      hora: this.hora
    }
    this.listaAlarmas.push(nuevaAlarma)
    console.log(this.listaAlarmas);
    
    
    
  }

}
