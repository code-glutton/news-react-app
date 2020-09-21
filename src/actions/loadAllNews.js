import {createAsyncThunk} from '@reduxjs/toolkit';

export const breakingNewsAction = createAsyncThunk('news/fetchBreakingNews', async () => {
    const response = await fetch('https://newsapi.org/v2/top-headlines?apiKey=76f03b163f6f4f48a1ca5cfd28eefd77&country=ng&category=general');
    const data = await response.json();
    return data.articles;
});

export const breakingSportNews = createAsyncThunk('news/fetchSportNews', async () => {
    const response =await fetch('https://newsapi.org/v2/top-headlines?apiKey=76f03b163f6f4f48a1ca5cfd28eefd77&country=ng&category=sports');
    const data = await response.json();
    return data.articles;
})