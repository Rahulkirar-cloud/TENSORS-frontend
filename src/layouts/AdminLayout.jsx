import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="min-h-screen">
      <Outlet />
    </div>
  );
}

export default AdminLayout;