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
        path: "/MyCart",
        component: () => import("@/views/Home/MyCart"),
        name: "MyCart",
        meta: { title: "Shoryan - MyCart" }
      },
      {
        path: "/test",
        component: () => import("@/components/Home/UpcomingOrderCard"),
        name: "test",
        meta: { title: "Shoryan - Test" }
      },
      {
        path: "/upcomingOrders",
        component: () => import("@/views/Home/UpcomingOrders"),
        name: "test",
        meta: { title: "Shoryan - Test" }
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
