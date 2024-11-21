/* 
triangle
calc-btn
cart-items-container
shapes-list 
inp-1
inp-2
*/

const calcList = document.querySelector('#shapes-list');
// console.log(calcList);
const inp1 = document.querySelector('#inp-1');
const inp2 = document.querySelector('#inp-2');
// console.log(inp1,inp2);
const calcBtn = document.querySelector('#calc-btn');
// console.log(calcBtn.parentNode.parentNode.id);
const shapeName = calcBtn.parentNode.parentNode.id;
// console.log(typeof shapeName);

const validInputCheck = (inputField) => {
    let val = parseFloat(inputField.value);
    return (val <= 0 ? false : true);
}
const reset = (inputField) => {
    return inputField.value = '';
}

const areaTriangle = (val1, val2) => {
    return ((0.5 * val1 * val2)).toFixed(3);
}

const createList=(shapeName,area)=>{
    const li=document.createElement('li');
    const shape=document.createElement('span');
    // const unit=document.createElement('span');
    // unit.innerHTML=`cm<sup>2</sup>`;
    // console.log(typeof shapeName);
    
    shape.innerText=shapeName;
    shape.classList.add('mx-2');
    const areaVal=document.createElement('span');
    areaVal.innerHTML=`${area}cm<sup>2</sup>`;

    li.appendChild(shape);
    li.appendChild(areaVal);
    li.classList.add('text-[var(--dark-1)]','text-[1.125rem]')
    return li;
}

const addToCart=(list)=>{
    calcList.appendChild(list);
}
calcBtn.addEventListener('click', () => {
    if (!validInputCheck(inp1) || !validInputCheck(inp2)) alert('Please Enter a valid number');
    else {
        let val1 = parseFloat(inp1.value);
        let val2 = parseFloat(inp2.value);
        // console.log(typeof val1);
        let area;
        if (shapeName === 'triangle') {
            // console.log("yes");
            area = areaTriangle(val1, val2)
        }
        // console.log(area);
        const li=createList(shapeName,area);
        console.log(li);
        
        calcList.appendChild(li);
    }





    reset(inp1);
    reset(inp2);
})




