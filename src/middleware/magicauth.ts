import {Context, Middleware } from "@nuxt/types";

const magicauth: Middleware = ({redirect, app: {$accessor}, route}: Context) =>  {
  // If the user is not authenticated, redirect to login page.
  if (!$accessor.authenticated && route.path !== "/login"&& route.path !== "/") {
    return redirect('/login')
  }
}
export default magicauth;
