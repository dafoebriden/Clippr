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
        <div class="d-flex justify-content-between align-items-center">
                <h1>author name</h1>
                <p class="display-3">😊</p>
            </div>
            <div>
                <img class="clip-image" src="https://compote.slate.com/images/697b023b-64a5-49a0-8059-27b963453fb1.gif"
                    alt="vine">
            </div>
            <p class="my-2 display-5 ">Here goes the clip caption!</p>
            <div class="d-flex justify-content-between">
                <p class="display-3 border rounded-3">👍 👎 💖</p>
                <p class="display-3 border rounded-3">➕</p>
            </div>
        `
    }

}