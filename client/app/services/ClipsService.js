import { AppState } from "../AppState.js"
import { Account } from "../models/Account.js";
import { Clip } from "../models/Clip.js"
import { api } from "./AxiosService.js"

class ClipsService {
    async getClips() {
        console.log('clips service');
        const response = await api.get('api/clips')
        console.log('got clips', response.data)
        const newClips = response.data.map(clipPOJO => new Clip(clipPOJO))
        AppState.clips = newClips

    }

    getClipsByProfileId(authorId) {
        AppState.profileClips = AppState.clips.filter(c => c.author.id == authorId)

        const author = new Account(AppState.profileClips[0]?.author)
        AppState.profile = author

    }
}

export const clipsService = new ClipsService()