"use client";

function Header() {
  const closeDrawer = () => document?.getElementById("drawer")?.click();

  const data = [
    { href: "#technical-support", text: "Technical Support" },
    { href: "#how-it-works", text: "How it works" },
    { href: "#roadmap", text: "Roadmap" },
    { href: "#faq", text: "FAQ" },
    { href: "http://lucky-pixel.vercel.app/", text: "VISIT" },
  ];

  return (
    <header className="w-full py-6 fixed top-0 z-50">
      <div className="container mx-auto flex items justify-end">
        <div className="flex items-center gap-x-3">
          <nav className="hidden md:flex text-main text-lg font-normal mr-6">
            <ul className="flex space-x-5">
              {data.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="hover:text-gray-300">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button className="block md:hidden">
            <div className="drawer drawer-end">
              <input id="drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label htmlFor="drawer">
                  <img src="sidebar_button.png" alt="Favicon" />
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                />
                <nav className="menu p-4 py-10 w-60 min-h-full bg-dark text-main text-[20px]">
                  <ul className="flex flex-col gap-10">
                    {data.map((item, index) => (
                      <li key={index}>
                        <a
                          href={item.href}
                          className="hover:text-gray-300"
                          onClick={closeDrawer}
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
export default Header;
