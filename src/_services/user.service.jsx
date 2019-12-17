import axiosConfig from "../_config/axios.config"


export const login = (user) => {
   
    return  axiosConfig.post("auth/login",user)
    .then(result => JSON.parse(result))
    .then(result =>{
        localStorage.setItem('user',JSON.stringify(result.data))
        return user;
    ;
    })
    .catch(error => {
        console.log(error);
    });
    
}
