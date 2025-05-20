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

  if (
    refs.input.value === "" ||
    refs.email.value === "" ||
    refs.phone.value === ""
  ) {
    alert("Please fill in all fields.");
    return;
  } else {
    alert("Contact added successfully!");
  }
}

refs.update.addEventListener("click", updateContact);

function updateContact() {
  refs.input.value = localStorage.getItem("name");
  refs.email.value = localStorage.getItem("email");
  refs.phone.value = localStorage.getItem("phone");
}
refs.delete.addEventListener("click", deleteContact);
function deleteContact() {
  localStorage.removeItem("name");
  localStorage.removeItem("email");
  localStorage.removeItem("phone");
  refs.input.value = "";
  refs.email.value = "";
  refs.phone.value = "";
  alert("Contact deleted successfully!");
  localStorage.clear();
}
