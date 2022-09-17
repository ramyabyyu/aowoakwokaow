import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Movies from "./pages/Movie";
import Series from "./pages/TvSeries";
import Profile from "./pages/Profile";
import Detail from "./pages/Detail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Movie Page */}
        <Route path="/movies" element={<Movies />} />

        {/* Tv Series Page */}
        <Route path="/series" element={<Series />} />

        {/* Profile Page */}
        <Route path="/profile" element={<Profile />} />

        {/* Detail Page */}
        <Route path="/detail" element={<Detail />} />

        {/* Not Found Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
