import { Component, OnInit } from '@angular/core';
import { BulosService } from 'src/app/services/bulos.service';


@Component({
  selector: 'app-bulos',
  templateUrl: './bulos.component.html',
  styleUrls: ['./bulos.component.scss']
})
export class BulosComponent implements OnInit {

  public bulos: any;
  constructor(
    private bulosService: BulosService
    ) { }

  ngOnInit(): void {
    this.getBulos();
  }

  getBulos() {
    this.bulos = this.bulosService.getAllBulos();
    console.log(this.bulos);
  }

}
