import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

//Removing allows user to stay at same position after reloading page, but may cause some flickering
window.onbeforeunload = () => {
    window.scrollTo(0, 0);
}