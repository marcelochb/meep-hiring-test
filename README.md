# React Native (iOS) - Hiring Test 
# Teste para vaga na Meep

## Funcionalidades:
Criação de um app com React-Native(CLI)* e Typescript* baseado em Star Wars
consumindo a API citada abaixo.
BASE_API: http://swapi.dev/api/
TELAS:
1. SPLASH:
a. Deve conter uma arte que o tema seja Star Wars (livre)
2. FILMS:
a. Listagem do endpoint films (consulte a api para detalhes).
b. Em cada item deve-se conter as informações básicas do filme (mín 4)
c. Ao clicar em um filme, deve-se abrir os detalhes do mesmo, mostrando
também os personagens, planetas, naves, veículos e espécies e de cada
item pode-se abrir os detalhes do mesmo.

## Duração

24h


# Solução

## Design criado no Figm

[Design!](https://www.figma.com/file/pSN48uftjBfgDD3DXgCJyS/meep-starwars?node-id=0%3A1)

![alt text](https://github.com/marcelochb/meep-hiring-test/blob/master/design/design.png)


## Mobile (React Native)

### API Publica utilizada foi: [Star Wars!](http://swapi.dev/api/)

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
  

