import { HttpClient,  HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.less']
})
export class FeedbackFormComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
