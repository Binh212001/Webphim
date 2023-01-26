const { default: mongoose } = require('mongoose');

const slideSchema = mongoose.Schema(
  {
    img: {
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
  },
  { timestamps: true },
);

const Slide = mongoose.model('slide', slideSchema);
module.exports = Slide;
