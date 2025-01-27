const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("Ведите любое число для подсчета ?");

rl.prompt();

rl.on("line", (input) => {
  const number = Number(input);

  if (typeof number === "number" && number === number) {
    console.log(`Ваше число ${number} в квадрате равно = ${number * number}`);
  } else {
    console.log("Пожалуйста, введите число.");
  }

  rl.close();
});






const path = require("path");
const fs = require("fs");
const EventEmitter = require("events");

console.log(path.join(__dirname, "standard.js"));

const eventEmitter = new EventEmitter();

function appendToText(text) {
  fs.appendFile("text.txt", "\n" + text, (err) => {
    if (err) {
      console.log("Ошибка при добавлении текста в файл:(event)", err);
    }
  });
}

eventEmitter.on("appendText", (text) => {
  appendToText(text);
});

fs.readFile(path.join(__dirname, "users.json"), (err, data) => {
  const users = JSON.parse(data).users;
  const user = users.find((user) => user.id === 2);
  if (user) {
    fs.writeFile("text.txt", user.text, (err) => {
      if (err) {
        console.log("Ошибка при записи в файл:", err);
      } else {
        // console.log("Пользователь с id 2 найден.");
        eventEmitter.emit("appendText", "Я иду!");
      }
    });
  } else {
    console.log("Пользователь с id 2 не найден.");
  }
});
