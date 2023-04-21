
export default class BrainAgricultureException extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'BrainAgricultureException';
    }
  }