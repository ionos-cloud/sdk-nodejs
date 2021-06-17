import { Configuration } from '../configuration'
import axios from 'axios'

export async function waitForRequest(config: Configuration, path: string) {

  const waitInterval = 1000 /* 1s wait time between retries */

  const options: Record<string, any> = {}
  if (config.apiKey) {
    options.headers = {
      Authorization: typeof config.apiKey === 'function'
        ? await config.apiKey('Authorization')
        : await config.apiKey
    }
  } else {
    if (config.username || config.password) {
      options.auth = {
        username: config.username,
        password: config.password
      }
    }
  }

  do {
    const response = await axios.get(path, options)
    const data = response.data
    if (data.metadata && data.metadata.status) {
      switch (data.metadata.status) {
        case 'DONE':
        case 'FAILED': {
          return response
        }
      }
    }
    await new Promise((resolve, _) => setTimeout(resolve, waitInterval))
  } while (true)


}
