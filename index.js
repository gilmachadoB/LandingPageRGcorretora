function myFunction(ev) {
  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;
  const emails = localStorage.getItem("emails");
  if (emails) {
    const store = JSON.parse(emails);
    store.push({ nome, telefone, email });
    localStorage.setItem("emails", JSON.stringify(store));
    alert("Dados salvos com sucesso!");
    return;
  }
  localStorage.setItem("emails", JSON.stringify([{ nome, telefone, email }]));
  alert("Dados salvos com sucesso!");
}
