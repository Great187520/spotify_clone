export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token: null,
    token: 'BQCgCbC-95ncoQ5J1UEJzxQYT8mqC944ccb_7hKa623Uw3qb7mvW9tZxYYFBCdwQlPLemI-q0qg6jF5Lz6pP50KAWczgAiKfpiAFduSrftRk81ffbtROAbeC3TX6EO0T7Cqxl0EbG5YfXA_YETu8lIB2PABwMR2ntZFvxnhDeI_26EFuTyYF',
};

const reducer = (state, action) =>{
    console.log(action);

    //Acgtion -> type, [payload]

    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };

        default:
            return state;
    }
}

export default reducer;