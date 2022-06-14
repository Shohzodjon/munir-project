<template>
  <div class="my-5">
    <ul>
      <li class="flex-center-between">
        <button
          class="w-[114px] h-10 flex-center gap-3 border border-[#1877F2] rounded-md justify-center btn1"
        >
          <span
            ><svg
              width="10"
              height="18"
              viewBox="0 0 10 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.79355 10.1797L9.28125 7H6.23047V4.9375C6.23047 4.0676 6.65672 3.21875 8.02313 3.21875H9.41016V0.511719C9.41016 0.511719 8.15139 0.296875 6.94783 0.296875C4.43524 0.296875 2.79297 1.81969 2.79297 4.57656V7H0V10.1797H2.79297V17.8664C3.93188 18.0445 5.09156 18.0445 6.23047 17.8664V10.1797H8.79355Z"
                fill="#1877F2"
              />
            </svg>
          </span>
          <span class="text-[#2A3242] text-[14px] font-semibold">Facebook</span>
        </button>

        <button
          class="w-[114px] h-10 flex-center gap-3 border border-[#EB4335] rounded-md justify-center btn2"
        >
          <span
            ><svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.50461 9.03509C4.50461 8.51318 4.59129 8.01282 4.746 7.5435L2.03801 5.47559C1.51024 6.54716 1.21289 7.7546 1.21289 9.03509C1.21289 10.3145 1.50988 11.5212 2.03692 12.592L4.74344 10.5201C4.59019 10.053 4.50461 9.55444 4.50461 9.03509Z"
                fill="#FBBC05"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.2584 4.28705C10.3922 4.28705 11.4163 4.6888 12.2209 5.3462L14.5617 3.00875C13.1353 1.76698 11.3066 1 9.2584 1C6.0786 1 3.34575 2.81847 2.03711 5.4755L4.74509 7.54341C5.36906 5.64934 7.14768 4.28705 9.2584 4.28705Z"
                fill="#EB4335"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.2584 13.7827C7.14768 13.7827 5.36906 12.4204 4.74509 10.5264L2.03711 12.5939C3.34575 15.2513 6.0786 17.0698 9.2584 17.0698C11.221 17.0698 13.0947 16.3729 14.501 15.0672L11.9305 13.08C11.2053 13.5369 10.292 13.7827 9.2584 13.7827Z"
                fill="#34A853"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.9404 9.03513C16.9404 8.56033 16.8673 8.04901 16.7576 7.57422H9.25977V10.6787H13.5756C13.3598 11.7371 12.7724 12.5508 11.9319 13.0804L14.5024 15.0676C15.9796 13.6965 16.9404 11.6542 16.9404 9.03513Z"
                fill="#4285F4"
              />
            </svg>
          </span>
          <span
            class="text-[#2A3242] text-[14px] font-semibold transition duration-500 all"
            >Google</span
          >
        </button>

        <button
          class="w-[114px] h-10 flex-center gap-3 border border-[#2A3242] rounded-md justify-center btn3"
        >
          <span
            ><svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.7047 9.45544C13.6967 8.14395 14.3156 7.15553 15.5654 6.42671C14.8664 5.46521 13.8089 4.93639 12.4149 4.83447C11.095 4.73447 9.65093 5.5729 9.12217 5.5729C8.56338 5.5729 7.28555 4.86908 6.28011 4.86908C4.20515 4.89985 2 6.45748 2 9.62659C2 10.5631 2.17825 11.5304 2.53476 12.5265C3.01144 13.838 4.7299 17.0513 6.52246 16.9994C7.4598 16.9782 8.12275 16.3609 9.34249 16.3609C10.5262 16.3609 11.1391 16.9994 12.1845 16.9994C13.9931 16.9744 15.5474 14.0533 16 12.738C13.5745 11.64 13.7047 9.52275 13.7047 9.45544ZM11.5997 3.59028C12.6152 2.43264 12.523 1.37883 12.493 1C11.5957 1.05 10.5582 1.58652 9.96738 2.24611C9.31645 2.95377 8.93391 3.82874 9.01602 4.81524C9.98541 4.88639 10.8707 4.40756 11.5997 3.59028Z"
                fill="#2A3242"
              />
            </svg>
          </span>
          <span
            class="text-[#2A3242] text-[14px] font-semibold transition duration-500 all"
            >Apple</span
          >
        </button>
      </li>
    </ul>
  </div>
</template>
<style>
.btn1,
.btn2,
.btn3 {
  transition: all 0.5s linear;
}
.btn1:hover {
  background: #1877f2;
}
.btn1:hover span,
.btn1:hover svg path {
  fill: #fff;
  color: #fff;
}
.btn2:hover {
  background: #eb4335;
}
.btn2:hover span,
.btn2:hover svg path {
  fill: #fff;
  color: #fff;
}
.btn3:hover {
  background: #2a3242;
}
.btn3:hover span,
.btn3:hover svg path {
  fill: #fff;
  color: #fff;
}
</style>
