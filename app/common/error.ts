export default class ErrorRes<T> extends Error {
  status: number;
  errors: T;
  constructor(status: number, error: T) {
    super();
    this.status = status;
    this.errors = error;
  }
}
