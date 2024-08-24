//#region VARIÁVEIS //
const menu = document.querySelector(".tela-celular-cabecalho-opcao-menu");
const setaVoltar = document.querySelector("#tela-celular-cabecalho-box-seta");
const setaInicial = document.querySelector("#tela-celular-inicial-seta");
// MUDANDO TEMA //
const telaCelular = document.querySelector(".tela-celular");
const boxMinhasMsg = document.querySelector(".tela-celular-box-mensagens-voce")
const boxOutroMsg = document.querySelector(".tela-celular-box-mensagens-outro");
const foto = document.querySelector(".box-img-voce");
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
document.querySelector("#tela-celular-cabecalho-menu").addEventListener("click", menuLateral);


// for(let i = 1; i <= boxMinhasMsg.length; i++)
    // {
function mudaTema() 
{
    
        telaCelular.style.backgroundColor = "hsl(282 27.82% 20.44%)";

        boxMinhasMsg.style.backgroundColor = "hsl(293.45 42.33% 29.98%)";
        // boxMinhasMsg.style.border = "1px solid hsl(271 11.61% 53.84%)";
        boxMinhasMsg.style.color = "hsl(271 68.54% 87.96%)";
        foto.style.border = "1px solid hsl(271 11.61% 53.84%)";

        boxOutroMsg.style.backgroundColor = "hsl(238.15 28.53% 38.71%)";
        boxOutroMsg.style.color = "hsl(271 68.54% 87.96%)";
}
//}
document.querySelector(".tela-celular-cabecalho-opcao-menu").addEventListener("click", mudaTema);

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