
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Users, BookOpen, Trophy, ArrowRight, Heart, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-capacit-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Educação de <span className="bg-gradient-capacit bg-clip-text text-transparent">Qualidade</span> para Todos
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Conectamos pessoas em situação de vulnerabilidade financeira com cursos de alta qualidade, 
                usando inteligência artificial para personalizar recomendações baseadas no seu perfil.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/cadastro">
                  <Button size="lg" className="bg-gradient-capacit hover:opacity-90 text-white">
                    Comece Agora
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  Saiba Mais
                </Button>
              </div>
            </div>
            <div className="animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                alt="Pessoa estudando com laptop" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-capacit rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Estudantes Beneficiados</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-capacit rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">150+</h3>
              <p className="text-gray-600">Cursos Disponíveis</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-capacit rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">95%</h3>
              <p className="text-gray-600">Taxa de Conclusão</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa Missão
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Acreditamos que a educação é um direito fundamental e deve ser acessível a todos, 
              independentemente da situação financeira.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="bg-capacit-blue/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-capacit-blue" />
                </div>
                <CardTitle>Impacto Social</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Transformamos vidas através da educação, criando oportunidades para quem mais precisa 
                  e contribuindo para um mundo mais justo e igualitário.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="bg-capacit-green/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-capacit-green" />
                </div>
                <CardTitle>Personalização</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Nossa IA analisa seu perfil e currículo para recomendar os cursos mais relevantes 
                  para sua carreira e objetivos pessoais.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="bg-capacit-blue/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-capacit-blue" />
                </div>
                <CardTitle>Qualidade</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Parceria com instituições renomadas para garantir cursos de alta qualidade, 
                  com certificações reconhecidas no mercado.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="como-funciona" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-gray-600">
              Um processo simples e intuitivo para conectar você aos melhores cursos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-capacit rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cadastre-se</h3>
              <p className="text-gray-600">
                Crie sua conta e faça upload do seu currículo. Nossa IA analisará suas habilidades 
                e experiências.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-capacit rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Receba Recomendações</h3>
              <p className="text-gray-600">
                Com base no seu perfil, recomendamos cursos personalizados que mais se adequam 
                aos seus objetivos.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-capacit rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Comece a Aprender</h3>
              <p className="text-gray-600">
                Escolha seus cursos favoritos e comece sua jornada de aprendizado com 
                conteúdo de alta qualidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-capacit">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para Transformar sua Carreira?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Junte-se a milhares de pessoas que já mudaram suas vidas através da educação
          </p>
          <Link to="/cadastro">
            <Button size="lg" className="bg-white text-capacit-blue hover:bg-gray-100">
              Cadastre-se Gratuitamente
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
