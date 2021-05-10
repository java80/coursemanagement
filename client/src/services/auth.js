import axios from "axios";
const baseUrl = "http://localhost:3000";
const api = axios.create({
  baseURL: baseUrl,
});

export const registerUser = async (FormData) => {
  const res = await api.post("/users", FormData);
  return res.data
}
export const loginUser = async (FormData) => {
  const res = await api.post("api/v1/auth", FormData);
  localStorage.setItem("authToken", res.data.token);
  api.defaults.headers.common.authorization = `Bearer ${res.data.token}`;
  return res.data;
}
export const verifyUser = async () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const res = await api.get("/api/v1/auth");
    return res.data
  }
  return false;
}
export const getAllCourses = async (id) => {
  const res = await api.get("/courses");
  return res.data;
}
export const getCourseDetail = async (id) => {
  const res = await api.get(`/courses/${id}`);
  return res.data

}
export const createCourse = async (FormData) => {
  const res = await api.post("/courses", { course: FormData });
  return res.data
}
export const getAllLessons = async () => {
  const res = await api.get("/lessons");
  return res.data;
}
export const createNewLesson = async (FormData, course_id) => {
  const res = await api.post(`/courses/${course_id}/lessons`, {
    lesson: FormData,
  });
  return res.data
}

