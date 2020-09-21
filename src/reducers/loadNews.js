const initialState = [];

export function breakingNews(state=initialState,action){
    if(action.type === 'news/fetchBreakingNews/fulfilled'){
        return state.concat(action.payload);
    }

    return state;
}

export function sportNews(state=initialState,action){
    if(action.type === "news/fetchSportNews/fulfilled"){
        return state.concat(action.payload);
    }
    return state;
}

export function businessNews(state=initialState,action){
    if(action.type === "news/fetcBusinessNews/fulfilled"){
        return state.concat(action.payload);
    }
    return state;
}