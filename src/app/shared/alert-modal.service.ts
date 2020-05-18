import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal/alert-modal.component';

export enum AlertTypes{
  DANGER = 'danger',
  SUCESS = 'sucess'
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {
  constructor(private modalService: BsModalService) { }

  
  private showAlert(message: string, type: AlertTypes){
      const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
      bsModalRef.content.type = type;
      bsModalRef.content.message = message;
  
    }

    showAlertdanger(message: string){
      this.showAlert(message, AlertTypes.DANGER);
      
    }

    showAlertSucess(message: string){
          this.showAlert(message, AlertTypes.SUCESS);
          
        }
}
