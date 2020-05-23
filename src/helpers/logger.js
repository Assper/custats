import { createLogger, transports, format } from 'winston'
import { HttpStatus } from './enums'

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
      let level = 'error'
      if (Array.isArray(err.errors) && err.errors.length) {
        const isInternalError = err.errors[0].status >= HttpStatus.InternalError
        level = isInternalError ? 'error' : 'warn'
      }

      logger.log({ level, message: JSON.stringify(err, null, '  ') })
    } catch (e) {
      logger.log({ level: 'error', message: `${e.message()} - ${err}` })
    }
  }
}
