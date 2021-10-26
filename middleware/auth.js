export default function ({redirect, store, route}) {
  // console.log(route.name, typeof route.name)
  const isAuthenticated = store.state.auth.user ? true : false
  if (isAuthenticated) {
    if (route.name === "index" || route.name === "login" || route.name === "password-reset" || route.name === "registration") {
      redirect({name: "dashboard"})
    }
  } else {
    if (route.name !== "login" && route.name !== "password-reset" && route.name !== "registration") {
      //abc
      redirect({name: "login"})
    }
  }
}
