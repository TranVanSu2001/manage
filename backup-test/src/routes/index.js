//Layout

import Class from "~/pages/Manage/Class";
import Student from "~/pages/Manage/Student";
import Subject from "~/pages/Manage/Subject";
import HomePage from "~/pages/HomePage";

//public routes
const publicRoutes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/class",
    component: Class,
  },
  {
    path: "/student",
    component: Student,
  },
  {
    path: "/subject",
    component: Subject,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
