import image from "../../assets/images/kickoff.gif";

const text = `
O **kickoff** é uma jogada especial que acontece no início do jogo e após touchdowns e field goals.

A equipe que chuta (*kicking team*) irá lançar a bola para a equipe que recebe (*receiving team*). O jogador
da equipe que recebe que encostar na bola irá recebê-la e, portanto, deverá correr o máximo possível em direção à 
endzone inimiga, para ganhar jardas ou fazer um touchdown.

Após o fim do kickoff, inicia-se uma descida.

Caso a bola seja lançada para fora, a descida começará na linha de 40 jardas do campo da equipe que recebe.

![Campo](${image})

## Estratégia de poupar tempo no final da partida

Quando uma equipe está perdendo no final da partida, e for bater um kickoff, é comum que ela lance a bola para fora.
A razão disso é que o time adversário teria, após receber a bola, a oportunidade de atrasar o jogo, fazendo hora na corrida.

Ao lançar a bola para fora, o time que está perdendo espera conseguir defender as 4 descidas do time adversário, recuperar
a posse da bola e tentar fazer uma última campanha.
`;

const article = {
    title: "Kickoff",
    category: "outras",
    previewImg: image,
    desc: "O kickoff é uma jogada especial que acontece no início do jogo e após touchdowns e field goals. A equipe que chuta (kicking team) irá lançar a bola para a equipe que recebe (receiving team). O jogador da equipe que recebe que encostar na bola irá recebê-la e, portanto, deverá correr o máximo possível em direção à endzone inimiga, para ganhar jardas ou fazer um touchdown.",
    text
}

export default article;