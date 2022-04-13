import {
    UPDATE_TITLE_FROM_SAGA} from '../constants';
const initialState = {
    title: 'This from store'
};

export default function home(state = initialState, { type, payload }) {
    switch (type) {
        // case UPDATE_TITLE:
        //     return {
        //         ...state,
        //         title: payload
        //     }

        case UPDATE_TITLE_FROM_SAGA:
            return {
                ...state,
                title: payload
            }
        default:
            return state;
    }

}