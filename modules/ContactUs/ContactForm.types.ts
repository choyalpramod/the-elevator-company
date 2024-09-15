// @ts-ignore
import {FieldErrors, TFieldValues, UseFormRegister} from "react-hook-form/dist/useForm";

export enum FieldNames {
    NAME = 'name',
    EMAIL = 'email',
    PHONE_NUMBER = 'phoneNumber',
    LOCATION = 'location',
    ADDITIONAL_INFORMATION = 'additionalInformation',
}

export interface IFormInput {
    [FieldNames.NAME]: string;
    [FieldNames.EMAIL]: string;
    [FieldNames.PHONE_NUMBER]: string;
    [FieldNames.LOCATION]: string;
    [FieldNames.ADDITIONAL_INFORMATION]?: string;
}

export interface IField {
    name: string;
    register: UseFormRegister<TFieldValues>;
    errors: FieldErrors<TFieldValues>;
    placeholder: string;
    type?: 'text' | 'textarea';
}

