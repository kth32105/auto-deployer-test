import { Route, Routes } from 'react-router-dom';

import { ROUTE_PATH } from './route_dictionary';

const AppRoutes = () => {
  return (
    <Routes>
      {/* 레이아웃으로 감싸는 라우트 */}
      {/* 하위 라우트들이 <Outlet />으로 렌더링됨 */}
      <Route index element={<div>Home</div>} />

      {/* 레이아웃 없는 독립적인 페이지 */}
      <Route path={ROUTE_PATH.LOGIN} element={<div>Login</div>} />
    </Routes>
  );
};

export default AppRoutes;
