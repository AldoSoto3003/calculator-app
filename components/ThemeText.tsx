import { globalStyles } from '@/styles/global-styles';
import { Text, type TextProps } from 'react-native';

interface ThemeTextProps extends TextProps{
    variant?: 'h1' | 'h2';
}

const ThemeText = ({ children, variant = 'h1', ...rest }: ThemeTextProps) => {
  return (
    <Text 
        style={[
            { color: 'white', fontFamily: 'Montserrat-Regular'},
            variant === 'h1' && globalStyles.mainResult,
            variant === 'h2' && globalStyles.subResult,
        ]}
        numberOfLines={1} 
        adjustsFontSizeToFit
    >
        {children}
    </Text>
  )
}

export default ThemeText