import { ReactElement } from "react";
import SignIn from "~/pages/auth/SignIn";
import SignUp from "~/pages/auth/SignUp";

export const router: {path: string, element: ReactElement}[] = [
  {
    path: "/auth/sign-in",
    element: <SignIn/>
  },
  {
    path: "/auth/sign-up",
    element: <SignUp/>
  },
];
