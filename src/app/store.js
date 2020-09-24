import {configureStore} from "@reduxjs/toolkit";
import {breakingNews, sportNews,businessNews,entertainmentNews,techNews,healthNews,animeNews} from '../reducers/loadNews';

import loader from "../reducers/loader"

export default configureStore({
    reducer:{
        breaking:breakingNews,
        sports:sportNews,
        business:businessNews,
        entertainment:entertainmentNews,
        technology:techNews,
        health:healthNews,
        anime:animeNews,
        pending:loader
    }
})