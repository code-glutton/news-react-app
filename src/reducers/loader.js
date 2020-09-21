const initialState = null;

export default function loader(state=initialState,action){
    if(action.type === 'news/fetchBreakingNews/pending'){
        return true;
    }else if(action.type === 'news/fetchBreakingNews/fulfilled'){
        return false;
    }

    return state;
}