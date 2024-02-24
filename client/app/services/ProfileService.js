import { AppState } from "../AppState.js"
import { Account } from "../models/Account.js";
import { api } from "./AxiosService.js"

class ProfileService {
    async getAccount(userId) {
        console.log('profile service');
        const response = await api.get('account')
        console.log('got Profile', response.data)
        const Profile = response.data.map(clipPOJO => new Account(clipPOJO))
        AppState.account = Profile

    }
}

export const clipsService = new ProfileService()