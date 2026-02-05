import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/healthcare-professionals-bg.jpg";
const Hero = () => {
  return <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Profissionais da área da saúde trabalhando" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-8 opacity-0 animate-slideInDown" style={{
            animationDelay: '0.2s'
          }}>
              
              <div className="text-left">
                <h1 className="text-3xl md:text-4xl text-white leading-tight font-bold xl:text-5xl">
                  Gestão e Assessoria
                  <span className="block gradient-text-animated"> para a Área da Saúde</span>
                </h1>
              </div>
            </div>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl opacity-0 animate-fadeInUp" style={{
            animationDelay: '0.8s'
          }}>Soluções contábeis completas para profissionais da área da saúde ao seu lado. Expertise, confiança e resultados que impulsionam seu sucesso profissional.</p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 opacity-0 animate-fadeInUp" style={{
            animationDelay: '1.1s'
          }}>
              <Button size="lg" className="bg-accent-teal hover:bg-accent-teal/90 text-white shadow-glow pulse-glow hover-scale-up" onClick={() => window.open('https://wa.me/5555991295341?text=Olá! Gostaria de saber mais sobre os serviços da Onestà Contabilidade.', '_blank')}>
                Fale Conosco
                <ArrowRight className="ml-2 w-5 h-5 animate-bounce-subtle" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.getElementById('servicos')?.scrollIntoView({
              behavior: 'smooth'
            })} className="border-white/80 hover:border-white backdrop-blur-sm text-slate-100 bg-transparent">
                Nossos Serviços
              </Button>
            </div>

          </div>
          
          {/* Video Section */}
          <div className="hidden lg:flex justify-center items-center h-full opacity-0 animate-fadeInUp" style={{
            animationDelay: '1.6s'
          }}>
            <div className="w-full h-5/6 max-w-lg">
              <video 
                autoPlay 
                muted 
                playsInline
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
                style={{ transform: 'scaleX(-1)' }}
                onEnded={(e) => {
                  e.currentTarget.style.display = 'block';
                }}
              >
                <source src="/hero-video.webm" type="video/webm" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;