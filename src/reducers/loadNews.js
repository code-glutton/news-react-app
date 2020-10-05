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
    if(action.type === "news/fetchBusinessNews/fulfilled"){
        return state.concat(action.payload);
    }
    return state;
}

export function entertainmentNews(state=initialState,action){
    if(action.type === "news/fetchEntertainmentNews/fulfilled"){
        return state.concat(action.payload);
    }
    return state;
}


export function healthNews(state=initialState,action){
    if(action.type === "news/fetchHealthNews/fulfilled"){
        return state.concat(action.payload);
    }
    return state;
}

export function politicsNews(state=initialState,action){
    if(action.type === "news/fetchPoliticsNews/fulfilled"){
        return state.concat(action.payload);
    }
    return state;
}


