import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';

@Component({
  selector: 'app-planta-list',
  templateUrl: './planta-list.component.html',
  styleUrls: ['./planta-list.component.css']
})
export class PlantaListComponent implements OnInit {

  plantas: Array<Planta> = [];



  constructor(private plantaService: PlantaService) { }

  getPlantas(): void {
    this.plantaService.getPlantas().subscribe((plantas) => {
      this.plantas = plantas;
    });
  }
  actualizarPlantasInterior(): number {
    let resp = 0
    for(let planta of this.plantas){
      if(planta.tipo.toLowerCase() == "interior"){
        resp++;
      }
    }
    return resp;
  }
  actualizarPlantasExterior(): number {
    let resp = 0
    for(let planta of this.plantas){
      if(planta.tipo.toLowerCase() == "exterior"){
        resp++;
      }
    }
    return resp;
  }


  ngOnInit() {
    this.getPlantas();
  }

}
