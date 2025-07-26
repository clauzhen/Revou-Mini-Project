/* Form "Message Us" */
const form   = document.getElementById("contactForm");
const output = document.getElementById("output");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nama   = form.nama.value.trim();
  const tgl    = form.tgl.value;
  const gender = form.gender.value;
  const pesan  = form.pesan.value.trim();

  const now  = new Date().toUTCString();
  output.textContent = `
Current time : ${now}

Nama          : ${nama}
Tanggal Lahir : ${tgl}
Jenis Kelamin : ${gender}
Pesan         : ${pesan}
  `;

  form.reset();
});
