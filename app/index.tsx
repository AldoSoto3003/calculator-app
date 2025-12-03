import { View } from 'react-native'

import CalculatorBotton from '@/components/CalculatorBotton'
import ThemeText from '@/components/ThemeText'
import { Colors } from '@/constants/Colors'
import { useCalculator } from '@/hooks/useCalculator'
import { globalStyles } from '@/styles/global-styles'

const CalculatorApp = () => {
  
    const { formula, buildNumber, deleteLastDigit, toggleSign, clean } = useCalculator();

    return (
        <View style={ globalStyles.calcutorContainer }>
            {/* Resultados */}
            <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
                <ThemeText variant='h1'>{formula}</ThemeText>
                <ThemeText variant='h2'> 80 </ThemeText>
            </View>

            {/* Filas de botones */}
            <View style={ globalStyles.row }>
                <CalculatorBotton label="C" blackText color={Colors.lightGray} onPress={() => clean()}/>
                <CalculatorBotton label="+/-" blackText color={Colors.lightGray} onPress={() => toggleSign()}/>
                <CalculatorBotton label="del" blackText color={Colors.lightGray} onPress={() => deleteLastDigit()}/>
                <CalculatorBotton label="%" color='orange' onPress={() => buildNumber("÷")}/>
            </View>

            {/* Filas de botones */}
            <View style={ globalStyles.row }>
                <CalculatorBotton label="7" color={Colors.darkGray} onPress={() => buildNumber("7")}/>
                <CalculatorBotton label="8" color={Colors.darkGray} onPress={() => buildNumber("8")}/>
                <CalculatorBotton label="9" color={Colors.darkGray} onPress={() => buildNumber("9")}/>
                <CalculatorBotton label="X" color='orange' onPress={() => buildNumber("X")}/>
            </View>

            {/* Filas de botones */}
            <View style={ globalStyles.row }>
                <CalculatorBotton label="4" color={Colors.darkGray} onPress={() => buildNumber("4")}/>
                <CalculatorBotton label="5" color={Colors.darkGray} onPress={() => buildNumber("5")}/>
                <CalculatorBotton label="6" color={Colors.darkGray} onPress={() => buildNumber("6")}/>
                <CalculatorBotton label="-" color='orange' onPress={() => buildNumber("-")}/>
            </View>

            {/* Filas de botones */}
            <View style={ globalStyles.row }>
                <CalculatorBotton label="1" color={Colors.darkGray} onPress={() => buildNumber("1")}/>
                <CalculatorBotton label="2" color={Colors.darkGray} onPress={() => buildNumber("2")}/>
                <CalculatorBotton label="3" color={Colors.darkGray} onPress={() => buildNumber("3")}/>
                <CalculatorBotton label="+" color='orange' onPress={() => buildNumber("+")}/>
            </View>

            {/* Filas de botones */}
            <View style={ globalStyles.row }>
                <CalculatorBotton label="0" doubleSize color={Colors.darkGray} onPress={() => buildNumber("0")}/>
                <CalculatorBotton label="." color={Colors.darkGray} onPress={() => buildNumber(".")}/>
                <CalculatorBotton label="=" color={Colors.orange} onPress={() => buildNumber("=")}/>
            </View>
        </View>
    )
}

export default CalculatorApp