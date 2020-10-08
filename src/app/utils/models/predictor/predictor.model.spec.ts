import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import Predictor from './predictor';

let predictor: Predictor;
let plateNumber: string;

describe('PredictorModel', () => {

  beforeEach(() => {
    plateNumber = 'PDA-1245';
  });

  it('should return false', () => {
    const queryDate = new Date(2020, 9, 7, 7, 0);
    predictor = new Predictor(plateNumber, queryDate);
    expect(predictor.getPrediction()).toBeFalsy();
  });

  it('should return true', () => {
    const queryDate = new Date(2020, 9, 7, 6, 59);
    predictor = new Predictor(plateNumber, queryDate);
    expect(predictor.getPrediction()).toBeTruthy();
  });
});
