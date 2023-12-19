import axios from "axios";


export async function getProducts(pageGames, pageSize) {
    const apiKey = '361aaa76dd3440fa90e40ee9b03b6bd6';
    return await axios.get(`https://api.rawg.io/api/games?key=${apiKey}&page=${pageGames}&page_size=${pageSize}`);
}

export async function getProductById(id = 1) {
    const apiKey = '361aaa76dd3440fa90e40ee9b03b6bd6';
    return await axios.get(`https://api.rawg.io/api/games/${id}?key=${apiKey}`);
}

export async function getCategories() {
    const apiKey = '361aaa76dd3440fa90e40ee9b03b6bd6';
    return await axios.get(`https://api.rawg.io/api/genres?key=${apiKey}`);
}

export async function getProductsByCategory(id = 1) {
    const apiKey = '361aaa76dd3440fa90e40ee9b03b6bd6';
    return await axios.get(`https://api.rawg.io/api/games?key=${apiKey}&genres=${id}`);
}