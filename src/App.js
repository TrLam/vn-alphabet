import { Outlet } from 'react-router';

function App() {
  return (
    <div className="font-mono bg-[#282c34] text-white text-6xl text-center min-h-screen flex flex-col items-center justify-center ">
      <Outlet />
    </div>
  );
}

export default App;
