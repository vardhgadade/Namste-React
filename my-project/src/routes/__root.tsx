import { createRootRoute, Outlet } from "@tanstack/react-router";
import Header from "../component/Headers";
import Footer from "../component/Footer";

export const Route=createRootRoute({
    component:MainLayout,
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