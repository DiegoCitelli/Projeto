const form = document.getElementById("formContato");
const toast = document.getElementById("toast");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const sobrenome = document.getElementById("sobrenome").value;
  const email = document.getElementById("email").value;
  const assunto = document.getElementById("assunto").value;
  const mensagem = document.getElementById("mensagem").value;

  const dados = {
    nome,
    sobrenome,
    email,
    assunto,
    mensagem,
  };

  localStorage.setItem("dadosContato", JSON.stringify(dados));

  form.reset();

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
});

window.history.scrollRestoration = "manual";

window.onload = () => {
  window.scrollTo(0, 0);
};

window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};
