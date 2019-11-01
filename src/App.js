import React from 'react';
import './styles/app.scss';
import Button from './components/Button';

function App() {
    return (
        <main>
            <h1>Kjøp Bilforsikring</h1>
            <p>
                Det er fire forskjellige forsikringer å velge mellom. Ansvarsforsikring er lovpålagt om kjøretøyet er
                registrert og skal brukes på veien. I tillegg kan du utvide forsikringen avhengig av hvor gammel bilden
                din er og hvordan du bruker den.
            </p>
            <form>
                <Button.Buttons>
                    <Button>Beregn pris</Button>
                    <Button invert>Avbryt</Button>
                </Button.Buttons>
            </form>
        </main>
    );
}

export default App;
