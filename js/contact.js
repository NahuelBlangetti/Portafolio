const frm = document.querySelector("#frm");

frm.addEventListener("submit", event => {
  event.preventDefault();
  const frm = event.target;
  const formData = {
    name: frm.name.value,
    email: frm.email.value,
    date: frm.mensaje.value
  };

  const URL = `https://wa.me/543512293555?text=Nombre= ${formData.name}%20Email= ${formData.email}%20Mensaje= ${formData.date}`;

  window.open(URL, "_blank");
});