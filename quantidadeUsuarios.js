import * as commonJS from "./common.js"

async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubcontent.com/guilhermeonrails/api/main/numero-usuario.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)
    const data = [
        {
            x: nomeDasRedes,
            y: quantidadeUsuarios,
            type: 'bar',
            marker: {
                color: commonJS.getCSS('--primary-color')
            }
        }
    ]
    const laytout = {
        plot_bgcolor:commonJS.getCSS('--bg-color'),
        paper_bgcolor: commonJS.getCSS('--bg-color'),
        title: {
            text: 'Redes sociais com mais usuários',
            x: 0,
            font: {
                color: commonJS.getCSS('--primary-color'),
                size: 30,
                font: commonJS.getCSS('--font')
            }
        },
        xaxis: {
            tickfont: commonJS.tickConfig,
            title: {
                text: 'Nome das redes',
                font: {
                    color: commonJS.getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: commonJS.tickConfig,
            title: {
                text: 'Bilhões de usuários ativos',
                font: {
                    color: commonJS.getCSS('--secondary color')
}
        }
    }
}
const grafico = document.createElement('div')
grafico.className = 'grafico'
document.getElementById(graficos - container).appendChild(grafico)
Ploty.newPlot(grafico, data, laytout)
}
quantidadeUsuariosPorRede()
