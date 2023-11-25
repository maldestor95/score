import constants from './constants.ts'
import YAML from 'yaml'
export type recipeListType = { title: string; link: string }[];
export type metaData = {
    title: string;
    link: string;
    ingredients: { ingredient: string; qty: string }[];
};

const fetchList = async (): Promise<recipeListType> => {

    const url = `${constants.RecipePath()}/recipelist.yml`;
    console.log(url)
    const myHeaders = new Headers();
    const myInit: Partial<RequestInit> = {
        method: 'GET',
        headers: myHeaders,
        mode: "cors",
        cache: 'default',
    };

    const query = await fetch(url, myInit)

    return YAML.parse(await query.text())
}
const fetchRecipe = async (link: string): Promise<string> => {

    const url = `${constants.RecipePath()}/${link}`;
    const myHeaders = new Headers();
    const myInit: Partial<RequestInit> = {
        method: 'GET',
        headers: myHeaders,
        mode: "cors",
        cache: 'default',
    };

    const query = await fetch(url, myInit)

    return await query.text()
}
function extractMetaData(recipe: string): metaData {
    const endYamlPosition = recipe.indexOf("...");
    return YAML.parse(recipe.substring(0, endYamlPosition + 3)) as metaData;
}
function extractProcess(recipe: string): string {
    const endYamlPosition = recipe.indexOf("...");
    return recipe.substring(endYamlPosition + 3);
}
export default { fetchList, fetchRecipe, extractMetaData, extractProcess }