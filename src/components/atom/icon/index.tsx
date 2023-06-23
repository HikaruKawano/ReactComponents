import { IconStyle } from "./style";

interface props {
  className?: string;
}

const Icon: React.FC<props> = ({ className }) => {
  return <IconStyle className={className}></IconStyle>;
};

export default Icon;
