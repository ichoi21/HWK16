import React from "react";
import Table from "../Table/Table";
import axios from "axios";

// import Search from "../../utils/randomUsers";

class Main extends React.Component {
  state = {
    employeeInfo: [],
  };
  componentDidMount = () => {
    axios
      .get("https://randomuser.me/api/?results=30&nat=us")
      .then((employeeRecord) => {
        console.log(employeeRecord);
        const employee = employeeRecord.data.results;
        let employeeInfo = [];
        for (let i = 0; i < employee.length; i++) {
          let record = {
            profile: (
              <img src={employee[i].picture.thumbnail} alt={employee[i].name} />
            ),
            name: employee[i].name.first + " " + employee[i].name.last,
            age: employee[i].dob.age,
            email: employee[i].email,
            phone: employee[i].phone,
          };
          employeeInfo.push(record);
        }
        this.setState({
          employeeInfo: employeeInfo,
        });
      });
  };
  render() {
    return (
      <div>
        <Table employeeInfo={this.state.employeeInfo}></Table>
      </div>
    );
  }
}

export default Main;
