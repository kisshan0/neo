import { twMerge } from "tailwind-merge";
import { IconProps } from "./Github";

export interface ThemeIcon extends IconProps {
  isDark?: boolean;
  className?: string;
}

function NeoIcon({ isDark = false, width }: ThemeIcon) {
  return (
    <svg
      width={width || 36}
      height={width || 36}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge([" fill-dark-v-1 dark:fill-primary"])}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36 18C36 27.9411 27.9411 36 18 36C8.05888 36 0 27.9411 0 18C0 8.05888 8.05888 0 18 0C27.9411 0 36 8.05888 36 18ZM18.0839 20.5583C21.4015 15.8667 21.5479 13.0233 18.0839 8C14.5537 13.1305 15.0088 15.8499 18.0839 20.5583ZM16.5085 26.6697C17.0358 20.9478 15.741 18.4122 10.2294 15.7939C9.73741 22.0021 11.4912 24.1297 16.5085 26.6697ZM19.6807 26.6697C19.1534 20.9478 20.4483 18.4122 25.9599 15.7939C26.4518 22.0021 24.6981 24.1297 19.6807 26.6697Z"
      />
    </svg>
  );
}

export default NeoIcon;