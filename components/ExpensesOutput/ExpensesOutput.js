import { View, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2022-10-12'),
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 99.99,
    date: new Date('2022-11-12'),
  },
  {
    id: 'e3',
    description: 'Some bananas',
    amount: 9.99,
    date: new Date('2022-11-01'),
  },
  {
    id: 'e4',
    description: 'A book',
    amount: 19.99,
    date: new Date('2022-10-01'),
  },
  {
    id: 'e5',
    description: 'A game',
    amount: 29.99,
    date: new Date('2022-12-01'),
  },
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal: 24,
    paddingTop:24,
    paddingBottom:0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
