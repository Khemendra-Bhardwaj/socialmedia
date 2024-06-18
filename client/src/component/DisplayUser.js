import  React, { useEffect, useState }  from 'react'
import axios from 'axios'

const UserProfile = ({userId})=>{

    const [followers, setFollowers] = useState([])
    const [following, setFollowing] = useState([])
    const [userData, setUserData] = useState({name : 'Dummy-name', email:'dummy@123'})
    const [name, setName] = useState('Dummy-Name')

    useEffect( ()=>{
        const fetchName = async()=>{
            const UserData =await axios.get(`http://localhost/5000/users/${userId}`)
            setName(userData.name)
        }
        fetchName()

    },[] )

    return (
    <>
        <div> 
            {/* fetch name email followers  following liked comments-add  posts-pushed */}
            <hi> Name {name} </hi>
        </div>
        
    </>
    )
}

export default UserProfile