import image from "../../assets/images/descida.gif";
import image2 from "../../assets/images/descida3.gif";

const text = `
Descida é o nome dado a cada tentativa de avanço durante o jogo.

Em uma descida, existem dois times: o time **OFENSIVO** e o time **DEFENSIVO**.

O objetivo do time ofensivo é avançar o máximo durante a jogada, enquanto que o objetivo do time defensivo é impedir esse avanço.

### Descida - Ganho de 12 jardas para o time ofensivo

![Imagem](${image})

### Descida - Touchdown para o time ofensivo

![Imagem](${image2})
`;

const article = {
    title: "Descida",
    category: "descidas",
    previewImg: image,
    desc: "Descida é o nome dado a cada tentativa de avanço durante o jogo. Em uma descida, existem dois times: o time OFENSIVO e o time DEFENSIVO.",
    text
}

export default article;