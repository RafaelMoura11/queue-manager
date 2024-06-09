FROM node:16-alpine

WORKDIR /app

# Copia package.json e package-lock.json (se houver)
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos para o container
COPY . .

# Constrói a aplicação
RUN npm run build

# Expõe a porta que a aplicação vai rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
