import { Component, OnInit } from "@angular/core";

import { OfertasService } from "../../services/ofertas.services";

@Component({
  selector: "app-grilla",
  templateUrl: "./grilla.component.html"
})
export class GrillaComponent implements OnInit {
  ofertass: any[] = [];

  constructor(private ofertasService: OfertasService) {
    this.ofertasService.ofertas().subscribe((data: any) => {
      this.ofertass = data.sort(this.sortByProperty("id"));
    });
  }

  onMarca(val: any) {
    let getmarca = document.querySelectorAll(".item");

    [].forEach.call(getmarca, function(div) {
      // do whatever

      div.parentElement.style.display = "none";
      if (val.target.value == div.getAttribute("data-marca")) {
        div.parentElement.style.display = "";
      }
    });
  }

  onOrden(val: any) {
    this.evaluarpropiedad(val);
  }

  sortByProperty(property: any) {
    return function(a, b) {
      if (a[property] > b[property]) return 1;
      else if (a[property] < b[property]) return -1;

      return 0;
    };
  }

  evaluarpropiedad(val) {
    if (val.target.value == 1) {
      this.ofertasService.ofertas().subscribe((data: any) => {
        this.ofertass = data.sort(this.sortByProperty("id"));
      });
    }
    if (val.target.value == 2) {
      this.ofertasService.ofertas().subscribe((data: any) => {
        this.ofertass = data.reverse(this.sortByProperty("descuento"));
      });
    }
  }

  ngOnInit() {
    this.ofertasService.ofertas().subscribe((data: any) => {
      this.ofertass = data.sort(this.sortByProperty("id"));
    });
  }
}
