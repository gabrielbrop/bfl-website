import video from "../../assets/video/highlights.mp4";

const centerText = (text: string, style?: string, tag?: string) => {
    return `<${tag ?? "p"} style="text-align: center; ${style ?? ""}">${text}</${tag ?? "p"}>`
}

const centerDivStyle = `display: flex; justify-content: center; align-items: center; flex-direction: column;`;

const text = `
<div style="top: 0%; bottom: 50%; position: absolute; width: 100%; left: 0; right: 0; ${centerDivStyle}">

${centerText("Brazilian Football League", "font-size: 3em; margin-block-end: 0.2em;", "h1")}
${centerText("Futebol Americano no Haxball", "font-size: 1.8em; margin-block-start: 0.2em;")}

<video style="filter: grayscale(0.9); opacity: 0.5; object-fit: cover; position: absolute; top: 0; bottom: 0; left: 0; right: 0; z-index: -999; margin: 0;" autoplay width="100%" height="100%" muted loop>
    <source src="${video}" type="video/mp4">
    Your browser does not support the video tag.
</video>

</div>

<div style="bottom: 0; top: 50%; position: absolute; width: 80%; left: 0; right: 0; padding-left: 10%; padding-right: 10%; ${centerDivStyle}">

${centerText("A <b>BFL</b> é a primeira liga de futebol americano no Haxball da América Latina, contando com um campeonato baseado na NFL real, eventos toda semana e muito mais", "font-size: 1.2em;")}
${centerText("<b>Aprenda a jogar com um simples tutorial</b>", "font-size: 1.6em")}
${centerText("Clique no botão para continuar", "font-size: 1.3em; color: purple;")}

</div>
`;

const article = { text };

export default article;