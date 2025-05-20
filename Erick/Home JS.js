function teste(){

    let user = document.getElementById('user').value;
    let senha = document.getElementById('senha').value;

    if(user==='Admin' && senha==='1234')
      window.location.href="Página de Login2.html";
    else
      alert('Tentar novamente')
    
    }

    function mudarcor () {
    document.querySelector("body").style.backgroundColor= "black";
    document.querySelector("h1").style.color= "black" 
    document.querySelector("p").style.color= "white";
  }

  function mudar () {
    document.querySelector("body").style.backgroundColor= "black";
    document.querySelector("h1").style.color= "white";
    document.querySelector("p").style.color= "white";
  }

    function Voltar () {
    window.location.href="Página de login 1.html"
   }