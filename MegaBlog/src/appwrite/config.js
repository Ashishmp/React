import conf from '../conf.js';
import { Client, ID, Databases, Storage, Query } from "appwrite";



export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
        .setProject(conf.appwriteUrl)
        .setEndpoint(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new this.Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwritr service :: createPost :: error", error);
            
        }
    }
    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwritr service :: createPost :: error", error);
            
        }
    }
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwritr service :: createPost :: error", error);
                return false
        }
    }
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionId,
                slug,
            )
        } catch (error) {
            console.log("Appwritr service :: createPost :: error", error);
            return false
        }
    }
    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionId,
                queries,
                
            )
        } catch (error) {
            console.log("Appwritr service :: createPost :: error", error);
            return false
        }
    }

    // get upload service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                coonf.appwriteBucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log("Appwritr service :: createPost :: error", error);
            return false
        }  
        }
        async deleteFile(fileId){
            try {
                return await this.bucket.deleteFile(
                    conf.appwriteBucketId,
                    fileId,
                )
            } catch (error) {
                console.log("Appwritr service :: createPost :: error", error);
                return false
            }
        }

        getFilePreview(fileId){
            return this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId 
            )
        } 
    }



const service = new Service()
export default Service