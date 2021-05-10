import api from './api-config';
export const getAllLessons = async () => {
  const res = await api.get('/lessons');
  return res.data;
}

export const getOneLesson = async (id) => {
  const res = await api.get(`/lessons/${id}`);
  return res.data;
}

export const PostLesson = async (lessonData) => {
  const res = await api.post('/lessons', lessonData);
  return res.data;
}

export const PutLesson = async (id, lessonData) => {
  const res = await api.put(`/dogs/${id}`, lessonData);
  return res.data;
}
export const deleteLesson = async (id) => {
  const res = await api.delete(`lessons/${id}`);
  return res.data
}