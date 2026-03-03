import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/one_merge_logo.svg';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/story' },
    { name: 'Join the Crew', path: '/careers' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Talk to us', path: '/contact' },
  ];

  return (
    <>
      {/* FIX 1: Replaced `left-0 right-0` with `left-0 w-full max-w-[100vw] box-border`. 
        This guarantees the header will never exceed the physical width of the mobile screen.
      */}
      <header className="fixed top-0 left-0 w-full max-w-[100vw] h-16 lg:h-24 z-50 flex items-center justify-between px-4 lg:px-10 pointer-events-none box-border">
        
        {/* FIX 2: Added `shrink-0` so the logo is never squished or forced out of bounds */}
        <Link to="/" className="pointer-events-auto flex items-center shrink-0">
          <img 
            src={logo} 
            alt="OneMerge Logo" 
            className="w-32 sm:w-48 lg:w-64 object-contain lg:scale-110 origin-left" 
          />
        </Link>

        {/* MIDDLE: Hidden on mobile entirely */}
        <nav className="pointer-events-auto hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center bg-white/40 backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-white/60 ring-1 ring-black/[0.03] rounded-full p-1.5 transition-all duration-300">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-5 py-2 rounded-full text-[14px] font-semibold tracking-tight transition-all duration-400 ease-out ${
                  isActive
                    ? 'bg-black text-white shadow-[0_2px_12px_rgba(0,0,0,0.15)]' 
                    : 'text-gray-500 hover:text-black hover:bg-white/60'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* FIX 3: Added `shrink-0` to the container to ensure the mobile menu icon stays anchored to the right edge */}
        <div className="pointer-events-auto flex items-center justify-end gap-2 lg:gap-4 shrink-0">
          
          <Link 
            to="/contact" 
            className="hidden lg:flex items-center gap-3 bg-black text-white pl-6 pr-1.5 py-1.5 rounded-full text-[14px] font-semibold tracking-tight transition-all duration-400 ease-out hover:shadow-[0_8px_20px_-6px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 group"
          >
            Book a Call
            <div className="bg-white text-black rounded-full p-2 flex items-center justify-center transition-all duration-400 ease-out group-hover:rotate-12 group-hover:scale-110">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden shrink-0 rounded-full h-10 w-10 bg-white/80 backdrop-blur-md hover:bg-white border border-gray-200 shadow-sm"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-5 w-5 text-gray-900 transition-transform duration-300 rotate-90" />
            ) : (
              <Menu className="h-5 w-5 text-gray-900 transition-transform duration-300" />
            )}
          </Button>
        </div>
      </header>

      {/* FIX 4: Swapped `inset-0` for `top-0 left-0 w-full h-[100dvh]`.
        `100dvh` respects mobile browser UI (like Safari's URL bar) and prevents weird scrolling bugs inside the menu.
      */}
      <div
        className={`fixed top-0 left-0 w-full h-[100dvh] z-[60] bg-white/95 backdrop-blur-3xl transition-all duration-500 ease-in-out lg:hidden flex flex-col ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="flex justify-end p-6">
            <Button variant="ghost" onClick={() => setIsOpen(false)}>
                <X className="h-8 w-8 text-black" />
            </Button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center px-6 space-y-8">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-3xl font-space-grotesk font-bold tracking-tight transition-all duration-500 ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              } ${
                location.pathname === item.path
                  ? 'text-black'
                  : 'text-gray-400'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <Link 
            to="/contact"
            className="mt-8 flex items-center gap-3 bg-black text-white pl-8 pr-3 py-3 rounded-full text-lg font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Book a Call
            <div className="bg-white text-black rounded-full p-2 flex items-center justify-center">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;