import { Component, OnInit } from '@angular/core';  
import { Router } from '@angular/router';

import { FormService } from '../../services/form/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  data: any;
  form: any = {
    name: '',
    date: '',
    gender: 'M',
    email: '',
    budget: 0,
  }

  constructor(private router: Router, private formService: FormService) { 
    if(this.router.getCurrentNavigation().extras.state) {
      this.data = this.router.getCurrentNavigation().extras.state;
    }
  }

  ngOnInit() {
  }

  submitForm(form) {  
    const data = form.value;
    if(data.name && data.email && data.date && data.gender && data.budget) {
      this.formService.sendForm(data)
      .subscribe((response: any) => {
        alert("Submitted form!");
        this.router.navigate(['']);
      }, error => {
        console.log('error: ', error);
      })
    } else {
      alert("Please complete the form");
    }
  }

}
