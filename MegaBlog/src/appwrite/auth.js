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
}

const authService = new Authservice();

export default authService;
