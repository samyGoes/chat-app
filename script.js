//#region VARIÁVEIS //
const setaVoltar = document.querySelector("#tela-celular-cabecalho-box-seta");
const setaInicial = document.querySelector("#tela-celular-inicial-seta");
    //#region MUDAR TEMA/ABRIR E FECHAR MENU //
    const telaCelular = document.querySelector(".tela-celular");
    const cabecalho = document.querySelector(".tela-celular-cabecalho");
    let tema = "";
    // MENU //
    const btnMenu = document.querySelector("#tela-celular-cabecalho-btn-menu");
    const boxMenu = document.querySelector(".tela-celular-cabecalho-box-menu");
    const menu = document.querySelector(".tela-celular-cabecalho-menu");
    const btnMudarTemaMenu = document.querySelector(".tela-celular-cabecalho-menu-btn-tema")
    // MENSAGENS //
    const boxMinhasMsg = document.querySelectorAll(".tela-celular-box-mensagens-voce")
    const boxOutroMsg = document.querySelectorAll(".tela-celular-box-mensagens-outro");
    const boxRadioBtnOutro = document.querySelectorAll(".tela-celular-box-mensagens-radio-button-outro");

    // PAPEL DE PAREDE //
    const inputImg = document.querySelector("#inputImg");
    //#endregion

    //#region ENVIANDO MENSAGEM //
    const inputMsg = document.querySelector("#inputMsg");
    const formulario = document.querySelector(".tela-celular-box-escrever-mensagem");
    const boxMsg = document.querySelector(".tela-celular-box-mensagens");
    //#endregion
//#endregion


//#region FUNÇÕES //
function menuLateral()
{
    btnMenu.addEventListener("click", function()
    {
        if (menu.style.display == "none" || menu.style.display == "")
        {
            menu.style.display = "flex";
        }
        else
        {
            menu.style.display = "none";
        }
        console.log(menuAberto);
    });
    console.log("entrou no if");
    document.addEventListener("click", function(event)
    {
        const lugarClicado = event.target;
        if (!boxMenu.contains(lugarClicado) )
        {
            menu.style.display = "none";
        }
    });
}
menuLateral();

function mudaTema() 
{   
    btnMudarTemaMenu.addEventListener("click", function()
    {
        //#region DEIXANDO O TEMA ESCURO //
        if(tema == "" || tema == "claro") 
        {
            telaCelular.style.backgroundColor = "hsl(281.38 47.54% 11.96%)";
            cabecalho.style.background = "hsl(241.4 27.82% 20.44%)";
            cabecalho.style.border = "1px solid hsl(254.77 28.89% 36.16%)";

            for(let i = 0; i < boxMinhasMsg.length; i++)
            {     
                boxMinhasMsg[i].style.backgroundColor = "hsl(293.45 42.33% 29.98%)";
                boxMinhasMsg[i].style.color = "hsl(271 68.54% 87.96%)";
                console.log(boxMinhasMsg.length);
            }
            for(let i = 0; i < boxOutroMsg.length; i++)
            {
                boxOutroMsg[i].style.backgroundColor = "hsl(238.15 28.53% 38.71%)";
                boxOutroMsg[i].style.color = "hsl(271 68.54% 87.96%)"; 
            }  
            for(let i = 0; i < boxRadioBtnOutro.length; i++)
            {
                console.log("entrou no for do radio btn");
                boxRadioBtnOutro[i].style.background = "linear-gradient(to right, hsl(293 54.06% 26.67%), hsl(241.44 66.86% 60.06%))";
            }  
            tema = "escuro";
        }
        //#endregion
        
        //#region DEIXANDO O TEMA CLARO //
        else 
        {
            telaCelular.style.backgroundColor = "hsl(270, 20%, 96%)";
            cabecalho.style.background = "linear-gradient(to right, hsl(264, 100%, 61%), hsl(293, 100%, 63%))";
            cabecalho.style.border = "1px solid hsl(270, 20%, 96%)";

            for(let i = 0; i < boxMinhasMsg.length; i++)
            {     
                boxMinhasMsg[i].style.backgroundColor = "hsl(0, 0%, 100%)";
                boxMinhasMsg[i].style.color = "hsl(271, 15%, 43%)"; 
            }
            for(let i = 0; i < boxOutroMsg.length; i++)
            {
                boxOutroMsg[i].style.backgroundColor = "hsl(272, 57%, 91%)";
                boxOutroMsg[i].style.color = "hsl(276, 55%, 52%)"; 
            }  
            for(let i = 0; i < boxRadioBtnOutro.length; i++)
            {
                boxRadioBtnOutro[i].style.background = "linear-gradient(to right, hsl(293, 100%, 63%), hsl(264, 100%, 61%))";
            }  
            tema = "claro";
        }
        //#endregion
    });        
}
mudaTema();

function papelDeParede()
{
    inputImg.addEventListener("change", event =>
    {
        const url = URL.createObjectURL(event.target.files[0]);
        telaCelular.style.background = "url('" + url + "')";
        telaCelular.style.backgroundSize = "cover";
        telaCelular.style.backgroundPosition = "center";
        telaCelular.style.backgroundColor = "hsl(0 0% 45.03%)";
        telaCelular.style.backgroundBlendMode = "multiply";

        //teste();
    });
}
papelDeParede();

// let a = 0;
// function teste()
// {
//     let fP = papelDeParede();
    
//     if(fP != undefined)
//     {
//         console.log("ON");
//     }
//     else
//     {
//         console.log("OFF" + a++);
//     }
// }
// teste();

function enviaMsg()
{
    formulario.addEventListener("submit", function(e)
    {
        // Pegando o que foi escrito
        let mensagemEscrita = inputMsg.value;

        // Impede o envio do form
        e.preventDefault();

        // "Criando" a mensagem
        const mensagemEnviar = document.createElement("p");
        mensagemEnviar.className = "tela-celular-box-mensagens-voce";
        mensagemEnviar.innerHTML = mensagemEscrita;
        boxMsg.appendChild(mensagemEnviar);
    })
}
enviaMsg();

function voltar()
{
    setaVoltar.addEventListener("click", function()
    {
        telaCelular.style.transform = "translateX(105%)";
    });
}
voltar();

function abrirApp()
{
    setaInicial.addEventListener("click", function()
    {
        telaCelular.style.transform = "translateX(0px)";
    }); 
}
abrirApp();
//#endregion