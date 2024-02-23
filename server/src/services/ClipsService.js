import { dbContext } from "../db/DbContext.js"

class ClipsService {


    async createClip(clipData) {
        const clip = (await dbContext.Clips.create(clipData)).populate('author', 'name picture')
        return clip
    }

}

export const clipsService = new ClipsService()