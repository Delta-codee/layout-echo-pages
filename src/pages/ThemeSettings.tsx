
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTheme } from '@/contexts/ThemeContext';
import { Palette, Sun, Moon } from 'lucide-react';

const ThemeSettings = () => {
  const { currentTheme, setTheme, simpleThemes, gradientThemes } = useTheme();

  return (
    <Layout>
      <div className="p-8 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Theme Settings</h1>
            <p className="text-gray-600">Customize your learning environment</p>
          </div>

          <div className="space-y-8">
            {/* Simple Themes */}
            <Card className="bg-gray-50 border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-gray-900">
                  <Sun className="w-5 h-5" />
                  Simple Themes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {simpleThemes.map((theme) => (
                    <button
                      key={theme.id}
                      onClick={() => setTheme(theme.id)}
                      className={`relative p-4 rounded-xl border-2 transition-all ${
                        currentTheme.id === theme.id
                          ? 'border-purple-500 ring-2 ring-purple-200'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className={`w-full h-16 rounded-lg ${theme.bg} mb-3`} />
                      <p className="text-sm font-medium text-gray-700">{theme.name}</p>
                      {currentTheme.id === theme.id && (
                        <div className="absolute top-2 right-2 w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Gradient Themes */}
            <Card className="bg-gray-50 border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-gray-900">
                  <Palette className="w-5 h-5" />
                  Gradient Themes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {gradientThemes.map((theme) => (
                    <button
                      key={theme.id}
                      onClick={() => setTheme(theme.id)}
                      className={`relative p-4 rounded-xl border-2 transition-all ${
                        currentTheme.id === theme.id
                          ? 'border-purple-500 ring-2 ring-purple-200'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className={`w-full h-16 rounded-lg ${theme.bg} mb-3`} />
                      <p className="text-sm font-medium text-gray-700">{theme.name}</p>
                      {currentTheme.id === theme.id && (
                        <div className="absolute top-2 right-2 w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ThemeSettings;
