import { AppState } from "../AppState.js"
import { clipsService } from "../services/ClipsService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js";

function _drawClips() {
    const clips = AppState.clips
    let htmlString = ''
    clips.forEach(clip => htmlString += clip.ClipHtmlTemplate)
    setHTML('clipCard', htmlString)

}

export class ClipsController {

    constructor() {
        AppState.on('Account', this.getClips)
        AppState.on('clips', _drawClips)
    }

    async getClips() {
        try {
            await clipsService.getClips()
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }
}