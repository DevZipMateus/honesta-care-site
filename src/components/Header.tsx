import { Button } from "@/components/ui/button";
import { Menu, Mail } from "lucide-react";
import { useState } from "react";
import logoOnesta from "@/assets/logo-onesta.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#inicio" className="flex items-center space-x-3">
            <img 
              src={logoOnesta} 
              alt="Onestà Logo" 
              className="h-10 w-auto"
            />
            <span className="text-lg font-bold text-primary hidden sm:block">Onestà</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
              Início
            </a>
            <a href="#servicos" className="text-foreground hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <a href="https://app.setfin.com.br/login" target="_blank" rel="noopener noreferrer">
                Acessar conta
              </a>
            </Button>
            <Button variant="outline" size="sm">
              <Mail className="w-4 h-4 mr-2" />
              Contato
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-3">
              <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
                Início
              </a>
              <a href="#servicos" className="text-foreground hover:text-primary transition-colors">
                Serviços
              </a>
              <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
                Sobre
              </a>
              <a href="#contato" className="text-foreground hover:text-primary transition-colors">
                Contato
              </a>
              <div className="pt-3 border-t space-y-2">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://app.setfin.com.br/login" target="_blank" rel="noopener noreferrer">
                    Acessar conta
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  <Mail className="w-4 h-4 mr-2" />
                  Contato
                </Button>
              </div>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;