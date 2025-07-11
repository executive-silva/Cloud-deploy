import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Zap, Rocket, GitBranch, Activity, Users, Shield, ArrowRight, CheckCircle, Star, Timer, Globe, Lock, LogIn, UserPlus } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import AuthModal from '@/components/AuthModal';

const Index = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleAuthSuccess = () => {
    // Simulate successful login with sample user data
    const sampleUser = {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://github.com/johndoe.png',
      isAdmin: false
    };
    
    // This would normally be handled by the AuthModal component
    navigate('/dashboard');
  };

  const handleGetStarted = () => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      setAuthModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">Silva</h1>
              <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30 hidden sm:flex">
                GitHub Host
              </Badge>
            </div>
            
            <nav className="flex items-center space-x-4">
              {isAuthenticated ? (
                <div className="flex items-center space-x-4">
                  <span className="text-slate-300 hidden sm:block">Welcome, {user?.name}</span>
                  <Link to="/dashboard">
                    <Button variant="ghost" className="text-slate-300 hover:text-white">
                      Dashboard
                    </Button>
                  </Link>
                  <Button
                    onClick={logout}
                    variant="ghost"
                    className="text-slate-300 hover:text-white"
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Button
                    onClick={() => setAuthModalOpen(true)}
                    variant="ghost"
                    className="text-slate-300 hover:text-white"
                  >
                    <LogIn className="w-4 h-4 mr-2" />
                    Sign In
                  </Button>
                  <Button
                    onClick={() => setAuthModalOpen(true)}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                  >
                    <UserPlus className="w-4 h-4 mr-2" />
                    Sign Up
                  </Button>
                </div>
              )}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30 mb-8">
              <Star className="w-3 h-3 mr-1" />
              Deploy with confidence
            </Badge>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent mb-8">
              Deploy from GitHub
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                in seconds
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Silva is the modern deployment platform for developers. Connect your GitHub repository 
              and deploy your applications with zero configuration. Focus on building, we'll handle the rest.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleGetStarted}
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 text-lg font-medium"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-6 text-lg"
              >
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </Button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 mt-16 text-slate-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Free SSL certificates</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Global CDN</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Auto-scaling</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Everything you need to deploy</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Built for modern development workflows with the tools you already love
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Github className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white">GitHub Integration</CardTitle>
              <CardDescription className="text-slate-400">
                Connect your repositories and deploy automatically on every push to main
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white">Instant Deploys</CardTitle>
              <CardDescription className="text-slate-400">
                Zero-configuration deployments that just work. Support for all major frameworks
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white">Real-time Monitoring</CardTitle>
              <CardDescription className="text-slate-400">
                Track performance, errors, and usage with detailed analytics and logs
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white">Global Edge Network</CardTitle>
              <CardDescription className="text-slate-400">
                Lightning-fast delivery with our worldwide CDN and edge computing
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white">Enterprise Security</CardTitle>
              <CardDescription className="text-slate-400">
                SOC 2 compliant with automatic SSL, DDoS protection, and secure builds
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <Timer className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white">Preview Deployments</CardTitle>
              <CardDescription className="text-slate-400">
                Every pull request gets its own deployment URL for easy testing and collaboration
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-12 border border-slate-800/50 backdrop-blur-sm">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to ship faster?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who trust Silva to deploy their applications. 
              Start with our free tier and scale as you grow.
            </p>
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 text-lg font-medium"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Deploy Your First App
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Silva</span>
              <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                GitHub Host
              </Badge>
            </div>
            
            <div className="flex items-center space-x-6 text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
              <a href="#" className="hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-800/50 text-center text-slate-400">
            <p>&copy; 2024 Silva. All rights reserved. Built with ❤️ for developers.</p>
          </div>
        </div>
      </footer>

      <AuthModal 
        open={authModalOpen} 
        onOpenChange={setAuthModalOpen}
        onAuthSuccess={handleAuthSuccess}
      />
    </div>
  );
};

export default Index;
