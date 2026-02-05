import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, MapPin, Users, Clock } from "lucide-react";
import bgAbout from "@/assets/bg-about.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-20 relative overflow-hidden">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 parallax-bg"
        style={{ backgroundImage: `url(${bgAbout})` }}
      />
      <div className="absolute inset-0 bg-background/50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Sobre a Onestà Contabilidade
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                Nascida em Santa Maria com o propósito de oferecer serviços contábeis especializados para profissionais da área da saúde. Nós entendemos que a gestão fiscal e financeira pode ser uma dor de cabeça. Por isso, simplificamos cada processo, da abertura da sua empresa à otimização dos seus impostos, para que você tenha a tranquilidade de saber que suas finanças estão em boas mãos.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                Nossa missão é simplificar a vida contábil e fiscal dos profissionais 
                de saúde, permitindo que eles se concentrem no que fazem de melhor: 
                cuidar das pessoas.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                Com uma equipe altamente qualificada e atualizada com as constantes 
                mudanças na legislação, oferecemos soluções personalizadas que atendem 
                às necessidades específicas de cada cliente.
              </p>
            </div>
            
            <div className="mt-8">
              
            </div>
          </div>

          <Card className="shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-2">Entre em Contato</h3>
              <p className="text-muted-foreground mb-6">
                Solicite uma consulta e descubra como podemos ajudar.
              </p>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Nome Completo</label>
                  <input id="name" type="text" placeholder="Seu nome completo" className="w-full px-3 py-2 border border-input rounded-md" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">E-mail</label>
                  <input id="email" type="email" placeholder="seu@email.com" className="w-full px-3 py-2 border border-input rounded-md" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Telefone/WhatsApp</label>
                  <input id="phone" type="tel" placeholder="(55) 9 9999-9999" className="w-full px-3 py-2 border border-input rounded-md" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="profession" className="text-sm font-medium">Profissão</label>
                  <input id="profession" type="text" placeholder="Ex: Médico, Dentista" className="w-full px-3 py-2 border border-input rounded-md" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Mensagem</label>
                  <textarea id="message" placeholder="Como podemos ajudá-lo?" rows={3} className="w-full px-3 py-2 border border-input rounded-md"></textarea>
                </div>
                <Button type="submit" className="w-full bg-accent-teal hover:bg-accent-teal/90 text-white">
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

export default About;
