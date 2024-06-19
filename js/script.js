
        function convertToFahrenheit() {
            let celsius = parseFloat(document.getElementById('celsiusInput').value);
            if (isNaN(celsius)) {
                alert('Please enter a valid number');
                return;
            }
            let fahrenheit = (celsius * 9 / 5) + 32;
            document.getElementById('fahrenheitOutput').value = fahrenheit.toFixed(2);
            document.getElementById('calculationMethod').value = `${celsius}°C * 9/5 + 32 = ${fahrenheit.toFixed(2)}°F`;
        }

        function resetFields() {
            document.getElementById('celsiusInput').value = '';
            document.getElementById('fahrenheitOutput').value = '';
            document.getElementById('calculationMethod').value = '';
        }

        function reverseConversion() {
            let fahrenheit = parseFloat(document.getElementById('fahrenheitOutput').value);
            if (isNaN(fahrenheit)) {
                alert('Please enter a valid number');
                return;
            }
            let celsius = (fahrenheit - 32) * 5 / 9;
            document.getElementById('celsiusInput').value = celsius.toFixed(2);
            document.getElementById('calculationMethod').value = `${fahrenheit}°F - 32 * 5/9 = ${celsius.toFixed(2)}°C`;
        }

        function appendNumber(number) {
            document.getElementById('celsiusInput').value += number;
        }

        function clearDisplay() {
            document.getElementById('celsiusInput').value = '';
        }

        function setOperation(operation) {
            // Add functionality if needed for calculator
        }

        function calculateResult() {
            // Add functionality if needed for calculator
        }
