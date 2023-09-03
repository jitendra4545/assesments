import React from 'react'
import {Link} from 'react-router-dom'
import { useQuery,useMutation, useQueryClient } from 'react-query';
import { getContact } from '../api';
export const ContactPage = () => {

    const { data, error, isLoading } = useQuery('contact',getContact );

    console.log(data)
  return (
    <div>
       <Link to='/add'><button className=' border-2 p-3 bg-green-500 text-white'>Create New Contact</button></Link>
    </div>
  )
}
