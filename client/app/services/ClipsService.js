import { AppState } from "../AppState.js"
import { Clip } from "../models/Clip.js"
import { api } from "./AxiosService.js"

class ClipsService {
    async getClips() {
        console.log('clips service');
        const response = await api.get('api/clips')
        console.log('got birds', response.data)
        const newClips = response.data.map(clipPOJO => new Clip(clipPOJO))
        AppState.clips = newClips

    }
}

export const clipsService = new ClipsService()