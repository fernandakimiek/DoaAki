import { ArrowLeft, MapPin, Star, User, Clock, MessageCircle } from 'lucide-react';
import { useNavigate, useParams } from 'react-router';
import { useState } from 'react';
import { donationItems } from '@doaaki/shared/data';

export function ItemDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const item = donationItems.find(item => item.id === id);

  if (!item) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-400">Item não encontrado</p>
      </div>
    );
  }

  const handleInterest = () => {
    navigate(`/messages/${id}`);
  };

  const images = item.images || [item.image];

  return (
    <div className="min-h-screen bg-white pb-32">
      {/* Image Carousel */}
      <div className="relative">
        <div className="relative h-[400px] overflow-hidden">
          <img
            src={images[currentImageIndex]}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Image Indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentImageIndex 
                    ? 'w-6 bg-white' 
                    : 'w-2 bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
        
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-4 bg-white/95 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors"
        >
          <ArrowLeft className="size-6 text-gray-900" />
        </button>

        {/* Condition Badge */}
        <div className="absolute top-6 right-4">
          <span className="bg-white/95 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full shadow-lg">
            {item.condition}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        {/* Title */}
        <h1 className="text-gray-900 mb-4">
          {item.title}
        </h1>

        {/* Distance */}
        <div className="flex items-center gap-2 text-gray-500 mb-6">
          <MapPin className="size-5 text-[#10b981]" />
          <span>A {item.distance} de você</span>
        </div>

        {/* Description */}
        <div className="mb-8">
          <h2 className="text-gray-900 mb-3">Descrição</h2>
          <p className="text-gray-600 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Donor Profile */}
        <div className="bg-gray-50 rounded-[20px] p-5 mb-6">
          <h3 className="text-gray-900 mb-4">Perfil do Doador</h3>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-[#10b981] rounded-full p-4">
              <User className="size-6 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-gray-900">{item.donorName}</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1">
                  <Star className="size-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-gray-900">{item.donorRating.toFixed(1)}</span>
                </div>
                <span className="text-gray-400 text-sm">
                  ({item.donorReviews} avaliações)
                </span>
              </div>
            </div>
          </div>

          {/* Pickup Schedule */}
          {item.pickupSchedule && (
            <div className="flex items-start gap-3 bg-white rounded-[15px] p-4">
              <Clock className="size-5 text-[#10b981] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-gray-500 mb-1">Horário preferencial para retirada</p>
                <p className="text-gray-900">{item.pickupSchedule}</p>
              </div>
            </div>
          )}
        </div>

        {/* Map Section */}
        <div className="mb-6">
          <h3 className="text-gray-900 mb-3">Localização Aproximada</h3>
          <div className="bg-gray-100 rounded-[20px] h-48 flex items-center justify-center relative overflow-hidden">
            {/* Simple map placeholder with circular area */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-gray-100"></div>
            <div className="relative z-10">
              <div className="bg-[#10b981]/20 rounded-full p-12">
                <div className="bg-[#10b981]/30 rounded-full p-8">
                  <div className="bg-[#10b981] rounded-full p-4">
                    <MapPin className="size-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-gray-700 shadow-lg">
              Área aproximada de {item.distance}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent">
        <button
          onClick={handleInterest}
          className="w-full bg-[#10b981] text-white py-4 rounded-[20px] shadow-xl shadow-emerald-500/30 hover:bg-[#0ea472] transition-all hover:shadow-2xl hover:shadow-emerald-500/40 active:scale-[0.98]"
        >
          Tenho Interesse
        </button>
      </div>
    </div>
  );
}