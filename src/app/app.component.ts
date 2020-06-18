//Recopilar metadatos de configuración de componentes
import { Component, OnInit } from '@angular/core';
declare var jQuery:any;
declare var $:any;



//Declaración de la clase componente
@Component({
  //selector es la etiqueta/NOMBRE personalizada que nos permite crear Angular en el HTML y donde se va a vizualizar este componente
  selector: 'app-root',
  //La plantilla url es la ruta de la vista HTML que va a imprimir este componente
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//Exportamos la clase que nosotros declaramos en el App module
export class AppComponent implements OnInit{

    ngOnInit(){ 
      
      }
}
 