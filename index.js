const args = require('minimist')(process.argv.slice(2));

const amount = parseFloat(args.amount);
const installments = parseInt(args.installments);

if (isNaN(amount) || isNaN(installments) || installments <= 0) {
  console.log('Please provide valid --amount and --installments values.');
  process.exit(1);
}

const equalInstallment = (amount / installments).toFixed(2);
console.log(`Equal installment amount: ${equalInstallment} AED`);