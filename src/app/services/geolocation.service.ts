import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor(
    private http: HttpClient
  ) { }

  getLocation() {
    console.log('geolocationService##');
    
    return this.http.get('https://ipapi.co/json/')
  }
}
