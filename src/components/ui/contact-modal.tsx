import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { X, Send, Phone, Mail, MapPin, Loader2 } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus('idle');

    try {
      // Invia i dati del form direttamente alla funzione send-email
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData) // Invia direttamente i dati del form
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          setSendStatus('success');
          // Reset form
          setFormData({
            name: "",
            surname: "",
            email: "",
            phone: "",
            service: "",
            message: ""
          });
          
          // Chiudi modal dopo 2 secondi
          setTimeout(() => {
            onClose();
            setSendStatus('idle');
          }, 2000);
        } else {
          throw new Error(result.error || 'Errore nell\'invio');
        }
      } else {
        throw new Error('Errore nell\'invio');
      }
    } catch (error) {
      console.error('Errore:', error);
      setSendStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Contattaci
          </DialogTitle>
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-4 top-4"
            onClick={onClose}
          >
            <X className="w-4 h-4" />
          </Button>
        </DialogHeader>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  name="name"
                  placeholder="Nome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="surname"
                  placeholder="Cognome"
                  value={formData.surname}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              
              <Input
                name="phone"
                type="tel"
                placeholder="Telefono"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full p-3 border border-border rounded-md bg-background"
                required
              >
                <option value="">Seleziona un servizio</option>
                <option value="case-prefabbricate">Case Prefabbricate</option>
                <option value="pannelli-solari">Pannelli Solari</option>
                <option value="glamping">Glamping Resort</option>
                <option value="altro">Altro</option>
              </select>
              
              <Textarea
                name="message"
                placeholder="Il tuo messaggio"
                value={formData.message}
                onChange={handleChange}
                className="min-h-[120px]"
                required
              />
              
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-hero hover:opacity-90 text-white"
                disabled={isSending}
              >
                {isSending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Invio in corso...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Invia Messaggio
                  </>
                )}
              </Button>

              {/* Status Messages */}
              {sendStatus === 'success' && (
                <div className="p-3 bg-green-100 border border-green-300 rounded-md text-green-800 text-center">
                  ✅ Messaggio inviato con successo! Ti contatteremo presto.
                </div>
              )}
              
              {sendStatus === 'error' && (
                <div className="p-3 bg-red-100 border border-red-300 rounded-md text-red-800 text-center">
                  ❌ Errore nell'invio. Riprova più tardi.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Informazioni di Contatto</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Indirizzo</p>
                      <p className="text-muted-foreground">Via del Glicine 3, Biancavilla</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Telefono</p>
                      <p className="text-muted-foreground">+393923633730</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">info@ecoconstruct.it</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Orari di Lavoro</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Lunedì - Venerdì</span>
                    <span>8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabato</span>
                    <span>8:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domenica</span>
                    <span>Chiuso</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
