import { CustomError } from '../errors/custom-error'

export class NotFoundError extends CustomError{
    statusCode = 400
    constructor(){
        super('Route not Found')
        Object.setPrototypeOf(this, NotFoundError.prototype)
    }
    serializeErrors(){
        return [{ message: 'Something went wrong'}]
    }
}