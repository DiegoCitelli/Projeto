/*  let dados =  [ 
    id: ,
    nome: ,
    sobrenome: ,
    assunto: ,
    mensagem: 
    
] */

const form = document.getElementById("formContato");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const nome =
        document.getElementById("nome").value;

    const email =
        document.getElementById("email").value;

    localStorage.setItem("nome", nome);
    localStorage.setItem("email", email);

    form.reset();

    // Toast
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);

});

const toast =
    document.getElementById("toast");

        window.history.scrollRestoration = "manual";

    window.onload = () => {
        window.scrollTo(0, 0);
    };



window.onbeforeunload = () => {
    window.scrollTo(0, 0);
};
