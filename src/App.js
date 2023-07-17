import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card/Card';

function App() {

  const [userData, setUserData] = useState([])

  useEffect(() => {
    fetch("http://api.github.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data)
        console.log(data);
      })

  }, [])

  return (
    <>
      <h1 className='main-head'>Github Users</h1>
      <div className='card-container'>
        {
          userData.map((user) => {
            console.log(user);

            return (
            <Card userName={user.login} 
            profilePic={user.avatar_url}
            profileUrl={user.html_url}/>
            )
          })}

      </div>
    </>
  );
}

export default App;
