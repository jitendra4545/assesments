import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignupCard from '../components/Register'
import SimpleCard from '../components/Login'
import { HomePage } from './HomePage'
import { UserList } from './UserList'
import { PostList } from './PostList'
import { UserAnalytic } from './UserAnalytic'
import { PostAnalytic } from './PostAnalytic'
import { SinglePost } from '../components/SinglePost'
import { SingleUser } from '../components/SingleUser'
import { AddPost } from '../components/AddPost'

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/addpost' element={<AddPost/>} />
            <Route path='/register' element={<SignupCard />} />
            <Route path='/login' element={<SimpleCard />} />
            <Route path='/' element={<UserList />} />
            {/* <Route path='/allusers' element={<UserList />} /> */}
            <Route path='/useranalytic' element={<UserAnalytic />} />
            <Route path='/allposts' element={<PostList />} />
            <Route path='/postanalytic' element={<PostAnalytic />} />
            <Route path='/allposts/:id' element={<SinglePost />} />
            <Route path='/allusers/:id' element={<SingleUser />} />
            <Route path='/posts/edit/:id' element={<AddPost/>} /> 
            <Route path='/users/edit/:id' element={<SignupCard/>} />     
        </Routes>
    )
}
