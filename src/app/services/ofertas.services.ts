import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpHeaders,
  HttpClient,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class OfertasService {
  constructor(private http: HttpClient) {}

  ofertas(): Observable<Object> {
    return this.http.get(
      //"./../../assets/ofertas.json"
      "http://mediacontacts-app.com/dercolanding/assets/ofertas.json"
    );
  }
}
