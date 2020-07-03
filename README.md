<h1>🚀 Semana OmniStack #11</h1>

<p align="center">
  <img src="https://github.com/allanbz/RocketSeat-Semana-OmniStack-11/blob/dev/readme-assets/logo-omni.png" alt="Semana OmniStack">
</p>

<p align="center">
  <a href="https://nodejs.org">
    <img src="https://img.shields.io/static/v1?label=Node&message=JS&color=blue?style=plastic&logo=Node.js" alt="NodeJS" />
  </a>
  <a href="https://reactjs.org">
    <img src="https://img.shields.io/static/v1?label=React&message=JS&color=blue?style=plastic&logo=React" alt="ReactJS" />
  </a>
  <a href="https://reactnative.dev">
    <img src="https://img.shields.io/static/v1?label=React&message=Native&color=blue?style=plastic&logo=React" alt="React-Native" />
  </a>
</p>

Curso de Node.js, ReactJS e React Native na linguagem JavaScript, ministrado pela <a href="https://github.com/rocketseat">RocketSeat</a>.

<h2>📁 Sumário</h2>
<ul>
  <li><a href="https://github.com/allanbz/RocketSeat-Semana-OmniStack-11#aplica%C3%A7%C3%A3o">Aplicação</a></li>
  <li><a href="https://github.com/allanbz/RocketSeat-Semana-OmniStack-11#%EF%B8%8Ftecnologias">Tecnologias</a></li>
  <li><a href="https://github.com/allanbz/RocketSeat-Semana-OmniStack-11#como-rodar">Como rodar</a></li>
</ul>

<h2>🎈 Aplicação</h2>

<p align="center">
  <img width="350" height="100" src="https://github.com/allanbz/RocketSeat-Semana-OmniStack-11/blob/dev/readme-assets/logo.svg">
</p>

Durante o curso foi desenvolvida a aplicação "Be the Hero", direcionada para o cadastro e a consulta de ONGs e de casos em que uma ajuda financeira é necessária, 
estabelecendo um ambiente de conexão entre a instituição necessitada e um herói, além da possibilidade de contribuição em causas sociais importantes. O Be the Hero oferece 
opções de contato com entidades das mais diversas regiões.

<div class="column">
  <div class="row">
    <img width="1024" height="560" src="https://github.com/allanbz/RocketSeat-Semana-OmniStack-11/blob/dev/readme-assets/web-home.png">
  </div>
  <div class="row">
    <img width="1024" height="560" src="https://github.com/allanbz/RocketSeat-Semana-OmniStack-11/blob/dev/readme-assets/web-cadastro.png">
  </div>
  <div class="row">
    <img width="1024" height="560" src="https://github.com/allanbz/RocketSeat-Semana-OmniStack-11/blob/dev/readme-assets/web-casos.png">
  </div>
  <div class="row">
    <img width="1024" height="560" src="https://github.com/allanbz/RocketSeat-Semana-OmniStack-11/blob/dev/readme-assets/web-cadastro-caso.png">
  </div>
</div>
<p float="center">
  <img src="https://github.com/allanbz/RocketSeat-Semana-OmniStack-11/blob/dev/readme-assets/mobile-splash.jpg" width="33%" />
  <img src="https://github.com/allanbz/RocketSeat-Semana-OmniStack-11/blob/dev/readme-assets/mobile-casos.jpg" width="33%" /> 
  <img src="https://github.com/allanbz/RocketSeat-Semana-OmniStack-11/blob/dev/readme-assets/mobile-detalhe.jpg" width="33%" />
</p>

<h2>⚙️ Tecnologias</h2>

O sistema, escrito em <a href="https://www.javascript.com/">JavaScript</a>, é composto por 3 módulos:

<ul>
  <li>🗄️ <b>Server:</b> construído com <a href="https://nodejs.org">Node.js</a> e responsável por gerenciar ações no banco de dados através de uma API RESTful.</li>
  <ul>
    <li><a href="https://expressjs.com">Express</a>: usado no roteamento da aplicação e gerenciamento de seus middlewares.</li>
    <li><a href="https://github.com/mapbox/node-sqlite3">SQLite 3</a>: usado na implementação do banco de dados.</li>
    <li><a href="http://knexjs.org">Knex</a>: construtor de consultas SQL (<i>query builder</i>) usado para facilitar a manipulação do banco de dados.</li>
    <li><a href="https://github.com/arb/celebrate">Celebrate</a>: usado para validação de entradas do usuário.</li>
    <li><a href="https://jestjs.io/">Jest</a>: usado na implementação de testes unitários e de integração.</li>
    <li><a href="https://github.com/visionmedia/supertest">SuperTest</a>: usado para testes em requisições HTTP.</li>
    <li><a href="https://github.com/expressjs/cors">Cors</a>: permite o acesso da aplicação Web ao servidor.</li>
  </ul>
  <br/>
  <li>🖥️ <b>Web:</b> implementado com <a href="https://reactjs.org">ReactJS</a>, representa o frontend da aplicação e a interface na qual os casos são cadastrados pela ONG logada.</li> 
  <ul>
    <li><a href="https://github.com/axios/axios">Axios</a>: usado na construção da API responsável por fazer requisições ao servidor.</li>
    <li><a href="https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom">React-Router-DOM</a>: usado no roteamento das páginas da aplicação.</li>
    <li><a href="https://react-icons.github.io/react-icons">React-Icons</a>: pacote de ícones.</li>
  </ul>
  <br/>
  <li>📱 <b>Mobile:</b> implementado com <a href="https://reactnative.dev">React Native</a> através da plataforma <a href="https://expo.io">Expo</a>, representa a versão móvel da aplicação, sendo a interface responsável 
  pela consulta dos casos cadastrados.</li>
  <ul>
    <li><a href="https://github.com/axios/axios">Axios</a>: usado na construção da API responsável por fazer requisições ao servidor.</li>
    <li><a href="https://docs.expo.io/versions/latest/sdk/mail-composer">Expo-Mail-Composer</a>: usado para envio de e-mails através de apps nativos ao OS.</li>
    <li><a href="https://docs.expo.io/versions/latest/sdk/constants">Expo-Constants</a>: possibilita o acesso ao tamanho da barra de status do OS durante a estilização da interface.</li>
    <li><a href="https://reactnavigation.org">React-Navigation</a>: gerencia o roteamento e a navegação da aplicação.</li>
  </ul>
</ul>

<h2>🎡 Como rodar</h2>

É necessário ter o <a href="https://git-scm.com">Git</a>, o <a href="https://nodejs.org">Node.js</a> e um gerenciador de pacotes (<a href="https://www.npmjs.com">npm</a> 
ou <a href="https://yarnpkg.com">yarn</a>) instalados. Esse passo-a-passo usará o npm.

<ol>
  <b><li>Baixe o projeto</li></b>
  <br/>
  <blockquote>git clone ht<span>tps://</span>github.com/allanbz/RocketSeat-Semana-OmniStack-11.git</blockquote>
  <br/>
  <b><li>Edite a propriedade baseURL de acordo com seu IPv4 no arquivo abaixo, mantendo a porta 3333:</li></b>
  <br/>
  <blockquote>mobile/src/services/api.ts</blockquote>
  <br/>
  <b><li>Navegue até a pasta server, instale as dependências do projeto, configure o banco de dados e execute o servidor:</li></b>
  <br/>
  <blockquote>npm install<br/>npm run knex:migrate<br/>npm start</blockquote>
  <br/>
  <b><li>Navegue até a pasta web, instale as dependências do projeto e execute a aplicação:</li></b>
  <br/>
  <blockquote>npm install<br/>npm start</blockquote>
  <br/>
  <b><li>Para executar a aplicação mobile, primeiro é preciso instalar o pacote do Expo, bem como o aplicativo Expo disponível na loja de seu 
  respectivo OS (<a href="https://play.google.com/store/apps/details?id=host.exp.exponent">Android</a> ou <a href="https://apps.apple.com/app/expo-client/id982107779">iOS</a>). 
  A instalação do app não é necessária caso queira usar um emulador. Para instalar o pacote do Expo, suas dependências e executar a aplicação, 
  navegue até a pasta mobile e execute os seguintes comandos:</li></b>
  <br/>
  <blockquote>npm install expo-cli --global<br/>npm install<br/>npm start</blockquote>
  <b>Feito isso, uma aba do Expo será aberta em seu navegador. Com a opção LAN selecionada, abra o aplicativo no seu celular e use o escaneamento por QRCode
  para abrir o app.</b>
</ol>
