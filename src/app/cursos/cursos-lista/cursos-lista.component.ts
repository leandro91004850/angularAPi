import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Curso } from '../curso';
import { Observable, empty, Subject } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { BsModalService, ModalContainerComponent, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {

  bsModalRef: BsModalRef;
  cursos$: Observable<Curso[]>;
  error$ = new Subject<boolean>();

  constructor(private service: CursosService,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.Atualizar();
    
  }

  Atualizar(){
    this.cursos$ = this.service.list()
    .pipe(
     // map(),
     // tap(),
     // switchMap(),
      catchError(error => {
        console.error(error);
        //this.error$.next(true);
        this.handleError();
        return empty();
      })
    );
      this.service.list()
        .pipe(
          catchError(error => empty())
        )
      .subscribe(
          dados => {
            console.log(dados);
          }
          //error => console.error(error),
          //() => console.log('Obserservable completo!')
      );
  }

    handleError(){
      this.bsModalRef = this.modalService.show(AlertModalComponent);
      this.bsModalRef.content.type = 'danger';
      this.bsModalRef.content.message = 'Erro ao carregar cursos. Tente novamente mais tarde';

    }

}

//10:51
