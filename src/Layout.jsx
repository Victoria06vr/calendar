import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { EventsProvider } from "./EventsContext";

function Layout() {
    return (
        <EventsProvider>
            <Header />
            <main>
                <Outlet/>
             </main>
            <Footer/>
        </EventsProvider>
    )
}
        export default Layout;