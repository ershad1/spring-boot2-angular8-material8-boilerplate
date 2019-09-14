# Spring Boot 2 + Angular 8 + Material 8

## Includes:

Front-end:

- angular-cli boilerplate files
- JWT authentication service

**What's news**
- HttpClient
- Login page
- Roles Permissions
- Navigation Menu
- Material Design
- Crud
- Data Table

Back-end:

- Gradle build file
- Boilerplate files
- JWT authentication


## Build and Run

First of all you need to configure the database. Properties are located in `./backend/src/main/resources/application.yml` file.

1. Go to fronted folder and Run `npm install` to install front-end dependencies.
2. Go to fronted folder and Run `npm run build:prod rontend` to build angular application. (Optional)
4. Go to backend folder and Run `gradle build` to build a spring boot application.
5. Go to backend folder and Run `gradle bootRun` or `java -jar backend/build/libs/app-name-[version].jar` to start spring boot application on embedded server.
6. import data.sql data to the database. backend_service database will auto create if not exists after backend app started.

> By default server will be running on port `5000`.
> By default application is using MariaDB database(name: `user`, user: `admin`, password: `test`).

## Development

- `npm start --prefix frontend` to start front-end server for development.
- `npm run start:prod --prefix frontend` to start front-end server with service-workers.
- `gradle bootRun -p backend ` to start spring boot application on embedded server.

> By default server will be running on port `4200`

## Testing

- `npm test --prefix frontend` - to run front-end unit tests.
- `npm run e2e --prefix frontend` - to run end to end tests.
- `gradle test -p backend` - to run server tests.

## Technologies used

- [spring-boot 2.1.8](https://projects.spring.io/spring-boot/)
- [spring-mvc ](https://docs.spring.io/spring/docs/current/spring-framework-reference/html/mvc.html)
- [spring-data-jpa ](http://projects.spring.io/spring-data-jpa/)
- [spring-security ](https://projects.spring.io/spring-security/)
- [jjwt 0.9.1](https://github.com/jwtk/jjwt)
- [lombok](https://projectlombok.org/)
- [junit 4](http://junit.org/junit4/)
- [gradle](https://gradle.org/)
- [mariadb](https://mariadb.org)
- [h2](http://www.h2database.com/html/main.html)
- [angular-cli 8.3.4](https://cli.angular.io/)
- [angular 8.2.5](https://angular.io/)
- [rxjs 6.4.0](http://reactivex.io/rxjs/)
- [jasmine](https://jasmine.github.io/)
- [karma](https://karma-runner.github.io/1.0/index.html)
- [protractor](http://www.protractortest.org/#/)
- [angular material 8](https://material.angular.io/)
- [ngx-permissions 7.1.3](https://github.com/AlexKhymenko/ngx-permissions)
- [ngx-custom-validators 8.0.0](https://github.com/rsaenen/ngx-custom-validators)

## Author
- Author: [@saka7](https://github.com/saka7)
- Contributor: [@raymondcoplin](https://github.com/RaymondCoplin)
- Contributor: [@ershad1](https://github.com/ershad1)


## License
spring-boot-angular4-boilerplate is released under the [MIT License](https://opensource.org/licenses/MIT).
