import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const UserList = ({_id,name,email,phone}) => {



    return (
        <tr>

            <td>{_id}</td>
            <td>{name}</td>
            <Link to={`/singleuser/${_id}`}><td><button >VIEW</button></td></Link>
            <td><button>EDIT</button></td>
            <td><button>DELETE</button></td>
        </tr>
    )
}
