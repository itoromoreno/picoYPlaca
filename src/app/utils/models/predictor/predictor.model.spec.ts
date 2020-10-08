import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import Predictor from './predictor';

let predictor: Predictor;
let plateNumber: string;
let queryDate: Date;

describe('PredictorModel', () => {

  beforeEach(() => {
    plateNumber = 'PDA-1245';
    queryDate = new Date(2020, 9, 7, 7, 0);
  });

  it('should return false when cannot be on the road', () => {
    queryDate = new Date(2020, 9, 7, 7, 0);
    predictor = new Predictor(plateNumber, queryDate);
    expect(predictor.getPrediction()).toBeFalsy();
  });

  it('should return true when can be on the road', () => {
    queryDate = new Date(2020, 9, 7, 6, 59);
    predictor = new Predictor(plateNumber, queryDate);
    expect(predictor.getPrediction()).toBeTruthy();
  });

  it('should return false when plate number is empty', () => {
    plateNumber = '';
    predictor = new Predictor(plateNumber, queryDate);
    expect(predictor.getPrediction()).toBeFalsy();
  });
});
