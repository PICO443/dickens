import { AxiosInstance } from "../AxiosInstance"

export const registerStudent = async(student) => {
    const response = await AxiosInstance.post("http://localhost:8080/api/student", student, {
        headers: { 
            'Content-Type': 'application/json',
         }
      });
}