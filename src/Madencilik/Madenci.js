import { useState } from 'react';
import './madenci.css';
function Madenci(props) {
    const [miktar, setMiktar] = useState(0);

    const tiklandi = function(event) {
        const yeniMiktar = miktar + 1;
        setMiktar(yeniMiktar);
        if(props.madenKazildi)
        {
            props.madenKazildi(yeniMiktar);
        }
    };

    return (
        <button className="madenci" onClick={tiklandi}>
            <span>{miktar}</span>
        </button>
    )
}

export default Madenci;

