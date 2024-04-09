document
  .getElementById('registerForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    //obtenir dades del formulari
    const firstName = document.getElementById('firstName').value;
    //const firstName = document.querySelector("#firstName").value;

    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('passwd').value; // Canviat 'password' per 'passwd'
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.getElementById('gender').value;
    const termsAccepted = document.getElementById('terms').checked;
    //validacions dels camps del formulari

    //validar que tots els camps estiguin omplerts
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !birthdate ||
      !gender ||
      !termsAccepted
    ) {
      alert('Cal omplir tots els camps');
      return;
    }
    if (!termsAccepted) {
      alert('No has acceptat els temes i condicions');
      return;
    }
    //contrasenya ha de tenir al menys 6 caracters
    if (password.length < 6) {
      alert('la contrasenya ha de tenir al menys 6 caracters');
    }
    //la adreca de correu ha de tenir un fomrat valid
    const emailRegex = / ^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$;
    if(!emailRegex.test(email)) {
        alert("La direcció de correu electronica no es valida");
    }
    //data de naixament has de ser major de  18 anys
  });
