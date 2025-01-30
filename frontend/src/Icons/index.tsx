import { IconSvgProps } from "@/types";

const FitlerIcon = (props) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props} className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
</svg>

}
const HeartIcon = (props) => {
  return (
    <svg
      className="size-6"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const LocationIconSmall = (props) => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" {...props} className="size-4">
  <path fillRule="evenodd" d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" clipRule="evenodd" />
</svg>

}

const FireIcon = (props:JSX.IntrinsicElements['svg']) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" {...props}>
  <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z" clipRule="evenodd" />
</svg>

    );
  };
  
  const LocationIcon = (props:any) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" {...props}>
        <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
      </svg>
    );
  };
  
  const RandomChatIcon = (props:JSX.IntrinsicElements['svg']) => {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" {...props}>
    <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
  </svg>
  

  }
  const ChatIconSm = (props:JSX.IntrinsicElements['svg'])=> {
    return (
      <svg
        className="size-4"
        fill="currentColor"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          clipRule="evenodd"
          d="M8 2C4.262 2 1 4.57 1 8c0 1.86.98 3.486 2.455 4.566a3.472 3.472 0 0 1-.469 1.26.75.75 0 0 0 .713 1.14 6.961 6.961 0 0 0 3.06-1.06c.403.062.818.094 1.241.094 3.738 0 7-2.57 7-6s-3.262-6-7-6ZM5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
          fillRule="evenodd"
        />
      </svg>
    );
  };
  
  const ChatIcon = (props:JSX.IntrinsicElements['svg']) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" {...props}>
  <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clipRule="evenodd" />
</svg>

    );
  };
  
  const ProfileIcon = (props:JSX.IntrinsicElements['svg']) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" {...props}>
  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
</svg>

    );
  };

  const ArrowRight = (props:JSX.IntrinsicElements['svg'])=> {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>

    );
  };
  
  const LikeIcon = (props:JSX.IntrinsicElements['svg']) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" {...props}>
  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
</svg>

    );
  };
  

  const Favorite = ({ status }) => {
    return (
      <svg
        className="size-6"
        fill={status ? "#c98927" : "none"}
        stroke="#c98927"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };


  const FavoriteColor = (props) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#c98927" className="size-6" {...props}>
        <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clipRule="evenodd" />
      </svg>
    );
  };
  
  const FavoriteSmall = () => {
    return (
      <svg
        className="size-4"
        fill="#fff"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
          fillRule="evenodd"
        />
      </svg>
    );
  };
  const DeleteChatIcon = () => {
    return (
      <svg
        className="size-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };
  const FilterButton = (props) => {
    return (
      <svg
        className="size-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };
  
  const NewIcon = () => {
    return (
      <svg
        className="size-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };
  
  const MoreIcon = (props) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" {...props}>
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm0 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM15.375 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clipRule="evenodd" />
      </svg>
    );
  };
  
  const Block = () => {
    return (
      <svg
        className="size-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };
  
  const BackMenu = (props) => {
    return (
      <svg
        className="size-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };
  
  const SendIcon = () => {
    return (
      <svg
        className="size-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        style={{ width: "1.2rem,", height: "1.2rem" }}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };
  
  const PhotoIcon = () => {
    return (
      <svg
        className="size-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        style={{ width: "1.2rem,", height: "1.2rem" }}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };
  
  const BlockAndReport = () => {
    return (
      <svg
        className="size-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };
  

  const SunFilledIcon = ({
    size = 24,
    width,
    height,
    ...props
  }: IconSvgProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <g fill="currentColor">
        <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
        <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
      </g>
    </svg>
  );
  
  const MoonFilledIcon = ({
    size = 24,
    width,
    height,
    ...props
  }: IconSvgProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
        fill="currentColor"
      />
    </svg>
  );


  const VerifyIcon = (props) => {
    return (
      <svg
        className="size-6"
        fill="none"
        stroke="#016fee"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };
  
  const PerimumIcon = (props) => {
    return (
      <svg
        className="size-6"
        fill="#f5a525"
        stroke="#f5a525"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  
  const SettingIcon = (props) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5" {...props}>
        <path fillRule="evenodd" d="M8.34 1.804A1 1 0 0 1 9.32 1h1.36a1 1 0 0 1 .98.804l.295 1.473c.497.144.971.342 1.416.587l1.25-.834a1 1 0 0 1 1.262.125l.962.962a1 1 0 0 1 .125 1.262l-.834 1.25c.245.445.443.919.587 1.416l1.473.294a1 1 0 0 1 .804.98v1.361a1 1 0 0 1-.804.98l-1.473.295a6.95 6.95 0 0 1-.587 1.416l.834 1.25a1 1 0 0 1-.125 1.262l-.962.962a1 1 0 0 1-1.262.125l-1.25-.834a6.953 6.953 0 0 1-1.416.587l-.294 1.473a1 1 0 0 1-.98.804H9.32a1 1 0 0 1-.98-.804l-.295-1.473a6.957 6.957 0 0 1-1.416-.587l-1.25.834a1 1 0 0 1-1.262-.125l-.962-.962a1 1 0 0 1-.125-1.262l.834-1.25a6.957 6.957 0 0 1-.587-1.416l-1.473-.294A1 1 0 0 1 1 10.68V9.32a1 1 0 0 1 .804-.98l1.473-.295c.144-.497.342-.971.587-1.416l-.834-1.25a1 1 0 0 1 .125-1.262l.962-.962A1 1 0 0 1 5.38 3.03l1.25.834a6.957 6.957 0 0 1 1.416-.587l.294-1.473ZM13 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clipRule="evenodd" />
      </svg>

    );
  };
  
  const EditProfileIcon = (props) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" {...props}>
        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
        <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
      </svg>

    );
  };
  

const FlashIcon = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7" {...props}>
    <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
  </svg>

  );
};

const ViewIcon = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7" {...props}>
  <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
  <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
</svg>

  );
};

const OptionInExplore = () => {
  return (
    <svg
      className="size-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const PenIcon = (props) => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" {...props}>
        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
      </svg>

  );
};


const HeartEyesImoji = (props) => {
  return (
    <svg
      viewBox="0 0 48 48"
      {...props}
      style={{width:"73px" , height:"73px"}}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style
          dangerouslySetInnerHTML={{
            __html:
              ".cls-1{fill:#ffce52;}.cls-2{fill:#ffe369;}.cls-3{fill:#ffb32b;}.cls-4{fill:#f6fafd;}.cls-5{fill:#273941;}.cls-6{fill:#ae2d4c;}.cls-7{fill:#cf4054;}.cls-8{fill:#141e21;}.cls-9{fill:#8a293d;}.cls-10{fill:#fbb40a;}",
          }}
        />
      </defs>
      <title>13-love</title>
      <g data-name="13-love" id="_13-love">
        <circle className="cls-1" cx={24} cy={24} r={23} />
        <path
          className="cls-2"
          d="M24,4c12.15,0,22,8.507,22,19h.975a23,23,0,0,0-45.95,0H2C2,12.507,11.85,4,24,4Z"
        />
        <path
          className="cls-3"
          d="M46,23c0,10.493-9.85,19-22,19S2,33.493,2,23H1.025c-.014.332-.025.665-.025,1a23,23,0,0,0,46,0c0-.335-.011-.668-.025-1Z"
          style={{ fill: "#ffb32c" }}
        />
        <ellipse
          className="cls-4"
          cx={37}
          cy={9}
          rx="0.825"
          ry="1.148"
          style={{ fill: "#FFF" }}
          transform="translate(4.48 28.81) rotate(-45.02)"
        />
        <ellipse
          className="cls-4"
          cx="30.746"
          cy="4.5"
          rx="0.413"
          ry="0.574"
          style={{ fill: "#FFF" }}
          transform="translate(5.829 23.067) rotate(-45.02)"
        />
        <ellipse
          className="cls-4"
          cx={34}
          cy={7}
          rx="1.65"
          ry="2.297"
          style={{ fill: "#FFF" }}
          transform="translate(5.015 26.102) rotate(-45.02)"
        />
        <path
          className="cls-5"
          d="M34,39c0-2.76-4.47-5-10-5s-10,2.24-10,5l-.1.13A10.727,10.727,0,0,1,9,30.15,2.025,2.025,0,0,1,10.87,28c1.88,1.08,6.39,1,13.13,1s11.25.08,13.12-1A2.026,2.026,0,0,1,39,30.15a10.727,10.727,0,0,1-4.9,8.98Z"
        />
        <path
          className="cls-6"
          d="M34,39l.1.13A17.882,17.882,0,0,1,24,42a17.882,17.882,0,0,1-10.1-2.87L14,39c0-2.76,4.47-5,10-5S34,36.24,34,39Z"
        />
        <path
          className="cls-7"
          d="M16.5,9A4.465,4.465,0,0,1,21,13.8C21,21,13.5,25,12,25c-.72,0-8.38-3.7-8.97-10.39Q3,14.205,3,13.8A4.451,4.451,0,0,1,6.58,9.1,4.053,4.053,0,0,1,7.5,9c2.25,0,3.75,1.6,4.5,4C12.75,10.6,14.25,9,16.5,9Z"
          style={{ fill: "#cf4054" }}
        />
        <path
          className="cls-7"
          d="M45,13.8q0,.4-.03.81C44.44,21.3,37.44,25,36,25c-.75,0-9-4-9-11.2A4.465,4.465,0,0,1,31.5,9c2.25,0,3.75,1.6,4.5,4,.75-2.4,2.25-4,4.5-4a4.053,4.053,0,0,1,.92.1A4.451,4.451,0,0,1,45,13.8Z"
          style={{ fill: "#cf4054" }}
        />
        <path
          className="cls-8"
          d="M10.87,30c1.88,1.08,6.39,1,13.13,1s11.25.08,13.12-1a1.926,1.926,0,0,1,1.793,1.536A11.043,11.043,0,0,0,39,30.15,2.026,2.026,0,0,0,37.12,28c-1.87,1.08-6.38,1-13.12,1s-11.25.08-13.13-1A2.025,2.025,0,0,0,9,30.15a11.015,11.015,0,0,0,.087,1.385A1.92,1.92,0,0,1,10.87,30Z"
        />
        <path
          className="cls-9"
          d="M33.531,37.486A18.171,18.171,0,0,1,24,40a18.171,18.171,0,0,1-9.531-2.514A2.809,2.809,0,0,0,14,39l-.1.13A17.882,17.882,0,0,0,24,42a17.882,17.882,0,0,0,10.1-2.87L34,39A2.809,2.809,0,0,0,33.531,37.486Z"
        />
        <path
          className="cls-10"
          d="M36,25c-.71,0-8.131-3.59-8.921-10.081A6,6,0,0,0,27,15.8C27,23,35.25,27,36,27c1.44,0,8.44-3.7,8.97-10.39Q45,16.2,45,15.8a6.079,6.079,0,0,0-.07-.907C44.225,21.4,37.419,25,36,25Z"
        />
        <path
          className="cls-10"
          d="M12,25c-.71,0-8.131-3.59-8.921-10.081A6,6,0,0,0,3,15.8C3,23,11.25,27,12,27c1.44,0,8.44-3.7,8.97-10.39Q21,16.2,21,15.8a6.079,6.079,0,0,0-.07-.907C20.225,21.4,13.419,25,12,25Z"
        />
        <path
          className="cls-6"
          d="M40.5,9c-2.25,0-3.75,1.6-4.5,4,.583-1.8,1.75-3,3.5-3A3.408,3.408,0,0,1,43,13.6C43,19,37.167,22,36,22c-.56,0-6.518-2.775-6.977-7.793-.015-.2-.023-.405-.023-.607a3.366,3.366,0,0,1,2.784-3.525A3.243,3.243,0,0,1,32.5,10c1.75,0,2.917,1.2,3.5,3-.75-2.4-2.25-4-4.5-4a4.053,4.053,0,0,0-.92.1A4.451,4.451,0,0,0,27,13.8q0,.4.03.81C27.62,21.3,35.28,25,36,25c1.5,0,9-4,9-11.2A4.465,4.465,0,0,0,40.5,9Z"
        />
        <path
          className="cls-6"
          d="M16.5,9c-2.25,0-3.75,1.6-4.5,4,.583-1.8,1.75-3,3.5-3A3.408,3.408,0,0,1,19,13.6C19,19,13.167,22,12,22c-.56,0-6.518-2.775-6.977-7.793C5.008,14.005,5,13.8,5,13.6a3.366,3.366,0,0,1,2.784-3.525A3.243,3.243,0,0,1,8.5,10c1.75,0,2.917,1.2,3.5,3-.75-2.4-2.25-4-4.5-4a4.053,4.053,0,0,0-.92.1A4.451,4.451,0,0,0,3,13.8q0,.4.03.81C3.62,21.3,11.28,25,12,25c1.5,0,9-4,9-11.2A4.465,4.465,0,0,0,16.5,9Z"
        />
        <ellipse
          className="cls-4"
          cx={42}
          cy={13}
          rx="0.825"
          ry="1.148"
          style={{ fill: "#FFF" }}
          transform="translate(3.116 33.519) rotate(-45.02)"
        />
        <ellipse
          className="cls-4"
          cx="40.746"
          cy="11.5"
          rx="0.413"
          ry="0.574"
          style={{ fill: "#FFF" }}
          transform="translate(3.809 32.193) rotate(-45.02)"
        />
        <ellipse
          className="cls-4"
          cx={18}
          cy={13}
          rx="0.825"
          ry="1.148"
          style={{ fill: "#FFF" }}
          transform="translate(-3.919 16.543) rotate(-45.02)"
        />
        <ellipse
          className="cls-4"
          cx="16.746"
          cy="11.5"
          rx="0.413"
          ry="0.574"
          style={{ fill: "#FFF" }}
          transform="translate(-3.226 15.216) rotate(-45.02)"
        />
      </g>
    </svg>
  );
};

const NotLikeImoji = () => {
  return (
    <svg
      style={{ height: "100%", width: "100%" }}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style
          dangerouslySetInnerHTML={{
            __html:
              ".cls-3{fill:#f6fafd}.cls-4{fill:#141e21}.cls-7{fill:#fbb40a}",
          }}
        />
      </defs>
      <g data-name="08-sarcastic" id="_08-sarcastic">
        <circle cx={24} cy={24} r={23} style={{ fill: "#ffce52" }} />
        <path
          d="M21 36.014 19 36c0-3.158 6.915-4 11-4v2c-5.859 0-8.853 1.459-9 2.014z"
          style={{ fill: "#273941" }}
        />
        <path
          className="cls-3"
          d="M39.14 15.92c-.042-.074-.094-.142-.14-.214V17a2 2 0 0 1-4 0v-2h-5.46A5.931 5.931 0 0 0 28 19a6 6 0 0 0 12 0 5.871 5.871 0 0 0-.86-3.08z"
        />
        <path
          d="M37 19a2 2 0 0 0 2-2v-1.294a5.133 5.133 0 0 0-.54-.706H35v2a2 2 0 0 0 2 2z"
          fill="#273a41"
        />
        <path
          className="cls-3"
          d="M19.14 15.92c-.042-.074-.094-.142-.14-.214V17a2 2 0 0 1-4 0v-2H9.54A5.931 5.931 0 0 0 8 19a6 6 0 0 0 12 0 5.871 5.871 0 0 0-.86-3.08z"
        />
        <path
          d="M17 19a2 2 0 0 0 2-2v-1.294a5.133 5.133 0 0 0-.54-.706H15v2a2 2 0 0 0 2 2z"
          fill="#273a41"
        />
        <path
          d="M24 4c12.15 0 22 8.507 22 19h.975a23 23 0 0 0-45.95 0H2C2 12.507 11.85 4 24 4z"
          style={{ fill: "#ffe369" }}
        />
        <path
          d="M46 23c0 10.493-9.85 19-22 19S2 33.493 2 23h-.975c-.014.332-.025.665-.025 1a23 23 0 0 0 46 0c0-.335-.011-.668-.025-1z"
          style={{ fill: "#ffb32b" }}
        />
        <ellipse
          className="cls-3"
          cx="36.5"
          cy="8.5"
          rx=".825"
          ry="1.148"
          transform="rotate(-45.02 36.5 8.5)"
        />
        <ellipse
          className="cls-3"
          cx="30.246"
          cy={4}
          rx=".413"
          ry=".574"
          transform="rotate(-45.02 30.246 4)"
        />
        <ellipse
          className="cls-3"
          cx="33.5"
          cy="6.5"
          rx="1.65"
          ry="2.297"
          transform="rotate(-45.02 33.5 6.5)"
        />
        <path
          className="cls-7"
          d="M34 25a6 6 0 0 1-5.908-4.985 6 6 0 1 0 11.817-.009A6 6 0 0 1 34 25zM14 25a6 6 0 0 1-5.908-4.985 6 6 0 1 0 11.817-.009A6 6 0 0 1 14 25zM35 15h3.46a5.133 5.133 0 0 1 .54.706c.046.072.1.14.14.214a5.851 5.851 0 0 1 .831 2.655c.018-.189.029-.381.029-.575a5.871 5.871 0 0 0-.86-3.08c-.042-.074-.094-.142-.14-.214a5.133 5.133 0 0 0-.54-.706h-8.92A5.931 5.931 0 0 0 28 18a6.032 6.032 0 0 0 .034.634A5.927 5.927 0 0 1 29.54 15zM15 15h3.46a5.133 5.133 0 0 1 .54.706c.046.072.1.14.14.214a5.851 5.851 0 0 1 .831 2.655c.018-.189.029-.381.029-.575a5.871 5.871 0 0 0-.86-3.08c-.042-.074-.094-.142-.14-.214a5.133 5.133 0 0 0-.54-.706H9.54A5.931 5.931 0 0 0 8 18a6.032 6.032 0 0 0 .034.634A5.927 5.927 0 0 1 9.54 15z"
        />
      </g>
    </svg>
  );
};



const HashtagIcon = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
    </svg>

  );
};

const SearchIcon = (props) => {
  return (
    <svg
      className="size-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const AboutMeSolid = (props) => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5" {...props}>
  <path fillRule="evenodd" d="M1 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6Zm4 1.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2 3a4 4 0 0 0-3.665 2.395.75.75 0 0 0 .416 1A8.98 8.98 0 0 0 7 14.5a8.98 8.98 0 0 0 3.249-.604.75.75 0 0 0 .416-1.001A4.001 4.001 0 0 0 7 10.5Zm5-3.75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Zm0 6.5a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Zm.75-4a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z" clipRule="evenodd" />
</svg>

}

const AboutMeIcon = (props) => {
  return (
    <svg
      className="size-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const WorkAndStudyIconSolid = (props) => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" {...props}>
  <path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
  <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
</svg>

}

const WorkAndStudyIcon = (props) => {
  return (
    <svg
      className="size-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const WhyYouAreHereIcon = (props) => {
  return (
    <svg
      className="size-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const UserIcon = (props) => {
  return (
    <svg
      className="size-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};



const DeleteAcoontIcon = () => {
  return (
    <svg
      className="size-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const LogOutIcon = () => {
  return (
    <svg
      className="size-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};


const ReportIcon = () => {
  return (
    <svg
      className="size-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const SendMessage = (props) => {
  return (
    <svg
      className="size-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const ExploreChat = (props) => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props} className="size-6">
  <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clipRule="evenodd" />
</svg>

}


const CircleSvg = () => {
  return <svg className="mx-1" height="4" width="4" xmlns="http://www.w3.org/2000/svg">
    <circle r="2" cx="2" cy="2" fill="#00ba96" />
  </svg>
}

const ProfileIconOutLink = (props) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
}

const HeartIconOutLine = (props) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" {...props}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>

}

const ChatIconOutLine = (props) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" {...props}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
</svg>
}

const LocationIconOutLine = (props) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" {...props}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
}

const FireIconOutLine = (props) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" {...props}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
</svg>
}

const LanguageIcon = (props) => {
  return <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M12.87,15.07L10.33,12.56L10.36,12.53C12.1,10.59 13.34,8.36 14.07,6H17V4H10V2H8V4H1V6H12.17C11.5,7.92 10.44,9.75 9,11.35C8.07,10.32 7.3,9.19 6.69,8H4.69C5.42,9.63 6.42,11.17 7.67,12.56L2.58,17.58L4,19L9,14L12.11,17.11L12.87,15.07M18.5,10H16.5L12,22H14L15.12,19H19.87L21,22H23L18.5,10M15.88,17L17.5,12.67L19.12,17H15.88Z" />
    </svg>
}

const BabyIcon = (props) => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" {...props}>
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm2.023 6.828a.75.75 0 1 0-1.06-1.06 3.75 3.75 0 0 1-5.304 0 .75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 0 7.424 0Z" clipRule="evenodd" />
</svg>

}

const HeightIcon = (props) => {
  return <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path d="M7,2C8.78,2 9.67,4.16 8.42,5.42C7.16,6.67 5,5.78 5,4A2,2 0 0,1 7,2M5.5,7H8.5A2,2 0 0,1 10.5,9V14.5H9V22H5V14.5H3.5V9A2,2 0 0,1 5.5,7M21,8H15V10H21M21,11H18V13H21M21,2H15V4H21M21,5H18V7H21M21,14H15V16H21M21,20H15V22H21M21,17H18V19H21" />
  </svg>

}

const SexualityIcon = (props) => {
  return <svg data-origin="pipeline" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" {...props}>
  <path
    d="M11 7a5 5 0 10-6 4.9V16H2a1 1 0 000 2h3v3a1 1 0 102 0v-3h3a1 1 0 100-2H7v-4.1A5.009 5.009 0 0011 7zM3 7a3 3 0 116 0 3 3 0 01-6 0zM19 12.1V5.415l2.293 2.293a1 1 0 101.414-1.414l-4-4a1 1 0 00-1.414 0l-4 4a1 1 0 001.414 1.414L17 5.414v6.687a5 5 0 102 0zM18 20a3 3 0 110-5.999A3 3 0 0118 20z"
    fill="currentColor"
  />
</svg>


}

const ArowUpIcon = (props) => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5" {...props}>
    <path fill-rule="evenodd" d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z" clip-rule="evenodd" />
  </svg>
}

const ArowDownIcon = (props) => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5" {...props}>
  <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
</svg>

}

const VerifyIconFill = (props) => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5" {...props}>
  <path fillRule="evenodd" d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
</svg>

}

const ArrowLeft = (props) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" {...props}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>

}

const CloseCircleIcon = (props) => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" {...props}>
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
</svg>

}

const PlusIcon = (props) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" {...props}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

}

const GenderIcon = (props) => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
  <path d="M12,4A6,6 0 0,1 18,10C18,12.97 15.84,15.44 13,15.92V18H15V20H13V22H11V20H9V18H11V15.92C8.16,15.44 6,12.97 6,10A6,6 0 0,1 12,4M12,6A4,4 0 0,0 8,10A4,4 0 0,0 12,14A4,4 0 0,0 16,10A4,4 0 0,0 12,6Z" />
</svg>
}

const PlusIconRound = (props) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" {...props}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

}


const SeenIcon = (props) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" {...props}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

}
const ErrorIconForToast = (props) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" {...props}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
</svg>

}


const KidStatusIcon = (props) => {
  return <svg data-origin="pipeline" aria-hidden="true" viewBox="0 0 24 24" fill="none" {...props}>
  <path
    d="M24 12a3 3 0 00-2.443-2.946 10.013 10.013 0 00-5.892-6.351.5.5 0 00-.683.507 2.5 2.5 0 01-4.25 2.058.5.5 0 01.705-.71 1.408 1.408 0 001.297.45A1.554 1.554 0 0014 3.5a1.491 1.491 0 00-1.16-1.458A10.066 10.066 0 0012 2a10.003 10.003 0 00-9.558 7.054 2.998 2.998 0 000 5.892 10.002 10.002 0 0019.115 0A2.999 2.999 0 0024 12zM6.5 11a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm5.5 8a3.004 3.004 0 01-3-3 1 1 0 011-1h4a1 1 0 011 1 3.004 3.004 0 01-3 3zm4-6.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
    fill="currentColor"
  />
</svg>

}

const SmokingStatusIcon = (props) => {
  return <svg data-origin="pipeline" aria-hidden="true" viewBox="0 0 24 24" fill="none" {...props}>
  <path
    d="M15.707 17.293l-11-11a1 1 0 00-1.414 0l-3 3a1 1 0 000 1.414l11 11a1 1 0 001.414 0l3-3a1 1 0 000-1.414zM12 19.586l-5.293-5.293 1.586-1.586L13.586 18 12 19.586zM16.293 20.293l-2 2a1 1 0 101.414 1.414l2-2a1 1 0 10-1.414-1.414zM20.454 12.024c-.247-.239-1.263-1.239-1.517-1.484C17.297 8.95 16 7.695 16 5.5c0-2.33 2.427-3.595 2.447-3.605a1 1 0 10-.894-1.79C17.408.178 14 1.923 14 5.5c0 3.043 1.803 4.788 3.546 6.477.247.238 1.263 1.238 1.517 1.483C20.703 15.05 22 16.305 22 18.5c0 2.33-2.427 3.595-2.45 3.607a1 1 0 00.897 1.788C20.592 23.822 24 22.077 24 18.5c0-3.043-1.803-4.788-3.546-6.476z"
    fill="currentColor"
  />
</svg>

}

const DrinkStatusIcon =(props) => {
  return <svg data-origin="pipeline" aria-hidden="true" viewBox="0 0 24 24" fill="none" {...props}>
  <path
    d="M17 22h-4v-6.066A7.898 7.898 0 0020 8 14.777 14.777 0 0017.832.445 1 1 0 0017 0H7a1 1 0 00-.832.445A14.776 14.776 0 004 8a7.898 7.898 0 007 7.934V22H7a1 1 0 000 2h10a1 1 0 000-2zM7.572 2h8.858A12.937 12.937 0 0118 8H6a13.028 13.028 0 011.572-6z"
    fill="currentColor"
  />
</svg>
}

const PetStatusIcon = (props) => {
  return <svg data-origin="pipeline" aria-hidden="true" viewBox="0 0 24 24" fill="none" {...props}>
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M5.196 17.677c-.329-.16-.668-.338-1.05-.557-2.094-1.2-2.938-3.713-1.24-5.707.756-.886 1.543-1.11 2.983-1.12 1.37-.01 1.59-.022 2.23-.18 2.928-.72 3.952-.657 5.303.875.823.933.862 1.727.543 3.287l-.014.071c-.156.764-.175 1.102-.059 1.42.727 1.99.487 4.19-.915 5.389-1.4 1.197-2.898 1.063-4.586-.03-.625-.404-1.123-.997-1.596-1.784a13.082 13.082 0 01-.282-.494c-.058-.106-.247-.46-.222-.415-.108-.2-.178-.316-.154-.293-.032-.03-.09-.065-.246-.139.012.007-.52-.238-.695-.323zm5.466-13.141c.698-1.858 2.463-2.984 4.043-2.366 1.58.618 2.156 2.66 1.458 4.517-.697 1.858-2.463 2.984-4.043 2.366-1.58-.618-2.156-2.66-1.458-4.517zm6.194 3.06c1.612-1.134 3.71-1.066 4.685.333.976 1.4.325 3.404-1.287 4.538-1.612 1.135-3.71 1.066-4.685-.333-.976-1.399-.325-3.403 1.287-4.538zM3.746 5.168c.341-1.824 1.756-3.166 3.297-2.857 1.541.31 2.369 2.102 2.027 3.925C8.73 8.06 7.314 9.402 5.773 9.093c-1.542-.31-2.369-2.101-2.027-3.925zm11.367 12.559c-.335-1.547.968-2.996 2.768-3.374 1.8-.377 3.589.424 3.923 1.97.335 1.548-.968 2.997-2.768 3.374-1.8.377-3.589-.423-3.923-1.97z"
    fill="currentColor"
  />
</svg>

}

const CheckIcon = (props) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" {...props}>
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>

}


const LockIcon = (props) => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" {...props}>
    <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
  </svg>
}

const FirendsIcon = (props) => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#21b6a8" className="size-6" {...props}>
  <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
</svg>

}

const AddFirendsIcon = (props) => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" {...props}>
  <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
</svg>

}

const CalenderIcon = (props) => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" {...props}>
  <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
  <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
</svg>

}

const EducationIcon = (props) => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" {...props}>
  <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
  <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
  <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
</svg>

}

const CameraIcon = (props) => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" {...props}>
  <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
  <path fillRule="evenodd" d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
</svg>

}


const GiftIcon = (props) => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" {...props}>
  <path d="M9.375 3a1.875 1.875 0 0 0 0 3.75h1.875v4.5H3.375A1.875 1.875 0 0 1 1.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0 1 12 2.753a3.375 3.375 0 0 1 5.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 1 0-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3ZM11.25 12.75H3v6.75a2.25 2.25 0 0 0 2.25 2.25h6v-9ZM12.75 12.75v9h6.75a2.25 2.25 0 0 0 2.25-2.25v-6.75h-9Z" />
</svg>

}

const EnergyIcon = (props) => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" {...props}>
  <path d="M4.5 9.75a.75.75 0 0 0-.75.75V15c0 .414.336.75.75.75h6.75A.75.75 0 0 0 12 15v-4.5a.75.75 0 0 0-.75-.75H4.5Z" />
  <path fillRule="evenodd" d="M3.75 6.75a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-.037c.856-.174 1.5-.93 1.5-1.838v-2.25c0-.907-.644-1.664-1.5-1.837V9.75a3 3 0 0 0-3-3h-15Zm15 1.5a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5h15Z" clipRule="evenodd" />
</svg>

}


const VideoCamera = (props) => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" {...props}>
  <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
</svg>

}

const UploadIcon = (props) => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" {...props}>
  <path d="M11.47 1.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 0 1-1.06-1.06l3-3ZM11.25 7.5V15a.75.75 0 0 0 1.5 0V7.5h3.75a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h3.75Z" />
</svg>

}

const TonCoinIcon = (props) => {
  return <svg
  width={32}
  height={32}
  viewBox="0 0 32 32"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
  <path
    d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
    fill="#0098EA"
  />
  <path
    d="M21.4629 8.92969H10.5363C8.52724 8.92969 7.25388 11.0969 8.26459 12.8488L15.0081 24.5372C15.4482 25.3004 16.551 25.3004 16.9911 24.5372L23.736 12.8488C24.7453 11.0996 23.472 8.92969 21.4643 8.92969H21.4629ZM15.0026 21.0321L13.534 18.1897L9.99036 11.8518C9.75659 11.4461 10.0454 10.9264 10.5349 10.9264H15.0013V21.0334L15.0026 21.0321ZM22.0061 11.8504L18.4638 18.1911L16.9952 21.0321V10.925H21.4616C21.9511 10.925 22.2399 11.4448 22.0061 11.8504Z"
    fill="white"
  />
</svg>

}
export {
  FirendsIcon,
  TonCoinIcon,
  UploadIcon,
  VideoCamera,
  EnergyIcon,
  GiftIcon,
  CameraIcon,
  EducationIcon,
  CalenderIcon,
  AddFirendsIcon,
  LockIcon,
  DrinkStatusIcon,
  CheckIcon,
  SmokingStatusIcon,
  FavoriteColor,
  KidStatusIcon,
  PetStatusIcon,
    ErrorIconForToast,
    SeenIcon,
    PlusIcon,
    PlusIconRound,
    GenderIcon,
    CloseCircleIcon,
    ArrowLeft,
    VerifyIconFill,
    ArowDownIcon,
    ArowUpIcon,
    ProfileIconOutLink,
    AboutMeSolid,
    SexualityIcon,
    HeightIcon,
    LanguageIcon,
    BabyIcon,
    HeartIconOutLine,
    WorkAndStudyIconSolid,
    ChatIconOutLine,
    LocationIconOutLine,
    FireIconOutLine,
    CircleSvg,
    ExploreChat,
    UserIcon,
    SendMessage,
    ReportIcon,
    DeleteAcoontIcon,
    LogOutIcon,
    WorkAndStudyIcon,
    WhyYouAreHereIcon,
    AboutMeIcon,
    HashtagIcon,
    SearchIcon,
    HeartEyesImoji,
    NotLikeImoji,
    FireIcon,
    OptionInExplore,
    ViewIcon,
    SettingIcon,
    EditProfileIcon,
    VerifyIcon,
    PerimumIcon,
    SunFilledIcon,
    FlashIcon,
    MoonFilledIcon,
    ChatIcon,
    PenIcon,
    ProfileIcon,
    ArrowRight,
    LocationIcon,
    LikeIcon,
    ChatIconSm,
    RandomChatIcon,
    Favorite,
    FilterButton,
    NewIcon,
    MoreIcon,
    Block,
    BackMenu,
    SendIcon,
    PhotoIcon,
    DeleteChatIcon,
    FavoriteSmall,
    BlockAndReport,
    FitlerIcon,
    HeartIcon,
    LocationIconSmall
  };
  