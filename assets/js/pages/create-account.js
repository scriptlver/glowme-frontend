const form = document.querySelector(".register-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = document.getElementById("register-name").value.trim();
  const email = document.getElementById("register-email").value.trim();
  const senha = document.getElementById("register-password").value;
  const confirmar = document.getElementById("register-confirm").value;
  const termos = document.getElementById("register-terms-checkbox").checked;

  if (!nome || !email || !senha || !confirmar) {
    alert("Preencha todos os campos");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Digite um email válido");
    return;
  }

  if (senha.length < 6) {
    alert("A senha deve ter pelo menos 6 caracteres");
    return;
  }

  if (senha !== confirmar) {
    alert("As senhas não coincidem");
    return;
  }

  if (!termos) {
    alert("Você precisa aceitar os Termos de Uso");
    return;
  }

  alert("Conta criada com sucesso!");
});