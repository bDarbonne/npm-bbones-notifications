
interface ILogger {
  log: (message:string) => void
  logInfo: (message:string) => void
  logError: (message:string) => void
  logWarn: (message:string) => void
}

class ConsoleLogger implements ILogger{
  log = (message:string) => console.log(message)
  logInfo = (message:string) => console.info('[INFO]: ' + message)
  logError = (message:string) => console.error('[ERROR]: ' + message)
  logWarn = (message:string) => console.warn('[WARN]: ' + message)
}


export type { ILogger }
export { ConsoleLogger }
