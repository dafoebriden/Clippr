
export class Profile {
    constructor(data) {
        // Profile
        this.id = data.id
        this.email = data.email
        this.nickname = data.nickname
        this.name = data.name
        this.picture = data.picture
        // Clip
        this.clipId = data.id || data._id
        this.author = data.author
        this.gifUrl = data.gifUrl
        this.caption = data.caption
        this.createdAt = new Date(data.createdAt)
        this.updatedAt = new Date(data.updatedAt)
    }



    <div id="myClips" class="row">
    <div class="col-md-3 w-75 card px-3 mb-5">
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
</div>
</div >
    `
    }
}