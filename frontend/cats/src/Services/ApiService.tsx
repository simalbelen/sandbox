import axios from "axios";

export const getGatitos = () => {
    const perro = axios.get("https://api.thecatapi.com/v1/images/search")
    return perro;
}