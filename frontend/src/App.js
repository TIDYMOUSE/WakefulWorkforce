// import './App.css';
import AuthContextProvider from "./Context/AuthContext"
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import ContactUs from './pages/ContactUs';
import Signup from "./pages/signup"
import Todo from "./pages/todo"
import { Route, Routes } from "react-router-dom"
import AboutUs from './pages/AboutUs';
import Questionnaire from './pages/questionnaire';
import Dashboard from './pages/dashboard';
import Session from './pages/session';
import CalendarPage from "./pages/CalendarPage";
import DateContextProvider from "./Context/DateContext";


function App() {
  return (

    <div className="bg-slate-900 text-white min-h-screen min-w-full ">
      <AuthContextProvider>
        <DateContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path='/login' element={<Signup login={true} />} />
            <Route path='/signup' element={<Signup login={false} />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/questionnaire" element={<Questionnaire />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* <Route path="http://127.0.0.1:5500/" element={<Session />} /> */}
            {/* <Route path="/session" element={<Session />} /> */}
            <Route path="/todo" element={<Todo />} />
            <Route path="/calendar" element={<CalendarPage />} />
          </Routes>
        </DateContextProvider>
      </AuthContextProvider>
    </div >

  );
}

export default App;
