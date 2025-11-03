export default function Info({ className = "", onValidationChange }: InfoProps & { onValidationChange?: (isValid: boolean) => void }) {
    const [nameError, setNameError] = useState('');
    const [name, setName] = useState('');
    const [emailError, setEmailError] = useState('');
    const [email, setEmail] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [phone, setPhone] = useState('');

    // Validate all fields
    const validateForm = () => {
        let isValid = true;

        if (!name.trim()) {
            setNameError('This field is required');
            isValid = false;
        }

        if (!email.trim()) {
            setEmailError('This field is required');
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setEmailError('Please enter a valid email');
            isValid = false;
        }

        if (!phone.trim()) {
            setPhoneError('This field is required');
            isValid = false;
        }

        return isValid;
    };

    // Check if form is valid whenever fields change
    React.useEffect(() => {
        const isValid = name.trim() !== '' && 
                       email.trim() !== '' && 
                       /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
                       phone.trim() !== '';
        
        onValidationChange?.(isValid);
    }, [name, email, phone, onValidationChange]);

    // Expose validate function via ref or callback
    React.useImperativeHandle(ref, () => ({
        validateForm
    }));

    return (
        <div className={className}>
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
                                    if (!name.trim()) setNameError('This field is required');
                                }}
                                className={nameError ? 'border-red-500' : ''}
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
                                type="email"
                                placeholder="e.g. stephenking@lorem.com"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    if (e.target.value.trim()) setEmailError('');
                                }}
                                onBlur={() => {
                                    if (!email.trim()) {
                                        setEmailError('This field is required');
                                    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                                        setEmailError('Please enter a valid email');
                                    }
                                }}
                                className={emailError ? 'border-red-500' : ''}
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
                                type="tel"
                                placeholder="e.g. +1 234 567 890"
                                value={phone}
                                onChange={(e) => {
                                    setPhone(e.target.value);
                                    if (e.target.value.trim()) setPhoneError('');
                                }}
                                onBlur={() => {
                                    if (!phone.trim()) setPhoneError('This field is required');
                                }}
                                className={phoneError ? 'border-red-500' : ''}
                            />
                        </Field>
                    </FieldGroup>
                </FieldSet>
            </FieldGroup>
        </div>
    );
}