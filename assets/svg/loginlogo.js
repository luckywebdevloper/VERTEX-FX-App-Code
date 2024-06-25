import * as React from 'react';
import Svg, {Defs, Path, G, Mask, Use, ClipPath, Rect} from 'react-native-svg';

function Loginlogo(props) {
  return (
    <Svg
      width="343"
      height="250"
      viewBox="0 0 343 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M119.97 209.231C118.612 203.023 116.289 197.116 113.273 191.563C120.159 186.882 118.786 176.469 118.786 176.469C115.373 179.003 113.574 181.716 112.665 184.162C111.985 185.995 111.803 187.678 111.829 189.022C110.113 186.127 108.21 183.338 106.155 180.662C107.437 179.287 108.241 177.723 108.717 176.122C108.954 175.324 109.11 174.516 109.204 173.719C109.748 169.045 108.138 164.739 108.162 164.703C103.568 170.091 103.433 174.976 104.085 178.062C102.846 176.563 101.567 175.099 100.244 173.68C99.1563 172.52 98.043 171.388 96.9076 170.281C101.327 162.931 95.3126 153.968 95.2764 154.023C92.0641 160.369 93.1071 165.155 94.476 167.988C91.8429 165.57 89.1016 163.277 86.2711 161.099C90.7313 153.887 84.7282 145.06 84.7282 145.06C81.1848 151.999 82.8546 157.052 84.377 159.667C80.5716 156.84 76.6216 154.203 72.5802 151.715C68.5053 144.857 58.5608 145.208 58.5075 145.172C63.148 152.909 69.3237 153.416 71.9668 153.228C73.5494 154.199 75.1349 155.209 76.7164 156.26C70.4483 154.906 64.1659 159.072 64.1807 159.148C72.6518 163.535 78.3584 160.086 80.1939 158.645C82.8427 160.514 85.4656 162.487 88.0218 164.572C81.5644 162.791 74.8905 167.261 74.8591 167.308C83.1794 171.616 88.8293 168.366 90.7668 166.884C93.1503 168.943 95.4622 171.096 97.673 173.342C91.2401 170.846 84.0306 174.95 84.0789 174.982C92.0563 179.904 97.9119 177.061 99.9459 175.719C102.379 178.352 104.662 181.106 106.753 183.97C100.167 180.772 92.31 185.236 92.31 185.236C100.279 190.152 106.131 187.321 108.171 185.978C109.734 188.259 111.171 190.609 112.46 193.026C115.715 199.128 118.021 205.655 119.028 212.57L120.796 213.746C120.565 212.205 120.277 210.689 119.97 209.231Z"
        fill="#26B778"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M131.768 18.9973H149.356C151.243 18.9973 152.792 20.5472 152.792 22.434V24.8598C152.792 26.7466 154.342 28.2965 156.229 28.2965H183.79C185.677 28.2965 187.226 26.7466 187.226 24.8598V22.434C187.226 20.5472 188.776 18.9973 190.663 18.9973H196.863H205.96C211.485 18.9973 215.933 23.4447 215.933 28.9704V201.208C215.933 206.734 211.485 211.181 205.96 211.181H130.825C125.299 211.181 120.852 206.734 120.852 201.208V28.9704C120.852 23.4447 125.299 18.9973 130.825 18.9973H131.768ZM116 27.2183V78.1725C116.97 77.4488 118.035 76.8814 118.291 76.8814C119.571 76.9488 117.685 78.9703 116.809 80.0485C116.52 80.3821 116.236 80.7433 116 81.0896V82.5802C116.724 82.2904 117.942 80.7999 118.628 80.8571C119.437 80.9245 117.011 83.8221 117.011 83.8221C117.011 83.8221 116.577 84.6712 116 85.4825V162.103V189.868V191.994V204.24C116 204.695 116.026 205.144 116.068 205.589C116.073 205.638 116.075 205.687 116.08 205.735C116.125 206.156 116.19 206.571 116.27 206.981C116.283 207.046 116.295 207.113 116.309 207.179C116.394 207.578 116.495 207.972 116.612 208.359C116.632 208.426 116.653 208.492 116.675 208.558C116.798 208.945 116.935 209.325 117.09 209.698C117.113 209.751 117.137 209.805 117.16 209.858C117.325 210.241 117.503 210.616 117.7 210.98C117.713 211.005 117.728 211.03 117.742 211.054C117.942 211.42 118.158 211.777 118.389 212.123C118.404 212.146 118.418 212.169 118.433 212.191C118.664 212.534 118.913 212.863 119.173 213.183C119.208 213.227 119.243 213.273 119.28 213.317C119.534 213.623 119.802 213.917 120.08 214.2C120.128 214.249 120.176 214.298 120.224 214.346C120.495 214.613 120.776 214.868 121.066 215.113C121.196 215.223 121.334 215.325 121.468 215.43C121.675 215.593 121.885 215.754 122.101 215.905C122.25 216.009 122.404 216.106 122.557 216.204C122.771 216.342 122.989 216.477 123.211 216.603C123.373 216.695 123.537 216.782 123.703 216.868C123.929 216.984 124.158 217.096 124.391 217.201C124.422 217.214 124.452 217.232 124.484 217.245H212.271C212.301 217.232 212.328 217.216 212.357 217.204C212.59 217.098 212.82 216.987 213.046 216.871C213.211 216.785 213.373 216.699 213.534 216.608C213.757 216.48 213.976 216.344 214.193 216.206C214.344 216.109 214.495 216.013 214.642 215.912C214.862 215.758 215.073 215.594 215.284 215.429C215.415 215.327 215.55 215.228 215.677 215.121C215.969 214.875 216.252 214.617 216.524 214.348C216.572 214.3 216.621 214.251 216.669 214.203C216.947 213.92 217.214 213.626 217.467 213.321C217.505 213.275 217.542 213.227 217.58 213.181C217.838 212.863 218.084 212.536 218.313 212.196C218.332 212.169 218.348 212.141 218.366 212.115C218.596 211.768 218.813 211.412 219.012 211.046C219.024 211.026 219.036 211.005 219.047 210.984C219.245 210.619 219.423 210.241 219.587 209.856C219.609 209.805 219.633 209.753 219.655 209.701C219.809 209.328 219.946 208.947 220.069 208.56C220.089 208.493 220.11 208.427 220.13 208.361C220.245 207.973 220.346 207.58 220.428 207.181C220.441 207.114 220.454 207.046 220.466 206.98C220.544 206.571 220.606 206.157 220.648 205.737C220.653 205.687 220.656 205.637 220.66 205.588C220.699 205.144 220.721 204.695 220.717 204.24V192.066V189.943V181.644V68.9461V27.2183C220.717 22.7082 218.601 18.6779 215.302 16.0681C212.883 14.1543 209.834 13 206.499 13H177.813H168.455H158.027H149.426H130.218C122.402 13 116 19.3342 116 27.2183Z"
        fill="black"
      />
      <Rect x="116" y="73" width="4" height="13" fill="black" />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M134.127 104.779H200.03C203.062 104.779 205.488 107.205 205.488 110.238C205.488 113.202 203.062 115.695 200.03 115.695H134.127C131.095 115.695 128.669 113.27 128.669 110.238C128.669 107.205 131.095 104.779 134.127 104.779ZM167.078 72.5018C174.671 72.5018 180.825 78.6561 180.825 86.2477C180.825 90.8434 178.562 94.9021 175.097 97.398C172.839 99.0254 170.074 99.9944 167.078 99.9944C164.052 99.9944 161.264 99.0052 158.993 97.3482C155.567 94.8482 153.332 90.8138 153.332 86.2477C153.332 78.6561 159.486 72.5018 167.078 72.5018ZM200.097 135.237H134.194C131.162 135.237 128.736 132.812 128.736 129.779C128.736 126.747 131.162 124.321 134.194 124.321H200.097C203.13 124.321 205.556 126.747 205.556 129.779C205.556 132.812 203.062 135.237 200.097 135.237ZM120.852 28.9701V201.208C120.852 206.734 125.299 211.18 130.825 211.18H205.96C211.485 211.18 215.933 206.734 215.933 201.208V28.9701C215.933 23.4445 211.485 18.9971 205.96 18.9971H196.863H190.663C188.777 18.9971 187.227 20.5469 187.227 22.4337V24.8596C187.227 26.7464 185.677 28.2963 183.79 28.2963H156.229C154.343 28.2963 152.793 26.7464 152.793 24.8596V22.4337C152.793 20.5469 151.243 18.9971 149.356 18.9971H131.768H130.825C125.299 18.9971 120.852 23.4445 120.852 28.9701Z"
        fill="#F7F7F7"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M167.078 77.7575C170.043 77.7575 172.402 80.116 172.402 83.081C172.402 86.0459 170.043 88.4044 167.078 88.4044C164.113 88.4044 161.755 86.0459 161.755 83.081C161.755 80.116 164.113 77.7575 167.078 77.7575ZM158.993 97.3478C159.003 93.0453 162.502 89.6174 166.741 89.6174H167.348C171.66 89.6174 175.097 93.1214 175.097 97.3667V97.3977C178.561 94.9017 180.825 90.8438 180.825 86.2481C180.825 78.6558 174.67 72.5015 167.078 72.5015C159.486 72.5015 153.332 78.6558 153.332 86.2481C153.332 90.8141 155.567 94.8478 158.993 97.3478Z"
        fill="#050505"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M214.301 212.658C218.716 208.088 222.347 202.881 225.299 197.294C233.011 200.433 240.918 193.521 240.918 193.521C236.918 192.084 233.662 192.089 231.123 192.687C229.22 193.137 227.718 193.918 226.614 194.684C228.073 191.652 229.34 188.522 230.43 185.329C232.284 185.634 234.032 185.437 235.628 184.946C236.425 184.701 237.183 184.384 237.899 184.02C242.091 181.883 244.784 178.157 244.827 178.157C237.796 177.318 233.655 179.912 231.447 182.165C232.009 180.303 232.519 178.427 232.967 176.539C233.33 174.991 233.656 173.437 233.948 171.879C242.515 171.485 246.644 161.513 246.579 161.513C239.515 162.355 236.11 165.875 234.509 168.584C235.063 165.053 235.454 161.5 235.699 157.937C244.174 157.654 248.196 147.765 248.196 147.765C240.456 148.66 237.175 152.85 235.841 155.567C236.086 150.832 236.093 146.083 235.925 141.34C239.376 134.148 233.574 126.064 233.574 126C229.705 134.15 232.705 139.571 234.325 141.668C234.394 143.524 234.431 145.403 234.433 147.302C232.087 141.334 225.138 138.412 225.083 138.466C226.125 147.949 232.158 150.788 234.374 151.518C234.286 154.759 234.097 158.035 233.777 161.319C231.682 154.956 224.263 151.877 224.207 151.877C225.23 161.19 231.066 164.093 233.373 164.885C232.98 168.009 232.468 171.127 231.823 174.212C230.338 167.474 222.927 163.746 222.927 163.804C223.249 173.172 228.86 176.472 231.104 177.421C230.261 180.906 229.233 184.332 228.007 187.66C227.021 180.405 218.951 176.338 218.951 176.338C219.274 185.695 224.873 188.999 227.121 189.952C226.088 192.518 224.929 195.015 223.631 197.428C220.354 203.519 216.198 209.055 211 213.724V215.848C212.155 214.801 213.257 213.722 214.301 212.658Z"
        fill="#26B778"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M167.348 89.6172H166.742C162.503 89.6172 159.003 93.0451 158.993 97.3483C161.264 99.0053 164.052 99.9945 167.079 99.9945C170.075 99.9945 172.839 99.0255 175.098 97.3982V97.3665C175.098 93.1212 171.66 89.6172 167.348 89.6172Z"
        fill="#26B778"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M167.078 88.4042C170.043 88.4042 172.402 86.0457 172.402 83.0808C172.402 80.1158 170.043 77.7573 167.078 77.7573C164.113 77.7573 161.755 80.1158 161.755 83.0808C161.755 86.0457 164.113 88.4042 167.078 88.4042Z"
        fill="#26B778"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M136.418 108.822H197.739C198.547 108.822 199.154 109.428 199.154 110.238C199.154 110.978 198.547 111.652 197.739 111.652H136.418C135.609 111.652 135.003 111.046 135.003 110.238C135.003 109.428 135.609 108.822 136.418 108.822ZM134.127 115.695H200.03C203.062 115.695 205.488 113.202 205.488 110.238C205.488 107.205 203.062 104.779 200.03 104.779H134.127C131.094 104.779 128.668 107.205 128.668 110.238C128.668 113.27 131.094 115.695 134.127 115.695Z"
        fill="#050505"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M136.418 111.652H197.739C198.547 111.652 199.155 110.978 199.155 110.237C199.155 109.428 198.547 108.822 197.739 108.822H136.418C135.609 108.822 135.003 109.428 135.003 110.237C135.003 111.046 135.609 111.652 136.418 111.652Z"
        fill="#26B778"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M161.284 131.329C160.475 131.329 159.868 130.722 159.868 129.914C159.868 129.105 160.475 128.499 161.284 128.499C162.092 128.499 162.699 129.105 162.699 129.914C162.699 130.722 162.025 131.329 161.284 131.329ZM157.038 131.329C156.23 131.329 155.623 130.722 155.623 129.914C155.623 129.105 156.23 128.499 157.038 128.499C157.847 128.499 158.453 129.105 158.453 129.914C158.453 130.722 157.779 131.329 157.038 131.329ZM152.793 131.329C151.984 131.329 151.378 130.722 151.378 129.914C151.378 129.105 151.984 128.499 152.793 128.499C153.602 128.499 154.208 129.105 154.208 129.914C154.208 130.722 153.602 131.329 152.793 131.329ZM148.548 131.329C147.739 131.329 147.133 130.722 147.133 129.914C147.133 129.105 147.739 128.499 148.548 128.499C149.356 128.499 149.963 129.105 149.963 129.914C149.963 130.722 149.356 131.329 148.548 131.329ZM144.302 131.329C143.494 131.329 142.887 130.722 142.887 129.914C142.887 129.105 143.494 128.499 144.302 128.499C145.111 128.499 145.717 129.105 145.717 129.914C145.717 130.722 145.111 131.329 144.302 131.329ZM140.124 131.329C139.316 131.329 138.709 130.722 138.709 129.914C138.709 129.105 139.316 128.499 140.124 128.499C140.933 128.499 141.54 129.105 141.54 129.914C141.54 130.722 140.866 131.329 140.124 131.329ZM135.879 131.329C135.071 131.329 134.464 130.722 134.464 129.914C134.464 129.105 135.071 128.499 135.879 128.499C136.688 128.499 137.294 129.105 137.294 129.914C137.294 130.722 136.62 131.329 135.879 131.329ZM200.098 124.321H134.195C131.162 124.321 128.736 126.747 128.736 129.779C128.736 132.811 131.162 135.237 134.195 135.237H200.098C203.062 135.237 205.556 132.811 205.556 129.779C205.556 126.747 203.13 124.321 200.098 124.321Z"
        fill="#050505"
      />
      <Path
        opacity="0.04"
        d="M86.7917 186.387C80.4244 186.512 74.0539 186.609 67.6897 186.634C56.3458 186.678 41.472 184.578 33.0062 192.572C28.7436 196.597 30.1468 204.628 36.9101 206.05C38.8247 206.453 40.8858 206.409 42.6788 207.094C44.4748 207.778 45.8967 209.647 44.902 211.072C44.3938 211.8 43.4116 212.191 42.473 212.497C36.5266 214.434 29.9379 214.678 24.0227 216.681C9.96903 221.437 12.395 230.997 25.1702 234.081C36.6607 236.856 49.439 236.472 61.285 236.659C130.615 237.759 200.131 239.066 269.074 235.359C283.942 234.559 298.725 233.55 313.53 232.609C320.306 232.178 328.785 231.056 328.813 228.544C328.831 226.794 324.36 225.487 319.951 224.803C312.23 223.606 302.149 222.566 303.608 218.65C304.142 217.222 306.655 215.912 310.144 215.244C312.841 214.728 315.941 214.591 318.866 214.278C321.787 213.966 324.787 213.394 326.016 212.378C329.324 209.634 320.989 208.003 315.124 207.753C308.095 207.453 302.367 205.525 304.79 202.616C306.477 200.591 311.968 199.219 313.64 197.191C314.31 196.375 314.31 195.497 313.864 194.662C309.405 186.309 286.103 187.025 277.419 186.4C261.354 185.244 245.217 185.022 229.103 184.919C192.545 184.684 155.987 185.075 119.439 185.684C108.557 185.866 97.6742 186.172 86.7917 186.387Z"
        fill="#272525"
      />
      <Path
        d="M61.8398 215.319L64.5433 217.931L69.339 221.369L69.2392 219.175L67.0503 216.15L62.2546 212.709L61.8398 215.319Z"
        fill="#3B455A"
      />
      <Path
        d="M66.1525 135.219L64.8958 143.147L69.9941 179.181L61.6997 214.434L66.7044 216.294L85.5445 174.884L87.1753 161.991L86.455 135.05L66.1525 135.219Z"
        fill="#00461C"
      />
      <Path
        d="M99.9816 134.903L103.153 168.491L100.418 212.366L95.5569 212.769L89.1771 173.028L79.2114 133.581L99.9816 134.903Z"
        fill="#00461C"
      />
      <Path
        d="M98.647 214.822L101.004 217.019L103.415 214.166L100.568 211.75L95.3105 212.188L98.647 214.822Z"
        fill="#3B455A"
      />
      <Path
        d="M77.7928 94.2375C76.3709 94.775 74.949 95.3125 73.5271 95.8531C72.9752 94.7718 72.5106 93.6437 72.1395 92.4875C70.8143 92.65 69.2115 92.7 68.4289 91.6156C68.1825 91.2718 68.0578 90.8593 67.9393 90.4562C67.4435 88.7843 66.9477 87.1125 66.4519 85.4406C66.2804 84.8625 66.1089 84.2656 66.1713 83.6656C66.2835 82.6125 67.0943 81.775 67.9455 81.15C70.122 79.5562 72.9689 78.7844 75.5851 79.4312C76.2804 79.6031 76.9727 79.8812 77.4903 80.3812C78.2854 81.15 78.5474 82.3062 78.7688 83.3906C78.9746 84.3937 79.1804 85.3937 79.3862 86.3969C79.6231 87.55 79.8102 88.9 79.0182 89.7687C78.5973 90.2312 77.9549 90.475 77.6306 91.0093C77.0631 91.9531 77.7896 93.1343 77.7928 94.2375Z"
        fill="#EAC5B0"
      />
      <Path
        d="M83.9385 72.0594C83.9821 71.5594 84.0507 71.0625 84.1599 70.575C84.3968 69.5188 84.8303 68.5 84.9082 67.4188C84.9862 66.3375 84.5995 65.1188 83.6266 64.6407C82.9999 64.3313 82.2609 64.3907 81.5749 64.5094C79.3111 64.9063 77.1595 65.925 75.4134 67.425C73.7514 68.8532 72.448 70.5 70.1779 70.7344C68.0482 70.9532 66.882 71.8719 65.3354 73.4782C63.6609 75.2157 61.0136 76.7407 59.6821 78.6813C59.124 79.4907 58.8433 80.4657 58.7311 81.4438C58.3413 84.8313 60.0781 88.3719 62.9936 90.1282C63.6485 90.5219 64.35 90.8313 65.061 91.1063C66.5359 91.6719 68.3195 92.3907 69.8318 92.1219C69.2799 90.9219 66.3582 87.725 66.7853 86.3032C67.4651 84.05 70.9824 82.9719 72.9562 82.4657C75.1078 81.9125 77.5275 82.4344 79.6042 81.7719C81.0978 81.2938 82.5353 79.7313 83.3616 78.425C84.3812 76.8157 83.7794 73.8875 83.9385 72.0594Z"
        fill="#3B455A"
      />
      <Path
        d="M60.0346 152.525C60.3246 155.591 60.9045 159.7 62.0926 159.712C62.314 159.716 62.5135 159.581 62.6944 159.453C64.5902 158.106 65.8437 156.378 67.7146 155.072C69.676 153.703 72.0021 152.825 74.3034 152.131C77.7396 151.075 81.285 150.256 84.8553 149.772C88.7312 149.247 96.3863 149.125 96.3863 149.125C98.5285 148.5 100.524 147.5 102.535 146.556C105.99 144.931 109.536 143.444 112.713 141.366C113.733 140.7 116.53 138.753 115.295 137.434C114.36 136.437 111.531 136.025 110.215 135.5C105.931 133.784 102.096 131.25 99.3424 127.475C95.5694 122.303 92.8534 115.55 90.7798 109.506C90.3963 108.387 90.0408 107.259 89.7009 106.125C89.5076 105.481 89.2176 102.997 88.6906 102.641C83.343 99.0281 81.4877 95.5312 75.7128 97.1343C62.5353 100.794 63.5581 101.278 61.3348 108.219C60.4399 111.009 59.6417 118.319 59.5138 121.222C59.361 124.737 59.2425 134.141 59.2457 137.659C59.2519 141.584 59.3985 145.509 59.7882 149.416C59.8225 149.85 59.8974 151.069 60.0346 152.525Z"
        fill="#C10A21"
      />
      <Path
        d="M83.7112 89.325L91.0264 98.4437L68.1171 108.094L65.186 103.562L83.7112 89.325Z"
        fill="#27B677"
      />
      <Path
        d="M69.8163 94.2063L75.5444 94.7938L85.3324 99.5563L94.5747 137.372L78.8559 138.525L75.376 105.475L66.2553 102.347L63.5176 100.247L69.8163 94.2063Z"
        fill="#27B677"
      />
      <Path
        d="M285.916 213.259L286.162 215.722L281.697 218.788L279.096 216.628L281.204 213.863L285.669 210.8L285.916 213.259Z"
        fill="#3B455A"
      />
      <Path
        d="M285.878 138L286.627 145.478L279.91 171.156L286.084 212.434L281.51 214.009L269.486 173.703L267.584 161.978L267.681 137.163L285.878 138Z"
        fill="#27B677"
      />
      <Path
        d="M250.692 146.297L260.247 215.469L264.618 215.472L265.448 171.141L273.44 140.034L250.692 146.297Z"
        fill="#27B677"
      />
      <Path
        d="M264.593 216.188L264.59 217.409L262.978 219.891L257.5 217.403L259.866 214.922L264.593 214.925V216.188Z"
        fill="#3B455A"
      />
      <Path
        d="M261.631 95.7281C264.933 92.9938 272.882 94.575 277.066 94.5813C277.93 103.781 279.601 112.972 281.653 121.972C283.424 129.75 286.81 137.331 288.313 145.1C289.654 152.025 292.582 157.006 298.095 161.756C298.953 162.497 299.944 163.456 299.685 164.562C299.529 165.228 298.953 165.703 298.388 166.087C292.822 169.906 285.669 170.297 278.925 170.406C273.801 170.487 268.678 170.481 263.558 170.381C256.885 170.253 249.464 169.459 243.776 165.587C243.418 165.344 243.034 165.028 243.006 164.594C242.984 164.222 243.234 163.897 243.452 163.594C247.431 158.094 246.982 148.994 247.761 142.55C248.644 135.281 249.526 127.988 251.266 120.875C252.395 116.259 253.882 111.734 255.707 107.35C257.094 104.013 258.753 98.5438 261.36 95.975C261.447 95.8875 261.538 95.8063 261.631 95.7281Z"
        fill="#C10A21"
      />
      <Path
        d="M257.902 65.7719C256.009 62.5812 253.221 60.1125 249.841 58.6375C247.556 57.6375 245.17 57.3937 242.866 57.1562L236.162 56.4656C233.047 56.1437 230.244 56.4531 227.599 57.4094C224.225 58.6312 221.148 61.1406 219.149 64.2937C217.702 66.5812 216.82 69.1625 216.533 71.9687L212.888 107.484L218.217 108.034L221.881 72.3406C222.024 70.9469 222.273 70.0094 222.875 68.6281C223.343 67.5562 224.369 66.0531 225.211 65.2094C226.336 64.0812 227.35 63.3781 228.831 62.7C230.178 62.0812 231.488 61.7687 233.203 61.6594C233.274 61.6562 233.505 61.6469 234.082 61.6687C234.322 61.6781 234.581 61.6969 234.896 61.7281L244.282 62.6969C245.7 62.8437 246.645 63.0969 248.023 63.6969C249.093 64.1656 250.593 65.1937 251.435 66.0406C252.56 67.1687 253.262 68.1844 253.939 69.6687C254.556 71.0187 254.868 72.3312 254.977 74.05C254.98 74.1219 254.989 74.3531 254.968 74.9312C254.958 75.1719 254.94 75.4281 254.908 75.7375L251.244 111.441L256.573 111.991L260.237 76.2969C260.621 72.6281 259.81 68.9875 257.902 65.7719Z"
        fill="#12925B"
      />
      <Path
        d="M208.17 93.5093L204.194 132.234C203.658 137.472 207.459 142.156 212.685 142.694L248.257 146.359C253.483 146.897 258.157 143.087 258.694 137.85L262.669 99.1249L208.17 93.5093ZM234.69 121.322L233.733 130.647C233.661 131.341 232.797 131.819 231.806 131.716L231.768 131.712C230.773 131.609 230.028 130.966 230.097 130.272L231.054 120.947C228.061 119.825 226.077 116.787 226.42 113.45C226.826 109.484 230.365 106.603 234.319 107.009C238.276 107.416 241.151 110.962 240.745 114.925C240.405 118.262 237.849 120.831 234.69 121.322Z"
        fill="black"
      />
      <Path
        opacity="0.1"
        d="M211.104 142.309C211.612 142.45 212.142 142.553 212.685 142.609L248.257 146.275C253.483 146.812 258.157 143.003 258.694 137.766L260.499 120.172C254.528 147.547 211.304 142.303 211.104 142.309Z"
        fill="#12925B"
      />
      <Path
        d="M105.94 94.1624L107.422 90.2062L109.48 88.6624L110.166 89.178L109.48 90.7249L112.395 88.3218L113.764 89.6968L112.046 94.1624L108.46 96.4905L105.94 94.1624Z"
        fill="#EAC5B0"
      />
      <Path
        d="M64.2844 101.75L92.8064 108.378L104.952 93.1875L109.916 97.7219L97.3932 117.778L63.8167 116.466L61.3408 108.541L64.2844 101.75Z"
        fill="#C10A21"
      />
      <Path
        d="M278.657 97.7219L258.086 111.903L245.445 103.966L242.729 108.041L257.625 121.184L278.192 111.016L278.657 97.7219Z"
        fill="#F7F7F7"
      />
      <Path
        d="M271.403 84.2062C268.715 84.5968 266.57 85.7062 265.95 88.3593C264.693 86.8562 264.219 84.7281 264.721 82.8312C265.223 80.9343 266.682 79.3218 268.516 78.6375C270.022 79.6968 271.085 81.3687 271.403 83.1843V84.2062Z"
        fill="#3B455A"
      />
      <Path
        d="M268.491 96.5406C266.514 95.6062 265.257 93.5062 264.899 91.3469C264.54 89.1844 264.967 86.9656 265.638 84.8781C267.861 77.9343 276.573 80.2687 278.403 86.3406C279.994 91.6312 274.241 99.2563 268.491 96.5406Z"
        fill="#EAC5B0"
      />
      <Path
        d="M270.864 145.066C269.607 144.106 269.754 142.222 269.43 140.672C269.105 139.122 267.159 137.578 266.13 138.781C263.945 137.878 262.8 135.341 262.81 132.975C262.819 130.606 263.751 128.353 264.668 126.172C266.701 121.334 268.6 116.419 270.773 111.644C272.825 107.131 273.642 102.163 274.475 97.3563C274.889 94.9469 274.322 92.4532 273.315 90.2282C272.308 88.0032 270.873 86.0001 269.467 84.0032C268.881 83.1719 268.279 82.2876 268.195 81.2751C268.101 80.1532 268.681 79.0563 269.504 78.2938C270.773 77.1188 272.167 76.6313 273.842 76.8001C279.723 77.3907 283.698 81.4126 284.649 87.3563C285.454 92.3813 284.154 97.4688 283.212 102.472C281.799 109.994 282.267 118.95 285.928 125.75C287.421 128.522 289.077 131.322 289.436 134.45C289.794 137.578 288.429 141.169 285.479 142.259C284.328 142.684 283.019 142.706 281.98 143.363C280.889 144.053 280.642 145.438 281.428 146.419C279.872 148.494 278.65 146.688 277.085 146.059C275.176 145.284 272.473 146.294 270.864 145.066Z"
        fill="#3B455A"
      />
      <Path
        d="M244.834 104.881L243.864 102.381L239.349 101.472L238.669 103.281L241.828 106L243.705 106.578L244.834 104.881Z"
        fill="#EAC5B0"
      />
    </Svg>
  );
}

export default Loginlogo;