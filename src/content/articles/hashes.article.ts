import image from "../../assets/images/hashes.png";

const text = `
As **hashes** são as linhas verticais que atravessam o campo horizontalmente. A distância entre duas hashes é sempre
de 2 jardas. Portanto, 1 jarda equivale à metade da distância entre as hashes.

![Imagem](${image})
`;

const article = {
    title: "Hashes",
    category: "campo",
    previewImg: image,
    desc: "As hashes são as linhas verticais que atravessam o campo horizontalmente. A distância entre duas hashes é sempre de 2 jardas. Portanto, 1 jarda equivale à metade da distância entre as hashes.",
    text
}

export default article;