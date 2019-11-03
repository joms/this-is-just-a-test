import React, { useState, useReducer } from 'react';
import Button from './components/Button';
import Form, { Field } from './components/Form';
import './styles/app.scss';

const errorReducer = (state, action) => {
    switch (action.type) {
        case 'set':
            return {
                ...state,
                [action.name]: action.error,
            };
        case 'clear':
            const _state = { ...state };
            delete _state[action.name];
            return _state;
        default:
            return state;
    }
};

function App() {
    const [formState, setFormState] = useState({});
    const [formResult, setFormresult] = useState(null);
    const [errors, dispatchError] = useReducer(errorReducer, {});

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

    const validators = {
        licenseplate: () => {
            let error = '';
            const val = formState['licenseplate'];
            const re = /[A-Z]{2}\d{5}/;

            if (!re.test(val)) {
                console.log(re);
                console.log(val);
                error = 'Registreringsnummeret har feil format';
            }

            if (!val) {
                error = 'Dette feltet er påkrevd';
            }

            if (error) {
                setError('licenseplate', error);
            } else {
                clearError('licenseplate');
            }
            return error;
        },
        bonus: value => {
            let error = '';
            const val = value || formState['bonus'];

            if (!val) {
                error = 'Dette feltet er påkrevd';
            }

            if (error) {
                setError('bonus', error);
            } else {
                clearError('bonus');
            }
            return error;
        },
        identity_number: () => {
            let error = '';
            const val = formState['identity_number'];

            if (val && val.length !== 11) {
                error = '11 siffer er påkrevd';
            }

            if (!val) {
                error = 'Dette feltet er påkrevd';
            }

            if (error) {
                setError('identity_number', error);
            } else {
                clearError('identity_number');
            }
            return error;
        },
        firstname: () => {
            let error = '';
            const val = formState['firstname'];

            if (!val) {
                error = 'Dette feltet er påkrevd';
            }

            if (error) {
                setError('firstname', error);
            } else {
                clearError('firstname');
            }
            return error;
        },
        surname: () => {
            let error = '';
            const val = formState['surname'];

            if (!val) {
                error = 'Dette feltet er påkrevd';
            }

            if (error) {
                setError('surname', error);
            } else {
                clearError('surname');
            }
            return error;
        },
        email: () => {
            let error = '';
            const val = formState['email'];
            // Simple email regex from https://emailregex.com/
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (!re.test(val)) {
                error = 'Epost adressen har feil format';
            }

            if (!val) {
                error = 'Dette feltet er påkrevd';
            }

            if (error) {
                setError('email', error);
            } else {
                clearError('email');
            }
            return error;
        },
    };

    const clearError = name =>
        dispatchError({
            type: 'clear',
            name,
        });

    const setError = (name, error) =>
        dispatchError({
            type: 'set',
            name,
            error,
        });

    const validate = name => validators[name];

    const getFormValue = (name, fallback = '') => formState[name] || fallback;

    const handleSubmit = () => {
        // Validate all validators before continuing
        const err = Object.values(validators)
            .map(fun => fun())
            .filter(e => !!e);

        if (err.length) {
            return;
        }

        // oil price 3rd nov at 22:00 pluss some randomness
        const basePrice = 56.2 * (Math.random() * 3.14);
        setFormresult({
            Ansvar: Math.round(basePrice * 12),
            Delkasko: Math.round(basePrice * 15),
            Kasko: Math.round(basePrice * 20),
            Pluss: Math.round(basePrice * 27),
        });
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    };

    return (
        <main>
            <h1>Kjøp Bilforsikring</h1>
            <p>
                Det er fire forskjellige forsikringer å velge mellom. Ansvarsforsikring er lovpålagt om kjøretøyet er
                registrert og skal brukes på veien. I tillegg kan du utvide forsikringen avhengig av hvor gammel bilen
                din er og hvordan du bruker den
            </p>
            {formResult && (
                <div id="pricelist">
                    <img src="/lada.jpg" alt="Lada" />
                    <h3>Lada Niva 1977</h3>
                    <table>
                        <tbody>
                            {Object.entries(formResult).map(([name, price]) => (
                                <tr key={name}>
                                    <td>
                                        <strong className="type">{name}</strong>
                                    </td>
                                    <td>{price},-/mnd</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <hr />
                </div>
            )}
            <Form onSubmit={handleSubmit}>
                <Form.Input
                    label="Bilens registreringsnummer"
                    placeholder="E.g. AB12345"
                    onChange={handleFormChange('licenseplate')}
                    value={getFormValue('licenseplate')}
                    error={errors['licenseplate']}
                    onBlur={validate('licenseplate')}
                />
                <Form.Dropdown
                    label="Din bonus"
                    hint="Hos oss får du minst 40% bonus fra dag en"
                    placeholder="40%"
                    onChange={value => {
                        handleFormChange('bonus')(value);
                        validate('bonus')(value);
                    }}
                    value={getFormValue('bonus')}
                    error={errors['bonus']}
                    options={[
                        {
                            text: '0%',
                            value: '0',
                        },
                        {
                            text: '10%',
                            value: '10',
                        },
                        {
                            text: '20%',
                            value: '20',
                        },
                        {
                            text: '30%',
                            value: '30',
                        },
                        {
                            text: '40%',
                            value: '40',
                        },
                        {
                            text: '60%',
                            value: '60',
                        },
                        {
                            text: '70%',
                            value: '70',
                        },
                        {
                            text: '80% 1 år',
                            value: '80+1',
                        },
                        {
                            text: '80% 2 år',
                            value: '80+2',
                        },
                        {
                            text: '80% 3 år',
                            value: '80+3',
                        },
                        {
                            text: '80% 4 år',
                            value: '80+4',
                        },
                        {
                            text: '80% 5 år',
                            value: '80+5',
                        },
                    ]}
                />
                <Form.Input
                    label="Fødselsnummer"
                    placeholder="11 siffer"
                    type="number"
                    onChange={handleFormChange('identity_number')}
                    value={getFormValue('identity_number')}
                    error={errors['identity_number']}
                    onBlur={validate('identity_number')}
                />
                <Field horizontal>
                    <Form.Input
                        label="Fornavn"
                        placeholder="Ola"
                        onChange={handleFormChange('firstname')}
                        value={getFormValue('firstname')}
                        error={errors['firstname']}
                        onBlur={validate('firstname')}
                    />
                    <Form.Input
                        label="Etternavn"
                        placeholder="Nordmann"
                        onChange={handleFormChange('surname')}
                        value={getFormValue('surname')}
                        error={errors['surname']}
                        onBlur={validate('surname')}
                    />
                </Field>
                <Form.Input
                    label="Epost"
                    placeholder="ola@nordmann.no"
                    onChange={handleFormChange('email')}
                    value={getFormValue('email')}
                    error={errors['email']}
                    onBlur={validate('email')}
                />
                <Button.Buttons>
                    <Button type="submit">Beregn pris</Button>
                    <Button invert onClick={() => setFormState({})}>
                        Avbryt
                    </Button>
                </Button.Buttons>
            </Form>
        </main>
    );
}

export default App;
