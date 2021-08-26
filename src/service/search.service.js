const {
    axios,
    DEFAULT_PARAMS
} = require("../commons/utils");

const SearchMovies = async (search, page) => {
    try {
        const movies = await searchMoviesFromOmdb(search, page)

        return movies || [];
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};

const searchMoviesFromOmdb = async (s, page) => {
    const movies = await axios.get("/", {
        params: {
            ...DEFAULT_PARAMS,
            s: s,
            page: page,
        },
    });

    return movies.data.Search
}

module.exports = {
    SearchMovies,
    searchMoviesFromOmdb
}