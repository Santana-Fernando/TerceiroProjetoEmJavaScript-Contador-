function contar()
{
    let numeroInicial = document.getElementById('inicio')
    let numeroFinal = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let resultado = document.getElementById('resultado')

    if(numeroInicial.value.length == 0 || numeroFinal.value.length == 0 || passo.value.length == 0)
    {
        alert('[ERRO] Preencha todos os campos.')
    }
    else
    {
        i = Number(numeroInicial.value)
        f = Number(numeroFinal.value)
        p = Number(passo.value)

        if(i < f)
        {
            for(let c = i; c <= f; c += p)
            {
                resultado.innerHTML += `${c} \u{1F449}`
            }
        }
        else
        {
            for(let c = i; c >= f; c -= p)
            {
                resultado.innerHTML += `${c} \u{1F449}`
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}

function limpar()
{
    let numeroInicial = document.getElementById('inicio')
    let numeroFinal = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let resultado = document.getElementById('resultado')

    numeroFinal.value = ''
    numeroInicial.value = ''
    passo.value = ''
    resultado.innerHTML = ''
    numeroInicial.focus()
}