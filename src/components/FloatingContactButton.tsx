import { MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FloatingContactButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/#contactus")}
      className="
        fixed bottom-6 right-6 z-50
        flex items-center gap-2
        px-5 py-3
        bg-gradient-to-r from-emerald-500 to-orange-500
        text-white font-semibold
        rounded-full
        shadow-xl
        hover:scale-105 active:scale-95
        transition-all duration-300
      "
    >
      <MessageCircle size={18} />
      Contact Us
    </button>
  );
};

export default FloatingContactButton;
