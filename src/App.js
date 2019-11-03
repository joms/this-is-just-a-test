import React, { useState } from 'react';
import Button from './components/Button';
import Form, { Field } from './components/Form';
import './styles/app.scss';

function App() {
    const [formState, setFormState] = useState({});

    const handleFormChange = name => event => {
        let value = event;

        if (typeof event === 'object') {
            value = event.target.value;
        }
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const getFormValue = (name, fallback = '') => formState[name] || fallback;

    return (
        <main>
            <h1>Kjøp Bilforsikring</h1>
            <p>
                Det er fire forskjellige forsikringer å velge mellom. Ansvarsforsikring er lovpålagt om kjøretøyet er
                registrert og skal brukes på veien. I tillegg kan du utvide forsikringen avhengig av hvor gammel bilden
                din er og hvordan du bruker den.
            </p>
            <Form>
                <Form.Input
                    label="Bilens registreringsnummer"
                    placeholder="E.g. AB12345"
                    onChange={handleFormChange('licenseplate')}
                    value={getFormValue('licenseplate')}
                />
                <Form.Input
                    label="Fødselsnummer"
                    placeholder="11 siffer"
                    type="number"
                    onChange={handleFormChange('identity_number')}
                    value={getFormValue('identity_number')}
                />
                <Field horizontal>
                    <Form.Input
                        label="Fornavn"
                        placeholder="Ola"
                        onChange={handleFormChange('firstname')}
                        value={getFormValue('firstname')}
                    />
                    <Form.Input
                        label="Etternavn"
                        placeholder="Nordmann"
                        onChange={handleFormChange('surname')}
                        value={getFormValue('surname')}
                    />
                </Field>
                <Form.Input
                    label="Epost"
                    placeholder="ola@nordmann.no"
                    onChange={handleFormChange('email')}
                    value={getFormValue('email')}
                />
                <Button.Buttons>
                    <Button>Beregn pris</Button>
                    <Button invert>Avbryt</Button>
                </Button.Buttons>
            </Form>
        </main>
    );
}

export default App;
