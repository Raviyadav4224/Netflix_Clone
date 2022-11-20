import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import TVShows from "./components/TVShows";
import Login from "./components/Login";
import Register from "./components/Register";
import UserProfile from "./components/UserProfile";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import MovieDetails from "./components/MovieDetails";
import MyList from "./components/MyList";
function App() {
  const dispatch = useDispatch();
  const { error, message, isAuthenticated ,loading} = useSelector(
    (state) => state.user
  );
  console.log(`Error is ${error} & message is ${message}`);
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/netflix_clone" element={<Home />} />
        <Route path="/tvshows" element={<TVShows />} />
        <Route
          path="/login"
          element={<Login isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/register"
          element={<Register isAuthenticated={isAuthenticated} loading={loading}/>}
        />
        <Route path="/me" element={<UserProfile />} />
        <Route path='netflix_clone/movie/:id' element={<MovieDetails/>}/>
        <Route path='/myList' element={<MyList/>}/>
      </Routes>
      <Toaster
        toastOptions={{
          success: {
            duration: 2000,
          },
          error: {
            duration: 4000,
          },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
