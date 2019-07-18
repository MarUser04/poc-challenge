import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FilledFormService } from '../../services/filled-form/filled-form.service';
import { Form } from '../../models/form';

@Component({
  selector: 'app-filled-form',
  templateUrl: './filled-form.component.html',
  styleUrls: ['./filled-form.component.css']
})
export class FilledFormComponent implements OnInit {

  filledForms: Array<Form> = [];

  constructor(private router: Router, private filledFormService: FilledFormService) {
  }

  ngOnInit() {
    this.filledFormService.getForms()
    .subscribe((response: any) => {
      response.data.forEach(item => {
        this.filledForms.push(item)
      })
    });
  }

  toDetails(i, form) {
    this.router.navigate(['details'], { 
      state: { 
        formNumber: i,
        form
      } 
    });
  }

}
