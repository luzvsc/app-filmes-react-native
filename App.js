import { SafeAreaView, ScrollView, StatusBar, Image } from "react-native";
import {
  Card,
  MD3DarkTheme,
  PaperProvider,
  Text,
  Button,
} from "react-native-paper";
import { useState, useEffect } from "react";
import styles from "./styles";

const theme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#d3a95f",
    background: "#121212",
    surface: "#242424",
  },
};

export default function App() {
  const filmes = [
    {
      id: 1,
      titulo: "La mala educación",
      ano: 2004,
      genero: "Drama",
      diretor: "Pedro Almodóvar",
      descricao:
        "Dois antigos colegas de escola se reencontram e revisitam acontecimentos marcantes de sua infância.",
      imagem:
        "https://img.festival-cannes.com/eyJidWNrZXQiOiJtZWRpYSIsImtleSI6InVwbG9hZHNcLzIwMjNcLzAzXC8xOTU1OC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjE2MDAsImZpdCI6ImNvdmVyIn19fQ==",
    },
    {
      id: 2,
      titulo: "Princesa Mononoke",
      ano: 1997,
      genero: "Animação e fantasia",
      diretor: "Hayao Miyazaki",
      descricao:
        "Um jovem príncipe se envolve em um conflito entre os habitantes de uma vila e os espíritos da floresta.",
      imagem:
        "https://m.media-amazon.com/images/M/MV5BMmJjZGUxNGEtNmQ0OS00MjVjLTk5YWItMjdhNmRhMmI3M2M4XkEyXkFqcGc@._V1_.jpg",
    },
    {
      id: 3,
      titulo: "Mother!",
      ano: 2017,
      genero: "Terror psicológico",
      diretor: "Darren Aronofsky",
      descricao:
        "A tranquilidade de um casal é interrompida pela chegada de visitantes inesperados à sua casa.",
      imagem:
        "https://m.media-amazon.com/images/M/MV5BMzc5ODExODE0MV5BMl5BanBnXkFtZTgwNDkzNDUxMzI@._V1_.jpg",
    },
    {
      id: 4,
      titulo: "The Witch",
      ano: 2015,
      genero: "Terror",
      diretor: "Robert Eggers",
      descricao:
        "Uma família puritana enfrenta acontecimentos misteriosos enquanto vive isolada próxima a uma floresta.",
      imagem:
        "https://m.media-amazon.com/images/M/MV5BMTUyNzkwMzAxOF5BMl5BanBnXkFtZTgwMzc1OTk1NjE@._V1_.jpg",
    },
    {
      id: 5,
      titulo: "El laberinto del fauno",
      ano: 2006,
      genero: "Fantasia sombria",
      diretor: "Guillermo del Toro",
      descricao:
        "Durante a ditadura franquista, uma jovem encontra um labirinto mágico e recebe três tarefas misteriosas.",
      imagem:
        "https://m.media-amazon.com/images/M/MV5BMjFjYWY1ZWMtNjRkZS00NDY4LTk5MTUtMTAxNDM2NjEyMjgxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
  ];

  const [mononoke, setMononoke] = useState(null);

  useEffect(() => {
    buscarFilme();
  }, []);

  async function buscarFilme() {
    const resposta = await fetch(
      "https://ghibliapi.vercel.app/films/ff24da26-a969-4f0e-ba1e-a122ead6c6e3",
    );
    const dados = await resposta.json();
    setMononoke(dados);
  }

  const [gato, setGato] = useState("");

  async function buscarGato() {
    const resposta = await fetch("https://api.thecatapi.com/v1/images/dhj");

    const dados = await resposta.json();

    setGato(dados.url);
  }

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />

        <ScrollView contentContainerStyle={styles.conteudo}>
          <Text variant="headlineLarge" style={styles.tituloPrincipal}>
            Meus filmes favoritos
          </Text>

          <Text variant="bodyLarge" style={styles.introducao}>
            Top 5 filmes que eu mais gosto.
          </Text>

          {filmes.map((filme) => (
            <Card key={filme.id} style={styles.card} mode="elevated">
              <Card.Cover
                source={{ uri: filme.imagem }}
                style={styles.imagem}
                resizeMode="contain"
              />

              <Card.Content style={styles.informacoes}>
                <Text variant="headlineSmall" style={styles.tituloFilme}>
                  {filme.titulo}
                </Text>

                <Text variant="bodyMedium" style={styles.detalhes}>
                  {filme.ano} • {filme.genero}
                </Text>

                <Text variant="bodyMedium" style={styles.diretor}>
                  Direção: {filme.diretor}
                </Text>

                <Text variant="bodyMedium" style={styles.descricao}>
                  {filme.descricao}
                </Text>

                {filme.titulo === "Princesa Mononoke" && mononoke && (
                  <>
                    <Text style={styles.apiTitulo}>Informações da API</Text>
                    <Text style={styles.apiTexto}>
                      🎬 Produtor: {mononoke.producer}
                    </Text>

                    <Text style={styles.apiTexto}>
                      📅 Lançamento: {mononoke.release_date}
                    </Text>

                    <Text style={styles.apiTexto}>
                      ⭐ Rotten Tomatoes: {mononoke.rt_score}
                    </Text>
                  </>
                )}
              </Card.Content>
            </Card>
          ))}

          <Button
            mode="contained"
            onPress={buscarGato}
            style={{ marginTop: 20 }}
          >
            Obrigado! 🐱
          </Button>
          {gato !== "" && <Image source={{ uri: gato }} style={styles.gato} />}
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
}
