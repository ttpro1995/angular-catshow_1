import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class CatApiService {
  image;
  info;
  fulljson;
  myapikey="ea88d668-b380-4077-be34-d5aa441fbdea";
  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'x-api-key': this.myapikey,
  }

  randomCatUrl="https://api.thecatapi.com/v1/images/search";
  

  requestOptions = {                                 
    headers: new HttpHeaders (this.headerDict), 
  };
  constructor(
    private http: HttpClient
  ) { }

  getRandomCat() {
    // this.fulljson = this.http.get("https://api.thecatapi.com/v1/images/search");
    // this.http.get<any>("https://api.thecatapi.com/v1/images/search").subscribe(data => {
    //   this.fulljson = data;
    // })
    this.fulljson = this.http.get("https://api.thecatapi.com/v1/images/search");
    return this.fulljson;
  }
}