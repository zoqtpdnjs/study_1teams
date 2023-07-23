let initialState = {
    userid:"",
    authenticate:false
}

function authenticateReducer(state = initialState, action) {

    let {type, payload} = action;
    switch(type){
        case "LOGIN_SUCCESS":
            return{...state, userid:payload.userid, authenticate:true};
        case "LOGOUT_SUCCESS":
            return{...state, authenticate:false};
        default:
            return{...state};    
    }

}

export default authenticateReducer;