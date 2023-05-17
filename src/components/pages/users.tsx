
import React from 'react'

import { useUsersQuery } from "../../api/apiSlice";


function Users() {
    const {data, error, isLoading, isFetching, isSuccess} = useUsersQuery({id:1});
    console.log("fffffffff",data);
    
  return (
    <div>
        <h2>RTK fetching data</h2>
      {isLoading && <h2>Loading</h2>}
      {isFetching && <h2>Fetching</h2>}
      {error && <h2>error</h2>}
      {isSuccess && (
        <div>
            {data.map((user:any)=>(
                <li key={user.id}>{user.name}</li>
            ))}
        </div>
      )}
    </div>
  )
}

export default Users

