import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CursosService } from '../cursos.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  
  constructor(
    private formulario: FormBuilder,
    private service: CursosService,
    private modal: AlertModalService,
    private location: Location) { }

  ngOnInit(){

    this.form = this.formulario.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    });
  }

  hasError(field: string){
    return this.form.get(field).errors;
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.form.value);
    if(this.form.valid){
      console.log('submit');
      this.service.create(this.form.value).subscribe(
        success => {
          this.modal.showAlertSucess('Curso criado com sucesso!');
          this.location.back(); // volta para pagina anterior
        },
        error => this.modal.showAlertdanger('Erro ao criar curso, tente novamente!'),
        () => console.log('request compleatado')
      );
    }
  }

  onCancel(){
    this.submitted = false;
    this.form.reset();
    //console.log('onCancel');
  }

}
