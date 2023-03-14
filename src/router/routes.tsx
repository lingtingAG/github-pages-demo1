import {
  RouteRecord,
  RouteRecordRaw,
  createRouter,
  createWebHashHistory,
} from "vue-router";
import { Welcome } from "../views/Welcome";
import { First } from "../components/welcome/First";
import { Second } from "../components/welcome/Second";
import { Third } from "../components/welcome/Third";
import { Fourth } from "../components/welcome/Fourth";
import { FirstActions } from "../components/welcome/FirstActions";
import { FourthActions } from "../components/welcome/FourthActions";
import { SecondActions } from "../components/welcome/SecondActions";
import { ThirdActions } from "../components/welcome/ThirdActions";

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: '/welcome' },
  {
    path: "/welcome",
    component: Welcome,
    children: [
      {path: '' , redirect: '/welcome/1'},
      { path: '1', components: { main: First, footer: FirstActions }, },
      { path: '2', components: { main: Second, footer: SecondActions }, },
      { path: '3', components: { main: Third, footer: ThirdActions }, },
      { path: '4', components: { main: Fourth, footer: FourthActions }, },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
