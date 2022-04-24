import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assets-control',
  templateUrl: './assets-control.component.html',
  styleUrls: ['./assets-control.component.scss']
})
export class AssetsControlComponent implements OnInit {

  constructor() { }

  STOCK: string = "stock";
  FII: string = "fii";

  ngOnInit(): void {
  }

}
