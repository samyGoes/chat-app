//#region VARIÁVEIS //
const setaVoltar = document.querySelector("#tela-celular-cabecalho-box-seta");
const setaInicial = document.querySelector(".tela-celular-inicial-box-seta");
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
    });
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
        mensagemEnviar.id = "msgsEnviadas";
        mensagemEnviar.innerHTML = mensagemEscrita;
        boxMsg.appendChild(mensagemEnviar);

        return(mensagemEscrita);
    })
}
let retornoEnviaMsg = enviaMsg();
function msgSecreta(mensagemEscrita)
{
    //#region VARIÁVEIS // 
    const dog1 = document.querySelector("#dog-1");
    const dog2 = document.querySelector("#dog-2");
    const dog3 = document.querySelector("#dog-3");

    dog1.dataset.content = "dogas";
    dog2.dataset.content = "pogs";
    dog3.dataset.content = "fofo";
    
    let style = document.querySelector("style");
    let dog1Before = window.getComputedStyle(dog1,':before');
    let dog2Before = window.getComputedStyle(dog2,':before');
    let dog3Before = window.getComputedStyle(dog3,':before');
    //#endregion

    // CLICANDO EM CADA FOTO //
    dog1.addEventListener("click", function()
    {
        if(dog1Before.display == "none" || dog1Before.display == "")
        {
            style.sheet.insertRule(` #dog-1::before {display: flex;} `, style.sheet.cssRules.length);
        }
        else
        {
            style.sheet.insertRule(` #dog-1::before {display: none;} `, style.sheet.cssRules.length);
        }
        let a = mensagemEscrita;
        console.log("Essa é a msg: ", a);
    });
    dog2.addEventListener("click", function()
    {
        if(dog2Before.display == "none" || dog2Before.display == "")
        {
            style.sheet.insertRule(` #dog-2::before {display: flex;} `, style.sheet.cssRules.length);
        }
        else
        {
            style.sheet.insertRule(` #dog-2::before {display: none;} `, style.sheet.cssRules.length);
        }
    });
    dog3.addEventListener("click", function()
    {
        if(dog3Before.display == "none" || dog3Before.display == "")
        {
            style.sheet.insertRule(` #dog-3::before {display: flex;} `, style.sheet.cssRules.length);
        }
        else
        {
            style.sheet.insertRule(` #dog-3::before {display: none;} `, style.sheet.cssRules.length);
        }
    });
    
}
msgSecreta(retornoEnviaMsg);

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

function teste()
{
    let a = 0;
    // console.log("função rodou");
    for(let i = 1; i <= 5; i++)
    {
        a = a + 1;
        console.log(a);
    }
    
}
teste();
//#endregion

