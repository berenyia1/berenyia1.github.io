
const EURrate = 0.92;
const CADrate = 1.38;
const HKDrate = 7.81;
const JPYrate = 156.73;
const MXNrate = 18.41;


function formatCurrency(amount, currencyCode) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currencyCode,
    });
    return formatter.format(amount);
}

function convertCurrency(amount, currencyCode) {
    let convertedValue = amount;
    switch (currencyCode) { 
        case 'EUR':
            convertedValue *= EURrate;
            break;
        case 'CAD':
            convertedValue *= CADrate;
            break;
        case 'HKD':
            convertedValue *= HKDrate;
            break;
        case 'JPY':
            convertedValue *= JPYrate;
            break;
        case 'MXN':
            convertedValue *= MXNrate;
            break;
        default:
            throw new Error('Unsupported currency code: ' + currencyCode);
    }

    return formatCurrency(convertedValue, currencyCode);
}



function updateExchange(inputUSD) {

    document.getElementById("EURvalue").innerText = convertCurrency(inputUSD, 'EUR');
    document.getElementById("CADvalue").innerText = convertCurrency(inputUSD, 'CAD');
    document.getElementById("HKDvalue").innerText = convertCurrency(inputUSD, 'HKD');
    document.getElementById("JPYvalue").innerText = convertCurrency(inputUSD, 'JPY');
    document.getElementById("MXNvalue").innerText = convertCurrency(inputUSD, 'MXN');
}


function amountChanged(event) {
   // event.preventDefault(); // Prevents the form from submitting and reloading the page
    
    const USDamount = Number(document.getElementById("inputUSD").value);
    
    updateExchange(USDamount);
    
}

amountChanged();