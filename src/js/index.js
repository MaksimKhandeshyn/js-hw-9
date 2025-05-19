const refs = {
  //Inputs
  input: document.querySelector("#name"),
  email: document.querySelector("#email"),
  phone: document.querySelector("#phone"),
  //Btns
  add: document.querySelector("#add"),
  update: document.querySelector("#update"),
  delete: document.querySelector("#delete"),
};

refs.add.addEventListener("click", addContact);
function addContact() {
  const name = refs.input.value;
  const email = refs.email.value;
  const phone = refs.phone.value;

  const saveName = localStorage.setItem("name", name);
  const saveEmail = localStorage.setItem("email", email);
  const savePhone = localStorage.setItem("phone", phone);

  alert("Contact added successfully!");
}
