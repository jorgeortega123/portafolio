import React from "react";
export default function Icons({
  icon,
  className,
  text,
  fromNav,
}: {
  icon: string;
  className?: string;
  text?: string;
  fromNav?: boolean;
}) {
  switch (icon) {
    case "portfolio":
      return (
        <div className="svg-text ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className + ""}
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M29 17v11H3V17M2 8h28v8s-6 4-14 4s-14-4-14-4V8Zm14 14v-4m4-10s0-4-4-4s-4 4-4 4"
            />
          </svg>
          {fromNav ? (
            <div className="opacity-0 text-center top-0 left-0 absolute h-full span-from-nav mr-[60px] text-white flex items-center justify-center pr-2">
              <span className="ml-[56px] bg-[#191C24] px-3 py-[10px] rounded-r-[9px]">
                {text}
              </span>
            </div>
          ) : (
            <></>
          )}
        </div>
      );
    case "close":
      return (
        <div className="svg-text  ">
          <svg
            className={className + ""}
            viewBox="0 0 32 32"
            width="32"
            height="32"
            fill="none"
            stroke="currentcolor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M2 30 L30 2 M30 30 L2 2" />
          </svg>
        </div>
      );
    case "skill":
      return (
        <div className="relative svg-text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className + ""}
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M30 30h-8V4h8zm-6-2h4V6h-4zm-4 2h-8V12h8zm-6-2h4V14h-4zm-4 2H2V18h8zm-6-2h4v-8H4z"
            />
          </svg>
          {fromNav ? (
            <span className="opacity-0 capitalize absolute left-[140%] top-1 bg-[#a5a5a5] p-1 span-from-nav">
              {text}
            </span>
          ) : (
            <></>
          )}
        </div>
      );
    case "info":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className + ""}
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2v6Z"
          />
        </svg>
      );
    case "community":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className + ""}
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M21.71 8.71c1.25-1.25.68-2.71 0-3.42l-3-3c-1.26-1.25-2.71-.68-3.42 0L13.59 4H11C9.1 4 8 5 7.44 6.15L3 10.59v4l-.71.7c-1.25 1.26-.68 2.71 0 3.42l3 3c.54.54 1.12.74 1.67.74c.71 0 1.36-.35 1.75-.74l2.7-2.71H15c1.7 0 2.56-1.06 2.87-2.1c1.13-.3 1.75-1.16 2-2C21.42 14.5 22 13.03 22 12V9h-.59l.3-.29M20 12c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-4.41l-3.28 3.28c-.31.29-.49.12-.6.01l-2.99-2.98c-.29-.31-.12-.49-.01-.6L5 15.41v-4l2-2V11c0 1.21.8 3 3 3s3-1.79 3-3h7v1m.29-4.71L18.59 9H11v2c0 .45-.19 1-1 1s-1-.55-1-1V8c0-.46.17-2 2-2h3.41l2.28-2.28c.31-.29.49-.12.6-.01l2.99 2.98c.29.31.12.49.01.6Z"
          />
        </svg>
      );

      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"
          />
        </svg>
      );
    case "home":
      return (
        <div className="svg-text ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 20v10H4V12L16 2l12 10v18h-8V20Z"
            />
          </svg>
          {fromNav ? (
            <div className="opacity-0  z-[2] text-center top-0 left-0 absolute h-full span-from-nav mr-[60px] text-white flex items-center justify-center pr-2">
              <span className="ml-[56px] bg-[#191C24] px-3 py-[10px] rounded-r-[9px]">
                {text}
              </span>
            </div>
          ) : (
            <></>
          )}
        </div>
      );
    case "gallery":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g fill="#00D25B" fillRule="evenodd" clipRule="evenodd">
            <path d="M17.141 2.374c-.924-.124-2.1-.124-3.568-.124h-3.321c-1.467 0-2.644 0-3.568.124c-.957.128-1.755.401-2.388 1.032c-.66.658-.931 1.495-1.053 2.504l-.006.05l.003.195a3.76 3.76 0 0 0-.599.486c-.748.749-1.08 1.698-1.238 2.87c-.153 1.14-.153 2.595-.153 4.433v.545c.001 1.625.013 2.957.153 4c.158 1.172.49 2.121 1.238 2.87c.749.748 1.698 1.08 2.87 1.238c1.14.153 2.595.153 4.433.153h4.112c1.838 0 3.294 0 4.433-.153c1.172-.158 2.121-.49 2.87-1.238c.748-.749 1.08-1.698 1.238-2.87c.153-1.14.153-2.595.153-4.433v-.112c0-1.838 0-3.294-.153-4.433c-.158-1.172-.49-2.121-1.238-2.87a3.732 3.732 0 0 0-.772-.593v-.093l-.005-.045c-.122-1.009-.392-1.846-1.053-2.504c-.633-.63-1.43-.904-2.388-1.032ZM2.751 14.84c.003 1.475.022 2.58.139 3.45c.135 1.005.389 1.585.812 2.008c.423.423 1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c.763-.102 1.281-.273 1.672-.535l-2.687-2.419a2.25 2.25 0 0 0-2.8-.168l-.297.21a2.75 2.75 0 0 1-3.526-.306l-4.29-4.29a1.55 1.55 0 0 0-2.117-.07L2.751 14.84Zm15.527 2.201l2.588 2.33c.106-.296.186-.65.244-1.082c.138-1.027.14-2.382.14-4.289c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008c-.423-.423-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-4c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812c-.423.423-.677 1.003-.812 2.009c-.109.807-.133 1.816-.138 3.135l.506-.443a3.05 3.05 0 0 1 4.165.139l4.29 4.29a1.25 1.25 0 0 0 1.602.138l.298-.21a3.75 3.75 0 0 1 4.665.281ZM5.354 4.47c-.24.239-.412.551-.526 1.053a8.5 8.5 0 0 1 .683-.119c1.14-.153 2.595-.153 4.433-.153h4.112c1.838 0 3.294 0 4.433.153c.171.023.337.05.5.081c-.115-.48-.285-.782-.518-1.015c-.308-.307-.737-.502-1.529-.608c-.813-.11-1.889-.111-3.424-.111h-3.211c-1.535 0-2.611.002-3.424.11c-.792.107-1.221.302-1.529.609Z" />
            <path d="M17.5 8.25a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5Zm0 1.5a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5Z" />
          </g>
        </svg>
      );
    case "linkedin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          width="24"
          height="24"
          fill="#fff"
          aria-label="LinkedIn"
          viewBox="0 0 512 512"
        >
          <rect width="512" height="512" fill="#0077b5" rx="15%" />
          <circle cx="142" cy="138" r="37" />
          <path stroke="#fff" strokeWidth="66" d="M244 194v198M142 194v198" />
          <path d="M276 282c0-20 13-40 36-40 24 0 33 18 33 45v105h66V279c0-61-32-89-76-89-34 0-51 19-59 32" />
        </svg>
      );
    case "github":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          width="24"
          height="24"
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="M208.31 75.68A59.78 59.78 0 0 0 202.93 28a8 8 0 0 0-6.93-4a59.75 59.75 0 0 0-48 24h-24a59.75 59.75 0 0 0-48-24a8 8 0 0 0-6.93 4a59.78 59.78 0 0 0-5.38 47.68A58.14 58.14 0 0 0 56 104v8a56.06 56.06 0 0 0 48.44 55.47A39.8 39.8 0 0 0 96 192v8H72a24 24 0 0 1-24-24a40 40 0 0 0-40-40a8 8 0 0 0 0 16a24 24 0 0 1 24 24a40 40 0 0 0 40 40h24v16a8 8 0 0 0 16 0v-40a24 24 0 0 1 48 0v40a8 8 0 0 0 16 0v-40a39.8 39.8 0 0 0-8.44-24.53A56.06 56.06 0 0 0 216 112v-8a58.14 58.14 0 0 0-7.69-28.32ZM200 112a40 40 0 0 1-40 40h-48a40 40 0 0 1-40-40v-8a41.74 41.74 0 0 1 6.9-22.48a8 8 0 0 0 1.1-7.69a43.81 43.81 0 0 1 .79-33.58a43.88 43.88 0 0 1 32.32 20.06a8 8 0 0 0 6.71 3.69h32.35a8 8 0 0 0 6.74-3.69a43.87 43.87 0 0 1 32.32-20.06a43.81 43.81 0 0 1 .77 33.58a8.09 8.09 0 0 0 1 7.65a41.72 41.72 0 0 1 7 22.52Z"
          />
        </svg>
      );
    case "instagram":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.87 28.87">
          <defs>
            <linearGradient
              id="a"
              x1="-1.84"
              x2="32.16"
              y1="30.47"
              y2="-3.03"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#fed576" />
              <stop offset=".26" stop-color="#f47133" />
              <stop offset=".61" stop-color="#bc3081" />
              <stop offset="1" stop-color="#4c63d2" />
            </linearGradient>
          </defs>
          <g data-name="Layer 2">
            <g data-name="Layer 1">
              <rect
                width="28.87"
                height="28.87"
                fill="url(#a)"
                rx="6.48"
                ry="6.48"
              />
              <g data-name="&lt;Group&gt;">
                <path
                  fill="#fff"
                  d="M10 5h9c.2.1.5.1.7.2a4.78 4.78 0 0 1 3.8 3.3 8 8 0 0 1 .3 1.5v8.8a6.94 6.94 0 0 1-1.2 3.1 5.51 5.51 0 0 1-4.5 1.9h-7.5a5.49 5.49 0 0 1-3.7-1.2A5.51 5.51 0 0 1 5 18.14v-7a7.57 7.57 0 0 1 .1-1.5 4.9 4.9 0 0 1 3.8-4.3zm-3.1 9.5v3.9a3.42 3.42 0 0 0 3.7 3.7q3.9.15 7.8 0c2.3 0 3.6-1.4 3.7-3.7q.15-3.9 0-7.8a3.52 3.52 0 0 0-3.7-3.7q-3.9-.15-7.8 0a3.42 3.42 0 0 0-3.7 3.7z"
                  data-name="&lt;Compound Path&gt;"
                />
                <path
                  fill="#fff"
                  d="M9.64 14.54a4.91 4.91 0 0 1 4.9-4.9 5 5 0 0 1 4.9 4.9 4.91 4.91 0 0 1-4.9 4.9 5 5 0 0 1-4.9-4.9zm4.9-3.1a3.05 3.05 0 1 0 3 3 3 3 0 0 0-3-3z"
                  data-name="&lt;Compound Path&gt;"
                />
                <path
                  fill="#fff"
                  d="M18.34 9.44a1.16 1.16 0 0 1 1.2-1.2 1.29 1.29 0 0 1 1.2 1.2 1.2 1.2 0 0 1-2.4 0z"
                  data-name="&lt;Path&gt;"
                />
              </g>
            </g>
          </g>
        </svg>
      );
    case "link":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
          />
        </svg>
      );

    case "newWindow":
      return (
        <svg
          className={className}
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          width="48"
          viewBox="0 0 48 48"
        >
          <path d="M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h13.95v3H9v30h30V25.05h3V39q0 1.2-.9 2.1-.9.9-2.1.9Zm10.1-10.95L17 28.9 36.9 9H25.95V6H42v16.05h-3v-10.9Z" />
        </svg>
      );
    case "call":
      return (
        <svg
          className={className}
          xmlns="http://www.w3.org/2000/svg"
          fill="#66ff00"
          height="48"
          width="48"
        >
          <path d="M37.75 39.75q-5.05 0-10.325-2.725-5.275-2.725-9.575-7-4.3-4.275-7.025-9.525Q8.1 15.25 8.1 10.15q0-.9.6-1.525Q9.3 8 10.25 8h4.4q.85 0 1.475.525.625.525.775 1.375l1.05 4.45q.15.8-.025 1.425T17.25 16.8l-4.4 4.15q2.95 4.95 6.475 8.425Q22.85 32.85 27.6 35.45L31.9 31q.5-.55 1.075-.775.575-.225 1.275-.075L38 31q.9.15 1.4.8.5.65.5 1.55v4.25q0 .95-.6 1.55-.6.6-1.55.6ZM12.05 19.6l4.2-3.9q.15-.15.2-.425.05-.275 0-.525l-1-4.6q-.05-.3-.275-.45-.225-.15-.525-.15h-4.5q-.25 0-.4.15-.15.15-.15.4-.05 1.95.6 4.35.65 2.4 1.85 5.15Zm17 16.55q2.05 1.05 4.525 1.575 2.475.525 4.275.525.25 0 .4-.15.15-.15.15-.35v-4.5q0-.3-.15-.5t-.5-.25l-3.9-.8q-.25-.05-.425 0t-.325.2Zm-17-16.55Zm17 16.55Z" />
        </svg>
      );

    case "download":
      return (
        <svg
          width="73"
          height="32"
          className={className}
          viewBox="0 0 73 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.25 21.25V22.75H15.75V21.25H26.25ZM21.75 9.25L21.7497 17.077L25.4997 13.7433V15.7502L21 19.75L16.4997 15.7502V13.7433L20.2497 17.077L20.25 9.25H21.75Z"
            fill="#fff"
          />
          <path
            d="M38.2178 11.0059C39.5075 11.0059 40.4486 11.2702 41.041 11.7988C41.6335 12.3275 41.9297 13.068 41.9297 14.0205C41.9297 14.4535 41.8613 14.8659 41.7246 15.2578C41.5924 15.6452 41.3737 15.9893 41.0684 16.29C40.763 16.5863 40.3597 16.821 39.8584 16.9941C39.3617 17.1673 38.7487 17.2539 38.0195 17.2539H36.9531V21H35.3125V11.0059H38.2178ZM38.1084 12.3662H36.9531V15.8867H37.8486C38.3636 15.8867 38.8011 15.8275 39.1611 15.709C39.5212 15.5859 39.7946 15.3923 39.9814 15.1279C40.1683 14.8636 40.2617 14.515 40.2617 14.082C40.2617 13.5033 40.0863 13.0726 39.7354 12.79C39.389 12.5075 38.8467 12.3662 38.1084 12.3662ZM52.04 15.9072C52.04 17.0329 51.8304 17.974 51.4111 18.7305C50.9919 19.4824 50.3835 20.0498 49.5859 20.4326C48.7884 20.8109 47.8268 21 46.7012 21H43.9258V11.0059H47.002C48.0365 11.0059 48.9297 11.1927 49.6816 11.5664C50.4336 11.9355 51.0146 12.4847 51.4248 13.2139C51.835 13.9385 52.04 14.8363 52.04 15.9072ZM50.3311 15.9551C50.3311 15.1348 50.2012 14.4603 49.9414 13.9316C49.6862 13.403 49.3079 13.0111 48.8066 12.7559C48.3099 12.4961 47.6969 12.3662 46.9678 12.3662H45.5664V19.626H46.7285C47.9362 19.626 48.8385 19.3184 49.4355 18.7031C50.0326 18.0879 50.3311 17.1719 50.3311 15.9551ZM55.8203 21H54.1934V11.0059H59.8398V12.3867H55.8203V15.5039H59.5801V16.8779H55.8203V21Z"
            fill="#fff"
          />
        </svg>
      );
    default:
      return <p>error icon</p>;
  }
}
