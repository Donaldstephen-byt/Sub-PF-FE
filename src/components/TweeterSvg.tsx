// import TweeterLogo from "../assets/X_logo_2023_original.svg";
export function XIcon({
  className,
  size,
}: {
  className?: string;
  size?: string | number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.97 6.817H1.68l7.73-8.835L1.25 2.25h6.827l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

