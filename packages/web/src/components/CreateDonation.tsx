import { ArrowLeft, Upload, Check, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '@doaaki/shared/constants';

type Step = 1 | 2 | 3;

export function CreateDonation() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<Step>(1);
  
  // Form state
  const [images, setImages] = useState<string[]>([]);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [condition, setCondition] = useState<'Novo' | 'Bom estado' | 'Usado'>('Bom estado');
  const [description, setDescription] = useState('');
  const [pickupSchedule, setPickupSchedule] = useState('');
  const [locationConfirmed, setLocationConfirmed] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // In a real app, would upload to server and get URLs
      // For demo, using placeholder
      const newImages = Array.from(files).map(() => 
        'https://via.placeholder.com/400x400?text=Sua+Foto'
      );
      setImages([...images, ...newImages]);
    }
  };

  const handleSubmit = () => {
    // In a real app, would submit to backend
    alert('Doação criada com sucesso! Em breve ela estará disponível no feed.');
    navigate('/');
  };

  const canProceedStep1 = images.length > 0 && title && category;
  const canProceedStep2 = description && pickupSchedule;
  const canSubmit = locationConfirmed;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-100 px-4 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => currentStep === 1 ? navigate(-1) : setCurrentStep((currentStep - 1) as Step)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="size-6 text-gray-900" />
          </button>
          <div className="flex-1">
            <h1 className="text-gray-900">Nova Doação</h1>
            <p className="text-sm text-gray-500">Passo {currentStep} de 3</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#10b981] transition-all duration-300"
            style={{ width: `${(currentStep / 3) * 100}%` }}
          />
        </div>
      </div>

      <div className="px-6 py-6 pb-32">
        {/* Step 1: Photos & Basic Info */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-gray-900 mb-2">Fotos do Item</h2>
              <p className="text-gray-500 text-sm mb-4">
                Adicione até 5 fotos para mostrar o estado do item
              </p>
              
              <div className="grid grid-cols-3 gap-3">
                {images.map((img, index) => (
                  <div key={index} className="aspect-square rounded-[15px] overflow-hidden bg-gray-100">
                    <img src={img} alt={`Upload ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
                
                {images.length < 5 && (
                  <label className="aspect-square rounded-[15px] border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:border-[#10b981] hover:bg-emerald-50 transition-colors">
                    <Upload className="size-6 text-gray-400 mb-1" />
                    <span className="text-xs text-gray-500">Adicionar</span>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
            </div>

            <div>
              <label className="block mb-2 text-gray-900">Título do Item</label>
              <input
                type="text"
                placeholder="Ex: Mesa de Jantar de Madeira"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 rounded-[15px] outline-none focus:bg-gray-100 transition-colors text-gray-900"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-900">Categoria</label>
              <div className="grid grid-cols-2 gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setCategory(cat.name)}
                    className={`p-4 rounded-[15px] transition-all ${
                      category === cat.name
                        ? 'bg-[#10b981] text-white shadow-lg shadow-emerald-500/30'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block mb-2 text-gray-900">Estado de Conservação</label>
              <div className="grid grid-cols-3 gap-2">
                {(['Novo', 'Bom estado', 'Usado'] as const).map((cond) => (
                  <button
                    key={cond}
                    onClick={() => setCondition(cond)}
                    className={`py-3 px-3 rounded-[15px] text-sm transition-all ${
                      condition === cond
                        ? 'bg-[#10b981] text-white shadow-md'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {cond}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Description & Schedule */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div>
              <label className="block mb-2 text-gray-900">Descrição</label>
              <p className="text-gray-500 text-sm mb-3">
                Conte um pouco sobre o item, suas características e motivo da doação
              </p>
              <textarea
                placeholder="Ex: Linda mesa em madeira maciça, com 6 lugares..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={6}
                className="w-full px-4 py-3 bg-gray-50 rounded-[15px] outline-none focus:bg-gray-100 transition-colors text-gray-900 resize-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-900">Horário Preferencial para Retirada</label>
              <p className="text-gray-500 text-sm mb-3">
                Quando a pessoa poderá retirar o item?
              </p>
              <div className="space-y-2">
                {[
                  'Dias úteis, 9h-18h',
                  'Finais de semana, 9h-18h',
                  'Qualquer horário (combinar)',
                  'Somente à tarde',
                ].map((schedule) => (
                  <button
                    key={schedule}
                    onClick={() => setPickupSchedule(schedule)}
                    className={`w-full p-4 rounded-[15px] text-left transition-all flex items-center gap-3 ${
                      pickupSchedule === schedule
                        ? 'bg-[#10b981] text-white shadow-lg shadow-emerald-500/30'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Clock className="size-5 flex-shrink-0" />
                    <span>{schedule}</span>
                    {pickupSchedule === schedule && (
                      <Check className="size-5 ml-auto" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Location */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-gray-900 mb-2">Confirme sua Localização</h2>
              <p className="text-gray-500 text-sm mb-4">
                Sua localização exata não será compartilhada. Mostraremos apenas uma área aproximada.
              </p>
            </div>

            <div className="bg-gray-100 rounded-[20px] h-64 flex items-center justify-center relative overflow-hidden">
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
                Sua localização atual
              </div>
            </div>

            <div className="bg-emerald-50 rounded-[20px] p-5">
              <h3 className="text-gray-900 mb-2">Privacidade Garantida</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <Check className="size-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                  <span>Apenas uma área aproximada será exibida</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                  <span>Endereço exato compartilhado apenas via chat</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                  <span>Você decide quando revelar informações</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => setLocationConfirmed(!locationConfirmed)}
              className={`w-full p-4 rounded-[15px] transition-all flex items-center gap-3 ${
                locationConfirmed
                  ? 'bg-[#10b981] text-white shadow-lg shadow-emerald-500/30'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className={`size-6 rounded-full border-2 flex items-center justify-center ${
                locationConfirmed ? 'border-white' : 'border-gray-300'
              }`}>
                {locationConfirmed && <Check className="size-4" />}
              </div>
              <span>Confirmo que a localização está correta</span>
            </button>
          </div>
        )}
      </div>

      {/* Bottom Action Button */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent">
        {currentStep < 3 ? (
          <button
            onClick={() => setCurrentStep((currentStep + 1) as Step)}
            disabled={currentStep === 1 ? !canProceedStep1 : !canProceedStep2}
            className={`w-full py-4 rounded-[20px] transition-all ${
              (currentStep === 1 ? canProceedStep1 : canProceedStep2)
                ? 'bg-[#10b981] text-white shadow-xl shadow-emerald-500/30 hover:bg-[#0ea472] active:scale-[0.98]'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Continuar
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!canSubmit}
            className={`w-full py-4 rounded-[20px] transition-all ${
              canSubmit
                ? 'bg-[#10b981] text-white shadow-xl shadow-emerald-500/30 hover:bg-[#0ea472] active:scale-[0.98]'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Publicar Doação
          </button>
        )}
      </div>
    </div>
  );
}
