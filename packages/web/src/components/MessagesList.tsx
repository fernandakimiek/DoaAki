import { ArrowLeft, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { donationItems } from '@doaaki/shared/data';

export function MessagesList() {
  const navigate = useNavigate();

  // Mock conversations
  const conversations = [
    {
      id: '1',
      item: donationItems[0],
      lastMessage: 'Sim! Está disponível. Quando você gostaria de retirar?',
      timestamp: '10:30',
      unread: 2,
    },
    {
      id: '3',
      item: donationItems[2],
      lastMessage: 'Você: Obrigado! Vou buscar amanhã.',
      timestamp: 'Ontem',
      unread: 0,
    },
  ];

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-100 px-4 py-4">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="size-6 text-gray-900" />
          </button>
          <h1 className="text-gray-900 flex-1">Mensagens</h1>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
          <input
            type="text"
            placeholder="Buscar conversas..."
            className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-[20px] outline-none focus:bg-gray-100 transition-colors text-gray-900 placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="px-4 py-4">
        {conversations.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 mb-2">Nenhuma conversa ainda</p>
            <p className="text-sm text-gray-500">
              Demonstre interesse em um item para iniciar uma conversa
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {conversations.map((conv) => (
              <Link
                key={conv.id}
                to={`/messages/${conv.item.id}`}
                className="flex items-center gap-4 p-4 rounded-[20px] hover:bg-gray-50 transition-colors"
              >
                <img
                  src={conv.item.image}
                  alt={conv.item.title}
                  className="size-16 rounded-[15px] object-cover"
                />
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-gray-900 truncate">{conv.item.donorName}</h3>
                    <span className="text-xs text-gray-500 flex-shrink-0 ml-2">
                      {conv.timestamp}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 truncate mb-1">
                    {conv.item.title}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {conv.lastMessage}
                  </p>
                </div>

                {conv.unread > 0 && (
                  <div className="bg-[#10b981] text-white text-xs size-6 rounded-full flex items-center justify-center flex-shrink-0">
                    {conv.unread}
                  </div>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
