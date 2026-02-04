import { Home, MessageCircle, User } from 'lucide-react';
import { Link, useLocation } from 'react-router';

export function BottomNav() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const navItems = [
    { path: '/', label: 'Início', icon: Home },
    { path: '/messages', label: 'Mensagens', icon: MessageCircle },
    { path: '/profile', label: 'Perfil', icon: User },
  ];

  // Don't show bottom nav on certain pages
  const hideBottomNav = ['/create', '/item/'].some(path => 
    location.pathname.includes(path)
  );

  if (hideBottomNav) return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 z-30">
      <div className="flex justify-around items-center max-w-lg mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-1 py-2 px-4 rounded-[15px] transition-all ${
                active 
                  ? 'text-[#10b981]' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Icon className={`size-6 ${active ? 'fill-[#10b981]/10' : ''}`} />
              <span className="text-xs">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}