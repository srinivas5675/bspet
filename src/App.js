// App.js
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header';
import Buffalos from './components/buffalos';
import Hens from './components/hens';
import Dogs from './components/dogs';


const App = () => {
   return (
      <>
        <Header/>
         <Routes>
            <Route path="/" element={<Navigate to="/buffalos" replace />} />
            <Route path="/buffalos" element={<Buffalos />} />
            <Route path="/hens" element={<Hens />} />
            <Route path="/dogs" element={<Dogs />} />
         </Routes>
      </>
   );
};
 
export default App;