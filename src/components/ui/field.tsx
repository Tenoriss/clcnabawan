import {
  type InputHTMLAttributes,
  type TextareaHTMLAttributes,
  type SelectHTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full min-h-11 rounded-xl bg-paper px-3.5 text-[16px] text-foreground shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-foreground)_14%,transparent)] outline-none transition-[box-shadow] duration-150 placeholder:text-stone focus:shadow-[0_0_0_2px_var(--color-gold)]";

export function FieldLabel({
  htmlFor,
  children,
  hint,
}: {
  htmlFor?: string;
  children: ReactNode;
  hint?: string;
}) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-foreground">
      {children}
      {hint ? <span className="ml-1 font-normal text-muted">({hint})</span> : null}
    </label>
  );
}

export function FieldError({ children }: { children?: string }) {
  if (!children) return null;
  return (
    <p className="mt-1 text-sm text-red-800" role="alert">
      {children}
    </p>
  );
}

export function TextField({
  label,
  hint,
  error,
  id,
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  hint?: string;
  error?: string;
}) {
  return (
    <div>
      <FieldLabel htmlFor={id} hint={hint}>
        {label}
      </FieldLabel>
      <input id={id} className={cn(fieldClass, className)} {...props} />
      <FieldError>{error}</FieldError>
    </div>
  );
}

export function TextAreaField({
  label,
  error,
  id,
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
}) {
  return (
    <div>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <textarea id={id} className={cn(fieldClass, "min-h-28 py-3", className)} {...props} />
      <FieldError>{error}</FieldError>
    </div>
  );
}

export function SelectField({
  label,
  error,
  id,
  children,
  className,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: string;
}) {
  return (
    <div>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <select id={id} className={cn(fieldClass, className)} {...props}>
        {children}
      </select>
      <FieldError>{error}</FieldError>
    </div>
  );
}
