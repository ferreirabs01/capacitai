
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { User, Building, Mail, Lock, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

const Cadastro = () => {
  const [userType, setUserType] = useState('individual');
  const [formData, setFormData] = useState({
    nome: '',
    tipo: 'PF',
    razao_social: '',
    nrCadastro: '',
    email: '',
    telefone: '',
    senha: ''
  });  
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate registration
    toast({
      title: "Cadastro realizado com sucesso!",
      description: `Bem-vindo(a) ao CapacitAI, ${formData.name}!`
    });
    
    // Redirect based on user type
    if (userType === 'individual') {
      navigate('/perfil');
    } else {
      navigate('/dashboard');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="py-12">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-900">
                Criar Conta
              </CardTitle>
              <CardDescription>
                Escolha seu tipo de conta e preencha as informações
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* User Type Selection */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Tipo de Conta</Label>
                  <RadioGroup value={userType} onValueChange={setUserType}>
                    <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                      <RadioGroupItem value="individual" id="individual" />
                      <Label htmlFor="individual" className="flex items-center space-x-2 cursor-pointer flex-1">
                        <User className="h-4 w-4 text-capacit-blue" />
                        <span>Pessoa Física</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                      <RadioGroupItem value="institution" id="institution" />
                      <Label htmlFor="institution" className="flex items-center space-x-2 cursor-pointer flex-1">
                        <Building className="h-4 w-4 text-capacit-green" />
                        <span>Pessoa Jurídica</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name">
                    {userType === 'individual' ? 'Nome Completo' : 'Nome da Instituição'}
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder={userType === 'individual' ? 'Seu nome completo' : 'Nome da instituição'}
                      value={formData.name}
                      onChange={handleInputChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <Label htmlFor="password">Senha</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Mínimo 8 caracteres"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="pl-10"
                      required
                      minLength={8}
                    />
                  </div>
                </div>

                {/* Institution-specific fields */}
                {userType === 'institution' && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="description">Descrição da Instituição</Label>
                      <div className="relative">
                        <FileText className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Textarea
                          id="description"
                          name="description"
                          placeholder="Descreva brevemente sua instituição e área de atuação"
                          value={formData.description}
                          onChange={handleInputChange}
                          className="pl-10 min-h-[100px]"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contactEmail">E-mail de Contato</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="contactEmail"
                          name="contactEmail"
                          type="email"
                          placeholder="contato@instituicao.com"
                          value={formData.contactEmail}
                          onChange={handleInputChange}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </>
                )}

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-capacit hover:opacity-90"
                  size="lg"
                >
                  Criar Conta
                </Button>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Já tem uma conta?{' '}
                    <a href="/login" className="text-capacit-blue hover:underline font-medium">
                      Faça login
                    </a>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Cadastro;
