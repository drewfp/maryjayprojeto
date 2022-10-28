botaocad = document.querySelector("#btn")

botaocad.onclick = function(){
    alert("Cadastro Realizado com sucesso.")
}

function login(){
    var email=["larissa@gmail.com","karina@gmail.com"]
    var senha=["bolsonaro","lula"]
    for(var i=0; i<email.length; i++){
        if (email[i] == document.getElementById("email_login").value && senha[i] == document.getElementById("senha_login").value){
            alert("Seja bem Vindo(a)")
            document.getElementById("email_login").value=""
            document.getElementById("senha_login").value=""
            window.open("index.html")
        }
    }
}