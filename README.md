This repository contains two folders: problem and chatApp.

Problem Folder
This folder contains the solution to a mathematical problem along with a file called index.js which consumes the solution of the problem.

Problem
Write a function that gives the expanded form of (x+1)^n, for any value 0 < n < 50.

Examples:

(x+1)^0 = 1
(x+1)^1 = x + 1
(x+1)^2 = x^2 + 2x + 1

Usage
To use the function, simply import it into your project and call it with the desired value of n. The function returns a string representing the expanded form of (x+1)^n.

In addition to the solution, there is a static webpage that consumes the function. Open the index.html file in your web browser to see the result.


ChatApp Folder
This folder contains a web application that allows users to chat in groups or privately. It consists of two subfolders: backend and frontend.

Features
Login system
Group chat
Private chat


Usage
To run the application, you must start both the frontend and backend using the command npm start in their respective folders. You will also need a .env file to run the project.

Backend
The backend folder contains the server-side code for the application. To start the server, navigate to the backend folder and run the following command:

npm install
npm start

The server will run on http://localhost:8000.

Frontend
The frontend folder contains the client-side code for the application. To start the client, navigate to the frontend folder and run the following command:

npm install
npm start

The client will run on http://localhost:3000.

