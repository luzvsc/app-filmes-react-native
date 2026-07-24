import AsyncStorage from "@react-native-async-storage/async-storage";

const filmesFavoritos = "@top5_ghibli_favoritos";

export async function buscarFavoritos() {
  try {
    const json = await AsyncStorage.getItem(filmesFavoritos);
    return json ? JSON.parse(json) : [];
  } catch (error) {
    console.log("Erro em buscarFavoritos:", error.message);
    throw error;
  }
}

export async function salvarFavorito(filme) {
  try {
    const favoritos = await buscarFavoritos();

    const jaExiste = favoritos.some((item) => item.id === filme.id);
    if (jaExiste) {
      return favoritos;
    }

    const novaLista = [...favoritos, filme];
    await AsyncStorage.setItem(filmesFavoritos, JSON.stringify(novaLista));

    return novaLista;
  } catch (error) {
    console.log("Erro em salvarFavorito:", error.message);
    throw error;
  }
}

export async function removerFavorito(id) {
  try {
    const favoritos = await buscarFavoritos();

    const novaLista = favoritos.filter((item) => item.id !== id);
    await AsyncStorage.setItem(filmesFavoritos, JSON.stringify(novaLista));

    return novaLista;
  } catch (error) {
    console.log("Erro em removerFavorito:", error.message);
    throw error;
  }
}
