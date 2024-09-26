import SectionCard from "@/app/components/card/SectionCard";
import { fetchData } from "@/app/lib/fetchData";

export default async function Page() {

    const sections = await fetchData('/api/courses');

    return (sections &&
        <div>
            <div className="relative w-full py-16 sm:px-10 px-3 h-auto bg-cover bg-center" style={{ backgroundImage: 'url("/DeWatermark.ai_1726683796769.png")' }}>
                <div className="relative p-6 shadow-darker-blue bg-light-blue-active bg-opacity-90 max-w-4xl mx-auto rounded-lg text-center">
                    <h1 className="text-charcoal text-2xl sm:text-4xl font-bold mb-4">
                        Courses
                    </h1>
                    <p className="text-black">
                        At RPL FAST TRACK, we specialize in helping individuals gain formal recognition for the skills and knowledge they've acquired through experience. Whether you've learned through work, training, or life experience, our streamlined RPL assessment process allows you to convert your expertise into recognized qualifications. Our dedicated team ensures a smooth, supportive journey from assessment to certification, helping you unlock new opportunities in your career and education.
                    </p>
                </div>
            </div>

            <div className="bg-light-blue-hover sm:px-10 px-5  py-10 ">
                <div className="max-w-4xl mx-auto">
                    <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        {sections.map((section) => (
                            <SectionCard key={section._id} section={section} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

