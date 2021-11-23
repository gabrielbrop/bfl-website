import image from "../../assets/images/punt.gif";

const text = `
Um **punt** consiste em uma jogada especial em que o time arremessa a bola para o time adversário. Funciona
de maneira semelhante ao kickoff, mas com a bola sendo arremessada a partir da linha de scrimmage da descida atual.

O jogador do time adversário que pegar a bola deverá correr com ela em direção à endzone adversária, com o objetivo
de ganhar uma posição de vantagem para o próprio time ou fazer touchdown.

Geralmente é acionado quando o time ofensivo não consegue avançar durante as 3 primeiras descidas e descide
largar mão da quarta descida em favor de dar uma posição mais desfavorável para o time adversário.

O **punt** pode ser solicitado pelo QB com o comando **!punt**.

## Exemplo

Imagine a seguinte situação:

> 4 & 20 @ Blue 24

Você está na sua última descida e ainda lhe faltam 20 jardas. Se você arriscar agora e errar, você dará
vantagem ao time adversário, que começará mais perto da sua endzone.

Se você fizer o punt, o time adversário começará com a bola bem mais distante da sua endzone, tirando a vantagem deles.

![Imagem](${image})
`;

const article = {
    title: "Punt",
    category: "outras",
    text
}

export default article;