import { ReactNode } from "react";

interface WhatsAppLinkProps {
    children: ReactNode;
    className?: string;
    message?: string;
}

export const WHATSAPP_NUMBER = "15558676280";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function WhatsAppLink({ children, className, message }: WhatsAppLinkProps) {
    const url = message
        ? `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
        : WHATSAPP_URL;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
        >
            {children}
        </a>
    );
}
