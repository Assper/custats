import { config } from './config'
import { app } from './app'

const port = config.port

async function bootstrap() {
  await app.listen(port)
  console.log(`App listen on port: ${port}`)
}

bootstrap()
