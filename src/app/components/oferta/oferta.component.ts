import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-oferta",
  templateUrl: "./oferta.component.html",
  styles: []
})
export class OfertaComponent implements OnInit {
  @Input() ofertasi: any = [];

  constructor() {}

  ngOnInit() {
   
  }
}
