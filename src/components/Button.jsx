import { forwardRef } from 'react';

const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  disabled = false, 
  loading = false,
  className = '',
  onClick,
  type = 'button',
  ...props 
}, ref) => {
  
  // Base styles with OKLCH colors
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed border-0';
  
  // Size variants with refined spacing
  const sizeStyles = {
    xs: 'px-2 py-1 text-xs gap-1 rounded-md',
    sm: 'px-3 py-1.5 text-sm gap-1.5 rounded-md',
    md: 'px-4 py-2 text-base gap-2 rounded-lg',
    lg: 'px-6 py-3 text-lg gap-2.5 rounded-lg',
    xl: 'px-8 py-4 text-xl gap-3 rounded-xl'
  };
  
  // OKLCH-based color variants
  const variantStyles = {
    primary: `
      bg-[color:var(--primary-400)] 
      text-[color:var(--neutral-900)] 
      hover:bg-[color:var(--primary-500)] 
      active:bg-[color:var(--primary-600)]
      focus:ring-[color:var(--primary-400)]
      shadow-md hover:shadow-lg 
      transform hover:-translate-y-0.5 active:translate-y-0
    `,
    
    secondary: `
      bg-[color:var(--neutral-0)] 
      text-[color:var(--neutral-800)] 
      border border-[color:var(--neutral-300)]
      hover:bg-[color:var(--neutral-50)] 
      hover:border-[color:var(--primary-400)]
      active:bg-[color:var(--neutral-100)]
      focus:ring-[color:var(--primary-400)]
      shadow-sm hover:shadow-md
    `,
    
    outline: `
      border-2 border-[color:var(--primary-400)] 
      text-[color:var(--primary-600)] 
      bg-transparent 
      hover:bg-[color:var(--primary-50)] 
      hover:text-[color:var(--primary-700)]
      active:bg-[color:var(--primary-100)]
      focus:ring-[color:var(--primary-400)]
    `,
    
    ghost: `
      text-[color:var(--primary-600)] 
      bg-transparent 
      hover:bg-[color:var(--primary-50)] 
      hover:text-[color:var(--primary-700)]
      active:bg-[color:var(--primary-100)]
      focus:ring-[color:var(--primary-400)]
    `,
    
    gradient: `
      bg-gradient-to-r from-[color:var(--primary-400)] to-[color:var(--accent-500)] 
      text-[color:var(--neutral-900)] 
      hover:from-[color:var(--primary-500)] hover:to-[color:var(--accent-600)]
      active:from-[color:var(--primary-600)] active:to-[color:var(--accent-700)]
      focus:ring-[color:var(--primary-400)] 
      shadow-md hover:shadow-lg 
      transform hover:-translate-y-0.5 active:translate-y-0
    `,
    
    success: `
      bg-[color:var(--success-500)] 
      text-[color:var(--neutral-0)] 
      hover:bg-[color:var(--success-600)] 
      active:bg-[color:var(--success-700)]
      focus:ring-[color:var(--success-500)]
      shadow-md hover:shadow-lg
    `,
    
    warning: `
      bg-[color:var(--warning-500)] 
      text-[color:var(--neutral-900)] 
      hover:bg-[color:var(--warning-600)] 
      active:bg-[color:var(--warning-700)]
      focus:ring-[color:var(--warning-500)]
      shadow-md hover:shadow-lg
    `,
    
    error: `
      bg-[color:var(--error-500)] 
      text-[color:var(--neutral-0)] 
      hover:bg-[color:var(--error-600)] 
      active:bg-[color:var(--error-700)]
      focus:ring-[color:var(--error-500)]
      shadow-md hover:shadow-lg
    `
  };
  
  // Loading spinner component
  const LoadingSpinner = () => (
    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );
  
  // Combine all styles
  const buttonStyles = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${variantStyles[variant]}
    ${className}
  `.trim().replace(/\s+/g, ' ');
  
  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={buttonStyles}
      {...props}
    >
      {loading && <LoadingSpinner />}
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button; 