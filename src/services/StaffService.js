import { AxiosInstance } from "../AxiosInstance";

export const getAllTeachers = async () => {
  const response = await AxiosInstance.get("/api/teacher");
  console.log(response.data)
  return response.data
};

export const registerTeacher = async (teacher) => {
    const response = await AxiosInstance.post("/api/teacher", teacher)
}

export const deleteTeacher = async(teacherId) => {
  const resposne = await AxiosInstance.delete(`/api/teacher/${teacherId}`)
}