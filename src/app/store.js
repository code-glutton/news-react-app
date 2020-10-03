import {configureStore} from "@reduxjs/toolkit";
import {breakingNews, sportNews,businessNews,entertainmentNews,healthNews} from '../reducers/loadNews';

import loader from "../reducers/loader"

export default configureStore({
    reducer:{
        breaking:breakingNews,
        sports:sportNews,
        business:businessNews,
        entertainment:entertainmentNews,
        health:healthNews,
        pending:loader
    }
})