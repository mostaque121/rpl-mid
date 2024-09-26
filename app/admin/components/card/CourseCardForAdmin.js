import Image from "next/image";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";

export default function CourseCardForAdmin({ course }) {
    return (
        <div className="bg-white shadow-darker-blue duration-200 rounded-lg overflow-hidden flex flex-col">
            <Link href={`/admin/courses/${course.link}`}>
                <div className=" p-2 sm:p-4">
                    <div className="relative rounded-md overflow-hidden hover:scale-[1.02] transition-all duration-200 ease-in-out w-full pb-[100%]">
                        <Image
                            src={course.imageSquareLink}
                            alt='Course Image'
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 
                            (max-width: 1200px) 50vw, 
                            33vw"
                        />
                    </div>
                </div>
            </Link>
            <div className="pb-4 sm:px-4 px-3 flex-1">
                <Link href={`/admin/courses/${course.link}`}>
                    <h3 className="md:text-lg sm:text-base text-sm font-semibold">
                        <span>{course.index}.</span>
                        {course.title}</h3>
                </Link>
                <Link href={`/admin/edit/courses/${course.link}`}>
                    <div className="items-center gap-2 mt-2 hover:scale-95 active:scale-90 cursor-pointer duration-200 transition-all ease-out hover:bg-blue-600 active:bg-blue-700 flex w-20 bg-blue-500 text-white rounded-md px-2 py-1 ">
                        <FaEdit />
                        <p>Edit</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

