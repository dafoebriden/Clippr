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
        <div  class="col-md-3 w-75 card px-3 mb-5">

        <div class="d-flex justify-content-between align-items-center m-3">
                <h1>${this.author.name}</h1>
                <a href="#/profile" onclick="app.ClipsController.getClipsByProfileId('${this.author.id}')">
                    <img class="small-profile-image" src="${this.author.picture}">
                </a>
            </div>
            <div>
                <img class="clip-image" src="${this.gifUrl}"
                    alt="vine">
            </div>
            <p class="my-2 fs-5 ">${this.caption}</p>
            <div class="d-flex justify-content-between">
                <p class="display-3 border rounded-3">👍 👎 💖</p>
                <p class="display-3 border rounded-3">➕</p>
            </div>
            </div>
        `
    }


    get MyClipHTMLTemplate() {
        return `
        <div  class="col-md-3 w-75 card px-3 mb-5">
            <div class="d-flex justify-content-between align-items-center m-3">
                    <h1>${this.author.name}</h1>
                    <img class="small-profile-image" src="${this.author.picture}">
                </div>
                <div>
                    <img class="clip-image" src="${this.gifUrl}"
                        alt="vine">
                </div>
                <p class="my-2 fs-5 ">${this.caption}</p>
            <div class="d-flex justify-content-between">
                <p class="display-3 border rounded-3">👍 👎 💖</p>
                <p class="display-3 border rounded-3">➕</p>
            </div>
        </div>
    `
    }
}