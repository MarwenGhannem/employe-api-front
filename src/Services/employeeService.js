import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8083/api/v1/employee";
const EMPLOYEE_API_BASE_URL1 = "http://localhost:8083/api/v1/allEmployees";

class employeeService{

    saveEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL,employee);
    }

    getEmployee(){
        return axios.get(EMPLOYEE_API_BASE_URL1);
    }

    deleteEmployee(id){
        return axios.delete(EMPLOYEE_API_BASE_URL + "/" +id);
    }

}

export default new employeeService();