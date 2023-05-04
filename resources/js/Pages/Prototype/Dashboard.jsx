import Featured from "@/Components/Featured";
import MovieCard from "@/Components/MovieCard";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/react";
import Flickity from "react-flickity-component";
export default function Dashboard() {
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
        <Authenticated>
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
                    {[1, 2, 3, 4].map((i) => {
                        return (
                            <Featured
                                key={i}
                                name={`The Batman In Love ${i}`}
                                thumbnail="https://picsum.photos/id/1/300/300"
                                category="Action"
                                slug="the-batman-in-love"
                                rating={i + 1}
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
                    {[1, 2, 3, 4, 5, 6].map((i) => {
                        return (
                            <MovieCard
                                key={i}
                                name={`The Batman In Love ${i}`}
                                thumbnail="https://picsum.photos/id/1/300/300"
                                category="Action"
                                slug="the-batman-in-love"
                            />
                        );
                    })}
                </Flickity>
            </div>
        </Authenticated>
    );
}
