import { Search, Armchair, Shirt, Gamepad2, Laptop, MapPin, Plus, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Masonry from 'react-responsive-masonry';
import { donationItems } from '@doaaki/shared/data';
import { categories } from '@doaaki/shared/constants';

export function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [maxDistance, setMaxDistance] = useState<number>(10); // km
  const [showDistanceFilter, setShowDistanceFilter] = useState(false);

  const filteredItems = donationItems.filter(item => {
    const matchesCategory = !selectedCategory || item.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const distanceValue = parseFloat(item.distance.replace(' km', ''));
    const matchesDistance = distanceValue <= maxDistance;
    return matchesCategory && matchesSearch && matchesDistance;
  });

  const getIconComponent = (iconName: string) => {
    const icons: Record<string, any> = {
      Armchair,
      Shirt,
      Gamepad2,
      Laptop
    };
    return icons[iconName];
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-100 pb-4">
        <div className="px-4 pt-6">
          {/* Logo */}
          <div className="mb-6">
            <h1 className="text-[#10b981] text-3xl tracking-tight">DoaAki</h1>
            <p className="text-gray-500 text-sm mt-1">Doe com propósito</p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
            <input
              type="text"
              placeholder="Buscar doações..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-gray-50 rounded-[20px] outline-none focus:bg-gray-100 transition-colors text-gray-900 placeholder:text-gray-400"
            />
          </div>

          {/* Categories */}
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => {
              const Icon = getIconComponent(category.icon);
              const isSelected = selectedCategory === category.name;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(isSelected ? null : category.name)}
                  className={`flex flex-col items-center gap-2 px-4 py-3 rounded-[20px] transition-all flex-shrink-0 ${
                    isSelected 
                      ? 'bg-[#10b981] text-white shadow-lg shadow-emerald-500/30' 
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="size-6" />
                  <span className="text-sm whitespace-nowrap">{category.name}</span>
                </button>
              );
            })}
          </div>

          {/* Distance Filter */}
          <div className="mt-4">
            <button
              onClick={() => setShowDistanceFilter(!showDistanceFilter)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-[20px] transition-all ${
                showDistanceFilter 
                  ? 'bg-[#10b981] text-white shadow-lg shadow-emerald-500/30' 
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
            >
              <SlidersHorizontal className="size-4" />
              <span className="text-sm">Até {maxDistance} km</span>
            </button>
            
            {showDistanceFilter && (
              <div className="mt-3 bg-gray-50 rounded-[20px] p-4">
                <div className="flex gap-2 mb-3">
                  {[2, 5, 10, 20, 50].map(distance => (
                    <button
                      key={distance}
                      onClick={() => setMaxDistance(distance)}
                      className={`flex-1 py-2 px-3 rounded-[15px] text-sm transition-all ${
                        maxDistance === distance 
                          ? 'bg-[#10b981] text-white shadow-md' 
                          : 'bg-white text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {distance} km
                    </button>
                  ))}
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={maxDistance}
                  onChange={(e) => setMaxDistance(Number(e.target.value))}
                  className="w-full accent-[#10b981]"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Items Grid */}
      <div className="px-4 py-6 pb-24">
        <Masonry columnsCount={2} gutter="16px">
          {filteredItems.map((item, index) => (
            <Link 
              key={item.id}
              to={`/item/${item.id}`}
              className="block group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="bg-white rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Condition Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/95 backdrop-blur-sm text-gray-800 px-3 py-1.5 rounded-full text-xs shadow-sm">
                      {item.condition}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-gray-900 mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <MapPin className="size-4 text-[#10b981]" />
                    <span className="text-sm">{item.distance}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Masonry>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">Nenhum item encontrado</p>
          </div>
        )}
      </div>

      {/* Floating Action Button */}
      <Link
        to="/create"
        className="fixed bottom-6 right-6 bg-[#10b981] text-white p-5 rounded-full shadow-2xl shadow-emerald-500/40 hover:bg-[#0ea472] transition-all hover:shadow-emerald-500/50 hover:scale-110 active:scale-100 z-20"
      >
        <Plus className="size-7" />
      </Link>
    </div>
  );
}