import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import SignIn from './Component/SignIn'
import SignUp from './Component/Signup'
import { useAuth } from './Context/Authprovider'
import Left from './Home/LeftPart/Left'
import Right from './Home/RightPart/Right'


function App() {

  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);


  return (

    <Routes>
      <Route path='/' element={authUser ?

        // True

        (<div className="flex screen-overflow h-screen bg-slate-800">
          <Left />
          <Right />
        </div>)

        // False

        :

        (
          <Navigate to={'/login'} />
        )

      } />

      <Route path='/login' element={authUser ? <Navigate to={'/'} /> :
        (<div className="flex h-screen justify-center items-center bg-slate-800" >
          <SignIn />
        </div>)}
      />
      <Route path='/signup' element={authUser ? <Navigate to={'/'} /> :
        (<div className="flex h-screen justify-center items-center bg-slate-800" >
          <SignUp />
        </div>)}
      />

    </Routes>

  )
}

export default App
