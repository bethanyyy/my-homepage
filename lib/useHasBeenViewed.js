import { useRef } from "react";
import { useInView } from "framer-motion";

const useHasBeenViewed = () => {
  const [ref, inView] = useInView();
  const prevInView = useRef(false);
  const hasBeenViewed = prevInView.current || inView;
  useEffect(() => {
    prevInView.current = inView;
  });

  return [hasBeenViewed, ref];
};

export default useHasBeenViewed;
