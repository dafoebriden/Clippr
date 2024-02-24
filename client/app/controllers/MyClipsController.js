import { AppState } from "../AppState.js"
import { myClipsService } from "../services/MyClipsService.js";
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js";

function _drawMyClips() {
    const clips = AppState.myClips
    let htmlString = ''
    clips.forEach(clip => htmlString += clip.MyClipHTMLTemplate)
    setHTML('myClips', htmlString)

}

export class ClipsController {

    constructor() {
        AppState.on('account', this.getMyClips)
        AppState.on('clips', _drawMyClips)
    }

    async getMyClips(UserId) {
        try {
            console.log('clips controller')
            await myClipsService.getMyClips()
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }
}