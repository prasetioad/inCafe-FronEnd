import axios from 'axios'
const LoginRequest = ()=>{
    return { type : 'REQUEST_LOGIN' }
}
const LoginSuccess = (dataUser)=>{
    return { type : 'LOGIN_SUCCESS', payload : dataUser }
}
const LoginFailur = (message)=>{
    return { type : 'LOGIN_FAILURE', payload : message }
}
const User = (email, password)=>(dispatch)=>{
    return new Promise((resolve, reject)=>{
        const API = 'http://localhost:8080'
        dispatch(LoginRequest())
        axios({
            method : 'POST',
            url : `${API}/v1/users/login`,
            data : {
                email : email,
                password : password,
            }
        })
        .then(response=>{
            const dataUser = response.data
            localStorage.setItem('token', dataUser.data.token)
            dispatch(LoginSuccess(dataUser))
            resolve(dataUser.data.message)
        })
        .catch(err=>{
            if(err.response.status == 400){
                dispatch(LoginFailur(err.response.message))
                reject(err.response.message)
            }
        })

    })
}

export default User