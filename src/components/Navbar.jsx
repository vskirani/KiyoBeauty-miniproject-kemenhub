export default function Navbar() {
  return (
    <header className="fixed left-64 top-0 w-[calc(100%-16rem)] h-16 bg-white border-b shadow-sm flex items-center justify-between px-6 z-50">
      
      {/* Title */}
      <h2 className="text-xl font-semibold tracking-tight">
        Kiyo Beauty
      </h2>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <span className="text-gray-600 text-sm">Hello, User</span>

        <img
          src=""
          className="w-10 h-10 rounded-full"
          alt="User avatar"
        />
      </div>
    </header>
  );
}
