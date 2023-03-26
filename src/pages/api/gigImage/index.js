import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

export default async function (params) {
  const url1 = await new URL(params.url);
  const searchParams1 = new URLSearchParams(url1.search);
  const gigImg = searchParams1.get("gigImg");
  const title = searchParams1.get("title");

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <div tw="bg-neutral-900 flex flex-nowrap h-full w-full justify-between py-12 items-center p-8">
          <div tw={"flex flex-col w-1/2 mb-12"}>
            <svg
              width="550"
              height="550"
              viewBox="0 0 501 501"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              tw={""}
            >
              <path
                d="M208.349 200.687C222.725 211.613 225.792 221.197 237.677 235.19"
                stroke="#16A34A"
                stroke-width="8.6252"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M202.533 263.544C217.742 256.85 270.454 275.059 300.356 277.551"
                stroke="#16A34A"
                stroke-width="8.6252"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M298.823 248.416C279.655 247.074 275.438 227.331 260.486 214.392"
                stroke="#16A34A"
                stroke-width="7.90643"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M239.528 214.392C239.528 214.392 228.785 214.836 223.109 218.897C217.433 222.958 210.458 235.19 210.458 235.19"
                stroke="#16A34A"
                stroke-width="8.6252"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M285.597 223.305C285.597 223.305 280.156 226.72 274.479 230.781C268.803 234.842 269.754 241.803 269.754 241.803"
                stroke="#16A34A"
                stroke-width="7.90643"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M185.331 157.071C103.849 214.007 158.393 303.724 247.58 314.72C376.888 330.662 333.364 225.394 333.364 225.394"
                stroke="#16A34A"
                stroke-width="8.6252"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M192.669 124.681C271.873 98.8699 318.181 141.129 339.437 153.528"
                stroke="#16A34A"
                stroke-width="8.6252"
                stroke-linecap="round"
              />
              <path
                d="M276.681 190.221C288.237 163.482 316.258 105.399 332.858 98.1108C340.033 103.764 338.338 125.661 339.943 147.961C342.074 177.565 347.364 207.428 352.849 207.428"
                stroke="#16A34A"
                stroke-width="8.6252"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M222.277 164.409C216.792 164.409 212.408 139.358 212.408 108.739C210.803 86.4387 213.004 65.5538 205.828 59.9004C190.768 65.5273 176.415 110.255 162.323 146.715M162.323 146.715C156.472 166.846 154.838 185.286 150.898 196.581L162.323 146.715Z"
                stroke="#16A34A"
                stroke-width="8.6252"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M101.577 358.872C102.347 358.395 103.136 358.064 103.943 357.881C104.75 357.698 105.502 357.606 106.199 357.606C107.116 357.606 107.942 357.771 108.675 358.101C109.409 358.395 110.032 358.78 110.546 359.257C111.06 359.734 111.445 360.284 111.702 360.907C111.995 361.494 112.142 362.081 112.142 362.668C112.142 363.475 111.867 364.246 111.316 364.979C110.803 365.713 110.069 366.337 109.115 366.85C107.208 367.951 105.612 368.886 104.328 369.656C103.044 370.427 101.944 371.124 101.027 371.747C100.146 372.371 99.376 372.958 98.7157 373.508C98.0554 374.058 97.3951 374.664 96.7348 375.324C95.781 376.204 94.864 377.213 93.9836 378.35C93.1032 379.487 92.3145 380.625 91.6175 381.762C90.9572 382.862 90.407 383.926 89.9668 384.953C89.5633 385.98 89.3615 386.824 89.3615 387.484C89.3615 388.035 89.5082 388.475 89.8017 388.805C90.0952 389.135 90.517 389.3 91.0673 389.3C91.6542 389.3 92.2961 389.098 92.9931 388.695C95.2308 387.448 97.5785 386.329 100.036 385.338C102.531 384.348 105.044 383.504 107.575 382.807C110.106 382.11 112.637 381.597 115.168 381.267C117.699 380.9 120.157 380.716 122.541 380.716C126.32 380.716 129.786 381.138 132.941 381.982C136.096 382.789 138.81 383.926 141.085 385.393C143.359 386.861 145.12 388.64 146.367 390.731C147.614 392.785 148.238 395.041 148.238 397.499C148.238 400.25 147.449 402.891 145.872 405.422C144.294 407.954 142.13 410.173 139.379 412.08C136.628 413.988 133.381 415.51 129.64 416.647C125.898 417.785 121.863 418.353 117.534 418.353C111.775 418.353 106.493 417.748 101.687 416.537C96.9182 415.364 92.8097 413.713 89.3615 411.585C85.95 409.458 83.2904 406.926 81.3829 403.992C79.5121 401.02 78.5767 397.774 78.5767 394.252C78.5767 390.767 79.0535 387.356 80.0073 384.018C80.9977 380.643 82.4467 377.452 84.3543 374.443C86.2985 371.399 88.7012 368.574 91.5625 365.97C94.4238 363.329 97.7619 360.962 101.577 358.872ZM137.178 399.425C137.178 398.177 136.774 397.04 135.967 396.013C135.197 394.986 134.097 394.106 132.666 393.372C131.272 392.638 129.566 392.07 127.549 391.666C125.568 391.263 123.367 391.061 120.946 391.061C116.36 391.061 111.867 391.703 107.465 392.987C103.099 394.234 98.9908 396.05 95.1391 398.434C94.222 399.021 93.7635 399.737 93.7635 400.58C93.7635 401.167 94.0936 401.772 94.7539 402.396C95.4142 402.983 96.313 403.552 97.4501 404.102C98.5873 404.652 99.9262 405.184 101.467 405.698C103.008 406.211 104.64 406.651 106.364 407.018C108.088 407.385 109.867 407.678 111.702 407.899C113.536 408.119 115.333 408.229 117.094 408.229C119.919 408.229 122.541 408.009 124.962 407.568C127.42 407.091 129.548 406.468 131.345 405.698C133.179 404.89 134.61 403.955 135.637 402.891C136.664 401.827 137.178 400.672 137.178 399.425Z"
                fill="#16A34A"
              />
              <path
                d="M158.087 359.642C157.024 359.642 156.015 359.495 155.061 359.202C154.144 358.872 153.337 358.431 152.64 357.881C151.98 357.294 151.448 356.615 151.044 355.845C150.641 355.075 150.439 354.231 150.439 353.314C150.439 351.773 151.044 350.526 152.255 349.572C153.502 348.619 155.153 348.142 157.207 348.142C158.161 348.142 159.078 348.325 159.958 348.692C160.839 349.022 161.609 349.481 162.269 350.068C162.966 350.654 163.516 351.351 163.92 352.158C164.323 352.929 164.525 353.736 164.525 354.58C164.525 356.157 163.938 357.404 162.764 358.321C161.627 359.202 160.068 359.642 158.087 359.642ZM150.549 376.424C150.549 375.14 151.099 374.095 152.2 373.288C153.337 372.444 154.823 372.022 156.657 372.022C159.958 372.022 161.719 373.16 161.939 375.434C162.086 377.011 162.233 378.79 162.379 380.771C162.563 382.752 162.728 384.862 162.874 387.099C163.058 389.3 163.205 391.593 163.315 393.977C163.461 396.325 163.59 398.654 163.7 400.965C163.81 403.24 163.902 405.441 163.975 407.568C164.048 409.696 164.085 411.64 164.085 413.401C164.085 415.235 163.425 416.611 162.104 417.528C160.82 418.445 158.931 418.903 156.437 418.903C155.299 418.903 154.401 418.628 153.74 418.078C153.117 417.565 152.805 416.794 152.805 415.767C152.805 410.705 152.677 405.973 152.42 401.571C152.2 397.132 151.943 393.189 151.649 389.74C151.393 386.292 151.136 383.431 150.879 381.157C150.659 378.845 150.549 377.268 150.549 376.424Z"
                fill="#16A34A"
              />
              <path
                d="M203.373 372.848C205.133 372.848 206.803 372.995 208.38 373.288C209.957 373.545 211.388 373.838 212.672 374.168C213.956 374.462 215.056 374.755 215.973 375.049C216.89 375.306 217.551 375.434 217.954 375.434C218.284 375.434 218.596 375.269 218.89 374.939C219.183 374.572 219.55 374.187 219.99 373.783C220.43 373.38 221.017 373.013 221.751 372.683C222.485 372.316 223.457 372.132 224.667 372.132C226.061 372.132 227.162 372.499 227.969 373.233C228.776 373.93 229.179 374.81 229.179 375.874C229.179 389.3 228.721 400.709 227.804 410.099C226.887 419.454 225.401 427.065 223.347 432.935C221.292 438.804 218.633 443.059 215.368 445.7C212.103 448.342 208.141 449.662 203.483 449.662C201.355 449.662 199.136 449.185 196.825 448.232C194.55 447.278 192.459 446.049 190.552 444.545C188.644 443.078 187.067 441.445 185.82 439.648C184.609 437.85 184.004 436.126 184.004 434.475C184.004 433.925 184.297 433.283 184.884 432.55C185.471 431.816 186.187 431.101 187.03 430.404C187.874 429.707 188.754 429.12 189.672 428.643C190.589 428.166 191.377 427.927 192.038 427.927C192.735 427.927 193.321 428.203 193.798 428.753C194.275 429.34 194.715 430.055 195.119 430.899C195.559 431.743 195.999 432.66 196.44 433.65C196.88 434.677 197.43 435.613 198.09 436.456C198.751 437.3 199.558 437.997 200.511 438.547C201.465 439.134 202.657 439.428 204.088 439.428C212.085 439.428 216.78 427.212 218.174 402.781C218.174 401.681 217.862 401.13 217.239 401.13C216.725 401.13 216.322 401.387 216.028 401.901C212.58 406.56 208.545 410.063 203.923 412.411C199.338 414.722 194.239 415.877 188.626 415.877C186.022 415.877 183.619 415.492 181.418 414.722C179.217 413.915 177.309 412.814 175.695 411.42C174.118 409.989 172.889 408.302 172.009 406.358C171.128 404.377 170.688 402.213 170.688 399.865C170.688 397.554 171.092 395.28 171.899 393.042C172.742 390.767 173.898 388.64 175.365 386.659C176.869 384.641 178.648 382.789 180.702 381.101C182.757 379.414 184.994 377.965 187.415 376.755C189.837 375.507 192.386 374.554 195.064 373.893C197.778 373.196 200.548 372.848 203.373 372.848ZM190.332 405.753C195.357 405.753 199.961 404.175 204.143 401.02C208.325 397.829 211.901 393.207 214.873 387.154C214.946 386.934 215.001 386.769 215.038 386.659C215.075 386.512 215.093 386.366 215.093 386.219C215.093 385.852 214.708 385.467 213.937 385.063C213.167 384.66 212.158 384.311 210.911 384.018C209.664 383.724 208.233 383.486 206.619 383.302C205.042 383.082 203.446 382.972 201.832 382.972C199.227 382.972 196.715 383.413 194.294 384.293C191.872 385.173 189.727 386.347 187.856 387.814C185.985 389.282 184.481 390.951 183.344 392.822C182.206 394.693 181.638 396.637 181.638 398.654C181.638 400.819 182.427 402.543 184.004 403.827C185.618 405.111 187.727 405.753 190.332 405.753Z"
                fill="#16A34A"
              />
              <path
                d="M267.531 372.848C269.292 372.848 270.961 372.995 272.539 373.288C274.116 373.545 275.547 373.838 276.831 374.168C278.115 374.462 279.215 374.755 280.132 375.049C281.049 375.306 281.709 375.434 282.113 375.434C282.443 375.434 282.755 375.269 283.048 374.939C283.342 374.572 283.709 374.187 284.149 373.783C284.589 373.38 285.176 373.013 285.91 372.683C286.643 372.316 287.615 372.132 288.826 372.132C290.22 372.132 291.32 372.499 292.127 373.233C292.935 373.93 293.338 374.81 293.338 375.874C293.338 389.3 292.879 400.709 291.962 410.099C291.045 419.454 289.56 427.065 287.505 432.935C285.451 438.804 282.792 443.059 279.527 445.7C276.262 448.342 272.3 449.662 267.641 449.662C265.514 449.662 263.295 449.185 260.984 448.232C258.709 447.278 256.618 446.049 254.711 444.545C252.803 443.078 251.226 441.445 249.979 439.648C248.768 437.85 248.163 436.126 248.163 434.475C248.163 433.925 248.456 433.283 249.043 432.55C249.63 431.816 250.345 431.101 251.189 430.404C252.033 429.707 252.913 429.12 253.83 428.643C254.747 428.166 255.536 427.927 256.196 427.927C256.893 427.927 257.48 428.203 257.957 428.753C258.434 429.34 258.874 430.055 259.278 430.899C259.718 431.743 260.158 432.66 260.598 433.65C261.039 434.677 261.589 435.613 262.249 436.456C262.909 437.3 263.716 437.997 264.67 438.547C265.624 439.134 266.816 439.428 268.247 439.428C276.244 439.428 280.939 427.212 282.333 402.781C282.333 401.681 282.021 401.13 281.398 401.13C280.884 401.13 280.481 401.387 280.187 401.901C276.739 406.56 272.704 410.063 268.082 412.411C263.496 414.722 258.397 415.877 252.785 415.877C250.18 415.877 247.778 415.492 245.577 414.722C243.376 413.915 241.468 412.814 239.854 411.42C238.277 409.989 237.048 408.302 236.167 406.358C235.287 404.377 234.847 402.213 234.847 399.865C234.847 397.554 235.25 395.28 236.057 393.042C236.901 390.767 238.057 388.64 239.524 386.659C241.028 384.641 242.807 382.789 244.861 381.101C246.916 379.414 249.153 377.965 251.574 376.755C253.995 375.507 256.545 374.554 259.223 373.893C261.937 373.196 264.707 372.848 267.531 372.848ZM254.491 405.753C259.516 405.753 264.12 404.175 268.302 401.02C272.484 397.829 276.06 393.207 279.032 387.154C279.105 386.934 279.16 386.769 279.197 386.659C279.233 386.512 279.252 386.366 279.252 386.219C279.252 385.852 278.867 385.467 278.096 385.063C277.326 384.66 276.317 384.311 275.07 384.018C273.823 383.724 272.392 383.486 270.778 383.302C269.201 383.082 267.605 382.972 265.991 382.972C263.386 382.972 260.873 383.413 258.452 384.293C256.031 385.173 253.885 386.347 252.014 387.814C250.144 389.282 248.64 390.951 247.502 392.822C246.365 394.693 245.797 396.637 245.797 398.654C245.797 400.819 246.585 402.543 248.163 403.827C249.777 405.111 251.886 405.753 254.491 405.753Z"
                fill="#16A34A"
              />
              <path
                d="M310.836 359.642C309.772 359.642 308.763 359.495 307.81 359.202C306.892 358.872 306.085 358.431 305.388 357.881C304.728 357.294 304.196 356.615 303.793 355.845C303.389 355.075 303.187 354.231 303.187 353.314C303.187 351.773 303.793 350.526 305.003 349.572C306.25 348.619 307.901 348.142 309.955 348.142C310.909 348.142 311.826 348.325 312.707 348.692C313.587 349.022 314.357 349.481 315.018 350.068C315.715 350.654 316.265 351.351 316.668 352.158C317.072 352.929 317.274 353.736 317.274 354.58C317.274 356.157 316.687 357.404 315.513 358.321C314.376 359.202 312.817 359.642 310.836 359.642ZM303.297 376.424C303.297 375.14 303.848 374.095 304.948 373.288C306.085 372.444 307.571 372.022 309.405 372.022C312.707 372.022 314.468 373.16 314.688 375.434C314.834 377.011 314.981 378.79 315.128 380.771C315.311 382.752 315.476 384.862 315.623 387.099C315.806 389.3 315.953 391.593 316.063 393.977C316.21 396.325 316.338 398.654 316.448 400.965C316.558 403.24 316.65 405.441 316.724 407.568C316.797 409.696 316.834 411.64 316.834 413.401C316.834 415.235 316.173 416.611 314.853 417.528C313.569 418.445 311.68 418.903 309.185 418.903C308.048 418.903 307.149 418.628 306.489 418.078C305.865 417.565 305.554 416.794 305.554 415.767C305.554 410.705 305.425 405.973 305.168 401.571C304.948 397.132 304.691 393.189 304.398 389.74C304.141 386.292 303.884 383.431 303.628 381.157C303.408 378.845 303.297 377.268 303.297 376.424Z"
                fill="#16A34A"
              />
              <path
                d="M332.13 352.214C332.13 350.269 332.681 348.912 333.781 348.142C334.882 347.335 336.697 346.931 339.229 346.931C340.146 346.931 340.916 347.023 341.54 347.206C342.2 347.353 342.75 347.646 343.19 348.087C343.667 348.527 344.034 349.114 344.291 349.847C344.584 350.544 344.823 351.443 345.006 352.544C345.446 355.955 345.923 359.477 346.437 363.108C346.987 366.74 347.556 370.39 348.143 374.058C348.363 375.709 349.225 376.534 350.729 376.534C351.132 376.534 351.793 376.498 352.71 376.424C353.663 376.314 354.782 376.204 356.066 376.094C357.35 375.948 358.726 375.801 360.193 375.654C361.697 375.507 363.183 375.379 364.65 375.269C366.154 375.122 367.566 375.012 368.887 374.939C370.244 374.829 371.436 374.774 372.464 374.774C373.271 374.774 373.913 374.939 374.389 375.269C374.866 375.562 375.233 375.966 375.49 376.479C375.783 376.956 375.967 377.507 376.04 378.13C376.15 378.717 376.205 379.322 376.205 379.946C376.205 380.496 376.095 381.065 375.875 381.652C375.692 382.239 375.417 382.771 375.05 383.247C374.72 383.688 374.298 384.054 373.784 384.348C373.271 384.641 372.684 384.788 372.023 384.788C368.832 384.788 365.604 384.898 362.339 385.118C359.111 385.302 355.883 385.558 352.655 385.889C351.004 386.109 350.179 386.934 350.179 388.365C350.179 388.475 350.197 388.622 350.234 388.805C350.27 388.952 350.289 389.08 350.289 389.19C350.729 392.382 351.132 395.371 351.499 398.159C351.903 400.947 352.233 403.442 352.49 405.642C352.783 407.807 353.003 409.623 353.15 411.09C353.333 412.521 353.425 413.474 353.425 413.951C353.425 415.272 353.297 416.372 353.04 417.253C352.783 418.17 352.361 418.903 351.774 419.454C351.187 420.041 350.399 420.444 349.408 420.664C348.454 420.921 347.244 421.049 345.777 421.049C344.383 421.049 343.355 420.719 342.695 420.059C342.035 419.399 341.668 418.39 341.595 417.033C341.375 412.704 341.026 408.357 340.549 403.992C340.072 399.59 339.522 395.206 338.898 390.841C338.568 389.263 337.743 388.475 336.422 388.475C336.312 388.475 336.184 388.493 336.037 388.53C335.89 388.567 335.762 388.585 335.652 388.585C333.378 389.098 331.232 389.612 329.214 390.126C327.197 390.639 325.307 391.189 323.547 391.776C322.556 392.106 321.676 392.345 320.905 392.492C320.135 392.602 319.438 392.657 318.814 392.657C317.971 392.657 317.347 392.29 316.944 391.556C316.54 390.786 316.338 389.832 316.338 388.695C316.338 388.291 316.375 387.833 316.448 387.319C316.522 386.769 316.668 386.237 316.889 385.724C317.072 385.173 317.365 384.678 317.769 384.238C318.136 383.761 318.649 383.376 319.31 383.082C320.85 382.459 322.905 381.817 325.472 381.157C328.04 380.46 330.938 379.818 334.166 379.231C334.9 379.047 335.469 378.754 335.872 378.35C336.312 377.91 336.532 377.268 336.532 376.424C336.532 376.241 336.532 376.058 336.532 375.874C336.532 375.654 336.496 375.434 336.422 375.214C335.835 371.839 335.267 368.776 334.717 366.025C334.203 363.237 333.744 360.852 333.341 358.872C332.974 356.891 332.681 355.332 332.461 354.194C332.24 353.057 332.13 352.397 332.13 352.214Z"
                fill="#16A34A"
              />
              <path
                d="M395.959 417.253C393.758 417.253 391.557 416.721 389.356 415.657C387.155 414.556 385.046 413.071 383.028 411.2C381.011 409.329 379.14 407.128 377.416 404.597C375.692 402.029 374.188 399.278 372.904 396.343C371.62 393.372 370.611 390.272 369.877 387.044C369.144 383.816 368.777 380.588 368.777 377.36C368.777 374.865 369.29 373.086 370.318 372.022C371.345 370.922 373.014 370.372 375.325 370.372C378.223 370.372 379.837 371.564 380.167 373.948C380.827 379.011 381.744 383.578 382.918 387.649C384.092 391.721 385.468 395.188 387.045 398.049C388.659 400.91 390.438 403.111 392.382 404.652C394.363 406.193 396.454 406.963 398.655 406.963C400.233 406.963 401.718 406.578 403.112 405.808C404.506 405.001 405.717 403.882 406.744 402.451C407.111 401.901 407.349 401.369 407.459 400.855C407.606 400.342 407.716 399.755 407.789 399.095C407.973 396.49 408.175 393.941 408.395 391.446C408.651 388.915 408.89 386.384 409.11 383.853C409.183 382.752 409.33 381.853 409.55 381.157C409.77 380.46 410.1 379.909 410.541 379.506C410.981 379.102 411.549 378.827 412.246 378.68C412.98 378.534 413.897 378.46 414.998 378.46C416.245 378.46 417.309 378.644 418.189 379.011C419.069 379.341 419.785 379.909 420.335 380.716C420.885 381.487 421.27 382.514 421.491 383.798C421.747 385.045 421.876 386.604 421.876 388.475C421.876 390.089 421.747 391.501 421.491 392.712C421.27 393.886 420.995 395.004 420.665 396.068C420.372 397.095 420.078 398.122 419.785 399.15C419.528 400.14 419.363 401.241 419.29 402.451C419.106 405.496 418.941 408.137 418.794 410.375C418.648 412.576 418.519 414.465 418.409 416.042C418.336 417.62 418.262 418.977 418.189 420.114C418.152 421.251 418.116 422.26 418.079 423.14C418.042 424.057 418.024 424.919 418.024 425.727C418.024 426.534 418.024 427.414 418.024 428.368C418.024 430.092 418.097 431.963 418.244 433.98C418.391 436.034 418.538 437.997 418.684 439.868C418.868 441.739 419.033 443.389 419.179 444.82C419.326 446.251 419.4 447.241 419.4 447.791C419.4 448.488 419.179 449.149 418.739 449.772C418.299 450.396 417.712 450.946 416.979 451.423C416.245 451.9 415.383 452.267 414.392 452.524C413.402 452.817 412.356 452.964 411.256 452.964C410.302 452.964 409.532 452.634 408.945 451.973C408.395 451.35 408.083 450.506 408.009 449.442C407.899 448.048 407.808 446.342 407.734 444.325C407.661 442.344 407.588 440.216 407.514 437.942C407.441 435.704 407.386 433.412 407.349 431.064C407.349 428.753 407.331 426.589 407.294 424.571C407.257 422.59 407.239 420.848 407.239 419.344C407.239 417.84 407.239 416.757 407.239 416.097C407.239 415.437 407.166 414.978 407.019 414.722C406.872 414.428 406.597 414.281 406.194 414.281C405.974 414.281 405.68 414.355 405.313 414.501C404.946 414.612 404.525 414.813 404.048 415.107C402.764 415.877 401.462 416.427 400.141 416.757C398.82 417.088 397.426 417.253 395.959 417.253Z"
                fill="#16A34A"
              />
            </svg>
          </div>
          {gigImg && (
            <div tw={"flex flex-col w-1/2 justify-center"}>
              <div
                tw={
                  "flex h-[420px] w-[420px] rounded-3xl overflow-hidden border" +
                  " border-[5px] border-neutral-600 shadow-lg m-auto"
                }
              >
                <img src={gigImg} tw={"w-full h-full"} alt={title} />
              </div>
              <div tw={"flex text-neutral-500 text-[30px] text-center"}>
                <p>{title}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
//
// import { NextRequest } from "next/server";
// import { ImageResponse } from "@vercel/og";
//
// export const config = {
//   runtime: "edge",
// };
//
// export default function handler(req) {
//   try {
//     const { searchParams } = new URL(req.url);
//
//     // ?title=<title>
//     const hasTitle = searchParams.has("title");
//     const title = hasTitle
//       ? searchParams.get("title")?.slice(0, 100)
//       : "My default title";
//
//     return new ImageResponse(
//       (
//         <div
//           style={{
//             backgroundColor: "black",
//             backgroundSize: "150px 150px",
//             height: "100%",
//             width: "100%",
//             display: "flex",
//             textAlign: "center",
//             alignItems: "center",
//             justifyContent: "center",
//             flexDirection: "column",
//             flexWrap: "nowrap",
//           }}
//         >
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               justifyItems: "center",
//             }}
//           >
//             <img
//               alt="Vercel"
//               height={200}
//               src="data:image/svg+xml,%3Csvg width='116' height='100' fill='white' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M57.5 0L115 100H0L57.5 0z' /%3E%3C/svg%3E"
//               style={{ margin: "0 30px" }}
//               width={232}
//             />
//           </div>
//           <div
//             style={{
//               fontSize: 60,
//               fontStyle: "normal",
//               letterSpacing: "-0.025em",
//               color: "white",
//               marginTop: 30,
//               padding: "0 120px",
//               lineHeight: 1.4,
//               whiteSpace: "pre-wrap",
//             }}
//           >
//             {title}
//           </div>
//         </div>
//       ),
//       {
//         width: 1200,
//         height: 630,
//       }
//     );
//   } catch (e) {
//     console.log(`${e.message}`);
//     return new Response(`Failed to generate the image`, {
//       status: 500,
//     });
//   }
// }
