export interface AuthFormProps {
    onSuccess: (message: string) => void;
}

export interface SuccessPopupProps {
    message: string;
    visible: boolean;
    onClose: () => void;
}