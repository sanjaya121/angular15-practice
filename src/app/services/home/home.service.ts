import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getPhotoes = () => {
    let api = "https://dummyjson.com/products";

    return this.http.get(api);
  };
}
