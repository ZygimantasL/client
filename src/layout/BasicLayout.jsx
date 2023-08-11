import { Outlet } from "react-router-dom";


export function BasicLayout() {
    return (
        <>
        <header>HEADER</header>
        <main><Outlet /></main>
        <footer>FOOTER</footer>
        </>
    )
    
    
}