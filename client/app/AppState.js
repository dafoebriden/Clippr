import { Clip } from './models/Clip.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null

  /**@type {Clip[]} */
  clips = []

  /**@type {MyClip[]} */
  myClips = []

}

export const AppState = createObservableProxy(new ObservableAppState())