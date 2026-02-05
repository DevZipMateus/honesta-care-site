import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import bgContact from "@/assets/bg-contact.jpg";
import { useParallax } from "@/hooks/use-parallax";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
    message: "",
  });

  const { toast } = useToast();
  const { ref: sectionRef, offset } = useParallax(0.15);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      profession: "",
      message: "",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section ref={sectionRef} id="contato" className="py-20 relative overflow-hidden">
      {/* Parallax Background Image */}
      <div
        className="parallax-scroll pointer-events-none"
        style={{
          backgroundImage: `url(${bgContact})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          transform: `translate3d(0, ${offset}px, 0)`,
        }}
      />

      {/* Glass overlay */}
      <div className="absolute inset-0 bg-muted/70 backdrop-blur-md pointer-events-none" />

      {/* Decorative bronze elements */}
      <div
        className="absolute top-20 left-20 w-36 h-36 bg-secondary/20 rounded-full blur-3xl pointer-events-none"
        style={{ transform: `translate3d(0, ${offset * -0.25}px, 0)` }}
      />
      <div
        className="absolute bottom-10 right-1/4 w-28 h-28 bg-secondary/25 rounded-full blur-3xl pointer-events-none"
        style={{ transform: `translate3d(0, ${offset * 0.2}px, 0)` }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Entre em Contato</h2>
            <p className="text-lg text-muted-foreground">Estamos prontos para ajudar você a economizar nos impostos</p>
          </div>

          <Card className="shadow-lg card-hover-lift bg-secondary/25 border-0">
            <CardHeader className="bg-secondary/25 rounded-t-lg">
              <CardTitle className="text-xl text-secondary-foreground">Envie sua mensagem</CardTitle>
            </CardHeader>
            <CardContent className="bg-secondary/25 rounded-b-lg">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      required
                      className="bg-card"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      required
                      className="bg-card"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(00) 00000-0000"
                      className="bg-card"
                    />
                  </div>
                  <div>
                    <Label htmlFor="profession">Profissão</Label>
                    <Input
                      id="profession"
                      name="profession"
                      value={formData.profession}
                      onChange={handleInputChange}
                      placeholder="Ex: Médico, Dentista..."
                      className="bg-card"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Como podemos ajudar você?"
                    rows={4}
                    required
                    className="bg-card"
                  />
                </div>

                <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
