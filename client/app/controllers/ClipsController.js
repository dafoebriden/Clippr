import { AppState } from "../AppState.js"
import { clipsService } from "../services/ClipsService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js";
import { getFormData } from "../utils/FormHandler.js";

function _drawClips() {
    const clips = AppState.clips
    let htmlString = ''
    clips.forEach(clip => htmlString += clip.ClipHtmlTemplate)
    setHTML('clipCard', htmlString)

}

export class ClipsController {

    constructor() {
        AppState.on('account', this.getClips)
        AppState.on('clips', _drawClips)
    }

    async getClips() {
        try {
            console.log('clips controller')
            await clipsService.getClips()
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }

    async createClip() {
        try {
            event.preventDefault()
            const form = event.target
            console.log('form', form)
            const clipFormData = getFormData(form)
            console.log(clipFormData);
            await clipsService.createClip(clipFormData)
            Pop.success('Successful Clip')
            // @ts-ignore
            form.reset()
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }

    }

    getClipsByProfileId(id) {
        clipsService.getClipsByProfileId(id)
    }
}