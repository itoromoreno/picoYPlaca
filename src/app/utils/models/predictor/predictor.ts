import Response from '../response/response';

export default class Predictor {

  constructor(
    private plateNumber: string,
    private queryDate: Date) {
  }

  getLasPlateDigit(): number {
    this.plateNumber = this.plateNumber.trim();
    const lastDigit = Number(this.plateNumber.substr(this.plateNumber.length - 1));
    if (lastDigit) { return lastDigit; } else { return -1; }
  }

  carCanCirculateOnDate(): Response {
    const lastDigit = this.getLasPlateDigit();
    if (lastDigit === -1) {
      return {
        success: false,
        error: {
          code: 0,
          errorMessage: 'El último dígito de la placa ingresada es incorrecto'
        }
      }
    }
    if (lastDigit > 0 && lastDigit < 3) {
      if (this.queryDate.getDay() === 1) {
        return {
          success: true,
          response: false
        }
      } else {
        return {
          success: true,
          response: true
        };
      }
    } else if (lastDigit < 5) {
      if (this.queryDate.getDay() === 2) {
        return {
          success: true,
          response: false
        };
      } else {
        return {
          success: true,
          response: true
        };
      }
    } else if (lastDigit < 7) {
      if (this.queryDate.getDay() === 3) {
        return {
          success: true,
          response: false
        };
      } else {
        return {
          success: true,
          response: true
        };
      }
    } else if (lastDigit < 9) {
      if (this.queryDate.getDay() === 4) {
        return {
          success: true,
          response: false
        };
      } else {
        return {
          success: true,
          response: true
        };
      }
    } else if (lastDigit < 10 || lastDigit === 0) {
      if (this.queryDate.getDay() === 5) {
        return {
          success: true,
          response: false
        };
      } else {
        return {
          success: true,
          response: true
        };
      }
    }
  }

  getPrediction(): Response {
    if (!this.plateNumber) {
      return {
        success: false,
        error: {
          code: -1,
          errorMessage: 'El número de placa es necesario'
        }
      };
    }
    const queryTimeMiliseconds = (this.queryDate.getHours() * 6 * 10 + this.queryDate.getMinutes());
    const carCanCirculateOnDate = this.carCanCirculateOnDate();
    if (!carCanCirculateOnDate.success) {
      return carCanCirculateOnDate;
    }
    if (!carCanCirculateOnDate.response) {
      if (queryTimeMiliseconds >= (7 * 6 * 10) && queryTimeMiliseconds <= (9 * 6 * 10 + 30)) {
        return {
          success: true,
          response: false
        };
      } else if (queryTimeMiliseconds >= (16 * 6 * 10) && queryTimeMiliseconds <= (19 * 6 * 10 + 30)) {
        return {
          success: true,
          response: false
        };
      }
    }
    return {
      success: true,
      response: true
    };
  }

}

