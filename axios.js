async function enviarCorreo(correo, nombre, apellido, mensaje) {
  return axios({
    method: "post",
    url: "https://sandbox.banwire.com/genericNotification/emailNotification",
    data: {
      emailBody: {
        msj: mensaje,
        subject: "Este es una prueba",
        informationClient: {
          name: nombre + " " + apellido,
          telefone: 0,
          email: correo,
        },
      },
      company: "Banwire",
    },
    headers: {
      "x-api-key": "u3%d&#*yL(D4BkYh",
    },
  })
    .then((succ) => {
      return succ;
    })
    .catch(function (error) {
      return error;
    });
}
