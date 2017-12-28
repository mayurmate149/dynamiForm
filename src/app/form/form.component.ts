import { Component, OnInit } from '@angular/core';
import {Form} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: Form;

  constructor() { }

  ngOnInit() {
  }

}
