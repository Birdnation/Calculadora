import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface btnProps {
  text: string;
  typeColor: 'firstRow' | 'operator' | 'number';
  isZero?: boolean;
  action: (stringNumber: string) => void;
}

export const BtnCalc = ({ text, typeColor, isZero, action }: btnProps) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      {/* Boton */}
      <View
        style={[
          stylesBtn.boton,
          typeColor === 'firstRow' ? { backgroundColor: '#9b9b9b' } : null,
          typeColor === 'operator' ? { backgroundColor: '#FF9427' } : null,
          typeColor === 'number' ? { backgroundColor: '#2d2d2d' } : null,
          isZero ? { width: 158 } : null,
        ]}
      >
        <Text
          style={[
            stylesBtn.botonText,
            typeColor === 'firstRow' ? { color: '#000' } : null,
            typeColor === 'operator' ? { color: '#fff' } : null,
            typeColor === 'number' ? { color: '#fff' } : null,
          ]}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const stylesBtn = StyleSheet.create({
  boton: {
    height: 70,
    width: 70,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  botonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: '#000',
    fontWeight: '300',
  },
});
