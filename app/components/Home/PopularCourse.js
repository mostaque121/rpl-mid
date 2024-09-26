import { fetchData } from "@/app/lib/fetchData";
import Image from "next/image";
import Link from "next/link";

export default async function PopularCourse() {

    const sections = await fetchData(`/api/courses`);

    return (sections &&
        <div className="bg-white px-3 sm:px-5 py-5">
            <h1 className="text-3xl pb-5 font-semibold text-center">Clients' Favourite</h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-3 sm:gap-5">
                {sections.slice(0, 6).map((section) => (
                    <Link href={`/courses/${section.link}`} key={section._id}>
                        <div className="flex p-3 rounded-md bg-light-blue gap-3 shadow-md items-center sm:text-lg font-semibold cursor-pointer hover:scale-95 active:scale-90 transition-transform duration-200 ease-in-out hover:bg-light-blue-hover active:bg-light-blue-active">
                            <div className="w-16 shrink-0 rounded-lg overflow-hidden relative h-16 sm:w-20 sm:h-20">
                                <Image src={section.imageSquareLink} className="object-cover" alt="image" width={720} height={720}></Image>
                            </div>
                            <h3>{section.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};




