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
});

export const breakingBusinessNews = createAsyncThunk('news/fetchBusinessNews', async () => {
    const response =await fetch('https://newsapi.org/v2/top-headlines?apiKey=76f03b163f6f4f48a1ca5cfd28eefd77&country=ng&category=business');
    const data = await response.json();
    return data.articles;
})

export const breakingEntertainmentNews = createAsyncThunk('news/fetchEntertainmentNews', async () => {
    const response =await fetch('https://newsapi.org/v2/top-headlines?apiKey=76f03b163f6f4f48a1ca5cfd28eefd77&country=ng&category=entertainment');
    const data = await response.json();
    return data.articles;
})

export const breakingTechNews = createAsyncThunk('news/fetchTechNews', async () => {
    const response =await fetch('https://newsapi.org/v2/top-headlines?apiKey=76f03b163f6f4f48a1ca5cfd28eefd77&country=ng&category=technology');
    const data = await response.json();
    return data.articles;
})

export const breakingHealthNews = createAsyncThunk('news/fetchHealthNews', async () => {
    const response =await fetch('https://newsapi.org/v2/top-headlines?apiKey=76f03b163f6f4f48a1ca5cfd28eefd77&country=ng&category=health');
    const data = await response.json();
    return data.articles;
})

export const breakingAnimeNews = createAsyncThunk('news/fetchTechNews', async () => {
    const response =await fetch('https://newsapi.org/v2/everything?q=anime&apiKey=76f03b163f6f4f48a1ca5cfd28eefd77');
    const data = await response.json();
    return data.articles;
})




