import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {VeiculoModel} from "../home/veiculo.model";
import {VeiculosService} from "../veiculos.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  // Os dados para serem inseridos no DB serão colocado em vehicle
  vehicle: VeiculoModel = new VeiculoModel();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, private veiculosService: VeiculosService) {
  }

  /**
   * Passa ao Vehicle Service os dados preenchidos no modal
   * para que o veículo seja criado no db
   * @param frm
   */
  registerVehicle(frm: NgForm) {
    this.veiculosService.registerVehicles(this.vehicle).subscribe(data => {
      if (data) {
        this.closeModal();
        this.veiculosService.refresh();
        return true;
      }
    });
    frm.reset();
  }

  /**
   * Helper para fechar os modals
   */
  closeModal(): void {
    this.dialog.closeAll();
  }

  /**
   * Enviar ao Vehicle Service o ID do veículo que será deletado
   * @param id
   */
  delete(id: string): void {
    this.veiculosService.delete(id).subscribe(data => {
      this.closeModal();
      this.veiculosService.refresh();
    });
  }

  /**
   * Enviar ao Vehicle Service os dados do veículo que será editado
   * @param frm
   */
  edit(frm: NgForm) {
    this.veiculosService.edit(this.data.vehicle._id, frm.value).subscribe(data => {
      if (data) {
        this.closeModal();
        this.veiculosService.refresh();
      }
    });
  }


  ngOnInit(): void {
  }

}
