import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { BtnCalc } from '../components/BtnCalc';
import React from 'react';
import { useCalc } from '../hooks/useCalc';

export const CalculadoraScreen = () => {
  const {
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
  } = useCalc();

  return (
    <View style={styles.container}>
      {numberLittle !== '0' && (
        <Text style={styles.resultLittle}>{numberLittle}</Text>
      )}

      <Text
        numberOfLines={1}
        adjustsFontSizeToFit={true}
        style={styles.resultado}
      >
        {numero}
      </Text>
      <View style={styles.fila}>
        <BtnCalc text="C" typeColor="firstRow" action={clean} />
        <BtnCalc text="+/-" typeColor="firstRow" action={negativeNumber} />
        <BtnCalc text="%" typeColor="firstRow" action={btnPorcentaje} />
        <BtnCalc text="/" typeColor="operator" action={btnDividir} />
      </View>
      <View style={styles.fila}>
        <BtnCalc text="7" typeColor="number" action={buildNumber} />
        <BtnCalc text="8" typeColor="number" action={buildNumber} />
        <BtnCalc text="9" typeColor="number" action={buildNumber} />
        <BtnCalc text="*" typeColor="operator" action={btnMultiplicar} />
      </View>
      <View style={styles.fila}>
        <BtnCalc text="4" typeColor="number" action={buildNumber} />
        <BtnCalc text="5" typeColor="number" action={buildNumber} />
        <BtnCalc text="6" typeColor="number" action={buildNumber} />
        <BtnCalc text="-" typeColor="operator" action={btnRestar} />
      </View>
      <View style={styles.fila}>
        <BtnCalc text="1" typeColor="number" action={buildNumber} />
        <BtnCalc text="2" typeColor="number" action={buildNumber} />
        <BtnCalc text="3" typeColor="number" action={buildNumber} />
        <BtnCalc text="+" typeColor="operator" action={btnSumar} />
      </View>
      <View style={styles.fila}>
        <BtnCalc text="0" typeColor="number" action={buildNumber} />
        <BtnCalc text="." typeColor="number" action={buildNumber} />
        <BtnCalc text="◄" typeColor="operator" action={deleteLast} />
        <BtnCalc text="=" typeColor="operator" action={calculo} />
      </View>
    </View>
  );
};
