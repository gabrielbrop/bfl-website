import image from "../../assets/images/kickoffinicial.gif";

const text = `
No início do jogo, o red deve chutar a bola para um jogador do blue pegar.

O jogador do blue que pegar a bola ganhará o emoji de 🏈 e deverá correr para a **endzone** do red.

Quanto mais perto o jogador do blue chegar da endzone do red, melhor. Caso ele entre na endzone, será um **touchdown**, que vale 7 pontos.

Caso ele seja pego pelo time adversário, iniciará-se uma descida.

![Imagem](${image})
`;

const article = {
    title: "Kickoff inicial",
    category: "inicio",
    text
}

export default article;