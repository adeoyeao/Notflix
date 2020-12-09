const express = require("express")
const router = express.Router()

const bodyParser = require("body-parser")

router.use(bodyParser.urlencoded({extended : true}))
router.use(express.json())

router.get("/featured", async (req, res) => {
      const results = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}`)
      const films = await results.json()
      const search = await films.results.map(film => `${film.title} trailer`)

      const ids = async () => {
            const videoId = []
            for(const trailer of search) {
                  try {
                        const results = await fetch(`https://api.dailymotion.com/videos?page=1&limit=1&search=${trailer}`)
                        const data = await results.json()
                        videoId.push(data.list[0].id || "x7wdjzb")
                  } catch(err) {
                        console.error(err)
                  }
            }
            return videoId
      }

      const videos = async (videoIds) => {
            const videos = []
            for(const id of videoIds) {
                  try {
                        const results = await fetch(`https://www.dailymotion.com/services/oembed?url=https://www.dailymotion.com/video/${id}?maxwidth=480&maxheight=269&autoplay=true`)
                        const data = await results.json()
                        videos.push(data)
                  } catch(err) {
                        console.error(err)
                  }
            }
            return videos
      } 

      const videoId = await ids()
      const videoData = await videos(videoId)

      return res.json({films: films.results, videoData: videoData, videoId: videoId})
})

router.post("/films", async (req, res) => {
      const genreId = req.body.id

      const data = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=d257ffee7d012a278963dee940628275&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`)
      const films = await data.json()
      const search = await films.results.map(film => `${film.title} trailer`)

      const ids = async () => {
            const videoId = []
            for(const trailer of search) {
                  try {
                        const results = await fetch(`https://api.dailymotion.com/videos?page=1&limit=1&search=${trailer}`)
                        const data = await results.json()
                        data.list[0].id ? videoId.push(data.list[0].id) : videoId.push("x7wdjzb")
                  } catch(err) {
                        console.error(err, genreId)
                  }
            }   
            return videoId
      }

      const videos = async (videoIds) => {
            const videos = []
            for(const id of videoIds) {
                  try {
                        const results = await fetch(`https://www.dailymotion.com/services/oembed?url=https://www.dailymotion.com/video/${id}?maxwidth=480&maxheight=269&autoplay=true`)
                        const data = await results.json()
                        videos.push(data)
                  } catch(err) {
                        console.error(err)
                  }
            }
            return videos
      } 

      const videoId = await ids()
      const videoData = await videos(videoId)
      
      res.json({films: films.results, videoData: videoData, videoId: videoId})
})

module.exports = router