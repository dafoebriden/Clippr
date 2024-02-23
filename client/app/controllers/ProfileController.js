import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js"

export class ProfileController {
    _drawProfile() {
        if (!AppState.account) { return }
        setHTML('profile', AppState.account.ProfileHTMLTemplate)
    }

    constructor() {
        console.log('this is the profile controller')
        AppState.on('account', this._drawProfile)
        this._drawProfile

    }

}