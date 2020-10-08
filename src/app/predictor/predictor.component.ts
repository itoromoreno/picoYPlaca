import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Predictor from '../utils/models/predictor/predictor';

@Component({
  selector: 'app-predictor',
  templateUrl: './predictor.component.html',
  styleUrls: ['./predictor.component.css']
})
export class PredictorComponent implements OnInit {

  success = true;
  predictor: Predictor;

  predictorForm = new FormGroup({
    plateNumber: new FormControl(''),
    queryDate: new FormControl(''),
    queryTime: new FormControl(),
  });

  submit() {
    const predictorFormValue = this.predictorForm.value;
    const plateNumber = predictorFormValue.plateNumber;
    const [year, month, day] = predictorFormValue.queryDate.split('-');
    const [hour, minute] = predictorFormValue.queryTime.split(':');
    const queryDate = new Date(year, month - 1, day, hour, minute);
    this.predictor = new Predictor(plateNumber, queryDate);
  }

  constructor() { }

  ngOnInit() {

  }

}
