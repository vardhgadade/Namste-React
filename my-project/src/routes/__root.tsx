import { createRootRoute, Outlet } from "@tanstack/react-router";
import Header from "../component/Headers";
import Footer from "../component/Footer";

export const Route = createRootRoute({
  component: MainLayout,
  notFoundComponent: () => <div className="p-8">404 — Page not found</div>,
})

function MainLayout(){
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 p-4">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
