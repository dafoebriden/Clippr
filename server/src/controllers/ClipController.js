import { clipsService } from "../services/ClipsService.js";
import BaseController from "../utils/BaseController.js";

export class ClipsController extends BaseController {

    constructor() {
        super('api/clip')
        this.router
            .post('', this.createClip)
    }

    async createClip(request, response, next) {
        try {
            const clipData = request.body
            const newClip = await clipsService.createClip(clipData)
            response.send(newClip)
        } catch (error) {
            next(error)
        }
    }

}