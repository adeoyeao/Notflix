const express = require("express")
const router = express.Router()

const bodyParser = require("body-parser")

router.use(bodyParser.urlencoded({extended : true}))
router.use(express.json())

router.get("/featured", async (req, res) => {
      const results = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}`)
      const films = await results.json()

      return res.json({films: films.results})
})

router.post("/films", async (req, res) => {
      const genreId = req.body.id

      const data = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`)
      const films = await data.json()

      const search = await films.results.map(film => `${film.title} trailer`)

      return res.json({films: films.results})
})

module.exports = router