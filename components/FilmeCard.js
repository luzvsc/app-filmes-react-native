import React from "react";
import { Image, View } from "react-native";
import { Button, Card, Paragraph, Text, Title } from "react-native-paper";
import styles from "../styles";

export default function FilmeCard({
  filme,
  onSalvar,
  onRemover,
  mostrarBotaoRemover = false,
}) {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Image
          source={{ uri: filme.image }}
          style={styles.imagem}
          resizeMode="cover"
        />

        <Title style={styles.tituloFilme}>{filme.title}</Title>

        <Paragraph style={styles.descricao}>{filme.description}</Paragraph>

        <Text style={styles.info}>
          <Text style={styles.label}>Diretor:</Text> {filme.director}
        </Text>

        <Text style={styles.info}>
          <Text style={styles.label}>Produtor:</Text> {filme.producer}
        </Text>

        <Text style={styles.info}>
          <Text style={styles.label}>Ano:</Text> {filme.release_date}
        </Text>

        <Text style={styles.info}>
          <Text style={styles.label}>Rotten Tomatoes:</Text> {filme.rt_score}%
        </Text>

        <View style={styles.botaoContainer}>
          {mostrarBotaoRemover ? (
            <Button mode="contained" onPress={() => onRemover(filme)}>
              Remover
            </Button>
          ) : (
            <Button mode="contained" onPress={() => onSalvar(filme)}>
              Salvar
            </Button>
          )}
        </View>
      </Card.Content>
    </Card>
  );
}
