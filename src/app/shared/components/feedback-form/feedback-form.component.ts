import { HttpClient,  HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.less']
})
export class FeedbackFormComponent implements OnInit {
  // url = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScbVZ9qVsV4fSAMRJbse1t4zuTs_h0plNCqd9guB7IJ4NvDjw/formResponse';
  // fieldMapping: any = {
  //   brand: 'entry.2114182233',
  //   year: 'entry.1341191296',
  //   city: 'entry.1914848227',
  //   price: 'entry.392160682',
  //   phone: 'entry.1994190562',
  // };

  // form = this.fb.group({
  //   brand: ['', [Validators.required]],
  //   year: ['', [Validators.required]],
  //   city: [''],
  //   price: [''],
  //   phone: ['', [Validators.required]],
  // });

  constructor(
    // private fb: FormBuilder,
    // private http: HttpClient
    ) { }

  ngOnInit(): void {
  }

  // save(): void {
  //   if (this.formData.valid) {
  //     const rawValue = this.formData.getRawValue();
  //     let body = new HttpParams();
  //     Object.entries(rawValue).forEach(([key, value]) => {
  //       body = body.append(this.fieldMapping[key], `${value}`);
  //     });
  //     const httpOptions = {
  //       headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  //     };
  //     this.http.post(this.url, body, httpOptions).subscribe(() => { }, (err) => { });
  //   } else {
  //     console.log('form is invalid');
  //   }
  // }

}
