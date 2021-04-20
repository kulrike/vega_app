import * as axios from "axios";

const InitialSamurai = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    "API KEY" : "5625c84a-7137-464f-91a9-075b6b9d50ab"
})

const InitialJSONplaceholder = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
})

export const AuthApi = {
    get(){
        return InitialSamurai.get("auth/me").then(response => {
            if (response.data.resultCode === 0) {
                return response.data;
            }
        }); 
    }
}

export const PostsApi = {
    get(){
        return InitialJSONplaceholder.get("posts").then(response => {
            return response.data;
        })
    },
    addPost(formData){
        return InitialJSONplaceholder.post("posts", {formData}).then(response => {
            if(response.status === 201) {
                return response.data;
            }
        });
    }
}