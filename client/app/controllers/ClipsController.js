import { AppState } from "../AppState.js"
import { clipsService } from "../services/ClipsService.js"
import { Pop } from "../utils/Pop.js"

export class ClipsController {

    constructor() {
        AppState.on('Account', this.getClips)
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