
export interface IRecipeDataRetriever {
    retrieve(): Promise<any>;
    connect();
}