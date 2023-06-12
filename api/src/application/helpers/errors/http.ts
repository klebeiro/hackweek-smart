export class ForbiddenError extends Error {
    public statusCode = 403
    constructor () {
      super('Access denied')
      this.name = 'ForbiddenError'
    }
}

export class UnauthorizedError extends Error {
    public statusCode = 401
    constructor () {
      super('Unauthorized')
      this.name = 'UnauthorizedError'
    }
}

export class NotFound extends Error {
  public statusCode = 404
  constructor () {
    super('Not found')
    this.name = 'NotFoundError'
  }
}