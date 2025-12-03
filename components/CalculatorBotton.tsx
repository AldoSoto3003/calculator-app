import { Pressable, Text } from 'react-native';

import * as Haptics from 'expo-haptics';

import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/styles/global-styles';

interface CalculatorBottonProps {
    label: string;
    doubleSize?: boolean;
    color?: string;
    blackText?: boolean;
    onPress: () => void;
}

const CalculatorBotton = ({label, doubleSize=false, color = Colors.darkGray, blackText = false, onPress}: CalculatorBottonProps) => {
  return (
    <Pressable 
        style={({ pressed }) => ({
            ...globalStyles.button,
            backgroundColor: color,
            opacity: pressed ? 0.5 : 1,
            width: doubleSize ? 180 : 85,
        })} 
        onPress={
            () => {
                Haptics.selectionAsync();
                onPress();
            }
        }>
            <Text
                style={{
                    ...globalStyles.buttonText,
                    color: blackText ? 'black' : 'white',
                }}
            >{label}</Text>
    </Pressable>
  )
}

export default CalculatorBotton