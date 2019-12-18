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
        path: "/Register",
        component: () => import("@/views/Home/AccountRegisteration"),
        name: "Register",
        meta: { title: "Shoryan - AccountRegisteration" }
      },
      {
        path: "/Login",
        component: () => import("@/views/Home/UsersLogin.vue"),
        name: "Login",
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
        path: "/Profile",
        component: () => import("@/components/Home/Profile"),
        name: "Profile",
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
      },
      {
        path: "/UpcomingOrders",
        component: () => import("@/views/Home/UpcomingOrders"),
        name: "UpcomingOrders",
        meta: { title: "Shoryan - UpcomingOrders" }
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
      },
      {
        path: "items",
        component: () => import("@/views/Panel/ListItems"),
        name: "ListItems",
        meta: { title: "Panel - Items " }
      },
      {
        path: "complaints",
        component: () => import("@/views/Panel/Complaints"),
        name: "Complaints",
        meta: { title: "Panel - Complaints " }
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
