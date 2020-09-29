# meet-up

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

// How docker works, How to update it:

1. Open docker
2. Go to terminal, type:
   docker build -t meet-up .
3. type:
   docker run -it -p 8020:8080 --rm --name dockerize-meetup meet-up-docker

// How heroku works:

1. install heroku:
   npm install heroku cli
2. go to heroku.com, login, go to the app 'meet-up-cindy', then go back to terminal, type:
   heroku login
   /_3. go to dashboard.heroku.com, create an app name 'meet-up-cindy', which needs to link to docker later._/
3. type:
   heroku container:login
4. type:
   docker build -t registry.heroku.com/meet-up-cindy/web .
5. type:
   docker push registry.heroku.com/meet-up-cindy/web
6. type:
   heroku container:release --app meet-up-cindy web
