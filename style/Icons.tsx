export default function Icons({
  icon,
  className,
  stroke,
  text,
}: {
  icon: string;
  stroke?: string;
  className?: string;

  text?: string;
  fromNav?: boolean;
}) {
  switch (icon) {
    case "left":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke={stroke}
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M9 6c0 -.852 .986 -1.297 1.623 -.783l.084 .076l6 6a1 1 0 0 1 .083 1.32l-.083 .094l-6 6l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002l-.059 -.002l-.058 -.005l-.06 -.009l-.052 -.01l-.108 -.032l-.067 -.027l-.132 -.07l-.09 -.065l-.081 -.073l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057l-.002 -12.059z"
            stroke-width="0"
          />
        </svg>
      );
    case "backend":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
          <path d="M15 20h-9a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3h12" />
          <path d="M7 8v.01" />
          <path d="M7 16v.01" />
          <path d="M20 15l-2 3h3l-2 3" />
        </svg>
      );
    case "frontend":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 21v-4a4 4 0 1 1 4 4h-4" />
          <path d="M21 3a16 16 0 0 0 -12.8 10.2" />
          <path d="M21 3a16 16 0 0 1 -10.2 12.8" />
          <path d="M10.6 9a9 9 0 0 1 4.4 4.4" />
        </svg>
      );
    case "services":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
          <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
          <path d="M12 12l0 .01" />
          <path d="M3 13a20 20 0 0 0 18 0" />
        </svg>
      );
    case "seo":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke={stroke}
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697" />
          <path d="M18 12v-5a2 2 0 0 0 -2 -2h-2" />
          <path d="M8 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
          <path d="M8 11h4" />
          <path d="M8 15h3" />
          <path d="M16.5 17.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" />
          <path d="M18.5 19.5l2.5 2.5" />
        </svg>
      );
    case "check":
      return (
        <svg
          className={className}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g fill="">
            <path d="M10.243 16.314L6 12.07l1.414-1.414l2.829 2.828l5.656-5.657l1.415 1.415l-7.071 7.07Z" />
            <path
              fill-rule="evenodd"
              d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12Zm11 9a9 9 0 1 1 0-18a9 9 0 0 1 0 18Z"
              clip-rule="evenodd"
            />
          </g>
        </svg>
      );
    case "download":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
          <path className="anim-down" d="M7 11l5 5l5 -5"></path>
          <path className="anim-down" d="M12 4l0 12"></path>
        </svg>
      );
    case "like_love":
      return (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.6692 18.9506L12.1051 19.5609L11.6692 18.9506ZM11.7222 18.9128L11.2902 18.2997L11.7222 18.9128ZM14.5703 18.0001L14.5751 18.7501L14.5703 18.0001ZM7.3959 19.5103L8.09226 19.7888L7.3959 19.5103ZM9.05848 20.8154L8.62255 20.2051H8.62255L9.05848 20.8154ZM21.798 14.4069L22.5177 14.6179L21.798 14.4069ZM18.4069 17.798L18.6179 18.5177L18.4069 17.798ZM4.73005 2.54497L5.07054 3.21322L4.73005 2.54497ZM2.54497 4.73005L3.21322 5.07054L2.54497 4.73005ZM19.27 2.54497L18.9295 3.21322L19.27 2.54497ZM21.455 4.73005L20.7868 5.07054L21.455 4.73005ZM12.8003 6.57296L13.2021 7.20629L12.8003 6.57296ZM16.1557 6.73036L16.6912 6.20525H16.6912L16.1557 6.73036ZM7.84426 6.73036L8.37976 7.25547L7.84426 6.73036ZM11.1996 6.57297L11.6014 5.93964L11.1996 6.57297ZM14 1.25H10V2.75H14V1.25ZM1.25 10V14.2283H2.75V10H1.25ZM22.75 11.1842V10H21.25V11.1842H22.75ZM5.77166 18.75H6.37341V17.25H5.77166V18.75ZM9.49441 21.4257L12.1051 19.5609L11.2333 18.3403L8.62255 20.2051L9.49441 21.4257ZM14.6354 18.75H15.1842V17.25H14.6354V18.75ZM12.1051 19.5609C12.1325 19.5413 12.1436 19.5334 12.1543 19.5259L11.2902 18.2997C11.2747 18.3107 11.2592 18.3218 11.2333 18.3403L12.1051 19.5609ZM14.6354 17.25C14.6036 17.25 14.5845 17.25 14.5655 17.2501L14.5751 18.7501C14.5882 18.75 14.6018 18.75 14.6354 18.75V17.25ZM12.1543 19.5259C12.8632 19.0264 13.7079 18.7556 14.5751 18.7501L14.5655 17.2501C13.3922 17.2576 12.2493 17.6239 11.2902 18.2997L12.1543 19.5259ZM6.37341 18.75C6.62191 18.75 6.79183 19.001 6.69954 19.2317L8.09226 19.7888C8.57867 18.5728 7.68311 17.25 6.37341 17.25V18.75ZM6.69954 19.2317C6.01288 20.9484 7.9899 22.5003 9.49441 21.4257L8.62255 20.2051C8.33709 20.409 7.96197 20.1145 8.09226 19.7888L6.69954 19.2317ZM21.25 11.1842C21.25 12.9261 21.2424 13.6363 21.0783 14.1958L22.5177 14.6179C22.7576 13.7996 22.75 12.8206 22.75 11.1842H21.25ZM15.1842 18.75C16.8206 18.75 17.7996 18.7576 18.6179 18.5177L18.1958 17.0783C17.6363 17.2424 16.9261 17.25 15.1842 17.25V18.75ZM21.0783 14.1958C20.671 15.5848 19.5848 16.671 18.1958 17.0783L18.6179 18.5177C20.4971 17.9667 21.9667 16.4971 22.5177 14.6179L21.0783 14.1958ZM1.25 14.2283C1.25 16.7256 3.27441 18.75 5.77166 18.75V17.25C4.10284 17.25 2.75 15.8972 2.75 14.2283H1.25ZM10 1.25C8.61224 1.25 7.52632 1.24942 6.65494 1.32061C5.77479 1.39252 5.04768 1.54138 4.38955 1.87671L5.07054 3.21322C5.48197 3.00359 5.9897 2.87996 6.77708 2.81563C7.57322 2.75058 8.58749 2.75 10 2.75V1.25ZM2.75 10C2.75 8.58749 2.75058 7.57322 2.81563 6.77708C2.87996 5.9897 3.00359 5.48197 3.21322 5.07054L1.87671 4.38955C1.54138 5.04768 1.39252 5.77479 1.32061 6.65494C1.24942 7.52632 1.25 8.61224 1.25 10H2.75ZM4.38955 1.87671C3.30762 2.42798 2.42798 3.30762 1.87671 4.38955L3.21322 5.07054C3.62068 4.27085 4.27085 3.62068 5.07054 3.21322L4.38955 1.87671ZM14 2.75C15.4125 2.75 16.4268 2.75058 17.2229 2.81563C18.0103 2.87996 18.518 3.00359 18.9295 3.21322L19.6104 1.87671C18.9523 1.54138 18.2252 1.39252 17.3451 1.32061C16.4737 1.24942 15.3878 1.25 14 1.25V2.75ZM22.75 10C22.75 8.61224 22.7506 7.52632 22.6794 6.65494C22.6075 5.77479 22.4586 5.04768 22.1233 4.38955L20.7868 5.07054C20.9964 5.48197 21.12 5.9897 21.1844 6.77708C21.2494 7.57322 21.25 8.58749 21.25 10H22.75ZM18.9295 3.21322C19.7291 3.62068 20.3793 4.27085 20.7868 5.07054L22.1233 4.38955C21.572 3.30762 20.6924 2.42798 19.6104 1.87671L18.9295 3.21322ZM13.2021 7.20629C13.5691 6.97346 13.9942 6.78463 14.4089 6.75427C14.7861 6.72666 15.1972 6.82401 15.6202 7.25547L16.6912 6.20525C15.9472 5.44651 15.099 5.19974 14.2994 5.25827C13.5374 5.31406 12.8684 5.64163 12.3986 5.93964L13.2021 7.20629ZM15.6202 7.25547C16.1308 7.77617 16.3067 8.4132 16.2347 9.14058C16.1605 9.89096 15.8194 10.7218 15.3035 11.5162C14.7906 12.3058 14.1351 13.0126 13.4941 13.5147C12.8204 14.0424 12.2841 14.25 12 14.25V15.75C12.8034 15.75 13.6767 15.2771 14.419 14.6956C15.194 14.0886 15.9609 13.2578 16.5614 12.3332C17.1589 11.4133 17.6221 10.3533 17.7274 9.28826C17.8351 8.20021 17.5659 7.0972 16.6912 6.20525L15.6202 7.25547ZM12 14.25C11.7159 14.25 11.1796 14.0424 10.5059 13.5147C9.86488 13.0126 9.20938 12.3058 8.69653 11.5162C8.18059 10.7218 7.83952 9.89096 7.76528 9.14058C7.69331 8.4132 7.86916 7.77617 8.37976 7.25547L7.30876 6.20525C6.43411 7.0972 6.16492 8.20021 6.27257 9.28826C6.37794 10.3533 6.84113 11.4133 7.43856 12.3332C8.03907 13.2578 8.80603 14.0886 9.58099 14.6956C10.3233 15.2771 11.1966 15.75 12 15.75V14.25ZM8.37976 7.25547C8.80285 6.82402 9.21387 6.72667 9.59105 6.75428C10.0057 6.78464 10.4309 6.97347 10.7979 7.20629L11.6014 5.93964C11.1316 5.64163 10.4626 5.31407 9.70056 5.25828C8.90102 5.19975 8.05278 5.44652 7.30876 6.20525L8.37976 7.25547ZM12.3986 5.93964C12.171 6.08402 11.829 6.08402 11.6014 5.93964L10.7979 7.20629C11.516 7.6618 12.484 7.6618 13.2021 7.20629L12.3986 5.93964Z"
            fill="#2D264B"
          />
        </svg>
      );
    case "correct":
      return (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 9L13.6308 12.7632C12.2957 14.2544 11.6282 15 10.75 15C9.8718 15 9.20425 14.2544 7.86917 12.7632L7 11.7924M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
            stroke="#40DF9F"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      );
    case "lock":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1.2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z"></path>
          <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
          <path d="M8 11v-4a4 4 0 1 1 8 0v4"></path>
        </svg>
      );
    case "time":
      return (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.75 8C12.75 7.58579 12.4142 7.25 12 7.25C11.5858 7.25 11.25 7.58579 11.25 8H12.75ZM15 13.75C15.4142 13.75 15.75 13.4142 15.75 13C15.75 12.5858 15.4142 12.25 15 12.25V13.75ZM2.53148 2.66435C2.20803 2.92311 2.15559 3.39507 2.41435 3.71852C2.67311 4.04197 3.14507 4.09441 3.46852 3.83565L2.53148 2.66435ZM5.96852 1.83565C6.29197 1.57689 6.34441 1.10493 6.08565 0.781479C5.82689 0.458032 5.35493 0.405591 5.03148 0.664348L5.96852 1.83565ZM20.5315 3.83565C20.8549 4.09441 21.3269 4.04197 21.5857 3.71852C21.8444 3.39507 21.792 2.92311 21.4685 2.66435L20.5315 3.83565ZM18.9685 0.664348C18.6451 0.405591 18.1731 0.458032 17.9143 0.781479C17.6556 1.10493 17.708 1.57689 18.0315 1.83565L18.9685 0.664348ZM12 11.5H11.25H12ZM11.25 8L11.25 11.5L12.75 11.5L12.75 8H11.25ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM12 21.25C6.89137 21.25 2.75 17.1086 2.75 12H1.25C1.25 17.9371 6.06294 22.75 12 22.75V21.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75V1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75ZM12 2.75C17.1086 2.75 21.25 6.89137 21.25 12H22.75C22.75 6.06294 17.9371 1.25 12 1.25V2.75ZM3.46852 3.83565L5.96852 1.83565L5.03148 0.664348L2.53148 2.66435L3.46852 3.83565ZM21.4685 2.66435L18.9685 0.664348L18.0315 1.83565L20.5315 3.83565L21.4685 2.66435ZM13.5 13.75H15V12.25H13.5V13.75ZM11.25 11.5C11.25 12.7426 12.2574 13.75 13.5 13.75V12.25C13.0858 12.25 12.75 11.9142 12.75 11.5L11.25 11.5Z" />
        </svg>
      );

    case "calendar":
      return (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.06107 21.0451L5.50191 20.4383L5.06107 21.0451ZM3.95491 19.9389L4.56168 19.4981L3.95491 19.9389ZM20.0451 19.9389L19.4383 19.4981L20.0451 19.9389ZM18.9389 21.0451L19.3798 21.6518L18.9389 21.0451ZM18.9389 4.95492L19.3798 4.34815L18.9389 4.95492ZM20.0451 6.06107L19.4383 6.50191L20.0451 6.06107ZM5.06107 4.95492L5.50191 5.56168H5.50191L5.06107 4.95492ZM3.95491 6.06107L4.56168 6.50191L3.95491 6.06107ZM19.2178 16.0616L19.1005 15.3208H19.1005L19.2178 16.0616ZM15.0616 20.2178L14.3208 20.1005V20.1005L15.0616 20.2178ZM9 13.25C8.58579 13.25 8.25 13.5858 8.25 14C8.25 14.4142 8.58579 14.75 9 14.75V13.25ZM15 14.75C15.4142 14.75 15.75 14.4142 15.75 14C15.75 13.5858 15.4142 13.25 15 13.25V14.75ZM14.25 5C14.25 5.41421 14.5858 5.75 15 5.75C15.4142 5.75 15.75 5.41421 15.75 5H14.25ZM15.75 2C15.75 1.58579 15.4142 1.25 15 1.25C14.5858 1.25 14.25 1.58579 14.25 2H15.75ZM8.25 5C8.25 5.41421 8.58579 5.75 9 5.75C9.41421 5.75 9.75 5.41421 9.75 5H8.25ZM9.75 2C9.75 1.58579 9.41421 1.25 9 1.25C8.58579 1.25 8.25 1.58579 8.25 2H9.75ZM20.9711 16L21.7206 16.0257L20.9711 16ZM3.02893 10L2.27937 9.97432L3.02893 10ZM20.9711 10L21.7206 9.97432L20.9711 10ZM12 21.25C10.1084 21.25 8.74999 21.249 7.69804 21.135C6.66013 21.0225 6.00992 20.8074 5.50191 20.4383L4.62023 21.6518C5.42656 22.2377 6.37094 22.5 7.53648 22.6263C8.68798 22.751 10.1418 22.75 12 22.75V21.25ZM2.25 13C2.25 14.8582 2.24897 16.312 2.37373 17.4635C2.50001 18.6291 2.76232 19.5734 3.34815 20.3798L4.56168 19.4981C4.19259 18.9901 3.97745 18.3399 3.865 17.302C3.75103 16.25 3.75 14.8916 3.75 13H2.25ZM5.50191 20.4383C5.14111 20.1762 4.82382 19.8589 4.56168 19.4981L3.34815 20.3798C3.70281 20.8679 4.13209 21.2972 4.62023 21.6518L5.50191 20.4383ZM19.4383 19.4981C19.1762 19.8589 18.8589 20.1762 18.4981 20.4383L19.3798 21.6518C19.8679 21.2972 20.2972 20.8679 20.6518 20.3798L19.4383 19.4981ZM18.4981 5.56168C18.8589 5.82382 19.1762 6.14111 19.4383 6.50191L20.6518 5.62023C20.2972 5.13209 19.8679 4.70281 19.3798 4.34815L18.4981 5.56168ZM4.62023 4.34815C4.13209 4.70281 3.70281 5.13209 3.34815 5.62023L4.56168 6.50191C4.82382 6.14111 5.14111 5.82382 5.50191 5.56168L4.62023 4.34815ZM19.1005 15.3208C16.6401 15.7105 14.7105 17.6401 14.3208 20.1005L15.8023 20.3352C16.0904 18.5166 17.5166 17.0904 19.3352 16.8023L19.1005 15.3208ZM9 14.75H15V13.25H9V14.75ZM20.9711 15.25C20.0888 15.25 19.5579 15.2484 19.1005 15.3208L19.3352 16.8023C19.647 16.7529 20.0338 16.75 20.9711 16.75L20.9711 15.25ZM20.25 13C20.25 14.1731 20.2499 15.1456 20.2215 15.9743L21.7206 16.0257C21.7501 15.1658 21.75 14.1648 21.75 13H20.25ZM20.2215 15.9743C20.158 17.8292 19.9509 18.7925 19.4383 19.4981L20.6518 20.3798C21.4537 19.2761 21.6564 17.8991 21.7206 16.0257L20.2215 15.9743ZM15.75 21.9711C15.75 21.0338 15.7529 20.647 15.8023 20.3352L14.3208 20.1005C14.2484 20.5579 14.25 21.0888 14.25 21.9711L15.75 21.9711ZM12 22.75C13.1648 22.75 14.1658 22.7501 15.0257 22.7206L14.9743 21.2215C14.1456 21.2499 13.1731 21.25 12 21.25V22.75ZM15.0257 22.7206C16.8991 22.6564 18.2761 22.4537 19.3798 21.6518L18.4981 20.4383C17.7925 20.9509 16.8292 21.158 14.9743 21.2215L15.0257 22.7206ZM3.75 13C3.75 11.8269 3.75009 10.8544 3.77849 10.0257L2.27937 9.97432C2.24991 10.8342 2.25 11.8352 2.25 13H3.75ZM3.77849 10.0257C3.84204 8.17075 4.04907 7.20746 4.56168 6.50191L3.34815 5.62023C2.5463 6.7239 2.34355 8.10087 2.27937 9.97432L3.77849 10.0257ZM3.02893 10.75H20.9711V9.25H3.02893V10.75ZM21.75 13C21.75 11.8352 21.7501 10.8342 21.7206 9.97432L20.2215 10.0257C20.2499 10.8544 20.25 11.8269 20.25 13H21.75ZM21.7206 9.97432C21.6564 8.10087 21.4537 6.7239 20.6518 5.62023L19.4383 6.50191C19.9509 7.20746 20.158 8.17075 20.2215 10.0257L21.7206 9.97432ZM15.75 5V4.02893H14.25V5H15.75ZM15.75 4.02893V2H14.25V4.02893H15.75ZM12 4.75C13.1731 4.75 14.1456 4.75009 14.9743 4.77849L15.0257 3.27937C14.1658 3.24991 13.1648 3.25 12 3.25V4.75ZM14.9743 4.77849C16.8292 4.84204 17.7925 5.04907 18.4981 5.56168L19.3798 4.34815C18.2761 3.5463 16.8991 3.34356 15.0257 3.27937L14.9743 4.77849ZM9.75 5V4.02893H8.25V5H9.75ZM9.75 4.02893V2H8.25V4.02893H9.75ZM12 3.25C10.8352 3.25 9.83424 3.24991 8.97432 3.27937L9.02568 4.77849C9.85445 4.75009 10.8269 4.75 12 4.75V3.25ZM8.97432 3.27937C7.10087 3.34356 5.7239 3.5463 4.62023 4.34815L5.50191 5.56168C6.20746 5.04907 7.17075 4.84204 9.02568 4.77849L8.97432 3.27937Z" />
        </svg>
      );

    case "time":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 13m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
          <path d="M12 10l0 3l2 0"></path>
          <path d="M7 4l-2.75 2"></path>
          <path d="M17 4l2.75 2"></path>
        </svg>
      );

    case "close":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M18 6l-12 12"></path>
          <path d="M6 6l12 12"></path>
        </svg>
      );
    case "fuego":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M18.918 8.174c2.56 4.982 .501 11.656 -5.38 12.626c-7.702 1.687 -12.84 -7.716 -7.054 -13.229c.309 -.305 1.161 -1.095 1.516 -1.349c0 .528 .27 3.475 1 3.167c3 0 4 -4.222 3.587 -7.389c2.7 1.411 4.987 3.376 6.331 6.174z"></path>
        </svg>
      );
    case "loading":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{
            margin: 0,
            background: "none",
            display: "block",
            shapeRendering: "auto",
          }}
          width="40px"
          height="40px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
          className={className}
        >
          <circle
            cx="50"
            cy="50"
            r="30"
            stroke={stroke || "#FFF"}
            strokeWidth="10"
            fill="none"
          >
            <animate
              attributeName="stroke-dashoffset"
              dur="1.3s"
              repeatCount="indefinite"
              from="0"
              to="502"
            ></animate>
            <animate
              attributeName="stroke-dasharray"
              dur="1.3s"
              repeatCount="indefinite"
              values="150.6 100.4;1 250;150.6 100.4"
            ></animate>
          </circle>
        </svg>
      );
    case "star":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          viewBox="0 0 24 24"
        >
          <path d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z" />
        </svg>
      );
    case "mail":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className={className}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
          <path d="M3 7l9 6l9 -6" />
        </svg>
      );
    case "phone":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className={className}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
          <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
        </svg>
      );
    default:
      return <span>error icon</span>;
  }
}
