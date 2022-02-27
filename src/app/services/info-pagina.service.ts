import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root',
})
export class InfoPaginaService {
  info: InfoPagina = {};
  loaded: boolean = false;

  constructor(private http: HttpClient) {
    this.http
      .get('assets/data/data-page.json')
      .subscribe((result: InfoPagina) => {
        //console.log(result);
        this.loaded = true;
        this.info = result;
      });
  }
}
