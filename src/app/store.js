import {configureStore} from "@reduxjs/toolkit";
import {breakingNews, sportNews,businessNews} from '../reducers/loadNews';

import loader from "../reducers/loader"

export default configureStore({
    reducer:{
        breaking:breakingNews,
        sports:sportNews,
        business:businessNews,
        pending:loader
    }
})