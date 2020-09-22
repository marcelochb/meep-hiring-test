# React Native (iOS) - Hiring Test 
# Teste para vaga na SoftDesign

## Funcionalidades:
1) Lista de Personagens
-Listar personagens exibindo seus respectivos nomes e fotos.
- A lista deve possuir paginação infinita.
- Ao clicar em um personagem exibir uma tela com detalhes.

2) Tela de Detalhes do Personagem
- Exibir mais detalhes do personagem com as seguintes informações: Foto, nome, descrição.
- Exibir uma lista de quadrinhos em que o personagem tenha participado.

## Premissas:
- Código em React Native - Usar repositório público (Bitbucket, Github).
- Presença de testes unitários.
- Critérios de Avaliação:
- Conhecimento de React Native.
- Uso da arquitetura.
- Uso de testes unitários.
- Cuidados com design (UI/UX).

## Duração

2 dias corridos para resolução


# Solução

## Design criado no XD

![alt text](https://github.com/marcelochb/softDesign-hiring-test/blob/master/design/design.png)


## Mobile (React Native)

### API Publica utilizada foi: [Marvel Developer!](https://developer.marvel.com/)

### Organização do projeto:
  #### O projeto foi iniciado com template typescript
  #### O pathern escolhido foi MVC (incluindo a pasta Services para aliviar o Controller)
    A escolha do MVC foi com a intenção de proporcionar um codigo descritivo, organizado e facil manutenção. 
    O Model ficou responsável por armazenar a modelagem por typescript. 
    A View com o os arquivos JSX puros.
    O Controller através de hooks fica responsável por toda manipulação dos dados, e utiliza a pasta Services para delegar pequenas tarefas.
  
### Estrutura das pastas:
    1 - src  
    1.1 - assets: Imagens, icones e fonts;
    1.2 - components - Components comparilhados UI e de modulos;
    1.3 - config - Typescrypt, Reactotron e jest;
    1.4 - database - Modelagem e api;
    1.5 - pages - Paginas e seus componentes;
    1.6 - routes - Rota de navegação;
    1.7 - store - Redux (config, reducer, actions, modelagem);
    1.8 - styles - Estilizações compartilhadas;
    1.9 - theme - Tema com paleta de cores, metricas e font sizes;
    
 
 ### Para testar o App
  #### dentro da pasta mobile executar os comandos:
    1 - yarn;
    2 - dentro da pasta ios: pod install;
    3 - dentro da pasta mobile: npx react-native run-ios ou run-android
  

