import { Response, Request } from 'express'

export default class {
  static notFound(req: Request, res: Response): void {
    res.status(404).send('Route Not Found')
  }
}
