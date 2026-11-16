# donkeyboard web: Next.js 13. Deployed on piplup (/srv/apps/donkeyboard).
# In production the API is served on the same origin under /api (see src/utils/axios.ts).
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app ./
EXPOSE 3000
CMD ["yarn", "start"]
