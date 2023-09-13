require('dotenv').config()

const axios = require('axios')
// console.log(process.env)
// console.log(new Date(1694034000 * 1000).toLocaleString())

// const appid = process.env.appid
// const q='Itu' = process.env.q
// const units = process.env.units
// const cnt = process.env.cnt
// const lang = process.env.lang
// const url = process.env.url

//desestruturar
const {appid, q, units, cnt, language, url} = process.env

const end = `${url}?appid=${appid}&q=${q}&units=${units}&cnt=${cnt}&lang=${language}`

//async/await
async function teste(){
    const resultado = await axios.get(end)
    for (let previsao of resultado.data.list){
        console.log(`Descrição: ${previsao.weather[0].description}`)
    }
}
teste()

// function fatorial(n) {
//     if (n < 0) return Promise.reject("n não pode ser negativo")
//     let res = 1;
//     for (let i = 1; i <= n; i++) res *= i
//     return Promise.resolve(res)
// }
// //function chamadaComAsyncAwait(){}
// const chamadaComAsyncAwait = async () => {
//     try {
//         const resultado = await fatorial(10)
//         console.log(resultado)
//     }
//     catch(e){
//         console.log("Erro: " + e)
//     }
// }

// chamadaComAsyncAwait()


// function chamadaComThenECatch() {
//     fatorial (-1)
//     .then(res => console.log(res))
//     .catch(erro => console.log("Erro: " + erro))
// }

// chamadaComThenECatch()

// function hello(){
//     return Promise.resolve("Hello")
//     return "hello"
// }
// o comando de cima é igual o de baixo
// async function hello(){
//     return "hello"
// }
// hello().then(res => console.log(res))

// axios.get(end).then((res) => {
//     console.log(res['data'])
//     console.log("======================================================")
//     return res['data']
// })
// .then(res => {
//     console.log(res.list)
//     console.log("================================================================")
//     return res.list
// }) 
// .then(res => {
//     //fazer um for sobre o res que exiba o dt de cada previsao
//     //exiba a temperatura minima e a temperatura maxima
//     for (let previsao of res) {
//         console.log(new Date (+previsao.dt * 1000).toLocaleString())
//         console.log(`Temperatura mínima: ${previsao.main.temp_min}`)
//         console.log(`Temperatura máxima: ${previsao.main.temp_max}`)
//         console.log('\n')
//     }
//     console.log("==============================================================")
// })
