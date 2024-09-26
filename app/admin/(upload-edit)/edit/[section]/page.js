import SectionUploadForm from "@/app/admin/components/form/SectionUploadForm";
import { fetchDataNoStore } from "@/app/lib/fetchData";
import { notFound } from "next/navigation";
export default async function Page({ params }) {
    const { section } = params;

    const initialData = await fetchDataNoStore(`/api/${section}`);

    const availableCourses = await fetchDataNoStore(`/api/courses`);
    if (!initialData) {
        notFound();
    }
    return (initialData &&
        <div>
            <SectionUploadForm initialData={initialData} mode="edit" availableItems={availableCourses} />
        </div>
    )
}