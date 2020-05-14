import { createLogger, transports, format, addColors } from 'winston'
import { HttpStatus } from './HttpStatus'

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  debug: 3
}

const colors = {
  error: 'red',
  warn: 'black yellowBG',
  info: 'green',
  debug: 'cyan'
}

export const logger = createLogger({
  levels,
  transports: [new transports.Console()],
  format: format.combine(
    format.colorize({ colors }),
    format.timestamp(),
    format.simple()
  )
})

logger.error = (err) => {
  if (err instanceof Error) {
    logger.log({ level: 'error', message: err.stack || err })
  } else {
    try {
      const level =
        err && err.code < HttpStatus.InternalError ? 'warn' : 'error'
      logger.log({ level, message: JSON.stringify(err, null, '\t') })
    } catch (e) {
      logger.log({ level: 'error', message: `${e.message()} - ${err}` })
    }
  }
}
