
import { Palette } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeSelector = () => {
  const { currentTheme, setTheme, simpleThemes, gradientThemes } = useTheme();

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <Palette className="w-5 h-5 text-white" />
        <span className="text-white font-medium">Theme:</span>
      </div>
      <Select value={currentTheme.id} onValueChange={setTheme}>
        <SelectTrigger className="w-48 bg-white/10 border-white/20 text-white">
          <SelectValue placeholder="Select theme" />
        </SelectTrigger>
        <SelectContent className="bg-gray-900 border-gray-700">
          <div className="px-2 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Simple Colors
          </div>
          {simpleThemes.map((theme) => (
            <SelectItem key={theme.id} value={theme.id} className="text-white hover:bg-gray-800">
              <div className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded-full ${theme.bg}`} />
                {theme.name}
              </div>
            </SelectItem>
          ))}
          <div className="px-2 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider mt-2">
            Gradient Colors
          </div>
          {gradientThemes.map((theme) => (
            <SelectItem key={theme.id} value={theme.id} className="text-white hover:bg-gray-800">
              <div className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded-full ${theme.bg}`} />
                {theme.name}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ThemeSelector;
