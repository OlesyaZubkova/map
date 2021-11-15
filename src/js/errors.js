export default class ErrorRepository {
  constructor() {
    this.errorsData = new Map();
  }

  errorBody(code, text) {
    this.errorsData.set(code, text);
  }

  translate(code) {
    if (!this.errorsData.has(code)) {
      throw new Error('Unknown error');
    } else {
      return this.errorsData.get(code);
    }
  }
}
