
import axios from 'axios'
import * as cheerio from 'cheerio'
import express from 'express'
const app = express()
const port = 9999

// haciendo scrapping, técnica para conseguir información para crear api de una web cualquiera. (web marca, resultado madrid - cacereño.)
// https://www.youtube.com/watch?v=5jMrisuymqs -> video explicación

app.get("/", async (req, res) => {
  try {
    const { data } = await axios.get("https://www.marca.com/")
    const $ = cheerio.load(data);
    const titular = "#js_566a968a268e3ece348b4585 > div:nth-child(6) > div > div > div > div > div.ue-l-cover-grid__column.size8of12 > div > article > div > div.ue-c-cover-content__main > header > a"
    // creamos nuestro objeto json
    const objetoValor = {
      titularMarca: $(titular).text(),
    }
    res.json(objetoValor);
  } catch (error) {
    res.json({ error })
  }
})


// app.listen(app.get("port"), () =>
//   console.log("app running on port", app.get("port"))
// );

// let usuarios = [
//   {
//     id: "1",
//     nombre: 'Jesus',
//     apellido: 'Torres'
//   },
//   {
//     id: "2",
//     nombre: 'Juan',
//     apellido: 'Torres'
//   },
//   {
//     id: "3",
//     nombre: 'Jorge',
//     apellido: 'Torres'
//   },
// ]

// app.get('/usuarios', (req, res) => {
//   res.json({ usuarios });
// })

// app.get('/usuarios/:id', (req, res) => {
//   const idUser = req.params.id;
//   const foundUserId = usuarios.find(user => user.id === idUser)
//   console.log(foundUserId);
//   return foundUserId
//     ? res.json(foundUserId)
//     : res.json({ message: 'usuario no encontrado' }, 404)
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
