

let nomeClient = prompt("Insira seu nome: ") 

let idadeClient = prompt("Qual sua idade: ")

let bairroClient = prompt("Qual seu bairro: ")

let workClient = prompt("Qual seu trabalho: ")

let pergClient = prompt("Vc gosta desse trabalho ")


if (pergClient === "sim") {
    document.write("Execelente"+"<br />")
}

else if (pergClient === "nao") {
    document.write("Procure outro emprego"+"<br />")
}


document.write("Ola "+nomeClient+"<br />")

document.write("Sua idade e: "+idadeClient+"<br />")

document.write("Seu bairro e: "+bairroClient+"<br />")

document.write("Sua profissao: "+workClient+"<br />")





