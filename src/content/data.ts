import Utils from "../utils/Utils";
import articles from "./articles";

type Article = {
    title: string,
    category: string,
    previewImg?: string,
    desc?: string,
    text: string
}

const categories = [
    { name: "campo", title: "Campo", route: "campo" },
    { name: "pontuacao", title: "Pontuação", route: "pontuacao" },
    { name: "inicio", title: "Início de jogo", route: "inicio" },
    { name: "descidas", title: "Descidas", route: "descidas" },
    { name: "outras", title: "Outras jogadas", route: "outras" },
    { name: "faltas", title: "Faltas", route: "faltas" },
    { name: "misc", title: "Miscelânea", route: "misc" }
];

const data = {
    categories,
    content: (articles as Article[]).map(a => {
        return { ...a, route: Utils.removeDiacritics(a.title.replace(/\s+/g, '-')).replace(/[^0-9a-z-]/gi, '') };
    })
    .sort((a, b) => categories.findIndex(c => c.name === a.category) - categories.findIndex(c => c.name === b.category))
};

export default data;