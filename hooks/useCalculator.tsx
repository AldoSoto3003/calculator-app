import { useEffect, useRef, useState } from "react";

enum Operator {
    add = '+',
    subtract = '-',
    multiply = 'x',
    divide = '÷',
}

export const useCalculator = () => {

    const [formula, setFormula] = useState('0')
    const [number, setNumber] = useState('0')
    const [prevNumber, setPrevNumber] = useState('0')

    const lastOperation = useRef<Operator>(undefined);

    useEffect(() => {
        if (lastOperation.current) {
            const firstFormulaPart = formula.split(' ').at(0);
            setFormula(`${ firstFormulaPart } ${ lastOperation.current } ${number}`);
        } else {
            setFormula(number);
        }
    },[number])

    useEffect(() => {
        const result = calculateResult();
        setPrevNumber(`${result}`);
    },[formula]);

    const clean = () => {
        setNumber('0')
        setFormula('0')
        setPrevNumber('0')

        lastOperation.current = undefined;
    };

    const toggleSign = () => {
        if (number.startsWith('-')) return setNumber(number.slice(1))
        setNumber('-' + number)
    };

    const deleteLastDigit = () => {
        if (number.length == 1) return setNumber('0')
        setNumber(number.slice(0, -1))
    };

    const setLastNumber = () => {
        calculate();
        if (number.endsWith('.')) {
            setPrevNumber(number.slice(0, -1));
        }
        setPrevNumber(number);
        setNumber('0');
    };
    const addOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.add;
    };
    
    const subtractOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.subtract;
    };    
    
    const multiplyOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.multiply;
    };

    const divideOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.divide;
    };

    const calculateResult = () => {
        const [firstValue, operation, secondValue] = formula.split(' ');
        
        const num1 = Number(firstValue);
        const num2 = Number(secondValue);

        if (isNaN(num2)) return num1;

        switch( operation ) {
            case Operator.add:
                return num1 + num2;

            case Operator.subtract:
                return num1 - num2;

            case Operator.multiply:
                return num1 * num2;

            case Operator.divide:
                return num1 / num2;
            
            default:
                throw new Error(`Operation ${ operation } not implemented`)
        }

    }

    const calculate = () => {
        const result = calculateResult();
        setFormula(`${result}`);
        
        lastOperation.current = undefined;
        setPrevNumber('0');
    }

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
        toggleSign,
        deleteLastDigit,
        clean,

        addOperation,
        subtractOperation,
        multiplyOperation,
        divideOperation,

        calculateResult,
        calculate
    }
}