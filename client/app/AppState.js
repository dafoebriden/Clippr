import { Clip } from './models/Clip.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null
  /**@type {import('./models/Account.js').Account | null} */
  profile = null

  /**@type {Clip[]} */
  clips = []
  /**@type {Clip[]} */
  profileClips = []
}

export const AppState = createObservableProxy(new ObservableAppState())