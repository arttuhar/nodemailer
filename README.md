# nodemailer

## Table of contents

- [General info](#general-info)
- [Techologies](#technologies)
- [Project status](#project-status)
- [Setup](#setup)

## General info

Simple nodemailer to use in future projects. Fill the contact form with your first name, last name, email and message and hit send. Information of form will be sent to email of your choose. Submodule source code can be found [here](https://github.com/arttuhar/nodemailer-front).

## Technologies

Project is made by using:

- [React](https://reactjs.org)
- [Node](https://nodejs.org/en/)
- [Express](https://www.npmjs.com/package/express)
- [Nodemailer](https://www.npmjs.com/package/nodemailer)
- [Cors](https://www.npmjs.com/package/cors)
- [Body-parser](https://www.npmjs.com/package/body-parser)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Concurrently](https://www.npmjs.com/package/concurrently)
- [Axios](https://www.npmjs.com/package/axios)

## Project status

Project is finished for now. Next steps will be:

- Adding a Material UI components

## Setup

Clone down this repository. You will need node and npm installed on your machine.

Installation:

`npm install`

Start server:

`npm run dev`

If you willing to test functionality you have to modify code a bit. Also you might have change your Gmail security settings. Google will send you a instructions how to do that.

Line 22:
Replace `YOUR GMAIL ADDRESS` with your Gmail address.

Line 23:
Replace `YOUR GMAIL PASSWORD` with your Gmail password.

Line 28:
Replace `YOUR GMAIL PASSWORD` with your Gmail address.
