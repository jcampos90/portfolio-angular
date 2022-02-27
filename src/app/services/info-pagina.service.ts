import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { Team } from '../interfaces/team.interface';

//https://angular-portfolio-1266c-default-rtdb.firebaseio.com/team.json

@Injectable({
  providedIn: 'root',
})
export class InfoPaginaService {
  info: InfoPagina = {};
  loaded: boolean = false;
  team: Team[] = [];

  constructor(private http: HttpClient) {
    this.loadInfo();
    this.loadTeam();
  }

  private loadInfo() {
    this.http
      .get('assets/data/data-page.json')
      .subscribe((result: InfoPagina) => {
        //console.log(result);
        this.loaded = true;
        this.info = result;
      });
  }

  private loadTeam() {
    this.http
      .get<Team[]>(
        'https://angular-portfolio-1266c-default-rtdb.firebaseio.com/team.json'
      )
      .subscribe((team) => {
        //console.log(team);
        this.loaded = true;
        this.team = team;
      });
  }
}
