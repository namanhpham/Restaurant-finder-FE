import React, {useState, useEffect} from 'react'
import axios from 'axios'

const FavoritePage = () => {

  let [res_list, setList] = useState([])
    
    useEffect(() => {
    getFavorites()
    }, [])

    const getFavorites = async () => {
        let response = await axios.get("http://localhost:8000/api/favorites/")
        setList(response.data)
        console.log(response.data)
    }
  return (
    <div>
        <h1>Favorite Page</h1>
        <button onClick={getFavorites}>Get Favorites</button>
        <ul>
        {res_list.map(favorite => (
          <li key={favorite.id}>
            <p>Name: {favorite.name}</p>
            <p>Address: {favorite.address}</p>
            <p>Created At: {favorite.created_at}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FavoritePage
