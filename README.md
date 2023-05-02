# Brain-Agriculture

## Passos:

##### 1. Rode: npm install em todos os projetos.
##### 1.1 - [IMPORTANTE] Eu usei MUI e descobri que não funciona muito bem no React 18 (incompatibilidades), então caso der algum problema faça: npm 
<ul> 
  <li>npm install --legacy-peer-deps.</li>
</ul>  

##### 2. Executar container docker em init/postgree => credenciais: admin/admin e db: BrainAgriculture.
##### 2.1 Comandos [SUPER IMPORTANTES PARA FUNCIONAR]: 

<ul>
  <li> Entre na pasta onde esta o arquivo Dockerfile do postgree (./init/postgree) e execute os comandos: </li>
  <li>     docker build . -t {nomeImagem}:{versao} </li>
  <li>     docker run -d -p 5432:5432 {nomeImagem}:{versao} </li>
</ul>

##### 3. Executar arquivo 
<ul>
  <li> npm start (frontend) </li> 
  <li>npm run dev (backend) </li>
</ul>

##### 4. Verificar arquivos .env para verificar as confugurações.

##### 5. Usei a versão 18.13.0 do node.




