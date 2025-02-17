const body = document.querySelector('body');

const mainDiv = document.createElement('div');
const btndiv = document.createElement('div');
const mainRow = document.createElement('div');

body.append(mainDiv);
mainDiv.append(btndiv, mainRow);

mainDiv.classList.add('main-div');
btndiv.classList.add('btn-div');

const btnText = ['Cars', "Bikes", "Trucks", "Buses", "Cycles"];

for (let i = 1; i <= 5; i++){
    const button = document.createElement('button');
    btndiv.append(button);
    button.textContent = btnText[i-1];
};
const buttons = document.querySelectorAll('button');
buttons.forEach(button =>{
    button.addEventListener ('click', () =>{
        const existUl = document.querySelector('ul');
        if(existUl){
            existUl.remove();
        }
        const ul = document.createElement('ul');
        mainRow.append(ul);

        if(event.target.textContent === 'Cars'){
            const Cars = ['Audi', 'BMW', 'Mercedwes', 'Toyota', 'Honda', 'Ford', 'Lamborghini', 'Ferrari', 'Bugatti', 'Porche'];
            for(let i = 1; i <= Cars.length ; i++){
                const li = document.createElement('li');
                ul.append(li);
                li.textContent = i + ')' + " " +  Cars[i - 1];
            };
        } else if(event.target.textContent === 'Bikes'){
            const Bikes = ['Harley Davidson', 'Royal Enfield', 'Ducati', 'KTM', 'Yamaha', 'Suzuki', 'Honda', 'Bajaj', 'TVS', 'Hero'];
            for(let i = 1; i <= Bikes.length; i++){
                const li = document.createElement('li');
                ul.append(li);
                li.textContent = i + ')' + ' ' + Bikes[i - 1];
            };
        }else if (event.target.textContent === 'Trucks'){
            const Trucks = ['Volvo', 'Scania', 'Benz', 'Tata', 'Ashok Leyland', 'Mahindra', 'Eicher'];
            for(let i = 1; i <= Trucks.length; i++){
                const li = document.createElement('li');
                ul.append(li);
                li.textContent = i + ')'  + ' ' + Trucks[i - 1];
            }
        }else if (event.target.textContent === 'Buses'){
            const Buses = ['Mercedes-Benz', 'Volvo', 'Scania', 'Tata', 'Ashok Leyland', 'MAN', 'Isuzu', 'Eicher'];
            for(let i = 1; i <= Buses.length; i++){
                const li = document.createElement('li');
                ul.append(li);
                li.textContent = i + ')'  + ' ' + Buses[i - 1];
            }
        }else if (event.target.textContent === 'Cycles'){
            const Cycles = ['Giant', 'Trek', 'Specialized', 'Hero', 'Atlas', 'Bianchi', 'Cervélo', 'Cannondale'];
            for(let i = 1; i <= Cycles.length; i++){
                const li = document.createElement('li');
                ul.append(li);
                li.textContent = i + ')'  + ' ' + Cycles[i - 1];
            }
        }
    });
});