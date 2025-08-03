# CalaLinguaAttemptI (not final version)

CalaLingua is meant as a platform so people can learn Spanish.

# Disclaimer

**This is a test, proof-of-concept project, it is not production-ready, and not meant to be a final product** (although I may deploy it as a demo). **The functionality and the codebase may change erratically and suddenly.**

The code is provided under the MIT Licence—see LICENSE for details.

# Deployment

You will be able to deploy any version classified under "Releases" by the following steps:

1. You will need to have Docker Engine installed, you can find instructions for installing it for your OS on the [Docker documentation](https://docs.docker.com/engine/install/)
2. Once you have installed Docker, then you must access the main folder from the terminal and type
```{bash}
docker compose -f ./compose/compose.yaml build --no-cache
```
3. Then, to deploy the application on your Docker instance, you type in
```{bash}
docker compose -f ./compose/compose.yaml up
```

Your webapp will be accessible then in http://localhost:5173 by default.

Let me know if there are any problems I have not considered!

## Features

* Secure authentication, login and registration (session-based authentication)
* Questionnaire-related question creation, edition, and answering (each questionnaire is divided in difficulty levels, an operator can only add, modify or delete questions to the Easy, Medium, and Hard levels, not create questionnaires per-se)
* Textual chat functionality (you can access using user-provided codes to chat rooms, I might add in webcam and mic chat next)
* Fully responsive landung/promotional webpage.

## Technologies

So far the technologies I will be using here are:

* Vite (as the frontend server)
* React with Typescript (as the main frontend codebase language)
* TailwindCSS (as my CSS framework)
* Node.JS (Backend run environment)
* Express.JS (as the backend server)
* Argon2 (or possibly bcrypt) as cryptography library
* Axios to make any external requests
* Docker (if deployed)
