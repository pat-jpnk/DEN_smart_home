import NewsItemProperties from "./NewsItemProperties";

export default interface NewsFeedState {
    loaded: boolean;
    news: Array<NewsItemProperties>;
    error?: Object
}