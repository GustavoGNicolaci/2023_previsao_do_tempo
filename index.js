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

axios.get(end).then((res) => {
    console.log(res['data'])
    console.log("======================================================")
    return res['data']
})
.then(res => {
    console.log(res.list)
    console.log("================================================================")
    return res.list
}) 
.then(res => {
    //fazer um for sobre o res que exiba o dt de cada previsao
    //exiba a temperatura minima e a temperatura maxima
    for (let previsao of res) {
        console.log(new Date (+previsao.dt * 1000).toLocaleString())
        console.log(`Temperatura mínima: ${previsao.main.temp_min}`)
        console.log(`Temperatura máxima: ${previsao.main.temp_max}`)
        console.log('\n')
    }
    console.log("==============================================================")
})
