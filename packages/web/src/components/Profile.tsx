import { ArrowLeft, Star, Award, Leaf, Heart, Package, MessageCircle, Settings, MapPin } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type TabType = 'doados' | 'recebidos';

export function Profile() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>('doados');

  // Mock user data
  const userData = {
    name: 'Ana Costa',
    rating: 4.9,
    reviews: 15,
    badges: [
      { id: 1, name: 'Doador Prata', icon: '🥈', description: '10+ itens doados' },
      { id: 2, name: 'Retirador Pontual', icon: '⏰', description: 'Sempre pontual nas retiradas' },
      { id: 3, name: 'Eco Warrior', icon: '🌱', description: 'Salvou 50kg+ de resíduos' },
    ],
    stats: {
      itemsDonated: 12,
      itemsReceived: 8,
      kgSaved: 67.5,
      co2Reduced: 135,
      points: 240,
    },
    donations: [
      { id: '3', title: 'Kit de Brinquedos Infantis', status: 'Disponível', image: 'https://images.unsplash.com/photo-1553158399-3796bdbc82fd?w=200' },
      { id: '4', title: 'Mesa de Jantar de Madeira', status: 'Doado', image: 'https://images.unsplash.com/photo-1758977404683-d04c315a005b?w=200' },
    ],
    received: [
      { id: '5', title: 'Notebook para Estudos', status: 'Recebido', image: 'https://images.unsplash.com/photo-1668608321466-f164d481f837?w=200' },
      { id: '6', title: 'Estante de Livros', status: 'Em conversa', image: 'https://images.unsplash.com/photo-1657223126839-060ad45b6ba6?w=200' },
    ],
  };

  return (
    <div className="min-h-screen bg-white pb-6">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-100 px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="size-6 text-gray-900" />
          </button>
          <h1 className="text-gray-900">Perfil</h1>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Settings className="size-6 text-gray-500" />
          </button>
        </div>
      </div>

      <div className="px-6 py-6">
        {/* Profile Header */}
        <div className="text-center mb-8">
          <div className="bg-[#10b981] rounded-full size-24 mx-auto mb-4 flex items-center justify-center">
            <span className="text-white text-3xl">{userData.name.charAt(0)}</span>
          </div>
          <h2 className="text-gray-900 mb-2">{userData.name}</h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              <Star className="size-5 text-yellow-500 fill-yellow-500" />
              <span className="text-gray-900">{userData.rating.toFixed(1)}</span>
            </div>
            <span className="text-gray-400">•</span>
            <span className="text-gray-500">{userData.reviews} avaliações</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
            <Award className="size-4 text-[#10b981]" />
            <span className="text-sm text-gray-700">{userData.stats.points} pontos</span>
          </div>
        </div>

        {/* Badges */}
        <div className="mb-8">
          <h3 className="text-gray-900 mb-4">Selos de Confiabilidade</h3>
          <div className="grid grid-cols-3 gap-3">
            {userData.badges.map((badge) => (
              <div key={badge.id} className="bg-gray-50 rounded-[20px] p-4 text-center">
                <div className="text-3xl mb-2">{badge.icon}</div>
                <p className="text-xs text-gray-700 mb-1">{badge.name}</p>
                <p className="text-xs text-gray-500">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Environmental Impact */}
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-[25px] p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="size-6 text-[#10b981]" />
            <h3 className="text-gray-900">Impacto Ambiental</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/80 backdrop-blur-sm rounded-[15px] p-4">
              <Package className="size-5 text-[#10b981] mb-2" />
              <p className="text-2xl text-gray-900 mb-1">{userData.stats.kgSaved} kg</p>
              <p className="text-xs text-gray-600">Objetos com vida nova</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-[15px] p-4">
              <Leaf className="size-5 text-[#10b981] mb-2" />
              <p className="text-2xl text-gray-900 mb-1">{userData.stats.co2Reduced} kg</p>
              <p className="text-xs text-gray-600">CO₂ evitado</p>
            </div>
          </div>

          <div className="mt-4 bg-white/80 backdrop-blur-sm rounded-[15px] p-4 flex items-center gap-3">
            <Heart className="size-12 text-[#10b981]" />
            <div>
              <p className="text-gray-900 mb-1">
                Você já ajudou a evitar {userData.stats.kgSaved}kg de resíduos!
              </p>
              <p className="text-sm text-gray-600">
                Continue doando e fazendo a diferença! 🌍
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-gray-50 rounded-[20px] p-5 text-center">
            <Package className="size-8 text-[#10b981] mx-auto mb-2" />
            <p className="text-3xl text-gray-900 mb-1">{userData.stats.itemsDonated}</p>
            <p className="text-sm text-gray-600">Itens Doados</p>
          </div>
          
          <div className="bg-gray-50 rounded-[20px] p-5 text-center">
            <Heart className="size-8 text-[#10b981] mx-auto mb-2" />
            <p className="text-3xl text-gray-900 mb-1">{userData.stats.itemsReceived}</p>
            <p className="text-sm text-gray-600">Itens Recebidos</p>
          </div>
        </div>

        {/* History Tabs */}
        <div className="mb-6">
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setActiveTab('doados')}
              className={`flex-1 py-3 px-4 rounded-[15px] transition-all ${
                activeTab === 'doados'
                  ? 'bg-[#10b981] text-white shadow-lg shadow-emerald-500/30'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
            >
              Meus Anúncios
            </button>
            <button
              onClick={() => setActiveTab('recebidos')}
              className={`flex-1 py-3 px-4 rounded-[15px] transition-all ${
                activeTab === 'recebidos'
                  ? 'bg-[#10b981] text-white shadow-lg shadow-emerald-500/30'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
            >
              Interesse
            </button>
          </div>

          <div className="space-y-3">
            {(activeTab === 'doados' ? userData.donations : userData.received).map((item) => (
              <div key={item.id} className="bg-gray-50 rounded-[20px] p-4 flex gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="size-20 rounded-[15px] object-cover"
                />
                <div className="flex-1">
                  <h4 className="text-gray-900 mb-2">{item.title}</h4>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      item.status === 'Disponível' 
                        ? 'bg-[#10b981] text-white'
                        : item.status === 'Doado' || item.status === 'Recebido'
                        ? 'bg-gray-200 text-gray-600'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>
                {item.status === 'Em conversa' && (
                  <button className="self-center p-3 bg-white rounded-full hover:bg-gray-100 transition-colors">
                    <MessageCircle className="size-5 text-[#10b981]" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
