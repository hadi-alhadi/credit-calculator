# Credit Calculator

## Project Description
A simple CLI tool that calculates equal installments for a given amount over a specified number of installments. Ideal for quick financial calculations.

## Installation Steps
1. Clone the repository using `git clone https://github.com/hadi-alhadi/credit-calculator.git`.
2. Navigate to the project directory: `cd credit-calculator`.
3. Install dependencies: `npm install`.

## Usage Example
Run the calculator with the following command:
```bash
npm start -- --amount 1000 --installments 10
```

## Example Output
```
Equal installment amount: 100.00 AED
```

## Example Invalid Input Case
For an invalid input:
```bash
npm start -- --amount -100 --installments 0
```

The output will be:
```
Error: Amount must be a positive number.
Error: Installments must be a positive integer greater than zero.
```