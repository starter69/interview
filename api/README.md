# Interview REST APIs

This project provides a set of REST APIs for uploading and commenting on interviews.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)

## Introduction

The Interview REST APIs allow users to upload interviews and add comments to existing interviews. It provides a convenient way to manage interview data and facilitate collaboration among users.

## Features

- Upload interviews with relevant details such as candidate name, job position, and interview date.
- Add comments to existing interviews to provide feedback or additional information.
- Retrieve interview details including comments.
- Update and delete interviews and comments.

## Installation

### API

1. Clone the repository: `https://github.com/starter69/interview`
2. Install dependencies: `npm install`
3. Configure the database connection in `.env`.
4. Create the database which name is `interview`
5. Run `npm run migrate` in `api`
6. Run `npm run seed` in `api`
7. Run `npm start` in `api`
