import {configureStore} from "@reduxjs/toolkit";
import {breakingNews, sportNews} from '../reducers/loadNews';

import loader from "../reducers/loader"

export default configureStore({
    reducer:{
        breaking:breakingNews,
        sports:sportNews,
        pending:loader
    }
})