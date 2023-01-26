const { default: mongoose } = require('mongoose');

const filmSchema = mongoose.Schema(
  {
    img: {
      type: String,
      require: true,
    },
    ten: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    slug: {
      type: String,
      require: true,
    },
    desc: {
      type: String,
      require: true,
    },
    year: {
      type: Number,
      require: true,
    },
    chap: {
      type: Array,
      default: [0],
    },
    country: {
      type: String,
      require: true,
    },
    type: {
      type: Array,
    },
    view: {
      type: Number,
      default: 0,
    },
    premiere: {
      type: Number,
    },
  },
  { timestamps: true },
);

const Film = mongoose.model('film', filmSchema);
module.exports = Film;
