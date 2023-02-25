import { ReactNode } from 'react'
import NavBar from './NavBar'

type MainContainerProps = {
    children: ReactNode
}

export default function MainContainer ({children}: MainContainerProps){
    return (
        <>
        <NavBar/>
        <div>{children}</div>
        </>
    )
}