import { EXCLUDE_GENRE } from "./genretypes"

const excludeGenre = (genre) => ({type: EXCLUDE_GENRE , genre: genre})

export { excludeGenre }