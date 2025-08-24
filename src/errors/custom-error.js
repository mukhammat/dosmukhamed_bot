export class CustomError extends Error {
  /**
   * @param {string} message - сообщение об ошибке
   * @param {number} [statusCode=400] - статус HTTP (по умолчанию 500)
   */
  constructor(message = "Ошибка запроса", statusCode = 500) {
    super(message);
    this.name = this.constructor.name; // например: "BadRequest"
    this.statusCode = statusCode;

    // Создание правильного стека ошибок
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
