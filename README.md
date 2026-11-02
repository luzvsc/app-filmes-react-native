# Top 5 Studio Ghibli

Aplicativo desenvolvido em React Native utilizando o framework Expo. O projeto consome a [Ghibli API](https://ghibliapi.vercel.app/films) para filtrar e listar os 5 melhores filmes do estúdio, permitindo que o usuário visualize os detalhes das obras e salve seus favoritos localmente no dispositivo.

## 🚀 Tecnologias Utilizadas

- **React Native / Expo SDK 58:** Framework de desenvolvimento mobile.
- **React Navigation (Native Stack):** Gerenciamento de rotas e navegação entre telas.
- **React Native Paper:** Biblioteca de componentes de interface baseada no Material Design 3.
- **AsyncStorage:** Armazenamento local persistente para a lista de filmes favoritos.
- **Fetch API:** Consumo de dados via requisições HTTP RESTful.

## 📱 Funcionalidades

- Listagem filtrada do Top 5 filmes do Studio Ghibli.
- Exibição de detalhes da obra (Capa, Sinopse, Diretor, Produtor, Ano, e Nota no Rotten Tomatoes).
- Sistema de favoritos (Salvar e Remover) com persistência de dados local (AsyncStorage).
- Feedback visual através de Snackbars ao interagir com a lista.
- Tema customizado com esquema de cores Dark Mode.

## ⚙️ Como executar o projeto

O projeto não requer nenhuma chave de API externa ou configuração de variáveis de ambiente (`.env`).

### Pré-requisitos

- Node.js instalado.
- Aplicativo **Expo Go** instalado no seu dispositivo móvel (iOS ou Android).
