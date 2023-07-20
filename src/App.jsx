import Home from './pages/Home';
import Nav from './pages/components/Nav';
import SideNav from './pages/components/SideNav';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);


const App = () => {
  return (
    <>
      <div className="h-screen">
        <div className="w-full">
          <Nav />
          <div className="p-5">
            <RouterProvider router={router} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

// const App = () => {
//   return (
//     <>
//       <div className="flex h-screen">
//       <Nav />
//       <div className="flex flex-col flex-grow">
//         <div className="flex">
//           <SideNav />
//           <RouterProvider router={router} />
//         </div>
//       </div>
//       </div>
//     </>
//   );
// };