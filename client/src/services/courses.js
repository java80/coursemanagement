//  import api from './api-config'
import api from './auth';
export const getAllCourses = async () => {
  const res = await api.get('/courses');
  return res.data;
}

export const getOneCourse = async (id) => {
  const res = await api.get(`/courses/${id}`);
  return res.data;
}

// export const createCourse = async (courseData) => {
//   const res = await api.post('/courses', courseData);
//   return res.data;
// }
export const postCourse = async (courseData) => {
  const res = await api.post('/courses', courseData);
  return res.data;
}
export const putCourse = async (id, courseData) => {
  const res = await api.put(`/courses/${id}`, courseData);
  return res.data
}

export const deleteCourse = async (id) => {
  const res = await api.delete(`/courses/${id}`);
  return res.data
}