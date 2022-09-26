import { useEffect, useState } from 'react';

const API_URL = 'https://reqres.in/api/users/{userId}';

export default function UserProfile({ userId }) {
  const [userData, setUserData] = useState([]);

  const getUser = () => {
    fetch(API_URL.replace('{userId}', userId || 1))
      .then(res => {
        return res.json();
      }).then(res => {
        if (res) {
          setUserData(res.data)
        }
      }).catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    if (userId) {
      getUser();
    }

  }, [userId]);

  return (
    !userData ? <div className='text-danger m-3'>No records found</div> :
      <div className="container-fluid h-100">
        <div className='card'>
          <div className='card-header'>
            <div className='card-title'>
              User Details
            </div>
          </div>
          <div className='card-body bg-success'>
            <div className='row'>
              <div className='col-md-2 '>
                <nav className="navbar-nav h-100 bg-dark">
                  <ul className="nav navbar-nav">
                    <li class="nav-item text-start px-3">
                      <a class="nav-link" href='#name'>Name</a>
                    </li>
                    <li class="nav-item text-start px-3">
                      <a class="nav-link" href='#photo'>Photo</a>
                    </li>
                    <li class="nav-item text-start px-3">
                      <a class="nav-link" href='#description'>Description</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className='col-md-10'>
                <div className='row'>
                  <div id="name" className='col-md-8'>
                    {userData.first_name} {userData.last_name}
                  </div>
                  <div id="photo" className='col-md-8'>
                    <img src={userData.avatar} />
                  </div>
                  <div id="description" className='col-md-8'>
                    {userData.email}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
