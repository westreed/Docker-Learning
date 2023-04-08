import axios from "axios";

axios.defaults.withCredentials = true;
// const apiLink = process.env.REACT_APP_API_ENDPOINT;
const API = {
    getSession: async() => {
        try{
            const res = await axios.get(`/api/session`);
            return res.data;
        }
        catch(error){
            console.log(error);
            return null;
        }
    },
    getCategories: async() => {
        try{
            const res = await axios.get(`/api/categories`);
            return res.data;
        }
        catch(error){
            console.log(error);
            return false;
        }
    },
    postCategories: async(data) => {
        try{
            const res = await axios.post(`/api/categories`, data);
            return res.data;
        }
        catch(error){
            console.log(error);
            return false;
        }
    },
    getRsakey: async() => {
        try {
            const res = await axios.get(`/api/key`);
            return {
                modulus: res.data.modulus,
                exponent: res.data.exponent,
            }
        }
        catch(error){
            console.log(error);
            return false;
        }
    },
    login: async(data) => {
        try {
            const res = await axios.post(`/api/login`, data);
            return {error:false, data:res.data};
        }
        catch(error){
            console.log(error);
            return {error:true, data:error};
        }
    },
    logout: async() => {
        try {
            await axios.get(`/api/logout`);
            return true;
        }
        catch(error){
            console.log(error);
            return false;
        }
    },
    getCategoryPosts: async(data) => {
        try {
            const res = await axios.get(`/api/posts`, {params:data});
            return res.data;
        }
        catch(error){
            console.log(error);
            return null;
        }
    },
    getPost: async(data) => {
        try {
            const res = await axios.get(`/api/post`, {params:data});
            return res.data;
        }
        catch(error){
            console.log(error);
            return null;
        }
    },
    addViewCount: async(data) => {
        try {
            const res = await axios.put(`/api/post`, {id:data});
            return res.data;
        }
        catch(error){
            console.log(error);
            return null;
        }
    },
    addLike: async(data) => {
        try {
            const res = await axios.post(`/api/like/${data}`);
            return res.data;
        }
        catch(error){
            console.log(error);
            return null;
        }
    },
    removeLike: async(data) => {
        try {
            const res = await axios.delete(`/api/like/${data}`);
            return res.data;
        }
        catch(error){
            console.log(error);
            return null;
        }
    },
    writePost: async(data) => {
        try{
            const res = await axios.post(`/api/write`, data);
            return res.data;
        }
        catch(error){
            console.log(error);
            return null;
        }
    },
    editPost: async(data) => {
        try{
            const res = await axios.put(`/api/write`, data);
            return res.data;
        }
        catch(error){
            console.log(error);
            return null;
        }
    },
    deletePost: async(data) => {
        try{
            const res = await axios.delete(`/api/post`, {params:data});
            return res.data;
        }
        catch(error){
            console.log(error);
            return null;
        }
    },
    writeReply: async(data) => {
        try{
            const res = await axios.post(`/api/reply`, data);
            return res.data;
        }
        catch(error){
            console.log(error);
            return null;
        }
    },
    editReply: async(data) => {
        try{
            const res = await axios.put(`/api/reply`, data);
            return res.data;
        }
        catch(error){
            console.log(error);
            return null;
        }
    },
    deleteRepliesFromPost: async(data) => {
        try{
            const res = await axios.delete(`/api/reply`, {params:data});
            return res.data;
        }
        catch(error){
            console.log(error);
            return null;
        }
    }
}

export default API;