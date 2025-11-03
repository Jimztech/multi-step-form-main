import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react";

interface InfoProps {
    className?: string;
    onValidationChange?: (isValid: boolean) => void;
}


export default function Info({ className = "", onValidationChange }: InfoProps) {
    const [nameError, setNameError] = useState('');
    const [name, setName] = useState('');
    const [emailError, setEmailError] = useState('');
    const [email, setEmail] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [phone, setPhone] = useState('');

    
    // Check if form is valid whenever field changes
    useEffect(() => {
        const isValid = name.trim() !== '' &&
            email.trim() !== '' &&
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
            phone.trim() !== '';
        onValidationChange?.(isValid);
    }, [name, email, phone, onValidationChange]);


    return (
        <div className={className}>
            <form>
                <FieldGroup>
                    <FieldSet>
                        <FieldLegend>Personal info</FieldLegend>
                        <FieldDescription>
                            Please provide your name, email address, and phone number.
                        </FieldDescription>
                        <FieldGroup>
                            <Field>
                                <div className="flex justify-between items-center">
                                    <FieldLabel htmlFor="name">
                                        Name
                                    </FieldLabel>
                                    {nameError && (
                                        <span className="text-sm text-red-500 font-medium">
                                            {nameError}
                                        </span>
                                    )}
                                </div>
                                <Input 
                                    id="name"
                                    placeholder="e.g. Stephen King"
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                        if (e.target.value.trim()) setNameError('');
                                    }}
                                    onBlur={() => {
                                        if (!name.trim()) setNameError('This Field is required');
                                    }}
                                    className={nameError ? 'border-red-500 text-destructive-red' : ''}
                                />
                            </Field>
                            <Field>
                                <div className="flex justify-between items-center">
                                    <FieldLabel htmlFor="email">
                                        Email Address
                                    </FieldLabel>
                                    {emailError && (
                                        <span className="text-sm text-red-500 font-medium">
                                            {emailError}
                                        </span>
                                    )}
                                </div>
                                <Input 
                                    id="email"
                                    placeholder="e.g. stephenking@lorem.com"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        if (e.target.value.trim()) setEmailError('');
                                    }}
                                    onBlur={() => {
                                        if (!email.trim()) setEmailError('This Field is required');
                                    }}
                                    className={emailError ? 'border-red-500 text-destructive-red' : ''}
                                />
                            </Field>
                            <Field>
                                <div className="flex justify-between items-center">
                                    <FieldLabel htmlFor="phone">
                                        Phone Number
                                    </FieldLabel>
                                     {phoneError && (
                                        <span className="text-sm text-red-500 font-medium">
                                            {phoneError}
                                        </span>
                                    )}
                                </div>
                                <Input 
                                    id="phone"
                                    placeholder="e.g. +1 234 567 890"
                                    value={phone}
                                    onChange={(e) => {
                                        setPhone(e.target.value);
                                        if (e.target.value.trim()) setPhoneError('');
                                    }}
                                    onBlur={() => {
                                        if (!phone.trim()) setPhoneError('This Field is required');
                                    }}
                                    className={phoneError ? 'border-red-500 text-destructive-red' : ''}
                                />
                            </Field>
                        </FieldGroup>
                    </FieldSet>
                </FieldGroup>
            </form>
        </div>
    )
}