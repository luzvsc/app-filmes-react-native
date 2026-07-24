import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },

  center: {
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "center",
    alignItems: "center",
  },

  lista: {
    padding: 20,
  },

  conteudo: {
    padding: 20,
  },

  tituloPrincipal: {
    color: "#ffffff",
    marginBottom: 8,
  },

  introducao: {
    color: "#b5b5b5",
    lineHeight: 22,
    marginBottom: 24,
  },

  card: {
    backgroundColor: "#242424",
    marginBottom: 24,
    overflow: "hidden",
  },

  imagem: {
    width: "100%",
    height: 500,
    backgroundColor: "#111111",
  },

  informacoes: {
    paddingTop: 16,
  },

  tituloFilme: {
    color: "#ffffff",
    marginBottom: 5,
  },

  detalhes: {
    color: "#d3a95f",
    marginBottom: 8,
  },

  diretor: {
    color: "#eeeeee",
    fontWeight: "bold",
    marginBottom: 10,
  },

  descricao: {
    color: "#cccccc",
    lineHeight: 22,
    marginBottom: 10,
  },

  info: {
    color: "#cccccc",
    marginBottom: 4,
  },

  label: {
    color: "#d3a95f",
    fontWeight: "bold",
  },

  botaoContainer: {
    marginTop: 16,
  },

  apiTitulo: {
    marginTop: 16,
    marginBottom: 8,
    color: "#d3a95f",
    fontSize: 18,
    fontWeight: "light",
  },

  apiTexto: {
    color: "#ffffff",
    fontSize: 15,
    marginBottom: 6,
    paddingBottom: 6,
  },
});

export default styles;
