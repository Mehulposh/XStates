import React from 'react';


function Select({data, handler, name , disabled= false}) {
    return (
        <div className="select-container">
        <select className="select" name="select" id="select" onChange={handler} disabled={disabled} style={{height: "30px"}}>
            <option value="">Select {name}</option>
            {data.map((item,idx) => (
                <option key={idx} value={item}>{item}</option>
            ))}
        </select>
        </div>
    );  
    
}

export default Select;