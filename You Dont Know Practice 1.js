const TAX_RATE = .0825;
const PHONE_PRICE = 50.00;
const ACCESSORY_PRICE = 10.00;
const SPENDING_THRESHOLD = 300.00;

var bank_balance = 400.00;
var amount = 0;

function calculateTax(amount){
	return amount * TAX_RATE;
}

function formatAmount(amount){
	return "$" + amount.toFixed(2);
}

//Keep buying phone whill you still have money

while(amount < bank_balance){
	//Buy a phone
	amount = amount + PHONE_PRICE;

	//Can you buy the accessory too?
	if(amount < SPENDING_THRESHOLD){
		amount = amount + ACCESSORY_PRICE;
	}
}

amount = amount + calculateTax(amount);

console.log("Your purchase: " + formatAmount(amount));

if(amount > bank_balance){
	console.log("You can't afford this purchase.");
}