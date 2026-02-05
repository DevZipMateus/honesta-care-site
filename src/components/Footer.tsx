import { Mail, MapPin } from "lucide-react";
import logoOnesta from "@/assets/logo-onesta.png";

const Footer = () => {
  return <footer className="bg-primary/95 text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={logoOnesta} alt="Onestà Contabilidade Logo" className="h-16 w-auto mb-4" />
            <p className="text-primary-foreground/70 leading-relaxed text-sm">
              Escritório especializado em contabilidade para profissionais da área da saúde.
            </p>
            <p className="text-primary-foreground/70 leading-relaxed text-sm">
              Comprometidos com a excelência e o sucesso dos nossos clientes.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-6 text-primary-foreground">Nossos Serviços</h4>
            <ul className="space-y-3 text-primary-foreground/70 text-sm">
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span>Contabilidade Completa</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span>Planejamento Tributário</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span>Folha de Pagamento</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span>Consultoria Especializada</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span>Regularização de Clínicas</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span>Gestão Empresarial</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-6 text-primary-foreground">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <a href="mailto:onestacontabilidade@gmail.com" className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm">
                  onestacontabilidade@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/70 text-sm">
                  <p>Santa Maria, RS</p>
                  <p className="mt-1">CNPJ: 60.162.627/0001-70</p>
                </div>
              </div>
              <div className="pt-2 space-y-2">
                <p className="text-primary-foreground/70 font-semibold text-sm mb-3">Redes Sociais</p>
                <a href="https://instagram.com/onestacontabilidade" target="_blank" rel="noopener noreferrer" className="block text-primary-foreground/70 hover:text-secondary transition-colors text-sm">
                  Instagram: @onestacontabilidade
                </a>
                <a href="https://facebook.com/Onestà-Contabilidade" target="_blank" rel="noopener noreferrer" className="block text-primary-foreground/70 hover:text-secondary transition-colors text-sm">
                  Facebook: Onestà Contabilidade
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © 2024 Onestà Contabilidade. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;