import { dbContext } from "../db/DbContext.js"

class ClipsService {


    async createClip(clipData) {
        const clip = await dbContext.Clips.create(clipData)
        clip.populate('author')
        return clip
    }

}

export const clipsService = new ClipsService()