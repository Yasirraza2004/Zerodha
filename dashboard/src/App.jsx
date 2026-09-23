import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const { accessToken, setAccessToken } = useAuth();

  useEffect(() => {
    const checkLogin = async () => {
      try {
        let token = accessToken;

        // No access token in memory
        // → get a new one using refresh cookie
        if (!token) {
          const refreshResponse = await axios.post(
            "http://localhost:8080/refresh",
            {},
            {
              withCredentials: true,
            }
          );

          token = refreshResponse.data.accessToken;

          setAccessToken(token);
        }

        // Get logged-in user
        const userResponse = await axios.get(
          "http://localhost:8080/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUser(userResponse.data.user);

      } catch (error) {
        console.log(
          "Authentication failed:",
          error.response?.data
        );

        setAccessToken(null);

        window.location.href =
          "http://localhost:5173/login";

      } finally {
        setLoading(false);
      }
    };

    checkLogin();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>Welcome to Dashboard</h1>

      {user && (
        <>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </>
      )}
    </div>
  );
}

export default App;