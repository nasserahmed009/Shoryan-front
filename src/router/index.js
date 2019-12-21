import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index";

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
        props: true,
        meta: { title: "Shoryan - SingleCategory" }
      },
      {
        path: "item/:itemId",
        component: () => import("@/views/Home/SingleItem"),
        name: "SingleItem",
        props: true,
        meta: { title: "Shoryan - SingleItem" }
      },
      {
        path: "listings/drug/:drugId",
        component: () => import("@/views/Home/ListingsOfDrug"),
        name: "listingsOfDrug",
        props: true,
        meta: { title: "Shoryan - Listings of drug" }
      },
      {
        path: "/AddListing",
        component: () => import("@/views/Home/AddListing"),
        name: "AddListing",
        meta: {
          title: "Shoryan - AddListing",
          requiresAuth: true,
          roles: ["Normal", "Pharmacy"]
        }
      },
      {
        path: "/Register",
        component: () => import("@/views/Home/AccountRegisteration"),
        name: "Register",
        meta: { title: "Shoryan - AccountRegisteration", requiresNotAuth: true }
      },
      {
        path: "/Login",
        component: () => import("@/views/Home/UsersLogin.vue"),
        name: "Login",
        meta: { title: "Shoryan - UsersLogin", requiresNotAuth: true }
      },
      {
        path: "/Logout",
        component: () => import("@/views/Home/Logout.vue"),
        name: "Logout",
        meta: { title: "Shoryan - Logout", requiresAut: true }
      },

      {
        path: "/MyCart",
        component: () => import("@/views/Home/MyCart"),
        name: "MyCart",
        meta: { title: "Shoryan - MyCart", requiresAuth: true }
      },
      {
        path: "/Profile",
        component: () => import("@/views/Home/Profile"),
        name: "Profile",
        meta: { title: "Shoryan - Test", requiresAuth: true }
      },
      {
        path: "/Profile/Edit",
        component: () => import("@/views/Home/EditProfileSettings"),
        name: "EditProfile",
        meta: { title: "Shoryan - Edit profile", requiresAuth: true }
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
        meta: {
          title: "Panel - Dashboard",
          requiresAuth: true,
          roles: ["Admin"]
        }
      },
      {
        path: "users",
        component: () => import("@/views/Panel/ListUsers"),
        name: "listUsers",
        meta: { title: "Panel - Users ", requiresAuth: true, roles: ["Admin"] }
      },
      {
        path: "drugs",
        component: () => import("@/views/Panel/ListDrugs"),
        name: "listDrugs",
        meta: { title: "Panel - Drugs ", requiresAuth: true, roles: ["Admin"] }
      },
      {
        path: "addDrug",
        component: () => import("@/views/Panel/AddDrug"),
        name: "addDrug",
        meta: {
          title: "Panel - add drug ",
          requiresAuth: true,
          roles: ["Admin"]
        }
      },
      {
        path: "items",
        component: () => import("@/views/Panel/ListItems"),
        name: "ListItems",
        meta: { title: "Panel - Items ", requiresAuth: true, roles: ["Admin"] }
      },
      {
        path: "giftCards",
        component: () => import("@/views/Panel/ListGiftCards"),
        name: "listGiftCards",
        meta: {
          title: "Panel - list gift cards ",
          requiresAuth: true,
          roles: ["Admin"]
        }
      },
      {
        path: "addGiftCard",
        component: () => import("@/views/Panel/AddGiftCard"),
        name: "addGiftCard",
        meta: {
          title: "Panel - add gift card",
          requiresAuth: true,
          roles: ["Admin"]
        }
      },
      {
        path: "Categories",
        component: () => import("@/views/Panel/ListCategories"),
        name: "listCategories",
        meta: {
          title: "Panel - list categories ",
          requiresAuth: true,
          roles: ["Admin"]
        }
      },
      {
        path: "complaints",
        component: () => import("@/views/Panel/Complaints"),
        name: "Complaints",
        meta: {
          title: "Panel - Complaints ",
          requiresAuth: true,
          roles: ["Admin"]
        }
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

router.beforeEach((to, from, next) => {
  document.title = to.meta.title; //the title of the page that appears at the top

  const loggedIn = store.getters.loggedIn; //get if a user is logged in or not
  const loggedInUser = store.state.user; //get the logged in user info
  const userRole = loggedIn ? loggedInUser.type : null; //get the logged in user roles

  //check if the route to be accessed requires no auth
  const requiresNotAuth = to.matched.some(
    record => record.meta.requiresNotAuth
  );
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth); //check if the routed requires to be authenticated
  const roles = to.meta.roles; //accessed routes roles

  if (requiresNotAuth && loggedIn) next({ name: "Index" });
  else if (requiresAuth && !loggedIn) next({ name: "Login" });
  else if (requiresAuth && loggedIn && roles) {
    for (let routeRole of roles) {
      if (routeRole == userRole) {
        next();
        return;
      }
    }
    next({ name: "Index" });
  } else next();
});
