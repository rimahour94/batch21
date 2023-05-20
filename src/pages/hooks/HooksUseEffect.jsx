import { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
function HooksUseEffect() {
  console.log("HooksUseEffect");
  const [state, setState] = useState();
  const [id, setId] = useState("");
  const postsData = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setState(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    postsData();
    // console.log("UseEffect Called");
    // setState("TRISECT");
  }, [id]);
  return (
    <>
      {console.log("return statement")}
      {/* <h2>Hooks Use Effect </h2> */}
      <div>
        <input
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
      </div>
      {
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>UserId</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {state?.length > 0 ? (
              state?.map((st) => {
                return (
                  <tr>
                    <td>{st.id}</td>
                    <td>{st.userId}</td>
                    <td>{st.title}</td>
                    <td>{st.body}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td>{state.id}</td>
                <td>{state.userId}</td>
                <td>{state.title}</td>
                <td>{state.body}</td>
              </tr>
            )}
          </tbody>
        </Table>
      }
    </>
  );
}

export default HooksUseEffect;
