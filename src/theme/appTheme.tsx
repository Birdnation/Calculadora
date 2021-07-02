import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'flex-end',
  },
  fondo: {
    flex: 1,
    backgroundColor: '#000',
  },
  resultado: {
    color: '#fff',
    fontSize: 50,
    textAlign: 'right',
  },
  resultLittle: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 25,
    textAlign: 'right',
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
  },
});
