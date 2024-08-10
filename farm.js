document.getElementById('optionSelector').addEventListener('change', function() {
    const resultDiv = document.getElementById('result');
    const selectedValue = this.value;

    let resultText;

    switch (selectedValue) {
        case 'option1':
            resultText ='₹24';
            break;
        case 'option2':
            resultText = '₹60';
            break;
        case 'option3':
            resultText = '₹80';
            break;
        case 'option3':
            resultText = '₹20';
                break;
        case 'option3':
            resultText = '₹50';
                break;
        case 'option3':
            resultText = '₹40';
            break;
         case 'option3':
            resultText = '₹45';
            break;

        default:
            resultText = '';
    }

    resultDiv.textContent = resultText;
});