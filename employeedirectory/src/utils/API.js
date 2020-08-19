import axios from "axios";

export default {
    getRandomEmployees: function() {
        return axios
            .get("https://randomuser.me/api/?results=50")
            .then(res => {
                const employees = res.results;
                console.log(employees);
                return employees.map(employee => {
                    return {
                        picture: employee.picture.medium,
                        gender: employee.gender,
                        name: employee.name, 
                        email: employee.email

                    };
                }); 
            });
    }
};