import { IndexView, LoginView, RegisterView } from "../views";

export default function getRoutes(): AppRoute[] {
    return [
        {
            path: '/',
            element: IndexView,
        },
        {
            path: '/login',
            element: LoginView,
        },
        {
            path: '/register',
            element: RegisterView
        }
    ]
}