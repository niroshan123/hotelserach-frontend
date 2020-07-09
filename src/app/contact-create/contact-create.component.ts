import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {
  bookingForm: FormGroup;
  constructor(private router: Router) { }

  ngOnInit() {
  	this.bookingForm = new FormGroup({
      roomSize: new FormControl('', Validators.required),
      beginDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required)
    });
  }

}
