export function Circle ({inputValue, handleInputChange, backgroundColor, textColor}) {
    

    const inputStyle = {
        appearance: 'none',
        width: '100%',
        height: 25,
        cursor: 'pointer',
        backgroundColor: 'lightgray',
    };

    return (
        <div style={{ 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: 50,}}>
            <input type="range" min={0} max={100} value={inputValue} onInput={handleInputChange} style={inputStyle}/>
            <div className="circle" style={{
                display: 'flex',
                justifyContent: 'center',
                fontSize: '2rem',
                alignItems: 'center',
                color: !textColor ? 'black' : textColor,
                backgroundColor: !backgroundColor ? 'lightgray' : backgroundColor,
                height: `${(parseInt(inputValue) + 50) * 2}px`,
                width: `${(parseInt(inputValue) + 50) * 2}px`,
                borderRadius: '50%',
            }}>
                <span>{inputValue}</span>
            </div>
        </div>
    );
}