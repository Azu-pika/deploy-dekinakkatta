import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
  size = "lg",
  className = "", // Default to an empty string if undefined
  children,
  ...props
}) => {
  const sizeClasses = size === "sm" ? "px-4 py-2 text-sm" : "px-6 py-3 text-lg";
  return (
    <button
      className={cn(
        "bg-primary text-white rounded-lg shadow-md hover:bg-primary-foreground transition-all",
        sizeClasses,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
