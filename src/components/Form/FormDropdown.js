import React from 'react';
import { Field } from '.';
import Dropdown from '../Dropdown';

const FormDropdown = ({ ...args }) => (
    <Field>
        <Dropdown {...args} />
    </Field>
);

FormDropdown.propTypes = Dropdown.propTypes;

export default FormDropdown;
