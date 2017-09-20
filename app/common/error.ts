export default class ErrorRes<T> extends Error {
  /**
   * 状态码
   */
  status: number;
  /**
   * 错误信息
   */
  errors: T;
  constructor(status: number, error: T) {
    super();
    this.status = status;
    this.errors = error;
  }
}
