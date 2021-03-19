import {
    SET_PROFILE
} from "../../actions/actionTypes"

const initialState = {
    email: ''
}

const Profile = (state = initialState, { type, payload }) => {
    console.log("PAYLOAD", payload, "TYPE", type)
    switch (type) {
        case SET_PROFILE:
            return {
                ...state,
                email: payload
            }
        default:
            return state;
    }
}
export default Profile;