import React from 'react'
import Button from '../components/misc/buttons'


const Home = () => (
 <article className="Home">
    <Button btn='primary' go='/login' name='Login' className='mr-2'/>
    <Button btn='secondary' go='/sign' name='Sign in'/>
  </article>
)

export default Home