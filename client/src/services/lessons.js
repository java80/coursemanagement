// import api from './api-config';
import api from './auth';
export const getAllLesson = async (id) => {
  const res = await api.get(`/courses/${id}/lessons`);
  return res.data;
}

export const getOneLesson = async (id) => {
  const res = await api.get(`/courses/${id}/lessons/${id}`);
  return res.data;
}

export const postLesson = async (lessonData, course_id) => {
  const res = await api.post(`/courses/${course_id}/lessons`, lessonData);
  return res.data;
}

export const putLesson = async (id, course_id, lessonData) => {
  console.log("Lessondata",lessonData)
  const res = await api.put(`/courses/${course_id}/lessons/${id}`, lessonData);
  return res.data;
}
export const deleteLesson = async (id,course_id) => {
  const res = await api.delete(`/courses/${course_id}/lessons/${id}`);
   console.log("Lesson delete api call");
  return res.data

 
}