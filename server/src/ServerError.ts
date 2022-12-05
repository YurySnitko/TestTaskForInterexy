export class ServerError extends Error {
  status;

  constructor(message: string, status: number) {
    super(message);
    this.message = message;
    this.status = status;
  }
}
