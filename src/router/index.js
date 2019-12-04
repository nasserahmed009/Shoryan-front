import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const HomeRoutes = [
  {
    path: "/",
    component: () => import("@/views/HomeLayout"),
    children: [
      {
        path: "",
        component: () => import("@/views/Home/Index"),
        name: "Index",
        meta: { title: "Shoryan - Index" }
      },
      {
        path: "category/:categoryId",
        component: () => import("@/views/Home/SingleCategory"),
        name: "SingleCategory",
        meta: { title: "Shoryan - SingleCategory" }
      },
      {
        path: "item/:itemId",
        component: () => import("@/views/Home/SingleItem"),
        name: "SingleItem",
        meta: { title: "Shoryan - SingleItem" }
      },
      {
        path: "/AddListing",
        component: () => import("@/views/Home/AddListing"),
        name: "AddListing",
        meta: { title: "Shoryan - AddListing" }
      },
      {
        path: "/AccountRegisteration",
        component: () => import("@/views/Home/AccountRegisteration"),
        name: "AccountRegisteration",
        meta: { title: "Shoryan - AccountRegisteration" }
      },
      {
        path: "/UsersLogin",
        component: () => import("@/views/Home/UsersLogin.vue"),
        name: "UsersLogin",
        meta: { title: "Shoryan - UsersLogin" }
      },
      {
        path: "/ActiveListings",
        component: () => import("@/views/Home/ActiveListings.vue"),
        name: "ActiveListings",
        meta: { title: "Shoryan - ActiveListings" }
      },
      {
        path: "/MyCart",
        component: () => import("@/views/Home/MyCart"),
        name: "MyCart",
        meta: { title: "Shoryan - MyCart" }
      },
      {
        path: "/test",
        component: () => import("@/components/Home/ProductViewCard"),
        name: "test",
        meta: { title: "Shoryan - Test" }
      },
      {
        path: "/upcomingOrders",
        component: () => import("@/views/Home/UpcomingOrders"),
        name: "test",
        meta: { title: "Shoryan - Test" }
      },
      {
        path: "/PastOrders",
        component: () => import("@/views/Home/PastOrders"),
        name: "PastOrders",
        meta: { title: "Shoryan - PastOrders" }
      },
      {
        path: "/ProductView",
        component: () => import("@/views/Home/ProductView"),
        name: "ProductView",
        meta: { title: "Shoryan - ProductView" }
      }
    ]
  },
  {
    path: "/Panel",
    component: () => import("@/views/PanelLayout"),
    children: [
      {
        path: "",
        component: () => import("@/views/Panel/Dashboard"),
        name: "Dashboard",
        meta: { title: "Panel - Dashboard" }
      },
      {
        path: "users",
        component: () => import("@/views/Panel/ListUsers"),
        name: "listUsers",
        meta: { title: "Panel - Users " }
      }
    ]
  }
];

const routes = [...HomeRoutes];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
