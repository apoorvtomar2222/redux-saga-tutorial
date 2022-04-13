import { UPDATE_TITLE } from '../constants';
export const updateTitle = (payload) => {
    return {
        type: UPDATE_TITLE,
        payload
    }
}