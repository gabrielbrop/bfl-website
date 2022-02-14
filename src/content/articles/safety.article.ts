const text = `
Se um jogador do time ofensivo estiver com a bola (recebedor) e for derrubado (tackleado) pelo time defensivo
dentro da própria endzone, será considerado **safety**, concedendo 2 pontos e a posse da bola para o time defensivo.

A exceção é em casos de interceptação em que o interceptador não saiu da endzone ao receber a bola. Nesse caso, se o outro
time o derrubar na endzone, será touchback.

Esta falta é extremamente rara, em quase todos os casos só ocorre se o time não estiver jogando sério.
`;

const article = {
    title: "Safety",
    category: "faltas",
    desc: "Se um jogador do time ofensivo estiver com a bola (recebedor) e for derrubado (tackleado) pelo time defensivo dentro da própria endzone, será considerado safety, concedendo 2 pontos e a posse da bola para o time defensivo.",
    text
}

export default article;