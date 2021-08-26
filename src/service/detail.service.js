const {
    axios,
    DEFAULT_PARAMS
} = require("../commons/utils");
const {
    CreateLogger
} = require("../model/Logger");

const DetailMovie = async id => {
    try {
        const movie = await getDetailMoviewOmdb(id)

        if (movie.Response == "False") {
            return false;
        }

        return movie;
    } catch (error) {
        throw new Error(error);
    }
};

const getDetailMoviewOmdb = async (id) => {
    const movie = await axios.get("/", {
        params: {
            ...DEFAULT_PARAMS,
            i: id,
        },
    });

    return movie.data
}

module.exports = {
    DetailMovie,
    getDetailMoviewOmdb
}