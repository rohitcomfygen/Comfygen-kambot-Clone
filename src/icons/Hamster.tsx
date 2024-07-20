import { IconProps } from "../utils/types";


const Hamster: React.FC<IconProps> = ({ size = 24, className = "bg-white" }) => {

    const svgSize = `${size}px`;

    return (

        <img src="/comfygen-logo.png" alt="" className={className} height={svgSize} width={svgSize} />
    );
};

export default Hamster;