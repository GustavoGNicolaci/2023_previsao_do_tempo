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


console.log(end)
