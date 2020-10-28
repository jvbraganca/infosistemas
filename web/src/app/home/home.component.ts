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
  state: string;
  modalInfo: Object = {};

  /**
   *
   * @param veiculosService
   * @param dialog
   */
  constructor(private veiculosService: VeiculosService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getAllVehicles();
  }

  ngAfterViewInit() {
    this.state = "hide";
    this.state = "show";
  }

  /**
   * Chama a função de retornar todos os veículos a partido do serviço
   * e popula this.vehicles com os dados recebido
   */
  getAllVehicles() {
    this.veiculosService.getAllVehicles().subscribe(data => {
      this.vehicles = data;
    }, error => console.log(error));
  }

  /**
   * Abre o modal para cadastro de veículos
   */
  registerVehicle() {
    this.openModal(true);
  }

  /**
   * Abre o modal para edição do cadastro de veículos
   * @param id
   */
  edit(id: string) {
    this.veiculosService.getById(id).subscribe(data => {
      this.modalInfo = data;
      this.openModal(false);
    }, error => console.log(error));
  }

  /**
   * Chama o modal para deletar um veículo do DB.
   * @param id
   */
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

  /**
   * Helper para abrir modals
   * @param isNew
   */
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
