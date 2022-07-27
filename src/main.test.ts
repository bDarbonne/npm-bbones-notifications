import { ConsoleLogger } from './main'
import type { ILogger } from './main'

const logger:ILogger = new ConsoleLogger()

logger.log('hello log')
logger.logInfo('hello log info')
logger.logWarn('hello log warn')
logger.logError('hello log error')