# Brain-Agriculture

## Passos:

##### 1- rode: npm install em todos os projetos.
##### 1.1 - [IMPORTANTE] Eu usei MUI e descobri que não funciona muito bem no React 18 (incompatibilidades), então caso der algum problema faça: npm install --legacy-peer-deps. 

##### 2- Executar container docker em init/postgree => credenciais: admin/admin e db: BrainAgriculture.
##### 2.1 comandos [SUPER IMPORTANTE PARA FUNCIONAR]: 
#####     Entre na pasta onde esta o arquivo Dockerfile do postgree e execute os comandos:
#####     docker build . -t <nomeImagem>:<versao>
#####     docker run -d -p 5432:5432 <nomeImagem>:<versao> 

##### 3- Executar arquivo init ou npm start (frontend) e npm run dev (backend).

##### 4- Verificar arquivos .env para verificar as confugurações.




