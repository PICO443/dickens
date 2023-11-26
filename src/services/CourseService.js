import { AxiosInstance } from "../AxiosInstance";

export const registerCourse = async (course) => {
  const response = await AxiosInstance.post("api/course", course);
  console.log(response);
};

export const getAllCourses = async () => {
  const response = await AxiosInstance.get("api/course");
  return response.data;
};

export const deleteCourse = async (id) => {
  const response = await AxiosInstance.delete(`api/course/${id}`);
  console.log({response, id})
};
