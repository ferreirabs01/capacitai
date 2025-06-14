
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, BookOpen, Users, TrendingUp, Upload, Edit, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const DashboardInstituicao = () => {
  const [showCreateCourse, setShowCreateCourse] = useState(false);
  const [courseForm, setCourseForm] = useState({
    name: '',
    description: '',
    duration: '',
    price: '',
    type: 'online',
    image: null as File | null
  });
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: 'Introdução à Programação',
      description: 'Conceitos básicos de programação com Python',
      duration: '30 horas',
      price: 'Gratuito',
      type: 'Online',
      students: 125,
      rating: 4.8,
      status: 'Publicado'
    },
    {
      id: 2,
      name: 'Data Science Fundamentals',
      description: 'Análise de dados e machine learning',
      duration: '45 horas',
      price: 'R$ 149,90',
      type: 'Online',
      students: 89,
      rating: 4.9,
      status: 'Publicado'
    }
  ]);
  const { toast } = useToast();

  const handleCreateCourse = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newCourse = {
      id: courses.length + 1,
      name: courseForm.name,
      description: courseForm.description,
      duration: courseForm.duration,
      price: courseForm.price || 'Gratuito',
      type: courseForm.type === 'online' ? 'Online' : 'Presencial',
      students: 0,
      rating: 0,
      status: 'Rascunho'
    };

    setCourses([...courses, newCourse]);
    setShowCreateCourse(false);
    setCourseForm({
      name: '',
      description: '',
      duration: '',
      price: '',
      type: 'online',
      image: null
    });

    toast({
      title: "Curso criado com sucesso!",
      description: `O curso "${newCourse.name}" foi adicionado à sua lista.`
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCourseForm({
      ...courseForm,
      [e.target.name]: e.target.value
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCourseForm({
        ...courseForm,
        image: file
      });
    }
  };

  const stats = [
    {
      title: 'Total de Cursos',
      value: courses.length,
      icon: BookOpen,
      color: 'text-capacit-blue'
    },
    {
      title: 'Estudantes Ativos',
      value: courses.reduce((sum, course) => sum + course.students, 0),
      icon: Users,
      color: 'text-capacit-green'
    },
    {
      title: 'Avaliação Média',
      value: '4.8',
      icon: TrendingUp,
      color: 'text-yellow-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Institucional</h1>
              <p className="text-gray-600">Gerencie seus cursos e acompanhe o desempenho</p>
            </div>
            <Dialog open={showCreateCourse} onOpenChange={setShowCreateCourse}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-capacit hover:opacity-90">
                  <Plus className="h-4 w-4 mr-2" />
                  Criar Curso
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Criar Novo Curso</DialogTitle>
                  <DialogDescription>
                    Preencha as informações do curso que será oferecido
                  </DialogDescription>
                </DialogHeader>
                
                <form onSubmit={handleCreateCourse} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <Label htmlFor="name">Nome do Curso</Label>
                      <Input
                        id="name"
                        name="name"
                        value={courseForm.name}
                        onChange={handleInputChange}
                        placeholder="Ex: Introdução ao Marketing Digital"
                        required
                      />
                    </div>
                    
                    <div className="col-span-2">
                      <Label htmlFor="description">Descrição</Label>
                      <Textarea
                        id="description"
                        name="description"
                        value={courseForm.description}
                        onChange={handleInputChange}
                        placeholder="Descreva o conteúdo e objetivos do curso"
                        className="min-h-[100px]"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="duration">Duração Estimada</Label>
                      <Input
                        id="duration"
                        name="duration"
                        value={courseForm.duration}
                        onChange={handleInputChange}
                        placeholder="Ex: 25 horas"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="price">Preço (deixe vazio se gratuito)</Label>
                      <Input
                        id="price"
                        name="price"
                        value={courseForm.price}
                        onChange={handleInputChange}
                        placeholder="Ex: R$ 99,90"
                      />
                    </div>

                    <div>
                      <Label htmlFor="type">Modalidade</Label>
                      <Select value={courseForm.type} onValueChange={(value) => 
                        setCourseForm({...courseForm, type: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="online">Online</SelectItem>
                          <SelectItem value="presencial">Presencial</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="image">Imagem do Curso</Label>
                      <div className="mt-1">
                        <Input
                          id="image"
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-2 pt-4">
                    <Button type="button" variant="outline" onClick={() => setShowCreateCourse(false)}>
                      Cancelar
                    </Button>
                    <Button type="submit" className="bg-gradient-capacit hover:opacity-90">
                      Criar Curso
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      </div>
                      <Icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Courses Table */}
          <Card>
            <CardHeader>
              <CardTitle>Meus Cursos</CardTitle>
              <CardDescription>
                Gerencie todos os cursos da sua instituição
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {courses.map((course) => (
                  <div key={course.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{course.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{course.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{course.duration}</span>
                          <span>•</span>
                          <span>{course.price}</span>
                          <span>•</span>
                          <span>{course.type}</span>
                          <span>•</span>
                          <span>{course.students} estudantes</span>
                          {course.rating > 0 && (
                            <>
                              <span>•</span>
                              <span>⭐ {course.rating}</span>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          course.status === 'Publicado' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {course.status}
                        </span>
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DashboardInstituicao;
