import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { routeConfig } from 'routeСonfig/routes';

const App = () => (
  <BrowserRouter>
    <Routes>
      {Object.values(routeConfig).map(({ path, element}) => (
        <Route
          key={path}
          path={path}
          element={element} 
        />  
      ))}
    </Routes>
  </BrowserRouter>
);

export { App };
