import React, { useContext } from 'react'
// import env from 'react-dotenv'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'
import GithubContext from '../../context/github/GithubContext'

function UserResults() {
    const { users, loading } = useContext(GithubContext)

    if (!loading) {
    return (
            <div className='w-full grid grid-cols-1 gap-8 xl:grid-cols-4 lg:cols-3 md:grid-cols-2'>
                {users.map((user) => (
                <UserItem key={user.id} user={user} />))}
            </div>
          )
    } else {
    return <Spinner />}
}

export default UserResults

//code didn't work when i used the process.env. versions of url and token. error was "uncaught (in promise) ReferenceError: process is not defined". Gardy suggested using this: import env from 'react-dotenv', but I haven't tried it yet.