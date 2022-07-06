import React from 'react';
import Counter from "./components/Counter";
import UsersList from "./components/UsersList";
import LoginForm from "./components/LoginForm";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false);
  return(
  <div className="App">
      {isUserLoggedIn ? (
        <>
          <Counter />
          <UsersList />          
          <button onClick={() => setIsUserLoggedIn(false)}>Logout</button>
        </>
      ) : (
        <LoginForm onLoginSuccess={() => setIsUserLoggedIn(true)} />
      )}
    </div>
  )
}

export default App;