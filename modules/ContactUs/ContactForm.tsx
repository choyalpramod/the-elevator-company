'use client'

import {useForm, SubmitHandler} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useState} from "react";
import {FieldNames, IField, IFormInput} from "@/modules/ContactUs/ContactForm.types";

const schema = yup.object().shape({
    [FieldNames.NAME]: yup.string().required('Name is required'),
    [FieldNames.EMAIL]: yup.string().email('Invalid email').required('Email is required'),
    [FieldNames.PHONE_NUMBER]: yup.string()
        .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
        .required('Phone number is required'),
    [FieldNames.LOCATION]: yup.string().required('Location is required'),
    [FieldNames.ADDITIONAL_INFORMATION]: yup.string(),
});

export const ContactForm = () => {
    const [isSent, setIsSent] = useState<boolean>(false)
    const {register, handleSubmit, formState: {errors}} = useForm<IFormInput>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<IFormInput> = data => {
        fetch(process.env.NEXT_PUBLIC_CONTACT_US_URL as string, {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).finally(() => {
            setIsSent(true)
        })
    };

    return (
        <div className="flex justify-center mt-8">
            <div className="w-10/12 lg:w-8/12 xl:w-6/12 ">
                {isSent ? <p>Thank you for your request, you should expect our call within a week</p> : (
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex">
                            <Field errors={errors} name={FieldNames.NAME} register={register} placeholder="Full Name"/>
                        </div>
                        <div className="flex">
                            <Field errors={errors} name={FieldNames.EMAIL} register={register}
                                   placeholder="Email Address"/>
                        </div>
                        <div className="flex flex-col sm:flex-row">
                            <Field errors={errors} name={FieldNames.PHONE_NUMBER} register={register}
                                   placeholder="Phone Number"/>
                            <Field errors={errors} name={FieldNames.LOCATION} register={register} placeholder="City"/>
                        </div>
                        <div>
                            <Field errors={errors} name={FieldNames.ADDITIONAL_INFORMATION} register={register}
                                   placeholder="Message" type="textarea"/>
                        </div>
                        <div className="px-5 mb-5">
                            <button className="w-full bg-black text-white py-5 cursor-pointer" type="submit">
                                Request callback
                            </button>
                        </div>
                    </form>
                )}

            </div>
        </div>
    );
};

const Field = ({name, register, errors, placeholder, type = 'text'}: IField) => {
    return (
        <div className="flex-1 border-b border-black-100 mx-5 my-6">
            {type === 'textarea' ? <textarea {...register(name)} placeholder={placeholder} className="w-full"/> :
                <input {...register(name)} placeholder={placeholder} className="w-full"/>}
            {errors[name] && <p>{errors[name].message}</p>}
        </div>
    )
}