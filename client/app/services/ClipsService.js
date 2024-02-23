import { api } from "./AxiosService.js"

class ClipsService {
    async getClips() {
        const response = await api.get('api/clips')
        console.log('got birds', response.data)
    }
}

export const clipsService = new ClipsService()