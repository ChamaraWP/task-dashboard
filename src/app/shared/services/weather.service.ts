import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(location:string){
    //TO-DO remove  API Key from environment
    return this.http.get(
        environment.weatherEndpoint + location
    );
  }
}


