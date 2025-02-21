import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../pages/Home/Home";

function Rotas() {
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
          {/*<Route path='/login' element={<Login />} />
          <Route path='/Produtos' element={<ProtectedRoute><Produtos /></ProtectedRoute>} />
          <Route path='/Categorias' element={<ProtectedRoute><Categorias /></ProtectedRoute>} />
          <Route path='/Relatorios' element={<ProtectedRoute><Relatorios /></ProtectedRoute>} />
          <Route path='/Perfil' element={<ProtectedRoute><Perfil /></ProtectedRoute>} />
          <Route path='*' element={<Navigate to='/login' />} /> */}
        </Routes>
      </BrowserRouter>
}

export default Rotas;