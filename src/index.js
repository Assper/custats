import { logger } from './helpers/logger'
import { config } from './config'
import { app } from './app'

const port = config.port

async function bootstrap() {
  await app.listen(port)
  logger.info(`App listen on port: ${port}`)
}

bootstrap()
