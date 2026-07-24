const BASE_URL = "https://ghibliapi.vercel.app/films";

export async function buscarFilmes() {
  try {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error("Erro ao buscar filmes da API");
    }

    const dados = await response.json();
    return dados;
  } catch (error) {
    console.log("Erro em buscarFilmes:", error.message);
    throw error;
  }
}
