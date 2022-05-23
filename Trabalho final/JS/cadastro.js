const email = document.getElementById("input-email");
const password = document.getElementById("input-senha");
const confirmPass = document.getElementById("input-confirma-senha");
const button = document.querySelector("#btn-cadastrar");

const createObjectUser = () => {
  const object = {
    // login: login.value,
    login: email.value,
    pass: password.value,
  };
  return object;
};

const clearValues = () => {
  const inputs = document.querySelectorAll(".conta1");
  inputs.forEach((input) => (input.value = ""));
};

const getDataBase = () => JSON.parse(localStorage.getItem("db_user")) ?? [];
const setDataBase = (value) =>
  localStorage.setItem("db_user", JSON.stringify(value));

const createUserInDB = (user) => {
  const dbUser = getDataBase();
  dbUser.push(user);
  setDataBase(dbUser);
};

const readUserInDB = () => getDataBase();

const passwordAndConfirmPassValidation = (password, confirmPassword) => {
  if (typeof password == "number" && typeof confirmPassword == "number") {
    let pass = String(password);
    let confirm = String(confirmPassword);

    const passwordArray = Array.from(pass);
    const confirmPasswordArray = Array.from(confirm);

    if (passwordArray.length != confirmPasswordArray.length) {
      alert("Senha não corresponde a de cima!");
      clearValues();
      localStorage.clear();
    } else {
      for (let i = 0; i < confirmPasswordArray.length; i++) {
        if (passwordArray[i] != confirmPasswordArray[i]) {
          alert("Senha não corresponde a de cima!");
          clearValues();
          localStorage.clear();
        }
      }
    }
  }

  if (typeof password == "string" && typeof confirmPassword == "string") {
    const passwordArray = Array.from(password);
    const confirmPasswordArray = Array.from(confirmPassword);

    if (passwordArray.length != confirmPasswordArray.length) {
      alert("Senha não corresponde a de cima!");
      clearValues();
      localStorage.clear();
    } else {
      for (let i = 0; i < confirmPasswordArray.length; i++) {
        if (passwordArray[i] != confirmPasswordArray[i]) {
          alert("Senha não corresponde a de cima!");
          clearValues();
          localStorage.clear();
        }
      }
    }
  }
};

const emailUserValidation = (login) => {
  if (login.length <= 10) {
    alert("O e-mail precisa ter 10 caracteres!");
    localStorage.clear();
  }
};

const LocalStorageUserValidation = () => {
  if (localStorage.getItem("db_user") != null) {
    window.location.href = "recados.html";
  }
};

const userRegisterValidation = (login, password, confirmPassword) => {
  // loginUserValidation(login);
  emailUserValidation(login);
  passwordAndConfirmPassValidation(password, confirmPassword);

  alert("Registrado com sucesso!");

  LocalStorageUserValidation();
};

button.addEventListener("click", (event) => {
  createUserInDB(createObjectUser());
  userRegisterValidation(
    // login.value,
    email.value,
    password.value,
    confirmPass.value
  );
  clearValues();
  event.preventDefault();
});