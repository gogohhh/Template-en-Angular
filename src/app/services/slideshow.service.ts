import { Injectable } from '@angular/core';

//modulo para conectarnos a cualquier api con peticiones http
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SlideshowService {

   public url: string;
  constructor(private http:HttpClient) {

      this.url = "assets/json/slideshow.json";
   }

   getSlideshow(){
     return this.http.get(this.url);
   }
}
