import Header from "../templates/Header";
import Home from "../pages/Home";
import Character from "../pages/Character";


const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact'
}

export const router = async () => {
    const header = document.getElementById('header') || null;
    const content = document.getElementById('content') || null;

    header.innerHTML = await Header()
}
