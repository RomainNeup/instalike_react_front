import { IndexView, LoginView } from "../views";

export default function getRoutes(): AppRoute[] {
    return [
        {
            path: '/',
            element: IndexView,
        },
        {
            path: '/login',
            element: LoginView,
        }
    ]
}