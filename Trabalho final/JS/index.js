const button = document.getElementById("btn-login");
const login = document.getElementById("email-login");
const password = document.getElementById("senha-login");

const getDataBase = () => JSON.parse(localStorage.getItem("db_user")) ?? [];

const readUserInDB = () => getDataBase();

const clearValues = () => {
  const inputs = document.querySelectorAll(".input-login");
  inputs.forEach((inputs) => (inputs.value = ""));
};

const userLoginValidation = (login, password) => {
  if (localStorage.getItem("db_user") != null) {
    const dbUser = readUserInDB();

    const getLogin = dbUser.map((login) => login.login).join("");
    const getPass = dbUser.map((pass) => pass.pass).join("");

    if (login == getLogin && password == getPass) {
      alert("Bem vindo ao Sistema!");
      window.location.href = "recados.html";
    } else {
      alert("Login ou senha inválidos!");
    }
  } else {
    alert(
      "Usuário não cadastrado!"
    );
  }
};

button.addEventListener("click", (event) => {
  userLoginValidation(login.value, password.value);
  clearValues();
  event.preventDefault();
});
