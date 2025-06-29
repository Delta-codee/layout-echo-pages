
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTheme } from '@/contexts/ThemeContext';
import { Palette, Sun, Moon, Settings } from 'lucide-react';

const ThemeSettings = () => {
  const { currentTheme, setTheme, simpleThemes, gradientThemes } = useTheme();

  return (
    <Layout>
      <div className="p-8 bg-[#0B0B0B] min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#E3583D] to-[#E4593D] rounded-lg flex items-center justify-center">
                <Settings className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-[#F1F1F1]">Theme Settings</h1>
            </div>
            <p className="text-[#A1A1A1]">Customize your learning environment</p>
          </div>

          <div className="space-y-8">
            {/* Simple Themes */}
            <Card className="bg-[#131313] border-[#2B2B2B]">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-[#F1F1F1]">
                  <Sun className="w-5 h-5 text-[#E3583D]" />
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
                          ? 'border-[#E3583D] ring-2 ring-[#E3583D]/20'
                          : 'border-[#2B2B2B] hover:border-[#E3583D]/50'
                      }`}
                    >
                      <div className={`w-full h-16 rounded-lg ${theme.bg} mb-3`} />
                      <p className="text-sm font-medium text-[#F1F1F1]">{theme.name}</p>
                      {currentTheme.id === theme.id && (
                        <div className="absolute top-2 right-2 w-4 h-4 bg-[#E3583D] rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Gradient Themes */}
            <Card className="bg-[#131313] border-[#2B2B2B]">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-[#F1F1F1]">
                  <Palette className="w-5 h-5 text-[#E3583D]" />
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
                          ? 'border-[#E3583D] ring-2 ring-[#E3583D]/20'
                          : 'border-[#2B2B2B] hover:border-[#E3583D]/50'
                      }`}
                    >
                      <div className={`w-full h-16 rounded-lg ${theme.bg} mb-3`} />
                      <p className="text-sm font-medium text-[#F1F1F1]">{theme.name}</p>
                      {currentTheme.id === theme.id && (
                        <div className="absolute top-2 right-2 w-4 h-4 bg-[#E3583D] rounded-full flex items-center justify-center">
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
