import { useState } from 'react';
import Madencilik  from './Madencilik'
import './App.css';

function App() {
    const[ad, setAd] = useState("");
    const[adlar, setAdlar] = useState(["Ali", "Can"]);

    function degisti(e){
        setAd(e.target.value);
    }

    function teslimOlurken(e){
        e.preventDefault();
        setAdlar([...adlar,ad]);
        setAd("");
    }

    return (
        <div className="App">
            <h1>Hosgeldın {ad}</h1>
            <form onSubmit={teslimOlurken}>
                <label>Adiniz: </label> <br />
                <input type="text" value={ad} onChange={degisti} required/>
                <button className='btn-ekle'>Ekle</button>
                <hr/>
                <ul>
                    {adlar.map((v,i) => <li key={i}>{v}</li>)}
                </ul>
                <p>Ogrenci Sayisi: {adlar.length}</p>
            </form>
            <Madencilik />
        </div>
    );
}

export default App;