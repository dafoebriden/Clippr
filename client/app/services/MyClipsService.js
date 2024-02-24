import { AppState } from "../AppState.js"
import { Clip } from "../models/Clip.js";
import { api } from "./AxiosService.js"

class MyClipsService {
    async getMyClips(UserId) {
        console.log('clips service');
        const response = await api.get('api/userId/clips')
        console.log('got clips', response.data)
        const newClips = response.data.map(clipPOJO => new Clip(clipPOJO))
        AppState.clips = newClips

    }
}

export const myClipsService = new MyClipsService()