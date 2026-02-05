import { ArrowLeft, Send, Calendar, Check, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { donationItems } from '@doaaki/shared/data';

interface Message {
  id: string;
  sender: 'me' | 'donor';
  text: string;
  timestamp: Date;
}

interface PickupRequest {
  id: string;
  date: string;
  time: string;
  status: 'pending' | 'accepted' | 'rejected';
}

export function Messages() {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = donationItems.find(i => i.id === id);
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'me',
      text: 'Olá! Tenho interesse neste item. Ainda está disponível?',
      timestamp: new Date(Date.now() - 3600000),
    },
    {
      id: '2',
      sender: 'donor',
      text: 'Sim! Está disponível. Quando você gostaria de retirar?',
      timestamp: new Date(Date.now() - 3000000),
    },
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [pickupRequest, setPickupRequest] = useState<PickupRequest | null>(null);
  const [scheduleDate, setScheduleDate] = useState('');
  const [scheduleTime, setScheduleTime] = useState('');

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      sender: 'me',
      text: newMessage,
      timestamp: new Date(),
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  const handleSchedulePickup = () => {
    if (!scheduleDate || !scheduleTime) return;

    const request: PickupRequest = {
      id: Date.now().toString(),
      date: scheduleDate,
      time: scheduleTime,
      status: 'pending',
    };

    setPickupRequest(request);
    setShowScheduleModal(false);
    
    // Simulate donor response
    setTimeout(() => {
      setPickupRequest({ ...request, status: 'accepted' });
    }, 2000);
  };

  const handleCompletePickup = () => {
    alert('Parabéns! Você concluiu uma doação. +10 pontos de reputação! 🎉');
    navigate('/profile');
  };

  if (!item) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-400">Conversa não encontrada</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-100 px-4 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="size-6 text-gray-900" />
          </button>
          <div className="flex-1 min-w-0">
            <h2 className="text-gray-900 truncate">{item.donorName}</h2>
            <p className="text-sm text-gray-500 truncate">{item.title}</p>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[75%] rounded-[20px] px-4 py-3 ${
                message.sender === 'me'
                  ? 'bg-[#10b981] text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              <p>{message.text}</p>
              <p className={`text-xs mt-1 ${
                message.sender === 'me' ? 'text-emerald-100' : 'text-gray-500'
              }`}>
                {message.timestamp.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}

        {/* Pickup Request Card */}
        {pickupRequest && (
          <div className="bg-gray-50 rounded-[20px] p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-[#10b981]" />
              <h3 className="text-gray-900">Agendamento de Retirada</h3>
            </div>
            
            <div className="bg-white rounded-[15px] p-4">
              <p className="text-sm text-gray-500 mb-1">Data e Horário</p>
              <p className="text-gray-900">
                {new Date(pickupRequest.date).toLocaleDateString('pt-BR', { 
                  day: '2-digit', 
                  month: 'long',
                  year: 'numeric' 
                })} às {pickupRequest.time}
              </p>
            </div>

            {pickupRequest.status === 'pending' && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="size-2 bg-yellow-500 rounded-full animate-pulse" />
                <span>Aguardando confirmação do doador...</span>
              </div>
            )}

            {pickupRequest.status === 'accepted' && (
              <>
                <div className="flex items-center gap-2 text-sm text-[#10b981]">
                  <Check className="size-5" />
                  <span>Agendamento confirmado!</span>
                </div>
                
                <button
                  onClick={handleCompletePickup}
                  className="w-full bg-[#10b981] text-white py-3 rounded-[15px] hover:bg-[#0ea472] transition-colors"
                >
                  Já Retirei o Item
                </button>
              </>
            )}

            {pickupRequest.status === 'rejected' && (
              <div className="flex items-center gap-2 text-sm text-red-500">
                <X className="size-5" />
                <span>Agendamento recusado. Tente outro horário.</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="sticky bottom-0 bg-white border-t border-gray-100 p-4">
        {!pickupRequest && (
          <button
            onClick={() => setShowScheduleModal(true)}
            className="w-full mb-3 bg-emerald-50 text-[#10b981] py-3 rounded-[15px] hover:bg-emerald-100 transition-colors flex items-center justify-center gap-2"
          >
            <Calendar className="size-5" />
            <span>Agendar Retirada</span>
          </button>
        )}

        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Escreva uma mensagem..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1 px-4 py-3 bg-gray-50 rounded-[20px] outline-none focus:bg-gray-100 transition-colors text-gray-900"
          />
          <button
            onClick={handleSendMessage}
            className="bg-[#10b981] text-white p-3 rounded-full hover:bg-[#0ea472] transition-colors active:scale-95"
          >
            <Send className="size-5" />
          </button>
        </div>
      </div>

      {/* Schedule Modal */}
      {showScheduleModal && (
        <div className="fixed inset-0 bg-black/50 flex items-end justify-center z-50">
          <div className="bg-white rounded-t-[30px] w-full max-w-lg p-6 pb-8 animate-slide-up">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-gray-900">Agendar Retirada</h2>
              <button
                onClick={() => setShowScheduleModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="size-6 text-gray-500" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block mb-2 text-gray-900">Data</label>
                <input
                  type="date"
                  value={scheduleDate}
                  onChange={(e) => setScheduleDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 bg-gray-50 rounded-[15px] outline-none focus:bg-gray-100 transition-colors text-gray-900"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-900">Horário</label>
                <input
                  type="time"
                  value={scheduleTime}
                  onChange={(e) => setScheduleTime(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 rounded-[15px] outline-none focus:bg-gray-100 transition-colors text-gray-900"
                />
              </div>
            </div>

            <button
              onClick={handleSchedulePickup}
              disabled={!scheduleDate || !scheduleTime}
              className={`w-full py-4 rounded-[20px] transition-all ${
                scheduleDate && scheduleTime
                  ? 'bg-[#10b981] text-white hover:bg-[#0ea472] active:scale-[0.98]'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Enviar Solicitação
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
