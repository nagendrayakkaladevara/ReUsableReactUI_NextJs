import React, { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
    isDisabled?: boolean;
    icon?: ReactNode;
    children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'medium',
    isLoading = false,
    isDisabled = false,
    icon,
    children,
    ...props
}) => {
    const variantClasses = {
        primary: 'bg-blue-500 text-white hover:bg-blue-700',
        secondary: 'bg-gray-500 text-white hover:bg-gray-700',
        success: 'bg-green-500 text-white hover:bg-green-700',
        danger: 'bg-red-500 text-white hover:bg-red-700',
        warning: 'bg-yellow-500 text-black hover:bg-yellow-600',
        info: 'bg-teal-500 text-white hover:bg-teal-700',
    };

    const sizeClasses = {
        small: 'text-sm py-1 px-2',
        medium: 'text-base py-2 px-4',
        large: 'text-lg py-3 px-6',
    };

    return (
        <button
            className={`inline-flex items-center justify-center border border-transparent rounded transition-colors duration-300 ${variantClasses[variant]} ${sizeClasses[size]} ${isLoading ? 'cursor-not-allowed opacity-75' : ''}`}
            disabled={isDisabled || isLoading}
            {...props}
        >
            {isLoading ? (
                // <span className="animate-spin w-4 h-4 border-2 border-t-2 border-white rounded-full" />
                <span
                    className="w-6 h-6 border-4 border-white border-b-[#FF3D00] rounded-full inline-block box-border animate-rotation"
                ></span>
            ) : (
                <>
                    {icon && <span className="mr-2">{icon}</span>}
                    {children}
                </>
            )}
        </button>
    );
};

export default Button;