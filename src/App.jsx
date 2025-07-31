// import { Routes, Route, useLocation } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
// import Home from "./pages/Home";
// import Login from "./pages/Login";

// function App() {
//   const location = useLocation();

//   return (
//     <AnimatePresence mode="wait">
//       <Routes location={location} key={location.pathname}>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<div>Login Page</div>} />
//         <Route path="/admin" element={<div>Admin Panel</div>} />
//       </Routes>
//     </AnimatePresence>
//   );
// }

// export default App;

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin"; // ✅ import

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} /> {/* ✅ route added */}
      </Routes>
    </AnimatePresence>
  );
}

export default App;
