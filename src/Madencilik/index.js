import { useState } from 'react';
import Madenci from './Madenci';
import './styles.css';

function Madencilik() {
    const [miktar1, setMiktar1] = useState(0);
    const [miktar2, setMiktar2] = useState(0);
    const [miktar3, setMiktar3] = useState(0);
    const toplam = miktar1 + miktar2 + miktar3;
    
    return (
        <div className="Madencilik">
            <h2>Madencilik</h2>  
            <div className='madenciler'>
                <Madenci madenKazildi={miktar => setMiktar1(miktar)}/>
                <Madenci madenKazildi={miktar => setMiktar2(miktar)}/> 
                <Madenci madenKazildi={miktar => setMiktar3(miktar)}/>
            </div>     
            <div className="ozet">
                Toplam kazılan altın: <span className="toplam">{toplam}</span>
            </div>
        </div>
    );
}

export default Madencilik;
