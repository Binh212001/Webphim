import { pathRoute } from '../config/pathRoute';
import Home from '../pages/Home/Home';
import PhimDangChieu from '../pages/PhimDangChieu/PhimDangChieu';
import SingleFilm from '../pages/singleFilm/SingleFilm';
import ThemPhim from '../pages/ThemPhim/ThemPhim';
import ThemSlide from '../pages/ThemSlide/ThemSlide';

export const routes = [
  {
    path: pathRoute.home,
    element: <Home />,
  },
  {
    path: pathRoute.dangchieu,
    element: <PhimDangChieu />,
  },

  {
    path: pathRoute.themphim,
    element: <ThemPhim />,
  },
  {
    path: pathRoute.themslide,
    element: <ThemSlide />,
  },

  {
    path: pathRoute.single,
    element: <SingleFilm />,
  },
];
