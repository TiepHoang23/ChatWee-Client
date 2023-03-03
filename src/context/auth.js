import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const test = localStorage.getItem('data');

    let data = null;
    if (test !== null) {
      data = JSON.parse(test);
    }

    if (data) {
      setUser(data);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
