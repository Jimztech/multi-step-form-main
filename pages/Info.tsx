import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

interface InfoProps {
    className?: string;
}

export default function Info({ className = "" }: InfoProps) {
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
                                <FieldLabel htmlFor="name">
                                    Name
                                </FieldLabel>
                                <Input 
                                    id="name"
                                    placeholder="e.g. Stephen King"
                                    required
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="email">
                                    Email Address
                                </FieldLabel>
                                <Input 
                                    id="email"
                                    placeholder="e.g. stephenking@lorem.com"
                                    required
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="phone">
                                    Phone Number
                                </FieldLabel>
                                <Input 
                                    id="phone"
                                    placeholder="e.g. +1 234 567 890"
                                />
                            </Field>
                        </FieldGroup>
                    </FieldSet>
                </FieldGroup>
            </form>
        </div>
    )
}