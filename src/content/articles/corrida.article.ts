import image from "../../assets/images/corrida.gif";
import image2 from "../../assets/images/corridona.gif";

const text = `
Jogadores do time ofensivo poderão realizar corridas com a bola encostando no QB por trás.

A posição fixa de corredor é chamada de **Running Back** (RB), porém a corrida poderá ser realizada por qualquer um.

> ⚠️ O time DEFENSIVO, para parar uma corrida, deverá encostar no corredor duas vezes.

> ⚠️ O toque deve ser por trás. Toques frontais não são permitidos e resultarão em falta.

## Exemplos

### Corrida na red zone para touchdown

![Imagem](${image})

### Corrida no meio de campo para touchdown

![Imagem](${image2})

## Nem sempre corridas são boas

Corridas são, em alguns momentos, boas, principalmente quando o time adversário estiver muito recuado. Porém,
corrida toda hora é absolutamente ruim, uma vez que os jogadores adversários irão se acostumar e a corrida perderá
o elemento surpresa.

Nem todos os jogadores devem correr, também. Aqueles menos experienciados podem acabar atrapalhando o time. Lembre-se
sempre que, a cada corrida feita, uma oportunidade de passe pra touchdown foi perdida.


`;

const article = {
    title: "Corrida",
    category: "descidas",
    previewImg: image,
    desc: "Jogadores do time ofensivo poderão realizar corridas com a bola encostando no QB por trás. A posição fixa de corredor é chamada de **Running Back** (RB), porém a corrida poderá ser realizada por qualquer um.",
    text
}

export default article;