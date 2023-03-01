import http from 'http'
import { Application } from 'express'

export abstract class Bootstrap {
  abstract initialize(): Promise<string | Error>
}

export default class extends Bootstrap {
  constructor(private readonly app: Application) {
    super()
  }

  initialize() {
    return new Promise<string | Error>((resolve, reject) => {
      const server = http.createServer(this.app)

      server
        .listen(3000)
        .on('listening', () => {
          resolve('Promise resolve succesfully')
          console.log('listening on server port 3000')
        })
        .on('error', err => {
          reject(err)
          console.log('error on server port 3000')
        })
    })
  }
}
