import { Auth0Provider } from "@bcwdev/auth0provider";
import { clipsService } from "../services/ClipsService.js";
import BaseController from "../utils/BaseController.js";



export class ClipsController extends BaseController {

    constructor() {
        super('api/clips')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createClip)
            .get('', this.getClips)
    }

    /**
  * This is the api controller for creating a Clip
  * @param {import("express").Request} request 
  * @param {import("express").Response} response
  * @param {import("express").NextFunction} next 
  */
    async createClip(request, response, next) {
        try {
            const clipData = request.body
            // @ts-ignore
            // takes the correct id from the bearer token, needs bearer token to create a clip
            clipData.authorId = request.userInfo.id
            const newClip = await clipsService.createClip(clipData)
            response.send(newClip)
        } catch (error) {
            next(error)
        }
    }

    async getClips(request, response, next) {
        try {
            const clips = await clipsService.getClips()
            response.send(clips)
        } catch (error) {
            next(error)
        }
    }

}