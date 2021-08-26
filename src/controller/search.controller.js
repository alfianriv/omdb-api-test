const { SearchMovies } = require("../service/search.service");

module.exports.searchMovie = async (req, res) => {
  try {
    const { search, page = 1 } = req.query;
    if (!search) {
      return res.json({
        success: false,
        message: "Search parameter is required",
      });
    }

    const movies = await SearchMovies(search, page);

    return res.json({
      success: true,
      data: movies,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "An error occurred",
    });
  }
};
