import Svg, { Path } from "react-native-svg";

export function IconCandidaturas({ ...props }) {
  return (
    <Svg
      {...props}
      style={{alignSelf: 'center'}}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M9.8 17.5C6.524 17.5 0 19.84 0 24.5V28H19.6V24.5C19.6 19.84 13.076 17.5 9.8 17.5ZM3.276 24C4.452 22.84 7.294 21.5 9.8 21.5C12.306 21.5 15.148 22.84 16.324 24H3.276ZM9.8 14C12.502 14 14.7 10.86 14.7 7C14.7 3.14 12.502 0 9.8 0C7.098 0 4.9 3.14 4.9 7C4.9 10.86 7.098 14 9.8 14ZM9.8 4C10.962 4 11.9 5.34 11.9 7C11.9 8.66 10.962 10 9.8 10C8.638 10 7.7 8.66 7.7 7C7.7 5.34 8.638 4 9.8 4ZM19.656 17.62C21.28 19.3 22.4 21.54 22.4 24.5V28H28V24.5C28 20.46 23.1 18.16 19.656 17.62ZM18.2 14C20.902 14 23.1 10.86 23.1 7C23.1 3.14 20.902 0 18.2 0C17.444 0 16.744 0.26 16.1 0.7C16.982 2.48 17.5 4.66 17.5 7C17.5 9.34 16.982 11.52 16.1 13.3C16.744 13.74 17.444 14 18.2 14Z"
        fill="#206B6A"
      />
    </Svg>
  );
}
