// import api from './api-config';
import api from './auth';
export const getAllLesson = async (id) => {
  const res = await api.get(`/courses/${id}/lessons`);
  return res.data;
}

export const getOneLesson = async (id) => {
  const res = await api.get(`/lessons/${id}`);
  return res.data;
}

export const postLesson = async (lessonData, course_id) => {
  const res = await api.post(`/courses/${course_id}/lessons`, lessonData);
  return res.data;
}

export const putLesson = async (id, lessonData) => {
  const res = await api.put(`/lessons/${id}`, lessonData);
  return res.data;
}
export const deleteLesson = async (id) => {
  const res = await api.delete(`lessons/${id}`);
  return res.data
}