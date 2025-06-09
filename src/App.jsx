import { useEffect, useState } from "react"

const App = () => {
  const [search, setSearch] = useState("")
  const [listUsers, setListUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
  fetchData()
  }, [])

  const fetchData = async () => {
    setLoading(true) // starts loading

    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
  
      const response = await data.json()
      console.log(response);
      setListUsers(response)
      setFilteredUsers(response)
    } catch (error) {
      console.log("error fetching data",error);
      
    } finally {
      setLoading(false)
    }
  }

  function handleInputChange(e) {
    const value = e.target.value;
    setSearch(value)

    const results = listUsers.filter((data) => 
      data.name.toLowerCase().includes(value.toLowerCase()))

    setFilteredUsers(results)
  }

  function handleClearBtn() {
    setFilteredUsers(listUsers)
    setListUsers(listUsers)
    setSearch("")
  }

  return (
    <div>
      {loading ? (
        <p>Loading</p>
      ) : (
        <>
          <input type="text" onChange={handleInputChange} value={search} />

          {/* <p> text : { search}</p>
      <p> text : { search.length}</p> */}
          <button onClick={handleClearBtn}>Clear</button>
          <p>searching for : {search}</p>
          {filteredUsers.length > 0 ? (
            <ul>
              {filteredUsers.map((data) => (
                <div key={data.id}>
                  <li>{data.name}</li>
                </div>
              ))}
            </ul>
          ) : (
            <p>user not found 🚫</p>
          )}
        </>
      )}
    </div>
  );
}

export default App
