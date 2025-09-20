import {
    createRootRoute,
    createRoute,
    Router,
    RouterProvider,
    createHashHistory,
    createBrowserHistory,
    createMemoryHistory, Outlet,
} from "@tanstack/react-router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"

// Layouts
import AuthLayout from "@/layouts/AuthLayout"
import LandingLayout from "@/layouts/LandingLayout"
import DashboardLayout from "@/layouts/DashboardLayout"

// Pages
import Login from "@/pages/auth/Login"
import Register from "@/pages/auth/Register"
import Home from "@/pages/landing/Home"
import Plans from "@/pages/landing/Plans"
import DashboardHome from "@/pages/dashboard/Home"
import NotFound from "@/pages/NotFound"
import Features from "@/pages/landing/Features";
import Blog from "@/pages/landing/Blog";
import ArticleDetails from "@/pages/landing/ArticleDetails";
import Terms from "@/pages/landing/Terms";
import TermsOfUse from "@/pages/landing/TermsOfUse";
import AboutUs from "@/pages/landing/AboutUs";
import Checkout from "@/pages/landing/Checkout";

// React Query client
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5,
            gcTime: 1000 * 60 * 60,
            retry: 1,
        },
    },
})

// Root route (empty wrapper)
const rootRoute = createRootRoute({
    component: () => <Outlet />,
})

// Landing routes
const landingLayoutRoute = createRoute({
    getParentRoute: () => rootRoute,
    id: "landing",
    component: LandingLayout,
})

const landingHomeRoute = createRoute({
    getParentRoute: () => landingLayoutRoute,
    path: "/",
    component: Home,
})

const landingPlansRoute = createRoute({
    getParentRoute: () => landingLayoutRoute,
    path: "/plans",
    component: Plans,
})

const landingFeaturesRoute = createRoute({
    getParentRoute: () => landingLayoutRoute,
    path: "/features",
    component: Features,
})

const landingBlogRoute = createRoute({
    getParentRoute: () => landingLayoutRoute,
    path: "/blog",
    component: Blog,
})

const landingTermsRoute = createRoute({
    getParentRoute: () => landingLayoutRoute,
    path: "/terms",
    component: Terms,
})

const landingTermsOfUseRoute = createRoute({
    getParentRoute: () => landingLayoutRoute,
    path: "/terms-of-use",
    component: TermsOfUse,
})

const landingAboutUsRoute = createRoute({
    getParentRoute: () => landingLayoutRoute,
    path: "/about-us",
    component: AboutUs,
})

const landingCheckoutRoute = createRoute({
    getParentRoute: () => landingLayoutRoute,
    path: "/checkout",
    component: Checkout,
})

const landingArticleDetailRoute = createRoute({
    getParentRoute: () => landingLayoutRoute,
    path: "/blog/details",
    component: ArticleDetails,
})

// Auth routes
const authLayoutRoute = createRoute({
    getParentRoute: () => rootRoute,
    id: "auth",
    component: AuthLayout,
})

const loginRoute = createRoute({
    getParentRoute: () => authLayoutRoute,
    path: "/auth/login",
    component: Login,
})

const registerRoute = createRoute({
    getParentRoute: () => authLayoutRoute,
    path: "/auth/register",
    component: Register,
})

// Dashboard routes
const dashboardLayoutRoute = createRoute({
    getParentRoute: () => rootRoute,
    id: "dashboard",
    component: DashboardLayout,
})

const dashboardHomeRoute = createRoute({
    getParentRoute: () => dashboardLayoutRoute,
    path: "/dashboard",
    component: DashboardHome,
})

// Not Found
const notFoundRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "*",
    component: NotFound,
})

// Route tree
const routeTree = rootRoute.addChildren([
    landingLayoutRoute.addChildren([
        landingHomeRoute,
        landingPlansRoute,
        landingFeaturesRoute,
        landingBlogRoute,
        landingArticleDetailRoute,
        landingTermsRoute,
        landingTermsOfUseRoute,
        landingAboutUsRoute,
        landingCheckoutRoute
    ]),
    authLayoutRoute.addChildren([
        loginRoute,
        registerRoute,
    ]),
    dashboardLayoutRoute.addChildren([dashboardHomeRoute]),
    notFoundRoute,
])

// Router instance
const memoryHistory = createMemoryHistory()
const browserHistory = createBrowserHistory()
const hashHistory = createHashHistory()

const router = new Router({
    routeTree,
    defaultPreload: "intent",
    basepath: "/smart-front",
    context: { queryClient },
    history: hashHistory // typeof window !== "undefined" ? browserHistory : memoryHistory,
})

// Register for TS
declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router
    }
}

// Export RouterProvider
export function AppRouter() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            {process.env.NODE_ENV !== "production" && (
                <>
                    <TanStackRouterDevtools router={router} position="bottom-right" />
                    <ReactQueryDevtools initialIsOpen={false} />
                </>
            )}
        </QueryClientProvider>
    )
}
