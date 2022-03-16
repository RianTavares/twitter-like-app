<div align="center">
  <a href="https://github.com/RianTavares/pokedex" alt="Twitter-like app">
    <img width="300px" src="./src/assets/../assests/images/twitter-like-app-logo.svg">
  </a>
</div>

<hr />

<div align="center">
  <a href="https://www.codefactor.io/repository/github/riantavares/twitter-like-app">
    <img src="https://www.codefactor.io/repository/github/riantavares/twitter-like-app/badge?s=f8b7ca012a4ad4d1e4f1200c14df987b31086f50" alt="CodeFactor" />
  </a>
  <a href="https://main.d2k3vgnljt4tx7.amplifyapp.com/">
    <img src="https://img.shields.io/badge/.-deployed-green?logo=amazonaws" alt="AWS Amplify" />
  </a>
  <a href="https://github.com/facebook/react">
    <img src="https://img.shields.io/badge/.-React-%2361DAFB?logo=react" alt="React" />
  </a>
  <a href="https://react-redux.js.org/">
    <img src="https://img.shields.io/badge/.-Redux-blueviolet?logo=redux" alt="React Redux" />
  </a>
  <a href="https://rxjs.dev/">
    <img src="https://img.shields.io/badge/.-RxJS-%23B7178C?logo=reactivex" alt="RxJS" />
  </a>
</div>

## What does it do
This project is part of a front-end challenge. 
The core function is to list values sent by an Observable as a Twitter-like structure/style and manage them, such as like/dislike them, list liked tweets, and delete them. You can check the full description of the challenge in [this pdf](./src/assests/pdf/Twitter-like_application.pdf).

## Table of contents

- [Overview](#what-does-it-do)
  - [Demo](#demo)
  - [Features](#features)
  - [Technology and resources](#technology-and-resources)
  - [Style Guide](#style-guide)
- [Setup process](#fast-setup)
  - [Fast setup](#fast-setup)
- [Development process explained](docs/PROCESS.md)
  

## Demo
<div align="center"><img src="./src/assests/images/demo.gif"></div>

## Features

- [✓] User friendly
- [✓] Mobile First
- [✓] Twitter-like structure/style 
- [✓] List Tweets by date descending
- [✓] Removes Tweets older than 30 seconds
- [✓] Like/Dislike animation
- [✓] Liked Tweets counter above each list
- [✓] Toggle between All Tweets and Liked Tweets list
- [✓] Delete all function for each list
- [✓] App up and running on [AWS Amplify](https://main.d2k3vgnljt4tx7.amplifyapp.com/) 🚀

## Technology and resources
- React JS
- Redux
- RxJS
- SASS
- BEM

## Style Guide
I used a linter library (ESLint) with the Airbnb Style Guide, one of the most popular style guides available on Github, to guide the development through a set of best practices and guidelines for keeping the code quality.

## Fast setup (CLI)

1. Download or Clone the project and extract it
2. Download [Node.js](https://nodejs.org/it/) and install it.
3. Run `npm install` in the project's root folder
4. Start the app in the development mode via command line `npm start`
5. The project now is running on [http://localhost:3000](http://localhost:3000)
