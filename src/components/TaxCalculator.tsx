import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, ArrowRight, TrendingUp } from "lucide-react";

const TaxCalculator = () => {
  const [revenue, setRevenue] = useState("");
  const [results, setResults] = useState<any>(null);
  const [animatedValue, setAnimatedValue] = useState(0);
  const [showChart, setShowChart] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateTax = () => {
    const monthlyRevenue = parseFloat(revenue) || 0;
    
    if (monthlyRevenue <= 0) {
      setResults(null);
      setShowChart(false);
      return;
    }
    
    setIsCalculating(true);
    
    // Cálculos para profissionais da saúde
    const currentTaxRate = 0.27; // 27% sem planejamento
    const optimizedTaxRate = 0.114; // 11,4% com planejamento tributário
    
    setTimeout(() => {
      const currentTax = monthlyRevenue * currentTaxRate;
      const optimizedTax = monthlyRevenue * optimizedTaxRate;
      const savings = currentTax - optimizedTax;
      const percentage = ((savings / currentTax) * 100).toFixed(1);

      const calculatedResults = {
        currentTax,
        optimizedTax,
        savings,
        percentage: parseFloat(percentage)
      };

      setResults(calculatedResults);
      setShowChart(true);
      setIsCalculating(false);
      
      // Animate the savings value
      setAnimatedValue(0);
      const duration = 2000;
      const steps = 60;
      const increment = savings / steps;
      
      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        setAnimatedValue(increment * currentStep);
        
        if (currentStep >= steps) {
          clearInterval(timer);
          setAnimatedValue(savings);
        }
      }, duration / steps);
    }, 800);
  };

  return (
    <section id="calculadora" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 leading-tight">
              Descubra Agora Quanto Você Pode Economizar em Impostos
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Calcule de forma rápida e gratuita quanto você pode economizar mensalmente com nosso planejamento tributário especializado para profissionais da saúde.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Calculator Form */}
            <div className="order-1 lg:order-1">
              <Card className="shadow-lg border border-primary/20">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Calcule Sua Economia
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Informe apenas seu faturamento mensal
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="revenue" className="text-sm font-medium text-primary">
                        FATURAMENTO MENSAL
                      </Label>
                      <Input
                        id="revenue"
                        type="number"
                        placeholder="Digite aqui seu faturamento mensal"
                        value={revenue}
                        onChange={(e) => setRevenue(e.target.value)}
                        className="mt-2 text-lg h-14 border-2 border-muted focus:border-primary"
                      />
                    </div>

                    <Button 
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
                      onClick={calculateTax}
                      disabled={!revenue || parseFloat(revenue) <= 0}
                    >
                      <Calculator className="w-5 h-5 mr-2" />
                      Calcular Economia
                    </Button>

                    {isCalculating && (
                      <div className="text-center py-8">
                        <div className="inline-flex items-center px-4 py-2 bg-accent-teal/10 rounded-full">
                          <TrendingUp className="w-4 h-4 text-accent-teal mr-2 animate-pulse" />
                          <span className="text-sm text-accent-teal font-medium">
                            Calculando sua economia...
                          </span>
                        </div>
                      </div>
                    )}

                    {!results && !isCalculating && (
                      <div className="text-center py-4">
                        <Calculator className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">
                          Informe seu faturamento e clique em "Calcular"
                        </p>
                      </div>
                    )}

                    {results && (
                      <div className="space-y-4 lg:hidden">
                        <div className="text-center pt-4">
                          <Button 
                            size="lg" 
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold"
                        onClick={() => window.open('https://wa.me/5555991295341?text=Olá! Vi a calculadora no site e gostaria de saber mais sobre como economizar nos impostos.', '_blank')}
                      >
                        FALAR NO WHATSAPP
                      </Button>
                          <p className="text-xs text-muted-foreground mt-2">
                            Consulta gratuita • Resposta imediata
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Side - Results */}
            <div className="order-3 lg:order-2">
              {results && showChart && (
                <div className="bg-gradient-to-br from-primary/5 to-accent-teal/5 rounded-2xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold text-primary mb-6 text-center">
                    Sua Economia Potencial
                  </h3>
                  
                   {/* Rising Graph Animation */}
                  <div className="relative mb-6">
                    <div className="bg-gradient-to-t from-primary/5 to-transparent rounded-lg p-6 h-40">
                      <div className="flex justify-between items-end h-full">
                        {/* Current Tax Bar */}
                        <div className="flex flex-col items-center h-full justify-end">
                          <div 
                            className="bg-destructive/80 rounded-t-lg w-12 transition-all duration-1000 ease-out flex items-end justify-center pb-2"
                            style={{ 
                              height: showChart ? '85%' : '0%',
                              minHeight: showChart ? '60px' : '0px'
                            }}
                          >
                            {showChart && <span className="text-white text-xs font-bold">27%</span>}
                          </div>
                          <span className="text-xs text-muted-foreground mt-2 text-center">Sem<br/>Planejamento</span>
                        </div>

                        {/* Arrow showing reduction */}
                        <div className="flex items-center mb-8">
                          <ArrowRight className="w-6 h-6 text-accent-teal animate-pulse" />
                        </div>
                        
                        {/* Optimized Tax Bar */}
                        <div className="flex flex-col items-center h-full justify-end">
                          <div 
                            className="bg-gradient-to-t from-accent-teal to-accent-teal/80 rounded-t-lg w-12 transition-all duration-1500 delay-500 ease-out flex items-end justify-center pb-2"
                            style={{ 
                              height: showChart ? '35%' : '0%',
                              minHeight: showChart ? '30px' : '0px'
                            }}
                          >
                            {showChart && <span className="text-white text-xs font-bold">11,4%</span>}
                          </div>
                          <span className="text-xs text-muted-foreground mt-2 text-center">Com<br/>Onestà</span>
                        </div>
                      </div>
                      
                      {/* Savings indicator */}
                      {showChart && (
                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                          <div className="bg-accent-teal text-white px-3 py-1 rounded-full text-xs font-bold animate-fade-in">
                            {results.percentage}% menos impostos!
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Main Comparison Cards */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {/* Situação Atual */}
                    <div className="bg-white border-2 border-muted rounded-xl p-4 relative">
                      <div className="text-center">
                        <div className="text-xs font-medium text-muted-foreground mb-2">SEM PLANEJAMENTO</div>
                        <div className="text-2xl font-bold text-foreground mb-1">
                          R$ {results.currentTax.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                        </div>
                        <div className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                          27% do faturamento
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 bg-muted text-muted-foreground text-xs px-2 py-1 rounded-full">
                        ATUAL
                      </div>
                    </div>

                    {/* Situação com Onestà */}
                    <div className="bg-white border-2 border-primary/30 rounded-xl p-4 relative">
                      <div className="text-center">
                        <div className="text-xs font-medium text-primary mb-2">COM ONESTÀ</div>
                        <div className="text-2xl font-bold text-primary mb-1">
                          R$ {results.optimizedTax.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                        </div>
                        <div className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                          11,4% do faturamento
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
                        OTIMIZADO
                      </div>
                    </div>
                  </div>

                  {/* Destaque da Economia */}
                  <div className="bg-gradient-primary rounded-xl p-6 text-white text-center mb-6">
                    <div className="text-sm mb-2 opacity-90 font-medium">
                      SUA ECONOMIA MENSAL
                    </div>
                    <div className="text-4xl font-bold mb-3">
                      R$ {animatedValue.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="text-lg font-medium bg-white/20 rounded-full px-4 py-1">
                        {results.percentage}% de economia
                      </div>
                    </div>
                    <div className="text-xs opacity-90">
                      Valor que você deixa de pagar mensalmente
                    </div>
                  </div>

                  {/* Projeções Temporais */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white border border-muted rounded-lg p-4 text-center">
                      <div className="text-xs text-muted-foreground mb-1 font-medium">ECONOMIA ANUAL</div>
                      <div className="text-xl font-bold text-foreground">
                        R$ {(results.savings * 12).toLocaleString('pt-BR')}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Em 12 meses
                      </div>
                    </div>
                    <div className="bg-white border border-muted rounded-lg p-4 text-center">
                      <div className="text-xs text-muted-foreground mb-1 font-medium">ECONOMIA EM 5 ANOS</div>
                      <div className="text-xl font-bold text-foreground">
                        R$ {(results.savings * 60).toLocaleString('pt-BR')}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Potencial de investimento
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Button for Desktop */}
                  <div className="hidden lg:block">
                    <Button 
                      size="lg" 
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold"
                      onClick={() => window.open('https://wa.me/5555991295341?text=Olá! Vi a calculadora no site e gostaria de saber mais sobre como economizar nos impostos.', '_blank')}
                    >
                      FALAR NO WHATSAPP
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2 text-center">
                      Consulta gratuita • Resposta imediata
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile WhatsApp Button - Shows below results */}
          {results && (
            <div className="lg:hidden mt-8">
              <div className="text-center">
                <Button 
                  size="lg" 
                  className="w-full max-w-md bg-green-600 hover:bg-green-700 text-white font-semibold"
                  onClick={() => window.open('https://wa.me/5555991295341?text=Olá! Vi a calculadora no site e gostaria de saber mais sobre como economizar nos impostos.', '_blank')}
                >
                  FALAR NO WHATSAPP
                </Button>
                <p className="text-xs text-muted-foreground mt-2">
                  Consulta gratuita • Resposta imediata
                </p>
              </div>
            </div>
          )}
         </div>
      </div>
    </section>
  );
};

export default TaxCalculator;