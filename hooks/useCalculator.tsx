import { useEffect, useRef, useState } from "react";

enum Operator {
    add = '+',
    substract = '-',
    multiply = 'x',
    divide = '%',
}

export const useCalculator = () => {

    const [formula, setFormula] = useState('0')
    const [number, setNumber] = useState('0')
    const [prevNumber, setPrevNumber] = useState('0')

    const lastOperation = useRef<Operator>(undefined);

    useEffect(() => {
        setFormula(number);
    },[number])

    const buildNumber = ( numberString: string ) => {
        // Check if decimal point alredy exists
        if (number.includes('.') && numberString === '.') return;

        if (number.startsWith('0') || number.startsWith('-0')) {
            if (numberString === '.'){
                return setNumber(number + numberString);
            } 
            // Evaluate if the current number is zero and de the actual number includes a decimal point
            if (numberString === '0' && number.includes('.')) {
                return setNumber(number + numberString);
            }
    
            // Evaluate if the number is different of zero , there is not a decimal point AND it is the first number, 
            // then avoid to write something like '09' instead '9'
            if (numberString !== '0' && !number.includes('.')) {
                return setNumber(numberString);
            }
    
            // Avoid 00000.000
            if (numberString === '0' && !number.includes('.')){
                return;
            }
        }
        setNumber(number + numberString)
    }

    return {
        // Props
        formula,
        number,
        prevNumber,

        // Methods
        buildNumber,
    }
}