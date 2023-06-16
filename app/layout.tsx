import './globals.css'
import {Navbar} from "@/components";
import {ReactNode} from "react";

export const metadata = {
    title: 'Car Hub',
    description: 'Discover the best car in the world',
}

export default function RootLayout({children,}: { children: ReactNode }) {
    return (
        <html lang="en">
        <body className="relative">
        <Navbar/>
        {children}
        </body>
        </html>
    )
}
