class Expense {
  /**
   Represents a Expense.
   @constructor
   @param {date} date - The date of the expense.
   @param {float} income - The author of the book.
   @param {float} expense - expense of the book.
   @param {string} detail - detail of the book
 */
  constructor(date, income, expense, detail) {
    this.date = date;
    this.income = parseFloat(income) || 0;
    this.expense = parseFloat(expense) || 0;
    this.detail = detail || '';
  }
}

/**
 * Class ExpenseModel.
 * @class
 */
class ExpenseModel {
  constructor() {
    this.expenses = [];
  }

/**
 * add expense numbers passed to the function.
 * @param {float} expense - A positive number.
 */

  add(expense) {
    this.expenses.push(expense);
  }

/**
 * return expense numbers from stack.
 * @
 *  {array} expense - array of positive number
 */

  getAll() {
    return this.expenses;
  }

/**
 * return total income.
 * @return {float} income - A positive number
 */
  getTotalIncome() {
    return this.expenses.reduce((sum, exp) => sum + exp.income, 0);
  }

  /**
 * return total expense.
 * @return {float} expense - A positive number
 */

  getTotalExpense() {
    return this.expenses.reduce((sum, exp) => sum + exp.expense, 0);
  }

    /**
 * return how many money left.
 * @return {float} Money left - get total money by Income - Expense.
 */

  getMoneyLeft() {
    return this.getTotalIncome() - this.getTotalExpense();
  }
}

module.exports = { Expense, ExpenseModel };
