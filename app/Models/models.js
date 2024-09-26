import mongoose from 'mongoose';
import courseSchema from './Course';
import sectionSchema from './Section';

const Course = mongoose.models.Course || mongoose.model('Course', courseSchema);
const Section = mongoose.models.Section || mongoose.model('Section', sectionSchema);

export { Course, Section };

