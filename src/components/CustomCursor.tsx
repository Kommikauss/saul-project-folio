import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;
    setVisible(true);

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a, button, [role='button']"));
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border-2 border-primary"
      animate={{
        x: pos.x - (hovering ? 20 : 8),
        y: pos.y - (hovering ? 20 : 8),
        width: hovering ? 40 : 16,
        height: hovering ? 40 : 16,
        opacity: hovering ? 0.8 : 0.4,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.5 }}
    />
  );
};

export default CustomCursor;
