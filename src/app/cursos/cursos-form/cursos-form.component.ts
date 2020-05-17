import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  
  constructor(private formulario: FormBuilder) { }

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
    if(this.form.valid){
      console.log('submit');
    }
  }

  onCancel(){
    this.submitted = false;
    this.form.reset();
    //console.log('onCancel');
  }

}
