import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import apiUtils from '../utils/api.utils'

import ProfileUser from '../components/ProfileUser'

const Profile = () => {
  const [ user, setUser ] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const getProfile = async () => {
      try {
        const user = await apiUtils.getProfile();
        setUser(user);
      } catch (error) {
        navigate('/login');
      }
    }
    getProfile();
  }, [navigate])

  return (
    <div>
      <h2>Profile</h2>
      <ProfileUser {...user} />
    </div>
  )
}

export default Profile