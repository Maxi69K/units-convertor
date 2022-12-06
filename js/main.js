// Units Convertor
function inputToOutput() {
    const inputs = document.querySelectorAll('.contenders-container input');
    inputs.forEach((input) => {
        input.addEventListener('keyup', function (e) {
            if (e.keyCode === 13 && e.target.value !== '') {
                const targetInputValue = e.target.value;
                if (e.target.id === 'mass') {
                    e.target.parentElement.innerHTML = `<span class="output" id="mass">${targetInputValue}</span>`;
                } else {
                    e.target.parentElement.innerHTML = `<span class="output" id="dis">${targetInputValue}</span>`;
                }
            }
        })
    });
}

function convertUnitsSystem() {
    const unitsSystem = document.querySelector('.units-system');
    unitsSystem.addEventListener('click', () => {
        const allOutputs = document.querySelectorAll('.contenders-container span');

        // Convert imperial to metric units
        const lbsToKg = 0.45359237;
        const inchToCm = 2.54;

        // Convert metric to imperial units
        const kgToLbs = 2.20462262185;
        const cmToInch = 0.3937007874;

        allOutputs.forEach((output) => {
            if (unitsSystem.childNodes[3].checked === true && output.id === 'mass') {
                //console.log('imperial mass');
                output.innerHTML = (output.innerHTML * kgToLbs).toFixed(0);
            }
            if (unitsSystem.childNodes[3].checked === true && output.id === 'dis') {
                //console.log('imperial dis');
                output.innerHTML = (output.innerHTML * cmToInch).toFixed(0);
            }
            if (unitsSystem.childNodes[3].checked === false && output.id === 'mass') {
                //console.log('Metric mass');
                output.innerHTML = (output.innerHTML * lbsToKg).toFixed(0);
            }
            if (unitsSystem.childNodes[3].checked === false && output.id === 'dis') {
                //console.log('Metric dis');
                output.innerHTML = (output.innerHTML * inchToCm).toFixed(0);
            }
            const contendersLi = document.querySelectorAll('.contenders li');
            contendersLi.forEach((contenderLi) => {
                if (contenderLi.classList.contains('w') === true && unitsSystem.childNodes[3].checked === true && output.id === 'mass') {
                    contenderLi.innerHTML = 'Weight <span>lbs</span>';
                }
                if (contenderLi.classList.contains('w') === true && unitsSystem.childNodes[3].checked === false && output.id === 'mass') {
                    contenderLi.innerHTML = 'Weight <span>kg</span>';
                }
                if (contenderLi.classList.contains('h') === true && unitsSystem.childNodes[3].checked === true && output.id === 'dis') {
                    contenderLi.innerHTML = 'Height <span>in</span>';
                }
                if (contenderLi.classList.contains('h') === true && unitsSystem.childNodes[3].checked === false && output.id === 'dis') {
                    contenderLi.innerHTML = 'Height <span>cm</span>';
                }
                if (contenderLi.classList.contains('r') === true && unitsSystem.childNodes[3].checked === true && output.id === 'dis') {
                    contenderLi.innerHTML = 'Reach <span>in</span>';
                }
                if (contenderLi.classList.contains('r') === true && unitsSystem.childNodes[3].checked === false && output.id === 'dis') {
                    contenderLi.innerHTML = 'Reach <span>cm</span>';
                }
                if (contenderLi.classList.contains('l') === true && unitsSystem.childNodes[3].checked === true && output.id === 'dis') {
                    contenderLi.innerHTML = 'Leg Reach <span>in</span>';
                }
                if (contenderLi.classList.contains('l') === true && unitsSystem.childNodes[3].checked === false && output.id === 'dis') {
                    contenderLi.innerHTML = 'Leg Reach <span>cm</span>';
                }

            })
        });
    });

}

inputToOutput();
convertUnitsSystem();