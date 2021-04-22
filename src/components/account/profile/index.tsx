import { ReactElement, useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';

function Profile(): ReactElement {
  const [user, setUser] = useState({
    username: '',
    email: '',
    phone_number: ''
  });

  useEffect(() => {
    getUserProfile();
  }, []);

  async function getUserProfile() {
    try {
      const data = await Auth.currentUserPoolUser();
      const userInfo = { username: data.username, ...data.attributes };
      setUser(userInfo);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>My profile</h1>
      <h3>Username: {user.username}</h3>
      <h3>Username: {user.email}</h3>
      <h3>Username: {user.phone_number}</h3>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(Profile);
