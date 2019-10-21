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
    const httpOptions = {
      headers: new HttpHeaders({

        'Content-Type': 'application/json',
        'Authorization': 'Bearer PAoHJDJsI4ABjcCkgbMGhmH0lj2nKy8CznxndVeVoKfb939paSg1k1Wj7tiH',
        'Accept': '*/*'
      })
    };

    return this.http.get(
      //"http://landings.hww-dev.com/api/ofertas",httpOptions
      "https://derco.com.pe/promociones/assets/ofertas.json"
      //"https://mediacontacts-app.com/promociones/assets/ofertas.json"
    );
  }
}
