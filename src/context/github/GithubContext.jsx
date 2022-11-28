import React, { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
    const initialState = {
        users: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    //Get search results
    const searchUsers = async () => {
        setLoading()

        const params = new URLSearchParams({
            q: Text
        })

        const response = await fetch('https://api.github.com/search/users?$' + params, {
            headers: {
                Authorization: 'token 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',
            },
        })

    const {items} = await response.json()

    dispatch({
        type: 'GET_USERS',
        payload: items,
    })
}

    const setLoading = () => dispatch({type: 'SET_LOADING'})
    
    return <GithubContext.Provider value={{ users: state.users, loading: state.loading, searchUsers }}>{children}</GithubContext.Provider>
}

export default GithubContext