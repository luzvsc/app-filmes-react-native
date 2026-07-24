import React, { useCallback, useState } from "react";
import { View, FlatList } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";
import FilmeCard from "../components/FilmeCard";
import { buscarFavoritos, removerFavorito } from "../services/storage";
import styles from "../styles";

export default function FavoritosScreen() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      carregarFavoritos();
    }, []),
  );

  async function carregarFavoritos() {
    try {
      setLoading(true);
      const dados = await buscarFavoritos();
      setFilmes(dados);
    } catch (error) {
      console.log("Erro ao carregar favoritos:", error);
    } finally {
      setLoading(false);
    }
  }

  async function removerFilme(filme) {
    try {
      const novaLista = await removerFavorito(filme.id);
      setFilmes(novaLista);
    } catch (error) {
      console.log("Erro ao remover:", error);
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
        <Text>Nenhum filme salvo ainda.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={filmes}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <FilmeCard
          filme={item}
          onRemover={removerFilme}
          mostrarBotaoRemover={true}
        />
      )}
      contentContainerStyle={styles.lista}
    />
  );
}
