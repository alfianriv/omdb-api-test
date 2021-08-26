const { DetailMovie } = require("../service/detail.service");

module.exports.detailMovie = async (req, res, next) => {
  try {
    const { id } = req.params;

    const movie = await DetailMovie(id);

    if (!movie) {
      return res.json({
        success: false,
        message: "Incorrect IMDb ID.",
      });
    }

    return res.json({
      success: true,
      data: movie,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "An error occurred",
    });
  }
};
