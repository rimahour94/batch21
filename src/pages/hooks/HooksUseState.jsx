import { useState } from "react";
import { Table, Button } from "react-bootstrap";
function HooksUseState() {
  const [Obj, setObject] = useState({
    Name: "Rahul",
    City: "Allahabad",
    Class: 10,
  });

  const [arr, setArr] = useState([
    {
      name: "Aayush",
      city: "Noida",
      class: "12th",
      rollno: "345",
      school: "DPS",
    },
    {
      name: "Chandresh",
      city: "Delhi",
      class: "11th",
      rollno: "346",
      school: "JSE",
    },
    {
      name: "Ritesh",
      city: "Pune",
      class: "12th",
      rollno: "347",
      school: "GD goenka",
    },
    {
      name: "Prateek",
      city: "Mumbai",
      class: "10th",
      rollno: "348",
      school: "DPS",
    },
  ]);

  const deleteHandler = (rollno) => {
    console.log("deleted", rollno);
    const filteredData = arr.filter((el) => {
      return el.rollno !== rollno;
    });

    setArr(filteredData);
    // console.log(filteredData);
  };
  return (
    <div>
      <h3> ObjectName {Obj.Name}</h3>
      <h3>Class {Obj.Class}</h3>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sno.</th>
            <th>Name</th>
            <th>Class</th>
            <th>Rollno</th>
            <th>City</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((el, ind) => {
            return (
              <tr key={el.rollno}>
                <td>{ind + 1}</td>
                <td>{el.name}</td>
                <td>{el.class}</td>
                <td>{el.rollno}</td>
                <td>{el.city}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => deleteHandler(el.rollno)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {/* <ul>
        {arr.map((el) => {
          return <li>{el}</li>;
        })}
      </ul> */}

      {/* <button
        onClick={() => {
          setObject({
            ...Obj,
            Name: "Anuj",
          });
        }}
      >
        Click
      </button> */}
    </div>
  );
}

export default HooksUseState;
