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