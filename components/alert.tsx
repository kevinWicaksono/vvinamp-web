// components/Alert.tsx
type compProps = {
  message: string;
  type?: "success" | "error" | "warning" | "info";
};

const alertStyles = {
  success: "bg-green-100 text-green-700 border-green-400 text-sm",
  error: "bg-red-100 text-red-700 border-red-400 text-sm",
  warning: "bg-yellow-100 text-yellow-700 border-yellow-400 text-sm",
  info: "bg-blue-100 text-blue-700 border-blue-400 text-sm",
};

const Alert: React.FC<compProps> = ({ message, type = "info" }) => {
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div
        className={`px-4 py-2 rounded shadow-md ${alertStyles[type]}`}
        role="alert"
      >
        {message}
      </div>
    </div>
  );
};

export default Alert;
