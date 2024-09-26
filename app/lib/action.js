'use server'
import { revalidatePath } from "next/cache";

export async function revalidateAfterEditSection(sectionLink) {
    console.log('revalidating after edit service', sectionLink);
    revalidatePath(`/home`);
    revalidatePath(`/courses`);
    revalidatePath(`/admin/courses`);
    revalidatePath(`/admin/upload/courses/section`);
    revalidatePath(`/admin/upload/courses/course`);
    revalidatePath(`/admin/${sectionLink}`);
    revalidatePath(`/${sectionLink}`);
}

export async function revalidateAfterUploadSection() {
    revalidatePath(`/home`);
    revalidatePath(`/courses`);
    revalidatePath(`/admin/courses`);
    revalidatePath(`/admin/upload/courses/section`);
    revalidatePath(`/admin/upload/courses/course`);
}

export async function revalidateAfterUploadCourse(sectionLink) {
    revalidatePath(`/courses`);
    revalidatePath(`/admin/courses`);
    revalidatePath(`/admin/upload/courses/section`);
    revalidatePath(`/admin/upload/courses/course`);
    revalidatePath(`/admin/${sectionLink}`);
    revalidatePath(`/${sectionLink}`);
}

export async function revalidateAfterEditCourse(prevCourseLink, prevSectionLink, newSectionLink) {
    revalidatePath(`/courses`);
    revalidatePath(`/admin/courses`);
    revalidatePath(`/admin/upload/courses/section`);
    revalidatePath(`/admin/upload/courses/course`);
    revalidatePath(`/admin/${prevSectionLink}`);
    revalidatePath(`/admin/${newSectionLink}`);
    revalidatePath(`/${prevSectionLink}`);
    revalidatePath(`/${newSectionLink}`);
    revalidatePath(`/courses/${prevCourseLink}`);
    revalidatePath(`admin/courses/${prevCourseLink}`);
}

export async function revalidateAfterDeleteCourse(courseLink, sectionLink) {
    revalidatePath(`/courses`);
    revalidatePath(`/admin/courses`);
    revalidatePath(`/admin/upload/courses/section`);
    revalidatePath(`/admin/upload/courses/course`);
    revalidatePath(`/admin/${sectionLink}`);
    revalidatePath(`/${sectionLink}`);
    revalidatePath(`/courses/${courseLink}`);
    revalidatePath(`admin/courses/${courseLink}`);
}
export async function revalidateAfterDeleteSection(sectionLink) {
    revalidatePath(`/home`);
    revalidatePath(`/courses`);
    revalidatePath(`/admin/courses`);
    revalidatePath(`/admin/upload/courses/section`);
    revalidatePath(`/admin/upload/courses/course`);
    revalidatePath(`/admin/${sectionLink}`);
    revalidatePath(`/${sectionLink}`);
}