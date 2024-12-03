import conf from '../conf.js';
import { Client, Databases, Account } from "appwrite";



export class Authservice {
    client = new Client();
    account;

    constructor(){
        this.client
        .setProject(conf.appwriteUrl)
        .setEndpoint(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }
    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
               // return userAccount;
                //call another method
                this.login({email, password})

            }
            else{
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    } 

    async login({user, password}) {
        try {
          return await this.account.createEmailSession(email, password)
        } catch (error) {
            throw error;
        }
    }
async getCurrentUser() {
    try {
        await this.account.get()
    } catch (error) {
        throw error;// for custom error use console log
    }

    return null;
}
async logout(){
    try {
        await this.account.deleteSessions()
    } catch (error) {
        throw error;
    }
}
}

const authService = new Authservice();

export default authService;
