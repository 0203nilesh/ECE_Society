import axios from "axios";

const API= axios.create({baseURL: "https://societybackend.onrender.com"})

export const getMembers= async()=>{
    const data= await API.get("/member/get");
    // console.log(data.data);
    return data.data;
}

export const getFaculty= async()=>{
    const data= await API.get("/faculty/get");
    // console.log(data);
    return data.data;
}

export const getEvents= async()=>{
    // const data= await API.get("/event/get");
    const data= await API.get("/event/get");
    return data.data;
}
export const getUpcoming= async()=>{
    // const data= await API.get("/event/get");
    const data= await API.get("/upcoming/get");
    return data.data;
}
export const getSocietyData= async()=>{
    // const data= await API.get("/event/get");
    const data= await API.get("/society/get");
    return data.data;
}
export const postEvent= async(data)=>{
    const config={
        header:  {'content-type': "multipart/form-data"},
    }
    return await API.post("/event/post", data, config);
    }

export const getAlumni=async ()=>{
    const data= await API.get('/alumni/get')
    // console.log(data);
    return data.data;
}

export const getDevelopers=async ()=>{
    const data=await API.get('/developer/get')
    // console.log(data);
    return data.data;
}

export const login= async(data)=>{
    const authData=await API.post("/auth/user/login", data);
    console.log(authData);
    return authData.data;
};