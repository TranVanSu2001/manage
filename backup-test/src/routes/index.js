//Layout

import Class from "~/pages/ManageClass/Class";
import Student from "~/pages/ManageStudent/Student";
import Subject from "~/pages/ManageSubject/Subject";

//public routes
const publicRoutes = [
  {
    path: "/",
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
