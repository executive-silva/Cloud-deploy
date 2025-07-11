
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Zap, Shield, Plus, Settings, ExternalLink, Activity, Clock, Users, Trash2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import DashboardHeader from '@/components/DashboardHeader';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('apps');

  const mockApps = [
    { 
      name: 'my-react-app', 
      status: 'running', 
      lastDeploy: '2 minutes ago', 
      url: 'https://my-react-app.silva.dev',
      dynos: 2,
      repo: 'user/my-react-app'
    },
    { 
      name: 'api-service', 
      status: 'building', 
      lastDeploy: '5 minutes ago', 
      url: 'https://api-service.silva.dev',
      dynos: 1,
      repo: 'user/api-service'
    },
    { 
      name: 'docs-site', 
      status: 'sleeping', 
      lastDeploy: '1 hour ago', 
      url: 'https://docs-site.silva.dev',
      dynos: 0,
      repo: 'user/docs-site'
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running': return 'bg-green-500';
      case 'building': return 'bg-yellow-500 animate-pulse';
      case 'sleeping': return 'bg-slate-500';
      default: return 'bg-red-500';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'running': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'building': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'sleeping': return 'bg-slate-500/20 text-slate-300 border-slate-500/30';
      default: return 'bg-red-500/20 text-red-300 border-red-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      <DashboardHeader />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">Dashboard</h1>
            <p className="text-slate-300 text-sm lg:text-base">Manage your applications and deployments</p>
          </div>
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 w-full lg:w-auto">
            <Plus className="w-4 h-4 mr-2" />
            Create New App
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-4 bg-slate-800/50 border border-slate-700 mb-8">
            <TabsTrigger value="apps" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-xs lg:text-sm">
              Apps
            </TabsTrigger>
            <TabsTrigger value="activity" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-xs lg:text-sm">
              Activity
            </TabsTrigger>
            <TabsTrigger value="usage" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-xs lg:text-sm">
              Usage
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-xs lg:text-sm hidden lg:block">
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="apps" className="space-y-6">
            <div className="grid gap-4 lg:gap-6">
              {mockApps.map((app, i) => (
                <Card key={i} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${getStatusColor(app.status)}`}></div>
                        <div>
                          <CardTitle className="text-white text-lg lg:text-xl">{app.name}</CardTitle>
                          <CardDescription className="text-slate-400 text-sm">
                            <Github className="w-3 h-3 inline mr-1" />
                            {app.repo}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 w-full lg:w-auto">
                        <Badge className={getStatusBadge(app.status)}>
                          {app.status}
                        </Badge>
                        <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700 flex-1 lg:flex-none">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          <span className="hidden lg:inline">Open</span>
                        </Button>
                        <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700 lg:w-auto">
                          <Settings className="w-3 h-3 lg:mr-1" />
                          <span className="hidden lg:inline">Settings</span>
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                      <div>
                        <div className="text-slate-400">Last Deploy</div>
                        <div className="text-white font-medium">{app.lastDeploy}</div>
                      </div>
                      <div>
                        <div className="text-slate-400">Dynos</div>
                        <div className="text-white font-medium">{app.dynos}</div>
                      </div>
                      <div className="col-span-2 lg:col-span-2">
                        <div className="text-slate-400">URL</div>
                        <div className="text-blue-400 font-medium truncate">{app.url}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-blue-400" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { action: 'Deployed', app: 'my-react-app', time: '2 minutes ago', user: 'john.doe@example.com' },
                    { action: 'Scaled', app: 'api-service', time: '1 hour ago', user: 'jane.smith@example.com' },
                    { action: 'Created', app: 'docs-site', time: '2 hours ago', user: 'john.doe@example.com' },
                  ].map((activity, i) => (
                    <div key={i} className="flex flex-col lg:flex-row justify-between items-start lg:items-center p-3 bg-slate-900/50 rounded-lg border border-slate-700 gap-2">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-4 h-4 text-slate-400" />
                        <div>
                          <div className="text-white font-medium">
                            {activity.action} <span className="text-blue-400">{activity.app}</span>
                          </div>
                          <div className="text-sm text-slate-400">{activity.user}</div>
                        </div>
                      </div>
                      <div className="text-sm text-slate-400">{activity.time}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="usage" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-lg">Dyno Hours</CardTitle>
                  <CardDescription className="text-slate-400">This month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl lg:text-3xl font-bold text-blue-400">247</div>
                  <div className="text-sm text-slate-400">of 1000 hours used</div>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-lg">Data Transfer</CardTitle>
                  <CardDescription className="text-slate-400">This month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl lg:text-3xl font-bold text-green-400">12.4 GB</div>
                  <div className="text-sm text-slate-400">of 100 GB used</div>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-lg">Add-ons</CardTitle>
                  <CardDescription className="text-slate-400">Active services</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl lg:text-3xl font-bold text-purple-400">3</div>
                  <div className="text-sm text-slate-400">Postgres, Redis, Logs</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Account Settings</CardTitle>
                <CardDescription className="text-slate-400">Manage your account preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                  <div>
                    <div className="text-white font-medium">GitHub Integration</div>
                    <div className="text-sm text-slate-400">Connected as john.doe</div>
                  </div>
                  <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 w-full lg:w-auto">
                    Reconnect
                  </Button>
                </div>
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                  <div>
                    <div className="text-white font-medium">API Keys</div>
                    <div className="text-sm text-slate-400">Manage your API access</div>
                  </div>
                  <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 w-full lg:w-auto">
                    Manage Keys
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
