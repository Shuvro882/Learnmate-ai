import ProtectedRoute from "../Components/ProtectedRoute";


export default function Dashboard() {
  return (
    <ProtectedRoute>
      <div>
        <h1>Dashboard</h1>
        <p>This page is protected 🔒</p>
      </div>
    </ProtectedRoute>
  );
}