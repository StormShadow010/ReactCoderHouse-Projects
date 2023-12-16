import axios from "axios";


export async function getProducts(pageGames, pageSize) {
    const apiKey = '361aaa76dd3440fa90e40ee9b03b6bd6';
    return await axios.get(`https://api.rawg.io/api/games?key=${apiKey}&page=${pageGames}&page_size=${pageSize}`);
}