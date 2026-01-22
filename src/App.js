import { useState, useEffect } from "react";
const API = "https://dummyjson.com/products";
export default function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setData(data.products);
    } catch {}
  };

  console.log(data);
  return (
    <div className="App">
      <h1>Product List</h1>
      <>
        <table>
          <thead>
            <th>Name</th>
            <th>Price</th>
            <th>category</th>
          </thead>
          {data.map((_val) => {
            return (
              <tbody key={_val.id}>
                <td>{_val.title}</td>
                <td>{_val.price}</td>
                <td>{_val.category}</td>
              </tbody>
            );
          })}
        </table>
      </>
    </div>
  );
}
