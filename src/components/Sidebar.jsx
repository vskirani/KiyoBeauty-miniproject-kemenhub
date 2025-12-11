export default function Sidebar() {
  return (
    <aside className="flex flex-col p-6 fixed left-0 top-0 w-64 h-screen bg-white border-r shadow-sm">
      {/* Logo / Title */}
      <h1 className="text-2xl font-bold mb-10 tracking-tight">Dashboard</h1>

      {/* Menu */}
      <nav className="flex flex-col gap-4 text-gray-700">
      

        <a
          href="#"
          className="hover:text-blue-600 transition font-medium"
        >
          Products
        </a>

        <a
          href="#"
          className="hover:text-blue-600 transition font-medium"
        >
          Orders
        </a>

        <a
          href="#"
          className="hover:text-blue-600 transition font-medium"
        >
          Settings
        </a>
      </nav>

      {/* Bottom Section */}
      <div className="mt-auto text-sm text-gray-500">
        <p>© 2025 My Dashboard</p>
      </div>
    </aside>
  );
}
