import { useEffect, useState } from 'react';

const API_URL = 'https://reqres.in/api/users/{userId}';

export default function UserProfile({ userId }) {
  const [userData, setUserData] = useState(undefined);

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
        <div className='card border-2'>
          <div className='card-header'>
            <div className='card-title'>
              User Profile
            </div>
          </div>
          <div className='card-body'>
            <div className='row'>
              <div className='col-md-4 '>
                <nav className="navbar-nav h-100">
                  <ul className="nav navbar-nav">
                    <li className="nav-item text-start px-3">
                      <a className="nav-link" href='#name'>Name</a>
                    </li>
                    <li className="nav-item text-start px-3">
                      <a className="nav-link" href='#photo'>Photo</a>
                    </li>
                    <li className="nav-item text-start px-3">
                      <a className="nav-link" href='#description'>Description</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className='col-md-8 bg-primary'>
                <div className='row text-white'>
                  <div id="photo" className='col-md-12'>
                    <img src={userData.avatar} className="position-absolute" />
                  </div>
                </div>
                <div className='row text-white mt-5 h-100'>
                  <div className='bg-white text-dark card-content'>
                    <div id="name" className='col-md-12'>
                      {userData.first_name} {userData.last_name}
                    </div>
                    <div id="email" className='col-md-12'>
                      <a href="mailto:'{userData.email}'">{userData.email}</a>
                  </div>
                  <div id="description" className='col-md-12'>
                    <p className='p-3 text-black-50'>
                      I am a Front-End Developer skilled in designing, developing web-based applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div >
  );
}
