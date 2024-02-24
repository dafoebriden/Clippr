import { dbContext } from "../db/DbContext.js"

class ClipsService {

    async createClip(clipData) {
        const clip = await dbContext.Clips.create(clipData)
        await clip.populate('author', 'name picture')
        return clip
    }

    async getClips() {
        const clips = await dbContext.Clips.find()
            .populate('author')
        return clips
    }

}

export const clipsService = new ClipsService()