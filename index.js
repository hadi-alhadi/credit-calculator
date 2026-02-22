const args = require('minimist')(process.argv.slice(2));

const amount = parseFloat(args.amount);
const installments = parseInt(args.installments);

if (isNaN(amount) || amount <= 0) {
  console.log('Error: Amount must be a positive number.');
  process.exit(1);
}
if (isNaN(installments) || !Number.isInteger(installments) || installments <= 0) {
  console.log('Error: Installments must be a positive integer greater than zero.');
  process.exit(1);
}
  console.log('Please provide valid --amount and --installments values.');
  process.exit(1);
}

const equalInstallment = (amount / installments).toFixed(2);
console.log(`Equal installment amount: ${equalInstallment} AED`);