const initialstate = {
    data: {
        status: true,
        message: "",
        data: {
            userId: 0,
            firstName: "",
            lastName: "",
            displayName: "",
            email: "",
            gender: "",
            role: "",
            address: "",
            phone: "",
            birthday: "",
            avatar: "",
            active: false,
            createdAt: "",
            updatedAt: "",
            token: "",
            refreshToken: ""
        }
    },
    loading: false,
    error: ''
}

const User = (state = initialstate, action) => {
    switch (action.type) {
        case 'REQUEST_LOGIN':
            return {
                ...state,
                loading: true
            }
        case 'REQUEST_SUCCESS':
            return {
                ...state,
                data : action.payload,
                loading: false
            }
        case 'LOGIN_FAILURE':
            return {
                ...state,
                loading: false,
                error : action.payload
            }
        default: 
            return state
    }
}

export default User