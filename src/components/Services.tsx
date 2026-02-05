import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { 
  Building2, 
  FileText, 
  Calculator, 
  Users, 
  Briefcase,
  ArrowRight,
  CheckCircle,
  FileCheck
} from "lucide-react";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: Building2,
      title: "Abertura e Legalização de Empresas",
      description: "Abra sua empresa com a estrutura societária mais adequada, sempre com foco na economia tributária.",
      details: {
        subtitle: "Abertura de Empresas Sem Complicações",
        content: [
          "Consultoria para escolha da estrutura societária ideal",
          "Análise de viabilidade e enquadramento tributário",
          "Registro na Junta Comercial e Receita Federal",
          "Obtenção de alvarás e licenças necessárias",
          "Orientação sobre regime tributário (MEI, Simples Nacional, Lucro Presumido)",
          "Acompanhamento completo até a empresa estar funcionando"
        ],
        benefits: [
          "Economia tributária desde o início",
          "Processo rápido e sem burocracia",
          "Suporte especializado durante todo o processo"
        ]
      }
    },
    {
      icon: FileText,
      title: "Escrituração Contábil",
      description: "Registro cronológico e específico de todos os fatos que aconteceram na empresa.",
      details: {
        subtitle: "Contabilidade Completa e Organizada",
        content: [
          "Escrituração de todos os livros contábeis obrigatórios",
          "Elaboração de balanços e demonstrações financeiras",
          "Conciliação bancária e controle de contas",
          "Análise de custos e despesas",
          "Relatórios gerenciais personalizados",
          "Backup digital de toda documentação"
        ],
        benefits: [
          "Informações financeiras sempre atualizadas",
          "Tomada de decisão baseada em dados reais",
          "Cumprimento de todas as obrigações legais"
        ]
      }
    },
    {
      icon: Calculator,
      title: "Escrituração Fiscal",
      description: "Todas as empresas nacionais têm a obrigação de informar ao governo sobre suas movimentações financeiras, fiscais e contábeis.",
      details: {
        subtitle: "Gestão Fiscal Completa e Estratégica",
        content: [
          "Apuração e recolhimento de todos os impostos",
          "Entrega de obrigações acessórias (SPED, ECF, DEFIS)",
          "Planejamento tributário personalizado",
          "Análise de benefícios fiscais disponíveis",
          "Acompanhamento de mudanças na legislação",
          "Suporte em fiscalizações e autuações"
        ],
        benefits: [
          "Redução legal da carga tributária",
          "Evita multas e penalidades",
          "Segurança jurídica nas operações"
        ]
      }
    },
    {
      icon: Users,
      title: "Departamento Pessoal",
      description: "Tem como objetivo identificar melhorias nas áreas de RH das empresas.",
      details: {
        subtitle: "Gestão Completa de Recursos Humanos",
        content: [
          "Folha de pagamento e benefícios",
          "Admissões, alterações e demissões",
          "Controle de ponto e banco de horas",
          "Cálculos trabalhistas e rescisões",
          "Envio de obrigações (eSocial, CAGED, RAIS)",
          "Consultoria em direito trabalhista"
        ],
        benefits: [
          "Compliance trabalhista garantido",
          "Redução de riscos trabalhistas",
          "Otimização de custos com pessoal"
        ]
      }
    },
    {
      icon: Briefcase,
      title: "Consultoria Empresarial",
      description: "Conte com especialistas para atender as necessidades legais da sua empresa.",
      details: {
        subtitle: "Consultoria Estratégica para o Crescimento",
        content: [
          "Análise financeira e econômica da empresa",
          "Planejamento estratégico e orçamentário",
          "Reestruturação societária e operacional",
          "Consultoria em fusões e aquisições",
          "Avaliação de investimentos e projetos",
          "Orientação em questões societárias"
        ],
        benefits: [
          "Decisões estratégicas fundamentadas",
          "Crescimento sustentável e organizado",
          "Maximização dos resultados empresariais"
        ]
      }
    },
    {
      icon: FileCheck,
      title: "Regularização e Documentação",
      description: "Regularização completa da sua empresa com todos os documentos e alvarás necessários.",
      details: {
        subtitle: "Documentação Completa e Regularização",
        content: [
          "Alvará de funcionamento municipal",
          "Alvará sanitário e vigilância sanitária",
          "Licença do corpo de bombeiros",
          "Licenças ambientais quando necessário",
          "Registros em conselhos profissionais",
          "Regularização de pendências documentais",
          "Renovação de licenças e alvarás",
          "Acompanhamento de processos administrativos"
        ],
        benefits: [
          "Empresa totalmente regularizada",
          "Funcionamento sem riscos legais",
          "Suporte completo em fiscalizações"
        ]
      }
    }
  ];

  const steps = [
    {
      id: 1,
      title: "Diagnóstico",
      description: "Análise completa da situação atual da sua empresa.",
      icon: FileText,
    },
    {
      id: 2,
      title: "Estratégia",
      description: "Planejamento personalizado para otimização fiscal.",
      icon: Building2,
    },
    {
      id: 3,
      title: "Execução",
      description: "Implementação das soluções contábeis adequadas.",
      icon: Calculator,
    },
    {
      id: 4,
      title: "Monitoramento",
      description: "Acompanhamento contínuo dos resultados obtidos.",
      icon: CheckCircle,
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-subtle relative overflow-hidden">
      {/* Animated Lines Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
              <stop offset="50%" stopColor="hsl(var(--accent-teal))" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          
          {/* Animated flowing lines */}
          <path 
            d="M0,100 Q300,50 600,100 T1200,100" 
            stroke="url(#lineGradient)" 
            strokeWidth="2" 
            fill="none"
            className="animate-pulse"
            style={{ 
              animation: 'flow 8s ease-in-out infinite',
              animationDelay: '0s'
            }}
          />
          <path 
            d="M0,200 Q400,150 800,200 T1200,200" 
            stroke="url(#lineGradient)" 
            strokeWidth="1.5" 
            fill="none"
            className="animate-pulse"
            style={{ 
              animation: 'flow 10s ease-in-out infinite',
              animationDelay: '2s'
            }}
          />
          <path 
            d="M0,300 Q500,250 1000,300 T1200,300" 
            stroke="url(#lineGradient)" 
            strokeWidth="1" 
            fill="none"
            className="animate-pulse"
            style={{ 
              animation: 'flow 12s ease-in-out infinite',
              animationDelay: '4s'
            }}
          />
          <path 
            d="M0,500 Q350,450 700,500 T1200,500" 
            stroke="url(#lineGradient)" 
            strokeWidth="1.5" 
            fill="none"
            className="animate-pulse"
            style={{ 
              animation: 'flow 9s ease-in-out infinite',
              animationDelay: '1s'
            }}
          />
          <path 
            d="M0,650 Q450,600 900,650 T1200,650" 
            stroke="url(#lineGradient)" 
            strokeWidth="2" 
            fill="none"
            className="animate-pulse"
            style={{ 
              animation: 'flow 11s ease-in-out infinite',
              animationDelay: '3s'
            }}
          />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 opacity-0 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Serviços Especializados para Profissionais da Saúde
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            Gestão e assessoria especializada para médicos, dentistas, fisioterapeutas, nutricionistas, psicólogos e demais profissionais da área da saúde. Simplificamos sua gestão financeira para que você foque no que mais importa: cuidar das pessoas.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Services Grid */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className={`group card-hover-lift hover:border-primary/30 opacity-0 animate-fadeInUp`}
                  style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                      <service.icon className="w-8 h-8 text-primary icon-rotate-hover" />
                    </div>
                    <CardTitle className="text-lg text-primary">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-muted-foreground mb-4">
                      {service.description}
                    </CardDescription>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          Saiba mais
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-3 text-2xl">
                            <service.icon className="w-8 h-8 text-primary" />
                            {service.details.subtitle}
                          </DialogTitle>
                          <DialogDescription className="text-base mt-4">
                            {service.description}
                          </DialogDescription>
                        </DialogHeader>
                        
                        <div className="space-y-6 mt-6">
                          <div>
                            <h4 className="font-semibold text-lg mb-3 text-primary">O que incluímos:</h4>
                            <ul className="space-y-2">
                              {service.details.content.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <CheckCircle className="w-4 h-4 text-accent-teal mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-lg mb-3 text-primary">Principais benefícios:</h4>
                            <ul className="space-y-2">
                              {service.details.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <CheckCircle className="w-4 h-4 text-accent-teal mt-0.5 flex-shrink-0" />
                                  <span className="text-sm font-medium">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="bg-gradient-to-r from-primary/5 to-accent-teal/5 p-4 rounded-lg">
                            <p className="text-center text-sm text-muted-foreground mb-3">
                              Pronto para transformar sua empresa?
                            </p>
                            <Button 
                              className="w-full bg-green-600 hover:bg-green-700 text-white"
                              onClick={() => window.open('https://wa.me/5555991295341?text=Olá! Gostaria de solicitar um orçamento para ' + service.title + '.', '_blank')}
                            >
                              💬 Solicitar Orçamento
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Process Timeline */}
          <div className="lg:col-span-1">
            <div className="glass-effect rounded-2xl p-6 shadow-lg border border-primary/20 sticky top-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                  Nosso Processo
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Como Trabalhamos
                </h3>
                <p className="text-sm text-muted-foreground">
                  Processo estruturado para garantir eficiência e resultados
                </p>
              </div>

              <div className="space-y-6">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.id} className="flex items-start gap-4 group">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent-teal flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          <Icon className="w-6 h-6 text-white group-hover:animate-pulse" />
                        </div>
                        {index < steps.length - 1 && (
                          <div className="w-px h-8 bg-gradient-to-b from-primary/30 to-transparent ml-6 mt-2"></div>
                        )}
                      </div>
                      <div className="flex-1 pb-2">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">
                            {step.id}
                          </span>
                          <h4 className="font-bold text-primary">
                            {step.title}
                          </h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-primary/20">
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => window.open('https://wa.me/5555991295341?text=Olá! Gostaria de iniciar o processo de contabilidade com a Onestà.', '_blank')}
                >
                  💬 Iniciar Processo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;