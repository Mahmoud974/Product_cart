FROM node:18.17.0-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Construire l'application
RUN npm run build

# Exposer le port 3000
EXPOSE 3000

# Démarrer l'application en mode production
CMD ["npm", "start"]
