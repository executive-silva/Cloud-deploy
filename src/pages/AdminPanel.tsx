
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Activity, BarChart3, Settings, Trash2, Edit, Shield, Server, Database } from 'lucide-react';
import DashboardHeader from '@/components/DashboardHeader';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('users');

  const mockUsers = [
    { 
      id: 1,
      name: 'John Doe', 
      email: 'john.doe@example.com', 
      plan: 'Pro', 
      apps: 5, 
      status: 'active',
      lastSeen: '2 hours ago',
      joined: '2024-01-15'
    },
    { 
      id: 2,
      name: 'Jane Smith', 
      email: 'jane.smith@example.com', 
      plan: 'Free', 
      apps: 2, 
      status: 'active',
      lastSeen: '1 day ago',
      joined: '2024-02-20'
    },
    { 
      id: 3,
      name: 'Bob Wilson', 
      email: 'bob.wilson@example.com', 
      plan: 'Enterprise', 
      apps: 12, 
      status: 'suspended',
      lastSeen: '1 week ago',
      joined: '2023-11-10'
    },
  ];

  const mockSystemStats = [
    { label: 'Total Users', value: '1,247', change: '+12%', color: 'text-blue-400' },
    { label: 'Active Apps', value: '3,456', change: '+8%', color: 'text-green-400' },
    { label: 'Total Deployments', value: '24,789', change: '+15%', color: 'text-purple-400' },
    { label: 'System Load', value: '67%', change: '-5%', color: 'text-yellow-400' },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'suspended': return 'bg-red-500/20 text-red-300 border-red-500/30';
      case 'pending': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      default: return 'bg-slate-500/20 text-slate-300 border-slate-500/30';
    }
  };

  const getPlanBadge = (plan: string) => {
    switch (plan) {
      case 'Enterprise': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'Pro': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'Free': return 'bg-slate-500/20 text-slate-300 border-slate-500/30';
      default: return 'bg-slate-500/20 text-slate-300 border-slate-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      <DashboardHeader />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2 flex items-center">
              <Shield className="w-8 h-8 mr-3 text-red-400" />
              Admin Panel
            </h1>
            <p className="text-slate-300 text-sm lg:text-base">Manage users, applications, and system resources</p>
          </div>
        </div>

        {/* System Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
          {mockSystemStats.map((stat, i) => (
            <Card key={i} className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-4 lg:p-6">
                <div className="text-xs lg:text-sm text-slate-400 mb-1">{stat.label}</div>
                <div className={`text-xl lg:text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-xs text-green-400">{stat.change}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-slate-800/50 border border-slate-700 mb-8">
            <TabsTrigger value="users" className="data-[state=active]:bg-red-500 data-[state=active]:text-white text-xs lg:text-sm">
              <Users className="w-4 h-4 mr-1 lg:mr-2" />
              <span className="hidden lg:inline">Users</span>
            </TabsTrigger>
            <TabsTrigger value="apps" className="data-[state=active]:bg-red-500 data-[state=active]:text-white text-xs lg:text-sm">
              <Server className="w-4 h-4 mr-1 lg:mr-2" />
              <span className="hidden lg:inline">Apps</span>
            </TabsTrigger>
            <TabsTrigger value="system" className="data-[state=active]:bg-red-500 data-[state=active]:text-white text-xs lg:text-sm">
              <BarChart3 className="w-4 h-4 mr-1 lg:mr-2" />
              <span className="hidden lg:inline">System</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-red-500 data-[state=active]:text-white text-xs lg:text-sm">
              <Settings className="w-4 h-4 mr-1 lg:mr-2" />
              <span className="hidden lg:inline">Settings</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between">
                  <span className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-red-400" />
                    User Management
                  </span>
                  <Button size="sm" className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700">
                    Add User
                  </Button>
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Manage user accounts, plans, and permissions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-slate-700">
                        <TableHead className="text-slate-300">User</TableHead>
                        <TableHead className="text-slate-300 hidden lg:table-cell">Plan</TableHead>
                        <TableHead className="text-slate-300 hidden lg:table-cell">Apps</TableHead>
                        <TableHead className="text-slate-300">Status</TableHead>
                        <TableHead className="text-slate-300 hidden lg:table-cell">Last Seen</TableHead>
                        <TableHead className="text-slate-300">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockUsers.map((user) => (
                        <TableRow key={user.id} className="border-slate-700">
                          <TableCell>
                            <div>
                              <div className="text-white font-medium text-sm lg:text-base">{user.name}</div>
                              <div className="text-slate-400 text-xs lg:text-sm">{user.email}</div>
                            </div>
                          </TableCell>
                          <TableCell className="hidden lg:table-cell">
                            <Badge className={getPlanBadge(user.plan)}>
                              {user.plan}
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden lg:table-cell">
                            <span className="text-slate-300">{user.apps}</span>
                          </TableCell>
                          <TableCell>
                            <Badge className={getStatusBadge(user.status)}>
                              {user.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden lg:table-cell">
                            <span className="text-slate-400 text-sm">{user.lastSeen}</span>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              <Button variant="ghost" size="sm" className="text-slate-300 hover:bg-slate-700 p-1 lg:p-2">
                                <Edit className="w-3 h-3 lg:w-4 lg:h-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="text-red-400 hover:bg-red-500/20 p-1 lg:p-2">
                                <Trash2 className="w-3 h-3 lg:w-4 lg:h-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="apps" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Server className="w-5 h-5 mr-2 text-red-400" />
                  Application Management
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Monitor all deployed applications across the platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
                  <div className="text-center p-4 lg:p-6 bg-slate-900/50 rounded-lg border border-slate-700">
                    <div className="text-2xl lg:text-3xl font-bold text-green-400 mb-2">2,156</div>
                    <div className="text-slate-400 text-sm lg:text-base">Running Apps</div>
                  </div>
                  <div className="text-center p-4 lg:p-6 bg-slate-900/50 rounded-lg border border-slate-700">
                    <div className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-2">47</div>
                    <div className="text-slate-400 text-sm lg:text-base">Building</div>
                  </div>
                  <div className="text-center p-4 lg:p-6 bg-slate-900/50 rounded-lg border border-slate-700">
                    <div className="text-2xl lg:text-3xl font-bold text-red-400 mb-2">12</div>
                    <div className="text-slate-400 text-sm lg:text-base">Failed</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="system" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Database className="w-5 h-5 mr-2 text-red-400" />
                    System Resources
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">CPU Usage</span>
                    <span className="text-yellow-400 font-bold">67%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Memory Usage</span>
                    <span className="text-green-400 font-bold">45%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Disk Usage</span>
                    <span className="text-blue-400 font-bold">72%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Network I/O</span>
                    <span className="text-purple-400 font-bold">1.2 GB/s</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Activity className="w-5 h-5 mr-2 text-red-400" />
                    Recent System Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-sm">
                      <div className="text-white">Server maintenance completed</div>
                      <div className="text-slate-400">2 hours ago</div>
                    </div>
                    <div className="text-sm">
                      <div className="text-white">Database backup created</div>
                      <div className="text-slate-400">4 hours ago</div>
                    </div>
                    <div className="text-sm">
                      <div className="text-white">SSL certificates renewed</div>
                      <div className="text-slate-400">1 day ago</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-red-400" />
                  Platform Settings
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Configure global platform settings and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                  <div>
                    <div className="text-white font-medium">User Registration</div>
                    <div className="text-sm text-slate-400">Allow new user signups</div>
                  </div>
                  <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 w-full lg:w-auto">
                    Configure
                  </Button>
                </div>
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                  <div>
                    <div className="text-white font-medium">Rate Limiting</div>
                    <div className="text-sm text-slate-400">API request limits and throttling</div>
                  </div>
                  <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 w-full lg:w-auto">
                    Configure
                  </Button>
                </div>
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                  <div>
                    <div className="text-white font-medium">Maintenance Mode</div>
                    <div className="text-sm text-slate-400">Enable platform-wide maintenance</div>
                  </div>
                  <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 w-full lg:w-auto">
                    Configure
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

export default AdminPanel;
