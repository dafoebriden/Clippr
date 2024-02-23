export class Clip {

    constructor(data) {
        this.clipId = data.id || data._id
        this.author = data.author
        this.gifUrl = data.gifUrl
        this.caption = data.caption
        this.createdAt = new Date(data.createdAt)
        this.updatedAt = new Date(data.updatedAt)

    }

    get ClipHtmlTemplate() {
        return `
        
        `
    }

}