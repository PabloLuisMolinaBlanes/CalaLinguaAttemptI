# CostaLinguaAttemptI (not final version)

CostaLingua is meant as a platform so people can learn Spanish.

# Disclaimer

**This is a test, proof-of-concept project, it is not production-ready, and not meant to be a final product** (although I may deploy it as a demo). **The functionality and the codebase may change erratically and suddenly.**

The code is provided under the MIT Licence—see LICENSE for details.

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
