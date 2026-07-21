import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";

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
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView contentContainerStyle={styles.conteudo}>
        <Text style={styles.tituloPrincipal}>Meus filmes prediletos</Text>

        <Text style={styles.introducao}>Top 5 filmes que eu mais gosto.</Text>

        {filmes.map((filme) => (
          <View key={filme.id} style={styles.card}>
            <Image source={{ uri: filme.imagem }} style={styles.imagem} />

            <View style={styles.informacoes}>
              <Text style={styles.tituloFilme}>{filme.titulo}</Text>

              <Text style={styles.detalhes}>
                {filme.ano} • {filme.genero}
              </Text>

              <Text style={styles.diretor}>Direção: {filme.diretor}</Text>

              <Text style={styles.descricao}>{filme.descricao}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },

  conteudo: {
    padding: 20,
  },

  tituloPrincipal: {
    color: "#ffffff",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 8,
  },

  introducao: {
    color: "#b5b5b5",
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 24,
  },

  card: {
    backgroundColor: "#242424",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 24,
  },

  imagem: {
    width: "100%",
    height: 400,
    resizeMode: "cover",
  },

  informacoes: {
    padding: 16,
  },

  tituloFilme: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },

  detalhes: {
    color: "#d3a95f",
    fontSize: 15,
    marginBottom: 8,
  },

  diretor: {
    color: "#eeeeee",
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 10,
  },

  descricao: {
    color: "#cccccc",
    fontSize: 15,
    lineHeight: 22,
  },
});
