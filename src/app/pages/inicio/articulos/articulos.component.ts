import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../../services/articulos.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  constructor(private articulosService: ArticulosService) {
    //RECIVIENDO DATOS DINAMICOS
    this.articulosService.getArticulos()
    .subscribe( respuesta => {
      console.log("Respuesta articulos: ", respuesta);
    })
   }

  ngOnInit(): void {
  }

}
