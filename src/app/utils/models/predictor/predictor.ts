export default class Predictor {

  constructor(
    private plateNumber: string,
    private queryDate: Date) {
  }

  getLasPlateDigit(): number {
    this.plateNumber = this.plateNumber.trim();
    return Number(this.plateNumber.substr(this.plateNumber.length - 1));
  }

  carCanCirculateOnDate(): boolean {
    const lastDigit = this.getLasPlateDigit();
    if (lastDigit > 0 && lastDigit < 3) {
      if (this.queryDate.getDay() === 1) {
        return false;
      } else {
        return true;
      }
    } else if (lastDigit < 5) {
      if (this.queryDate.getDay() === 2) {
        return false;
      } else {
        return true;
      }
    } else if (lastDigit < 7) {
      if (this.queryDate.getDay() === 3) {
        return false;
      } else {
        return true;
      }
    } else if (lastDigit < 9) {
      if (this.queryDate.getDay() === 4) {
        return false;
      } else {
        return true;
      }
    } else if (lastDigit < 10 || lastDigit === 0) {
      if (this.queryDate.getDay() === 5) {
        return false;
      } else {
        return true;
      }
    }
  }

  getPrediction(): boolean {
    if(!this.plateNumber) {return false; }
    const queryTimeMiliseconds = (this.queryDate.getHours() * 6 * 10 + this.queryDate.getMinutes());
    if (!this.carCanCirculateOnDate()) {
      if (queryTimeMiliseconds >= (7 * 6 * 10) && queryTimeMiliseconds <= (9 * 6 * 10 + 30)) {
        return false;
      } else if (queryTimeMiliseconds >= (16 * 6 * 10) && queryTimeMiliseconds <= (19 * 6 * 10 + 30)) {
        return false;
      }
    }
    return true;
  }

}

