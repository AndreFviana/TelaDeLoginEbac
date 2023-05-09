
function logar()
    {
      let login = document.getElementById('login').value;
      let senha = document.getElementById('senha').value;
    
      if (login == "admin" && senha == "admin"){
        alert('Tudo certo')
      } else {
        alert('Acesso Negado: senha ou login incorreto')
      }
    }




   
