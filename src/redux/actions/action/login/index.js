import { SET_PROFILE } from "../../actionTypes";

export const setProfile = (data) => async dispatch => {
    dispatch({ type: SET_PROFILE, payload: data });
};