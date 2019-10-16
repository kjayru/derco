import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
//servicios
import { OfertasService } from "./services/ofertas.services";

//componentes
import { BannerComponent } from "./components/banner/banner.component";
import { GrillaComponent } from "./components/grilla/grilla.component";
import { OfertaComponent } from "./components/oferta/oferta.component";
import { LegalesComponent } from "./components/legales/legales.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    GrillaComponent,
    OfertaComponent,
    LegalesComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [OfertasService],
  bootstrap: [AppComponent]
})
export class AppModule {}
