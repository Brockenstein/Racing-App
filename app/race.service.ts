import { RACES } from './mocks';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RaceService {
  constructor(private http: Http) {}
  getRaces() {
    return this.http.get('app/races.json')
    .map(resopnse => <Race[]>resopnse.json().racesData);
  }
}
