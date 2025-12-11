export default function Navbar() {
  return (
    <header className="fixed left-16 top-0 w-[calc(100%-4rem)] h-16 bg-white border-b shadow-sm flex items-center justify-between px-6 z-50">
      
      {/* Title */}
      <h2 className="text-xl font-semibold tracking-tight text-[#91C6FA]">
        Kiyo Beauty
      </h2>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <span className="text-gray-600 text-sm font-bold">Kirani </span>

        <img width="48" height="48" src="https://img.icons8.com/color/48/user-female-circle--v5.png" alt="user-female-circle--v5"/>
      </div>
    </header>
  );
}
