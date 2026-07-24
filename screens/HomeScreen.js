import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { ActivityIndicator, Snackbar, Text } from "react-native-paper";
import FilmeCard from "../components/FilmeCard";
import { buscarFilmes } from "../services/ghibliApi";
import { salvarFavorito } from "../services/storage";
import styles from "../styles";

const TOP_5_TITULOS = [
  "Princess Mononoke",
  "Kiki's Delivery Service",
  "Howl's Moving Castle",
  "When Marnie Was There",
  "Spirited Away",
];

export default function HomeScreen() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [snackbarVisivel, setSnackbarVisivel] = useState(false);
  const [mensagemSnackbar, setMensagemSnackbar] = useState("");

  useEffect(() => {
    carregarFilmes();
  }, []);

  async function carregarFilmes() {
    try {
      const dados = await buscarFilmes();

      const top5 = dados.filter((filme) => TOP_5_TITULOS.includes(filme.title));

      setFilmes(top5);
    } catch (error) {
      console.log("Erro ao carregar filmes:", error);
    } finally {
      setLoading(false);
    }
  }

  async function salvarFilme(filme) {
    try {
      await salvarFavorito(filme);
      setMensagemSnackbar(`"${filme.title}" salvo nos favoritos!`);
    } catch (error) {
      console.log("Erro ao salvar:", error);
      setMensagemSnackbar("Erro ao salvar o filme.");
    } finally {
      setSnackbarVisivel(true);
    }
  }

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="medium" />
      </View>
    );
  }

  if (filmes.length === 0) {
    return (
      <View style={styles.center}>
        <Text>Nenhum filme encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FilmeCard filme={item} onSalvar={salvarFilme} />
        )}
        contentContainerStyle={styles.lista}
      />

      <Snackbar
        visible={snackbarVisivel}
        onDismiss={() => setSnackbarVisivel(false)}
        duration={2000}
      >
        {mensagemSnackbar}
      </Snackbar>
    </View>
  );
}
