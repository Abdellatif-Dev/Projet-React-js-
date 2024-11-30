import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'


export default function AppApiControle2() {
    const [data, setData] = useState([])
    const getData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const Data = await response.json()
        setData(Data)
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <>
        <NavBar joueurs={data} />
        
        </>
    )
}
