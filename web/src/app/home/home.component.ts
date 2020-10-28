import {AfterViewInit, Component, OnInit} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
import {VeiculosService} from "../veiculos.service";
import {MatDialog} from '@angular/material/dialog';
import {ModalComponent} from "../modal/modal.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('animate', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('hide => show', animate("2000ms ease-in"))
    ]),
  ]
})
export class HomeComponent implements OnInit, AfterViewInit {

  // Os dados de todos os veículos são colocados em vehicles
  vehicles: Object;
  // Estado da animação da ilustração
  state: string = "hide";
  modalInfo: Object = {};

  constructor(private veiculosService: VeiculosService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getAllVehicles();
  }

  ngAfterViewInit() {
    this.state = "show";
  }

  getAllVehicles() {
    this.veiculosService.getAllVehicles().subscribe(data => {
      this.vehicles = data;
    }, error => console.log(error));
  }

  registerVehicle() {
    this.openModal(true);
  }

  edit(id: string) {
    this.veiculosService.getById(id).subscribe(data => {
      this.modalInfo = data;
      this.openModal(false);
    }, error => console.log(error));
  }

  delete(id: string) {
    this.veiculosService.getById(id).subscribe(data => {
      this.modalInfo = data;
      this.dialog.open(ModalComponent, {
        data: {
          delete: true,
          vehicle: this.modalInfo,
        },
        width: "auto",
      })
    });
  }

  openModal(isNew: boolean) {
    this.dialog.open(ModalComponent, {
      data: {
        new: isNew,
        vehicle: this.modalInfo
      },
      width: "500px",
    });
  }

}
