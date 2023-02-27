export default class ErrorRepository {
  constructor(errors = []) {
    this.errors = new Map();
    errors.forEach((error) => {
      const { code, description } = error;
      this.add(code, description);
    });
  }

  add(code, description) {
    this.errors.set(code, description);
  }

  translate(code) {
    return this.errors.get(code) || 'Unknown error';
  }
}
