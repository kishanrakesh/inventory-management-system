import axios from "axios";

const EMPLOYEE_URL = "http://localhost:9092/employees";

class EmployeeDataService {
    retrieveAllEmployees(){
        return axios.get(`${EMPLOYEE_URL}`)
    }
    deleteEmployee(employeeId){
        return axios.delete(`${EMPLOYEE_URL}/${employeeId}`)
    }
    getEmployee(employeeId){
        return axios.get(`${EMPLOYEE_URL}/${employeeId}`)
    }
    addEmployee(employee){
        return axios.post(`${EMPLOYEE_URL}`,employee)
    }
    


}
export default new EmployeeDataService();