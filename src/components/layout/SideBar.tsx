import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const path = usePathname();

  const menuData = [
    { name: "Home", href: "/" },
    { name: "Catalog", href: "/catalog" },
    { name: "Cart", href: "/cart" },
    { name: "Profile", href: "/profile" },
  ];

  return (
    <>
      <Menu
        onClick={() => setIsOpen(true)}
        className="fixed top-[22px] left-4 z-50"
        size={30}
      />

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-[320px] bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b text-black">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <X />
          </button>
        </div>

        <nav className="p-4 space-y-4">
          {menuData.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className={`block`}
              onClick={() => setIsOpen(false)}
            >
              <span
                className={`block text-gray-700 hover:text-black ${
                  path === href ? "text-blue-600! font-semibold" : ""
                }`}
              >
                {name}
              </span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
