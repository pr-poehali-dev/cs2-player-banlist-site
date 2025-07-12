import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for bans
  const banData = [
    { id: 1, player: 'CheaterBoy123', steamId: 'STEAM_1:1:123456789', reason: 'Читы/Aimbot', admin: 'AdminUser', date: '2024-07-10', duration: 'Permanent', type: 'ban' },
    { id: 2, player: 'ToxicPlayer', steamId: 'STEAM_1:0:987654321', reason: 'Токсичность', admin: 'ModerUser', date: '2024-07-11', duration: '7 дней', type: 'mute' },
    { id: 3, player: 'GrieferKid', steamId: 'STEAM_1:1:456789123', reason: 'Griefing', admin: 'AdminUser', date: '2024-07-12', duration: '3 дня', type: 'ban' },
    { id: 4, player: 'SpammerBot', steamId: 'STEAM_1:0:789123456', reason: 'Спам в чате', admin: 'ModerUser', date: '2024-07-12', duration: '24 часа', type: 'mute' },
  ];

  const stats = {
    totalBans: 1247,
    activeBans: 892,
    totalMutes: 634,
    activeMutes: 123,
    bannedToday: 15,
    mutedToday: 8
  };

  const getReason Badge = (reason: string) => {
    if (reason.includes('Чит')) return 'destructive';
    if (reason.includes('Токсич')) return 'secondary';
    if (reason.includes('Grief')) return 'outline';
    return 'default';
  };

  const getTypeBadge = (type: string) => {
    return type === 'ban' ? 'destructive' : 'secondary';
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <Icon name="Shield" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-orange-500 font-rajdhani">CS2 BANLIST</h1>
                <p className="text-gray-400">Система управления нарушениями</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">Онлайн игроков</p>
              <p className="text-2xl font-bold text-green-400">64/128</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <Card className="bg-gray-800 border-gray-700 p-4">
            <div className="flex items-center space-x-2">
              <Icon name="Ban" size={20} className="text-red-500" />
              <div>
                <p className="text-sm text-gray-400">Всего банов</p>
                <p className="text-xl font-bold text-red-500">{stats.totalBans}</p>
              </div>
            </div>
          </Card>
          
          <Card className="bg-gray-800 border-gray-700 p-4">
            <div className="flex items-center space-x-2">
              <Icon name="AlertTriangle" size={20} className="text-orange-500" />
              <div>
                <p className="text-sm text-gray-400">Активных банов</p>
                <p className="text-xl font-bold text-orange-500">{stats.activeBans}</p>
              </div>
            </div>
          </Card>

          <Card className="bg-gray-800 border-gray-700 p-4">
            <div className="flex items-center space-x-2">
              <Icon name="VolumeX" size={20} className="text-blue-500" />
              <div>
                <p className="text-sm text-gray-400">Всего мутов</p>
                <p className="text-xl font-bold text-blue-500">{stats.totalMutes}</p>
              </div>
            </div>
          </Card>

          <Card className="bg-gray-800 border-gray-700 p-4">
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={20} className="text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Активных мутов</p>
                <p className="text-xl font-bold text-blue-400">{stats.activeMutes}</p>
              </div>
            </div>
          </Card>

          <Card className="bg-gray-800 border-gray-700 p-4">
            <div className="flex items-center space-x-2">
              <Icon name="TrendingUp" size={20} className="text-green-500" />
              <div>
                <p className="text-sm text-gray-400">Банов сегодня</p>
                <p className="text-xl font-bold text-green-500">{stats.bannedToday}</p>
              </div>
            </div>
          </Card>

          <Card className="bg-gray-800 border-gray-700 p-4">
            <div className="flex items-center space-x-2">
              <Icon name="BarChart3" size={20} className="text-purple-500" />
              <div>
                <p className="text-sm text-gray-400">Мутов сегодня</p>
                <p className="text-xl font-bold text-purple-500">{stats.mutedToday}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="bg-gray-800 border-gray-700 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1">
              <Input
                placeholder="Поиск по никнейму, Steam ID или причине..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                <Icon name="Filter" size={16} className="mr-2" />
                Фильтры
              </Button>
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                <Icon name="Download" size={16} className="mr-2" />
                Экспорт
              </Button>
            </div>
          </div>
        </Card>

        {/* Tabs for different sections */}
        <Tabs defaultValue="active-bans" className="space-y-6">
          <TabsList className="bg-gray-800 border border-gray-700">
            <TabsTrigger value="active-bans" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              Активные баны
            </TabsTrigger>
            <TabsTrigger value="active-mutes" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              Активные муты
            </TabsTrigger>
            <TabsTrigger value="history" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              История
            </TabsTrigger>
            <TabsTrigger value="statistics" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              Статистика
            </TabsTrigger>
          </TabsList>

          <TabsContent value="active-bans">
            <Card className="bg-gray-800 border-gray-700">
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-700">
                    <TableHead className="text-gray-300">Игрок</TableHead>
                    <TableHead className="text-gray-300">Steam ID</TableHead>
                    <TableHead className="text-gray-300">Причина</TableHead>
                    <TableHead className="text-gray-300">Админ</TableHead>
                    <TableHead className="text-gray-300">Дата</TableHead>
                    <TableHead className="text-gray-300">Длительность</TableHead>
                    <TableHead className="text-gray-300">Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {banData.filter(ban => ban.type === 'ban').map((ban) => (
                    <TableRow key={ban.id} className="border-gray-700 hover:bg-gray-750">
                      <TableCell className="font-medium text-white">{ban.player}</TableCell>
                      <TableCell className="text-gray-400 font-mono text-sm">{ban.steamId}</TableCell>
                      <TableCell>
                        <Badge variant={getReason Badge(ban.reason)} className="text-xs">
                          {ban.reason}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-gray-300">{ban.admin}</TableCell>
                      <TableCell className="text-gray-400">{ban.date}</TableCell>
                      <TableCell className="text-gray-300">{ban.duration}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="h-8 border-gray-600 hover:bg-gray-700">
                            <Icon name="Eye" size={14} />
                          </Button>
                          <Button size="sm" variant="outline" className="h-8 border-gray-600 hover:bg-gray-700">
                            <Icon name="Edit" size={14} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          <TabsContent value="active-mutes">
            <Card className="bg-gray-800 border-gray-700">
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-700">
                    <TableHead className="text-gray-300">Игрок</TableHead>
                    <TableHead className="text-gray-300">Steam ID</TableHead>
                    <TableHead className="text-gray-300">Причина</TableHead>
                    <TableHead className="text-gray-300">Админ</TableHead>
                    <TableHead className="text-gray-300">Дата</TableHead>
                    <TableHead className="text-gray-300">Длительность</TableHead>
                    <TableHead className="text-gray-300">Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {banData.filter(ban => ban.type === 'mute').map((ban) => (
                    <TableRow key={ban.id} className="border-gray-700 hover:bg-gray-750">
                      <TableCell className="font-medium text-white">{ban.player}</TableCell>
                      <TableCell className="text-gray-400 font-mono text-sm">{ban.steamId}</TableCell>
                      <TableCell>
                        <Badge variant={getReason Badge(ban.reason)} className="text-xs">
                          {ban.reason}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-gray-300">{ban.admin}</TableCell>
                      <TableCell className="text-gray-400">{ban.date}</TableCell>
                      <TableCell className="text-gray-300">{ban.duration}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="h-8 border-gray-600 hover:bg-gray-700">
                            <Icon name="Eye" size={14} />
                          </Button>
                          <Button size="sm" variant="outline" className="h-8 border-gray-600 hover:bg-gray-700">
                            <Icon name="Edit" size={14} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          <TabsContent value="history">
            <Card className="bg-gray-800 border-gray-700">
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-700">
                    <TableHead className="text-gray-300">Тип</TableHead>
                    <TableHead className="text-gray-300">Игрок</TableHead>
                    <TableHead className="text-gray-300">Причина</TableHead>
                    <TableHead className="text-gray-300">Статус</TableHead>
                    <TableHead className="text-gray-300">Дата</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {banData.map((ban) => (
                    <TableRow key={ban.id} className="border-gray-700 hover:bg-gray-750">
                      <TableCell>
                        <Badge variant={getTypeBadge(ban.type)} className="text-xs">
                          {ban.type === 'ban' ? 'БАН' : 'МУТ'}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-medium text-white">{ban.player}</TableCell>
                      <TableCell>
                        <Badge variant={getReason Badge(ban.reason)} className="text-xs">
                          {ban.reason}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="default" className="text-xs bg-green-600">
                          Активен
                        </Badge>
                      </TableCell>
                      <TableCell className="text-gray-400">{ban.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          <TabsContent value="statistics">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gray-800 border-gray-700 p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Icon name="BarChart3" size={20} className="mr-2 text-orange-500" />
                  Статистика нарушений
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Читы/Aimbot</span>
                    <span className="text-red-400 font-semibold">45%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{width: '45%'}}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Токсичность</span>
                    <span className="text-orange-400 font-semibold">30%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{width: '30%'}}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Griefing</span>
                    <span className="text-blue-400 font-semibold">15%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '15%'}}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Спам</span>
                    <span className="text-purple-400 font-semibold">10%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '10%'}}></div>
                  </div>
                </div>
              </Card>

              <Card className="bg-gray-800 border-gray-700 p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Icon name="TrendingUp" size={20} className="mr-2 text-green-500" />
                  Активность за неделю
                </h3>
                <div className="space-y-3">
                  {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day, index) => (
                    <div key={day} className="flex items-center justify-between">
                      <span className="text-gray-400 w-8">{day}</span>
                      <div className="flex-1 mx-4">
                        <div className="flex space-x-1">
                          <div className="flex-1 bg-gray-700 rounded h-6 flex items-center justify-center">
                            <div 
                              className="bg-red-500 rounded h-4" 
                              style={{width: `${Math.random() * 80 + 20}%`}}
                            ></div>
                          </div>
                          <div className="flex-1 bg-gray-700 rounded h-6 flex items-center justify-center">
                            <div 
                              className="bg-blue-500 rounded h-4" 
                              style={{width: `${Math.random() * 60 + 10}%`}}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <span className="text-gray-300 text-sm w-8 text-right">{Math.floor(Math.random() * 20 + 5)}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;