
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, FileText, Search, Filter, Star, Clock, DollarSign, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PerfilUsuario = () => {
  const [resumeUploaded, setResumeUploaded] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    price: 'all',
    duration: 'all',
    type: 'all'
  });
  const { toast } = useToast();

  // Simulated AI-recommended courses
  const recommendedCourses = [
    {
      id: 1,
      name: 'Desenvolvimento Web Completo',
      description: 'Aprenda HTML, CSS, JavaScript e React do zero',
      duration: '40 horas',
      price: 'Gratuito',
      rating: 4.8,
      type: 'Online',
      institution: 'TechEdu',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop',
      matchReason: 'Baseado em sua experiência em tecnologia'
    },
    {
      id: 2,
      name: 'Marketing Digital Estratégico',
      description: 'Estratégias modernas de marketing para redes sociais',
      duration: '25 horas',
      price: 'R$ 89,90',
      rating: 4.6,
      type: 'Online',
      institution: 'MarketPro',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop',
      matchReason: 'Complementa suas habilidades de comunicação'
    },
    {
      id: 3,
      name: 'Excel Avançado para Negócios',
      description: 'Domine planilhas, fórmulas e dashboards profissionais',
      duration: '15 horas',
      price: 'Gratuito',
      rating: 4.9,
      type: 'Online',
      institution: 'DataSkills',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop',
      matchReason: 'Ideal para análise de dados mencionada no CV'
    }
  ];

  const detectedSkills = [
    'JavaScript', 'React', 'Node.js', 'HTML/CSS', 'Git', 'Excel', 
    'Comunicação', 'Gestão de Projetos', 'Inglês Intermediário'
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setResumeUploaded(true);
      toast({
        title: "Currículo enviado com sucesso!",
        description: "Nossa IA está analisando suas habilidades..."
      });
    } else {
      toast({
        title: "Erro no upload",
        description: "Por favor, envie apenas arquivos PDF.",
        variant: "destructive"
      });
    }
  };

  const filteredCourses = recommendedCourses.filter(course => {
    if (selectedFilters.price !== 'all') {
      if (selectedFilters.price === 'free' && course.price !== 'Gratuito') return false;
      if (selectedFilters.price === 'paid' && course.price === 'Gratuito') return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Meu Perfil</h1>
            <p className="text-gray-600">Gerencie seu currículo e descubra cursos personalizados</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Profile & Resume */}
            <div className="space-y-6">
              {/* Resume Upload */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Meu Currículo
                  </CardTitle>
                  <CardDescription>
                    Envie seu CV em PDF para receber recomendações personalizadas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {!resumeUploaded ? (
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <Label htmlFor="resume-upload" className="cursor-pointer">
                        <span className="text-sm text-gray-600">
                          Clique para enviar seu currículo (PDF)
                        </span>
                      </Label>
                      <Input
                        id="resume-upload"
                        type="file"
                        accept=".pdf"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <FileText className="h-5 w-5 text-green-600" />
                        <span className="text-sm text-green-700">curriculo.pdf enviado</span>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        Atualizar Currículo
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Detected Skills */}
              {resumeUploaded && (
                <Card>
                  <CardHeader>
                    <CardTitle>Habilidades Detectadas</CardTitle>
                    <CardDescription>
                      Nossa IA identificou estas competências no seu currículo
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {detectedSkills.map((skill, index) => (
                        <Badge key={index} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Right Column - Course Recommendations */}
            <div className="lg:col-span-2 space-y-6">
              {/* Filters */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Filter className="h-5 w-5" />
                    Filtros
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="price-filter">Preço</Label>
                      <Select value={selectedFilters.price} onValueChange={(value) => 
                        setSelectedFilters({...selectedFilters, price: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Todos</SelectItem>
                          <SelectItem value="free">Gratuitos</SelectItem>
                          <SelectItem value="paid">Pagos</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="duration-filter">Duração</Label>
                      <Select value={selectedFilters.duration} onValueChange={(value) => 
                        setSelectedFilters({...selectedFilters, duration: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Qualquer</SelectItem>
                          <SelectItem value="short">Até 20h</SelectItem>
                          <SelectItem value="medium">20-40h</SelectItem>
                          <SelectItem value="long">Mais de 40h</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="type-filter">Modalidade</Label>
                      <Select value={selectedFilters.type} onValueChange={(value) => 
                        setSelectedFilters({...selectedFilters, type: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Todas</SelectItem>
                          <SelectItem value="online">Online</SelectItem>
                          <SelectItem value="presential">Presencial</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Course Recommendations */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Cursos Recomendados para Você
                </h2>
                {!resumeUploaded ? (
                  <Card>
                    <CardContent className="py-12 text-center">
                      <Upload className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Envie seu currículo
                      </h3>
                      <p className="text-gray-600">
                        Para receber recomendações personalizadas, faça upload do seu CV em PDF
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredCourses.map((course) => (
                      <Card key={course.id} className="hover:shadow-lg transition-shadow">
                        <div className="aspect-video overflow-hidden rounded-t-lg">
                          <img 
                            src={course.image} 
                            alt={course.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-lg">{course.name}</CardTitle>
                            <Badge variant={course.price === 'Gratuito' ? 'default' : 'secondary'}>
                              {course.price}
                            </Badge>
                          </div>
                          <CardDescription>{course.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {course.duration}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {course.type}
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm font-medium">{course.rating}</span>
                              </div>
                              <span className="text-sm text-gray-600">por {course.institution}</span>
                            </div>

                            <div className="p-2 bg-blue-50 rounded text-xs text-blue-700">
                              💡 {course.matchReason}
                            </div>

                            <Button className="w-full bg-gradient-capacit hover:opacity-90">
                              Ver Curso
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PerfilUsuario;
