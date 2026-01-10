import TweeterLogo from "../assets/X_logo_2023_original.svg";
const XLogo = ({ size = 18, color = "currentColor" }) => (
  <img src={TweeterLogo} alt="X Logo" width={size} height={size} style={{ color }} />
);

export default XLogo;
