import {Filter, Hero, SearchBar} from "@/components";

export default function Home() {
    return (
        <main className="overflow-hidden">
            <Hero/>
            <div className="mt-12 padding-x padding-y max-width" id="discover">
                <div className="home__text-container">
                    <h2 className="text-4xl font-extrabold">Car Catalogue</h2>
                    <p>Explore the cars you might like</p>
                </div>

                <div className="home__filters">
                    <SearchBar/>
                    <div className="home__filter-container">
                        <Filter/>
                        <Filter/>
                    </div>
                </div>
            </div>
        </main>
    )
}
