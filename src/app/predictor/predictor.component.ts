import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-predictor',
  templateUrl: './predictor.component.html',
  styleUrls: ['./predictor.component.css']
})
export class PredictorComponent implements OnInit {

  success = true;

  predictorForm = new FormGroup({
    plateNumber: new FormControl(''),
    queryDate: new FormControl(''),
    queryTime: new FormControl(),
  });

  constructor() { }

  ngOnInit() {
  }

}
