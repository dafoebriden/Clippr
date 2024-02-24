import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js"

function _drawProfileClips() {
    let template = ''
    AppState.profileClips.forEach(c => template += c.ClipHtmlTemplate)
    setHTML('profile-clips', template)
    setHTML('profileView', AppState.profile.ProfileHTMLTemplate)
}


export class ProfileController {
    _drawProfile() {
        if (!AppState.account) { return }
        setHTML('profileView', AppState.account.ProfileHTMLTemplate)
    }

    constructor() {
        console.log('this is the profile controller')
        AppState.on('profileClips', _drawProfileClips)
        // AppState.on('account', this._drawProfile)
        // this._drawProfile
        _drawProfileClips()

    }

}