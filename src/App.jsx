// import About from "./Components/About"
// import Contact from "./Components/Contact"
// import Home from "./Components/Home"
// import Navbar from "./Components/Navbar"
// import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Signup from "./Components/Signup"
// import Error from "./Components/Error"
// function App() {
//   return (
//     <BrowserRouter>

//       <Routes>
      
//         <Route path="" element={<Navbar />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/About" element={<About />} />
//           <Route path="/Contact" element={<Contact />} />
//           <Route path="/Signup" element={<Signup />}/>
//           <Route path="*" element={<Error />} ></Route>
//         </Route>
       
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App
// import './App.css'
// import DynamicStyle from './Component/DynamicStyle'
// import MyTable from './Component/Table'
// import StyleExample from './Component/ExampleStyle'
import Form from './Form/Form'
import MyBank from './Bank/Bank'
import Jonybank from './Bank/JonyBank'
import NyBank from './Bank/MyBank'

function App() {
  

  return (
    <>
    <NyBank/>
    {/* <Jonybank/> */}
    {/* <MyBank/> */}
    {/* <Form/> */}
      {/* <MyTable/>
      <DynamicStyle/>
      <StyleExample/> */}
    </>
  )
}

export default App


