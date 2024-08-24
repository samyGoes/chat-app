//#region VARIÁVEIS //
const setaVoltar = document.querySelector("#tela-celular-cabecalho-box-seta");
const setaInicial = document.querySelector("#tela-celular-inicial-seta");
    //#region MENU LATERAL //
    const telaCelular = document.querySelector(".tela-celular");
    let tema = "";
    // MENU //
    const btnMenu = document.querySelector("#tela-celular-cabecalho-btn-menu");
    const menu = document.querySelector(".tela-celular-cabecalho-menu");
    const btnMudarTemaMenu = document.querySelector(".tela-celular-cabecalho-menu-btn-tema")
    // MENSAGENS //
    const boxMinhasMsg = document.querySelectorAll(".tela-celular-box-mensagens-voce")
    const boxOutroMsg = document.querySelectorAll(".tela-celular-box-mensagens-outro");

    const cabecalho = document.querySelector(".tela-celular-cabecalho");
    //#endregion
//#endregion


//#region FUNÇÕES //

function menuLateral()
{
    if (menu.style.display == "none" || menu.style.display == "")
    {
        menu.style.display = "flex";
    }
    else
    {
        menu.style.display = "none";
    }
}
btnMenu.addEventListener("click", menuLateral);

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
            }
            for(let i = 0; i < boxOutroMsg.length; i++)
            {
                boxOutroMsg[i].style.backgroundColor = "hsl(238.15 28.53% 38.71%)";
                boxOutroMsg[i].style.color = "hsl(271 68.54% 87.96%)"; 
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
            tema = "claro";
        }
        //#endregion
    });        
}
mudaTema();

function voltar()
{
    telaCelular.style.transform = "translateX(105%)";
}
setaVoltar.addEventListener("click", voltar);

function abrirApp()
{
    telaCelular.style.transform = "translateX(0px)";
}
setaInicial.addEventListener("click", abrirApp);

//#endregion