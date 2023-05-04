import Featured from "@/Components/Featured";
import MovieCard from "@/Components/MovieCard";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/react";
import Flickity from "react-flickity-component";
export default function Dashboard({ auth, featureMovies, movies }) {
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };
    return (
        <Authenticated auth={auth}>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
            </Head>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                <Flickity
                    className="gap-[30px] __scroll-selector"
                    options={flickityOptions}
                >
                    {featureMovies.map((featureMovie) => {
                        return (
                            <Featured
                                key={featureMovie.id}
                                name={featureMovie.name}
                                thumbnail={featureMovie.thumbnail}
                                category={featureMovie.category}
                                slug={featureMovie.slug}
                                rating={featureMovie.rating}
                            />
                        );
                    })}
                </Flickity>
            </div>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Browse
                </div>
                <Flickity
                    className="__scroll-selector"
                    options={flickityOptions}
                >
                    {movies.map((movies) => {
                        return (
                            <MovieCard
                                key={movies.id}
                                name={movies.name}
                                thumbnail={movies.thumbnail}
                                category={movies.category}
                                slug={movies.slug}
                            />
                        );
                    })}
                </Flickity>
            </div>
        </Authenticated>
    );
}
