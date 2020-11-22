const express = require("express")
const router = express.Router()

router.get("/films", async (req, res) => {
      const results = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}`)
      const films = await results.json()

      console.log(films)
})

module.exports = router