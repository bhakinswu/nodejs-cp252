class Expense {
  /**
   Represents a Expense.
   @constructor
   @param {date} date - The date of the expense.
   @param {float} income - The income of the book.
   @param {float} expense - The expense of the book.
   @param {string} detail - The detail of the book.
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
 * 
 * @return expense numbers from stack.
 *  {array} expense - array of positive number
 */

  getAll() {
    return this.expenses;
  }

/**
 * return the total sum of all income entries.
 * @return {float} the total income amount
 */
  getTotalIncome() {
    return this.expenses.reduce((sum, exp) => sum + exp.income, 0);
  }

  /**
 * return the total sum of all expense entries.
 * @return {float} The total expense amount.
 */

  getTotalExpense() {
    return this.expenses.reduce((sum, exp) => sum + exp.expense, 0);
  }

/**
 * return the remaining balance
 * @return {float} (Total Income - Total Expense) The net balance amount.
 */

  getMoneyLeft() {
    return this.getTotalIncome() - this.getTotalExpense();
  }
}

module.exports = { Expense, ExpenseModel };
