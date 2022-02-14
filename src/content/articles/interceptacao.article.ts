import image from "../../assets/images/interceptacao.gif";

const text = `
Assim que o QB lançar a bola, caso ninguém do time ofensivo toque nela, o time defensivo terá direito a
arremessar a bola em direção ao seu próprio gol. Caso consiga, o interceptador iniciará uma corrida com a bola.

O arremesso deverá ser no primeiro toque. Senão, será considerado inválido.

Em defesas tradicionais, o papel de interceptar a bola é geralmente atribuída ao Safety.

![Imagem](${image})

## Pick Six
O interceptador deverá correr com a bola com o objetivo de conseguir o máximo de jardas possíveis para seu time,
ganhando uma posição de vantagem. Porém, de maneira rara mas ainda sim possível, interceptadores podem fazer
touchdown do jeito convencional (entrando na end zone inimiga). Esse touchdown especial é chamado de **pick six**.
`;

const article = {
    title: "Interceptação",
    category: "descidas",
    previewImg: image,
    desc: "Assim que o QB lançar a bola, caso ninguém do time ofensivo toque nela, o time defensivo terá direito a arremessar a bola em direção ao seu próprio gol. Caso consiga, o interceptador iniciará uma corrida com a bola.",
    text
}

export default article;