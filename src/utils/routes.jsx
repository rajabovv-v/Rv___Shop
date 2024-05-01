import {
  CartPage,
  CategoriesPage,
  Checkout,
  FavouritesPage,
  HomePage,
  NotFoundPage,
  OrdersPage,
  ProductPage,
  ProfilePage,
} from "../pages";

export const routes = [
  {
    id: 1,
    component: <HomePage />,
    path: "/",
  },
  {
    id: 2,
    component: <CategoriesPage />,
    path: "/category/:id",
  },
  {
    id: 3,
    component: <NotFoundPage />,
    path: "*",
  },
  {
    id: 4,
    component: <ProductPage />,
    path: "/product/:slug",
  },
  {
    id: 5,
    component: <CartPage />,
    path: "/cart",
  },
  {
    id: 6,
    component: <FavouritesPage />,
    path: "/favourites",
  },
  {
    id: 7,
    component: <Checkout />,
    path: "/checkout",
  },
  {
    id: 8,
    component: <ProfilePage />,
    path: "/profile",
  },
  {
    id: 9,
    component:<OrdersPage/>,
    path: "/order",
  },

];
