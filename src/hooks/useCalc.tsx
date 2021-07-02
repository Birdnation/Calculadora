import { useRef, useState } from 'react';

enum Operadores {
  suma,
  resta,
  multiplicar,
  divir,
  porcentaje,
}

export const useCalc = () => {
  const [numero, setNumero] = useState('0');
  const [numberLittle, setNumberLittle] = useState('0');
  const ultimaOperacion = useRef<Operadores>();

  //function to clean screen
  const clean = () => {
    setNumero('0');
    setNumberLittle('0');
  };

  const buildNumber = (stringNumber: string) => {
    //Validaciones:
    //1.- No aceptar doble punto:
    if (numero.includes('.') && stringNumber === '.') {
      return;
    }
    if (numero.startsWith('0') || numero.startsWith('-0')) {
      //Punto decimal
      if (stringNumber === '.') {
        setNumero(numero + stringNumber);
        //evaluar si es otro cero
      } else if (stringNumber === '0' && numero.includes('.')) {
        setNumero(numero + stringNumber);
        //si es numero distinto de 0 y no hay punto
      } else if (stringNumber !== '0' && !numero.includes('.')) {
        setNumero(stringNumber);
      } else if (
        (numero.startsWith('0') || numero.startsWith('-0')) &&
        numero.includes('.')
      ) {
        setNumero(numero + stringNumber);
      }
    } else {
      setNumero(numero + stringNumber);
    }
  };

  const negativeNumber = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const deleteLast = () => {
    if (numero.length === 1) {
      setNumero('0');
    } else if (numero.startsWith('-') && numero.length === 2) {
      setNumero('0');
    } else if (numero.charAt(numero.length - 2) === '.') {
      setNumero(numero.slice(0, numero.length - 2));
    } else {
      setNumero(numero.slice(0, numero.length - 1));
    }
  };

  const changeNumber = () => {
    if (numero.endsWith('.')) {
      setNumberLittle(numero.slice(0, -1));
    } else {
      setNumberLittle(numero);
    }

    setNumero('0');
  };

  const btnDividir = () => {
    changeNumber();
    ultimaOperacion.current = Operadores.divir;
  };
  const btnMultiplicar = () => {
    changeNumber();
    ultimaOperacion.current = Operadores.multiplicar;
  };
  const btnSumar = () => {
    changeNumber();
    ultimaOperacion.current = Operadores.suma;
  };
  const btnRestar = () => {
    changeNumber();
    ultimaOperacion.current = Operadores.resta;
  };
  const btnPorcentaje = () => {
    changeNumber();
    ultimaOperacion.current = Operadores.porcentaje;
  };

  const calculo = () => {
    const numero1 = Number(numero);
    const numero2 = Number(numberLittle);

    switch (ultimaOperacion.current) {
      case Operadores.suma:
        setNumero(`${numero2 + numero1}`);
        break;
      case Operadores.resta:
        setNumero(`${numero2 - numero1}`);
        break;
      case Operadores.divir:
        setNumero(`${numero2 / numero1}`);
        break;
      case Operadores.multiplicar:
        setNumero(`${numero2 * numero1}`);
        break;

      case Operadores.porcentaje:
        setNumero(`${(numero2 / 100) * numero1}`);
        break;

      default:
        break;
    }
    setNumberLittle('0');
  };

  return {
    numberLittle,
    numero,
    clean,
    negativeNumber,
    btnPorcentaje,
    btnDividir,
    buildNumber,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    deleteLast,
    calculo,
  };
};
