import React, { useEffect } from "react";
import "./App.scss";
import Rellax from "rellax";

function App() {

  useEffect(() => {
    new Rellax(".rellax", {
      speed: -4,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });

    new Rellax(".world", {
      speed: 1,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });

    new Rellax(".worldShadow", {
      speed: 0,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });

    new Rellax(".person", {
      speed: 1,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });

    new Rellax(".quote1", {
      speed: 3,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });

    new Rellax(".quote2", {
      speed: 2,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
    new Rellax(".quote3", {
      speed: 1,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
    new Rellax(".quote4", {
      speed: 0,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
    new Rellax(".name", {
      speed: -2,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });

  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1 className="rellax">The world is yours.</h1>
        <p className="rellax">Think bigger, Think better.</p>
        <svg
          width="406"
          height="306"
          viewBox="0 0 406 306"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="cloud3"
            d="M316.192 227.081C316.195 228.31 315.945 229.526 315.458 230.655C314.972 231.783 314.259 232.8 313.363 233.641C311.83 235.098 309.851 235.996 307.746 236.191C307.352 236.225 306.957 236.225 306.564 236.191L240.602 234.863C238.073 234.836 235.654 233.823 233.861 232.039C232.068 230.256 231.041 227.843 231 225.315C230.995 224.086 231.241 222.869 231.723 221.739C232.205 220.609 232.912 219.589 233.802 218.741C235.634 217 238.075 216.047 240.602 216.085H242.846C242.382 214.457 242.145 212.772 242.142 211.079C242.138 208.658 242.629 206.263 243.583 204.039C244.538 201.814 245.936 199.808 247.693 198.144C249.243 196.661 251.041 195.461 253.005 194.598C255.55 193.489 258.304 192.945 261.079 193.004L266.684 193.124C270.17 193.195 273.573 194.201 276.538 196.037C279.502 197.874 281.919 200.472 283.536 203.562C285.152 202.793 286.926 202.416 288.715 202.46H290.163C293.165 202.49 296.037 203.691 298.167 205.807C300.298 207.922 301.519 210.786 301.571 213.788V214.332C301.57 215.367 301.417 216.396 301.119 217.387L306.577 217.493C309.112 217.527 311.534 218.547 313.329 220.337C315.124 222.127 316.151 224.546 316.192 227.081Z"
            fill="white"
          />
          <path
            className="cloud3"
            d="M307.746 236.191C307.352 236.225 306.957 236.225 306.564 236.191L240.602 234.863C238.073 234.836 235.654 233.823 233.861 232.039C232.068 230.256 231.041 227.843 231 225.315C230.995 224.086 231.241 222.869 231.723 221.739C232.205 220.609 232.912 219.589 233.802 218.741C231.146 235.036 248.211 232.699 248.211 232.699H291.066L307.746 236.191Z"
            fill="white"
          />
          <path
            className="cloud3"
            d="M307.72 236.437C307.326 236.47 306.931 236.47 306.538 236.437L240.589 235.109C238.076 235.079 235.672 234.075 233.884 232.309C232.096 230.543 231.062 228.153 231.001 225.64C230.987 224.4 231.228 223.171 231.71 222.028C232.193 220.886 232.905 219.855 233.803 219C231.147 235.295 248.212 232.957 248.212 232.957H291.066L307.72 236.437Z"
            fill="url(#paint0_linear)"
          />
          <path
            className="worldShadow"
            opacity="0.23"
            d="M161.068 290.794C207.671 290.794 245.45 256.672 245.45 214.58C245.45 172.488 207.671 138.365 161.068 138.365C114.465 138.365 76.6863 172.488 76.6863 214.58C76.6863 256.672 114.465 290.794 161.068 290.794Z"
            fill="#68E1FD"
          />
          <path
            className="world"
            d="M265.835 201.95C265.857 219.644 260.098 236.861 249.434 250.981V250.981L249.261 251.22C237.576 266.621 220.796 277.366 201.919 281.537C183.042 285.708 163.297 283.033 146.21 273.99C129.123 264.947 115.808 250.124 108.641 232.169C101.475 214.214 100.925 194.296 107.088 175.972C113.252 157.649 125.729 142.113 142.29 132.14C158.851 122.166 178.418 118.405 197.497 121.527C216.576 124.649 233.923 134.451 246.441 149.184C258.96 163.916 265.833 182.618 265.835 201.95V201.95Z"
            fill="#68E1FD"
          />
          <path
            className="world"
            d="M158.107 161.858C153.631 163.704 148.691 164.142 144.096 165.656C139.501 167.17 134.893 170.224 133.711 174.952C133.1 177.329 133.419 179.972 132.25 182.123C130.696 185.018 127.058 186.107 124.853 188.498C120.657 193.119 123.419 201.047 128.545 204.62C133.671 208.192 140.218 208.737 146.354 209.786C148.033 209.92 149.633 210.553 150.949 211.605C154.521 215.018 150.564 221.193 152.077 225.894C152.927 228.55 155.437 230.37 156.579 232.92C158.771 237.78 155.451 243.145 153.259 248.006C149.307 256.873 148.95 266.928 152.263 276.053C152.111 276.273 151.942 276.482 151.759 276.678C143.019 272.842 135.015 267.512 128.107 260.927C121.374 251.485 116.049 241.193 116.606 229.878C116.912 223.743 118.957 217.82 119.342 211.711C119.979 201.791 116.394 191.021 121.254 182.362C123.91 177.568 129.09 172.309 126.195 167.661C121.082 168.405 115.57 168.524 110.883 166.745C116.635 154.761 125.23 144.366 135.919 136.464C146.608 128.562 159.067 123.392 172.21 121.407C177.257 135.829 173.246 155.483 158.107 161.858Z"
            fill="url(#paint1_linear)"
          />
          <path
            className="world"
            d="M265.835 201.95C265.84 207.106 265.356 212.251 264.387 217.316C262.222 219.076 260.193 220.999 258.318 223.066C251.877 230.609 250.483 241.074 249.434 250.954C249.434 251.167 249.434 251.379 249.367 251.578C249.367 251.445 249.367 251.326 249.261 251.193C248.749 248.656 247.643 246.276 246.034 244.248C244.201 242.269 240.948 241.286 238.717 242.84C237.654 240.184 236.588 237.55 235.516 234.938C228.876 234.938 222.024 234.938 215.782 232.588C209.54 230.237 204.374 225.735 199.381 221.339C200.037 213.723 199.894 206.058 198.956 198.471C218.353 196.366 236.294 187.19 249.354 172.694C237.674 172.112 226.094 175.1 216.154 181.26C214.029 182.588 211.878 184.075 209.394 184.288C207.821 184.327 206.251 184.112 204.746 183.651L188.691 179.574C186.685 169.242 193.843 158.87 203.046 153.757C209.952 149.932 218.332 150.676 224.959 147.329C229.5 145.045 230.828 141.048 234.799 138.113H234.879C244.525 145.725 252.321 155.423 257.682 166.48C263.044 177.536 265.831 189.663 265.835 201.95Z"
            fill="url(#paint2_linear)"
          />
          <path
            className="cloud1"
            d="M305.011 97.5954C305.012 98.8241 304.762 100.04 304.275 101.168C303.789 102.296 303.077 103.313 302.182 104.156C300.642 105.61 298.66 106.507 296.552 106.706C296.158 106.739 295.763 106.739 295.37 106.706L229.421 105.378C226.91 105.344 224.51 104.339 222.725 102.573C220.939 100.808 219.907 98.419 219.846 95.9089C219.832 94.669 220.074 93.4396 220.556 92.2972C221.038 91.1548 221.75 90.1239 222.648 89.2688C224.485 87.5282 226.93 86.5749 229.461 86.6128H231.692C231.227 84.9843 230.991 83.2995 230.988 81.6062C230.984 79.1859 231.474 76.7903 232.429 74.5662C233.384 72.342 234.782 70.3361 236.539 68.6714C238.088 67.1868 239.886 65.9865 241.851 65.1256C244.395 64.0143 247.15 63.4704 249.925 63.532L255.529 63.6515C258.994 63.7155 262.379 64.7031 265.335 66.5124C268.29 68.3216 270.709 70.887 272.342 73.9436C273.959 73.1764 275.732 72.7989 277.521 72.8413H278.969C281.971 72.872 284.843 74.0729 286.973 76.1884C289.104 78.304 290.325 81.1673 290.376 84.1693V84.7137C290.375 85.7484 290.223 86.7774 289.925 87.7682L295.383 87.8744C297.943 87.9058 300.388 88.943 302.189 90.7619C303.991 92.5808 305.004 95.0354 305.011 97.5954V97.5954Z"
            fill="white"
          />
          <path
            className="cloud1"
            d="M296.565 106.706C296.172 106.739 295.776 106.739 295.383 106.706L229.434 105.378C226.921 105.347 224.518 104.344 222.729 102.578C220.941 100.812 219.907 98.4213 219.846 95.9088C219.832 94.669 220.074 93.4396 220.556 92.2972C221.038 91.1548 221.75 90.1239 222.648 89.2688C219.992 105.563 237.057 103.226 237.057 103.226H279.912L296.565 106.706Z"
            fill="url(#paint3_linear)"
          />
          <path
            className="cloud1"
            d="M236.459 88.565L231.665 86.7456C231.201 85.1171 230.964 83.4323 230.961 81.739C230.957 79.3187 231.448 76.9231 232.402 74.699C233.357 72.4748 234.755 70.469 236.512 68.8042C238.061 67.3196 239.859 66.1194 241.824 65.2584C228.597 76.6262 236.459 88.565 236.459 88.565Z"
            fill="url(#paint4_linear)"
          />
          <path
          className="person"
            d="M209.554 185.443C209.076 187.01 208.624 188.843 209.554 190.158C210.011 190.72 210.612 191.147 211.293 191.393C212.087 191.771 212.969 191.923 213.843 191.832C214.717 191.741 215.549 191.409 216.247 190.875C216.976 190.077 217.492 189.109 217.748 188.059C218.989 184.249 219.878 180.333 220.404 176.36C220.504 175.995 220.504 175.609 220.404 175.244C220.196 174.861 219.863 174.561 219.461 174.394C217.349 173.265 214.042 172.362 212.821 174.859C211.32 178.073 210.616 182.044 209.554 185.443Z"
            fill="#FBC4D6"
          />
          <path
          className="person"
            d="M215.941 187.263C216.387 187.201 216.842 187.242 217.269 187.382C217.561 187.544 217.814 187.765 218.013 188.033L222.595 193.172C223.485 194.168 224.414 195.536 223.79 196.718C223.57 197.047 223.279 197.323 222.939 197.525C222.599 197.727 222.218 197.851 221.825 197.887C219.605 198.09 217.375 197.652 215.397 196.625C213.989 196.014 212.595 195.297 211.227 194.633C210.211 194.172 209.322 193.47 208.637 192.588C207.588 190.994 207.309 187.17 209.142 185.948C210.085 185.35 210.908 185.775 211.798 186.187C213.07 186.88 214.493 187.249 215.941 187.263V187.263Z"
            fill="#68E1FD"
          />
          <path
          className="person"
            d="M234.945 202.946C234.981 203.242 234.949 203.542 234.852 203.823C234.694 204.096 234.465 204.321 234.188 204.474C233.317 205.073 232.296 205.418 231.24 205.47C230.713 205.489 230.188 205.387 229.706 205.171C229.225 204.954 228.8 204.629 228.465 204.221C227.976 203.448 227.68 202.569 227.601 201.658C227.212 199.699 227.021 197.706 227.03 195.709C227.007 195.591 227.01 195.47 227.038 195.354C227.066 195.238 227.12 195.129 227.194 195.036C227.269 194.942 227.363 194.866 227.47 194.813C227.577 194.759 227.694 194.73 227.814 194.726C229.461 194.381 232.741 193.518 233.577 195.536C234.43 197.916 234.892 200.419 234.945 202.946V202.946Z"
            fill="#FBC4D6"
          />
          <path
          className="person"
            d="M241.917 202.747C243.332 202.824 244.731 203.092 246.074 203.544C246.742 203.775 247.355 204.141 247.876 204.618C248.396 205.095 248.814 205.675 249.102 206.32C249.37 206.951 249.403 207.658 249.195 208.312C248.736 209.282 247.931 210.044 246.937 210.45C242.217 212.958 236.892 214.103 231.559 213.756C230.19 213.811 228.853 213.336 227.827 212.428C227.086 211.332 226.74 210.016 226.844 208.697L226.658 202.455C227.86 202.509 229.033 202.84 230.085 203.425C232.05 204.089 232.82 202.495 234.441 202.097C236.552 201.605 239.766 202.535 241.917 202.747Z"
            fill="#68E1FD"
          />
          <path
          className="person"
            d="M215.941 187.263C216.387 187.201 216.842 187.242 217.269 187.382C217.561 187.544 217.814 187.765 218.013 188.033L222.595 193.172C223.485 194.168 224.414 195.536 223.79 196.718C223.57 197.047 223.279 197.323 222.939 197.525C222.599 197.727 222.218 197.851 221.825 197.887C219.605 198.09 217.375 197.652 215.397 196.625C213.989 196.014 212.595 195.297 211.227 194.633C210.211 194.172 209.322 193.47 208.637 192.588C207.588 190.994 207.309 187.17 209.142 185.948C210.085 185.35 210.908 185.775 211.798 186.187C213.07 186.88 214.493 187.249 215.941 187.263V187.263Z"
            fill="url(#paint5_linear)"
          />
          <path
          className="person"
            d="M241.917 202.747C243.332 202.824 244.731 203.092 246.074 203.544C246.742 203.775 247.355 204.141 247.876 204.618C248.396 205.095 248.814 205.675 249.102 206.32C249.37 206.951 249.403 207.658 249.195 208.312C248.736 209.282 247.931 210.044 246.937 210.45C242.217 212.958 236.892 214.103 231.559 213.756C230.19 213.811 228.853 213.336 227.827 212.428C227.086 211.332 226.74 210.016 226.844 208.697L226.658 202.455C227.86 202.509 229.033 202.84 230.085 203.425C232.05 204.089 232.82 202.495 234.441 202.097C236.552 201.605 239.766 202.535 241.917 202.747Z"
            fill="url(#paint6_linear)"
          />
          <path
          className="person"
            d="M166.261 135.125C163.404 134.877 160.529 134.921 157.682 135.258C157.309 135.277 156.948 135.391 156.633 135.59C156.451 135.761 156.306 135.966 156.206 136.194C156.105 136.423 156.052 136.669 156.048 136.918C155.65 140.769 158.704 144.116 161.998 146.147C170.909 151.672 182.144 151.46 191.984 155.072C192.923 155.32 193.757 155.865 194.361 156.625C194.772 157.449 194.973 158.362 194.946 159.281C195.384 164.474 198.266 169.149 199.222 174.261C200.178 179.374 199.155 184.726 199.939 189.879C203.166 186.439 208.664 185.895 211.891 182.495C214.919 179.361 215.517 174.686 215.968 170.357L217.19 158.485C217.416 157.629 217.323 156.719 216.927 155.927C216.531 155.135 215.859 154.514 215.039 154.182C200.51 144.793 183.485 136.612 166.261 135.125Z"
            fill="url(#paint7_linear)"
          />
          <path
          className="person"
            d="M225.012 133.93C226.354 134.199 227.598 134.828 228.611 135.749C229.649 137.195 230.122 138.972 229.939 140.742C229.907 153.343 227.525 165.828 222.914 177.555C222.87 177.967 222.727 178.362 222.495 178.706C222.264 179.05 221.952 179.332 221.586 179.527C221.22 179.722 220.812 179.825 220.398 179.826C219.984 179.827 219.575 179.727 219.208 179.534C216.447 178.788 213.725 177.902 211.054 176.878L214.667 152.973C214.839 152.31 214.802 151.61 214.56 150.968C214.294 150.513 213.92 150.13 213.471 149.853C209.351 146.856 205 144.191 200.457 141.885C196.831 140.052 192.675 137.9 191.692 134.023C191.488 133.36 191.447 132.658 191.572 131.976C191.697 131.294 191.984 130.652 192.409 130.105C192.984 129.541 193.659 129.09 194.401 128.777C196.805 127.595 199.833 126.121 202.595 126.36C204.813 126.586 205.663 127.861 207.509 128.804C212.635 131.353 219.448 132.31 225.012 133.93Z"
            fill="#282328"
          />
          <path
          className="person"
            d="M200.337 95.9089C202.117 100.809 202.993 106.002 204.56 110.955C204.904 112.268 205.519 113.494 206.366 114.554C207.493 115.635 208.858 116.435 210.35 116.891C212.431 117.697 214.547 118.401 216.698 119.003C218.133 119.388 219.846 120.052 220.005 121.513C220.039 122 219.938 122.487 219.713 122.921C219.158 123.91 218.359 124.741 217.392 125.333C216.425 125.926 215.322 126.261 214.188 126.307C211.926 126.368 209.673 125.998 207.548 125.218C205.614 124.826 203.839 123.87 202.449 122.469C201.658 121.304 201.104 119.996 200.815 118.618C198.636 110.882 195.612 103.409 191.798 96.3338C190.657 94.4655 189.765 92.4566 189.142 90.3578C188.266 86.6925 188.252 78.0073 192.037 81.1945C195.092 83.7709 198.996 92.2701 200.337 95.9089Z"
            fill="#FBC4D6"
          />
          <path
          className="person"
            d="M185.849 133.465C188.088 132.597 190.266 131.581 192.369 130.424C200.337 126.015 193.817 123.85 191.161 118.551C189.262 114.793 190.032 110.291 191.015 106.214C192.754 99.043 195.079 91.6061 193.405 84.4482C193.196 83.2865 192.744 82.1822 192.077 81.2078C191.59 80.6034 191.028 80.0634 190.404 79.6009C188.722 78.1479 186.786 77.0179 184.693 76.2676C180.709 74.9396 176.194 75.9091 172.409 77.8081C157.536 85.2715 154.362 104.116 154.959 119.189C155.119 123.372 155.769 127.794 158.465 130.995C161.161 134.195 164.973 135.417 168.877 135.895C174.648 136.485 180.475 135.651 185.849 133.465Z"
            fill="#F3FBFF"
          />
          <path
          className="person"
            d="M163.671 124.939C163.791 126.354 164.246 127.72 164.999 128.923C166.327 130.796 168.77 131.486 171.015 132.031L181.121 134.527C182.353 134.901 183.632 135.093 184.919 135.098C187.681 134.966 190.058 133.199 192.25 131.5C192.81 131.116 193.296 130.635 193.684 130.079C188.106 129.547 182.542 128.99 176.991 128.18C173.724 127.701 170.271 127.037 167.867 124.793C166.626 123.566 165.681 122.072 165.105 120.424C164.707 119.401 164.521 116.798 163.366 116.573C163.075 119.362 163.177 122.178 163.671 124.939V124.939Z"
            fill="url(#paint8_linear)"
          />
          <path
          className="person"
            d="M183.618 87.9408C183.617 88.3596 183.449 88.7608 183.153 89.0563C182.877 89.2189 182.554 89.2844 182.237 89.2423C181.196 89.1935 180.178 88.9222 179.251 88.4468C178.324 87.9714 177.509 87.3027 176.862 86.486C176.216 85.6693 175.751 84.7234 175.501 83.7122C175.25 82.7009 175.22 81.6477 175.411 80.6235C175.65 79.2955 176.221 78.1534 176.579 76.9051C177.283 74.4084 177.164 71.593 178.744 69.5346C180.112 72.6651 181.673 75.7077 183.418 78.6448C183.865 79.2288 184.175 79.905 184.326 80.6241C184.478 81.3431 184.467 82.087 184.295 82.8014L183.618 87.9408Z"
            fill="#FBC4D6"
          />
          <path
          className="person"
            d="M184.401 81.5132L183.804 85.4972C183.804 85.4972 176.965 82.1108 177.854 75.8293C178.744 69.5478 184.401 81.5132 184.401 81.5132Z"
            fill="url(#paint9_linear)"
          />
          <path
          className="person"
            d="M192.396 77.6355C192.045 78.9117 191.302 80.0454 190.271 80.8758C189.779 81.209 189.23 81.4477 188.651 81.5796C186.617 81.9742 184.511 81.7152 182.634 80.8398C180.756 79.9643 179.204 78.5173 178.199 76.7058C177.252 74.871 176.712 72.8533 176.616 70.7907C176.52 68.728 176.87 66.6689 177.642 64.7538C178.274 62.6533 179.704 60.8844 181.626 59.8268C182.676 59.4125 183.813 59.2648 184.935 59.3969C186.056 59.529 187.128 59.9368 188.053 60.5838C190.569 62.3402 192.513 64.7969 193.644 67.6488C194.614 70.5572 193.392 74.8599 192.396 77.6355Z"
            fill="#FBC4D6"
          />
          <path
          className="person"
            d="M222.422 150.623C224.124 152.79 225.469 155.216 226.406 157.807C231.629 170.402 235.023 183.68 236.486 197.236C232.222 197.767 227.908 197.767 223.644 197.236C223.31 187.666 221.834 178.17 219.248 168.949C218.791 166.965 218.006 165.071 216.924 163.345C215.025 160.596 211.904 159.003 208.956 157.515C202.058 154.163 194.848 151.494 187.429 149.547C184.295 148.684 181.134 147.887 178.053 146.891C175.464 146.015 168.199 142.801 166.101 141.061C165.002 140.227 164.082 139.18 163.397 137.982C162.713 136.784 162.277 135.46 162.117 134.089C162.117 134.78 182.356 136.161 183.804 136.001C188.677 135.484 194.428 132.695 199.235 134.673C202.993 136.214 206.433 139.428 209.859 141.645C214.016 144.248 219.089 146.772 222.422 150.623Z"
            fill="#473F47"
          />
          <path
          className="person"
            d="M200.244 149.6L175.543 137.529L204.507 125.245L229.222 136.041L200.244 149.6Z"
            fill="#68E1FD"
          />
          <path
          className="person"
            d="M162.622 92.9208C162.622 93.3856 162.502 93.8371 162.449 94.2488C161.719 101.048 162.383 107.715 162.635 114.474C162.794 118.658 163.339 126.626 167.788 128.764C176.101 132.748 192.143 131.234 192.143 131.234C194.004 130.936 195.904 131.012 197.734 131.46C198.73 131.765 199.647 132.283 200.616 132.655C204.122 133.983 208.04 133.319 211.732 132.655C212.368 132.579 212.982 132.376 213.538 132.057C214.182 131.485 214.575 130.682 214.632 129.822C214.689 128.963 214.406 128.115 213.843 127.462C212.645 126.203 211.086 125.345 209.381 125.006C204.719 123.484 199.725 123.291 194.959 124.448C194.35 124.653 193.729 124.821 193.1 124.952C192.362 125.072 191.616 125.125 190.869 125.112H185.211C178.704 125.112 172.569 125.191 171.586 117.582C171.223 114.764 171.152 111.916 171.373 109.083C171.759 103.97 173.1 98.8969 172.821 93.784C172.804 92.1625 172.399 90.5686 171.639 89.136C171.254 88.4246 170.693 87.824 170.009 87.3915C169.326 86.9591 168.542 86.7092 167.735 86.6659C166.898 86.7283 166.092 87.0056 165.394 87.4709C164.696 87.9362 164.13 88.5738 163.751 89.3219C163.163 90.4446 162.78 91.6635 162.622 92.9208Z"
            fill="#FBC4D6"
          />
          <path
          className="person"
            d="M239.394 111.686L204.866 129.255L200.244 149.6L229.222 136.041L239.394 111.686Z"
            fill="#68E1FD"
          />
          <path
          className="person"
            d="M194.096 70.3048C194.058 69.0405 193.589 67.827 192.768 66.8653C192.351 66.3812 191.857 65.9685 191.307 65.6435C190.537 65.192 190.351 65.1521 189.846 65.8825C189.195 66.8254 188.983 67.9277 188.385 68.9104C187.731 70.0003 186.819 70.9125 185.729 71.5664C184.504 72.3265 183.079 72.7012 181.639 72.6421C181.067 72.5556 180.485 72.5556 179.913 72.6421C179.72 72.6785 179.539 72.7568 179.38 72.8716C179.222 72.9864 179.091 73.1348 178.996 73.3061C178.859 73.8028 178.81 74.3196 178.85 74.8333C178.731 76.1613 177.416 77.1042 176.686 78.2596C175.955 79.415 175.743 81.1281 174.866 82.3631C174.703 82.6109 174.479 82.8123 174.215 82.9475C173.591 83.2131 172.887 82.8678 172.237 82.7483C170.311 82.4163 168.757 84.2091 167.111 85.298C163.804 87.476 159.475 86.9182 155.57 86.2675C154.375 86.1229 153.21 85.7913 152.117 85.2848C150.938 84.5885 149.89 83.6894 149.023 82.6287C147.576 81.0351 146.141 79.415 144.72 77.7948C144.192 77.2761 143.772 76.6577 143.485 75.9754C143.333 75.4996 143.292 74.9954 143.366 74.5013C143.495 73.5791 143.769 72.6829 144.176 71.8453C145.212 69.5213 146.42 66.9981 148.757 65.9489C151.095 64.8998 153.857 65.6833 156.433 65.4177C156.747 65.4171 157.053 65.3197 157.31 65.1389C157.515 64.9072 157.661 64.6292 157.735 64.3288C158.811 60.7564 160.152 56.8786 163.366 55.0327C165.842 53.8431 168.634 53.4755 171.334 53.9836C174.007 54.4887 176.734 54.6449 179.448 54.4484C180.776 54.2359 182.104 53.7977 183.432 53.532C186.537 52.842 189.788 53.3145 192.569 54.8601C193.941 55.6766 195.089 56.8213 195.909 58.1912C196.73 59.5611 197.197 61.1134 197.27 62.7086C197.216 63.3316 197.216 63.9581 197.27 64.5811C197.363 65.1654 197.615 65.7365 197.708 66.3208C197.762 66.8258 197.709 67.3367 197.552 67.8197C197.395 68.3028 197.137 68.7471 196.796 69.1234C196.455 69.4997 196.038 69.7996 195.572 70.0032C195.107 70.2068 194.604 70.3096 194.096 70.3048V70.3048Z"
            fill="#FF681C"
          />
          <path
          className="person"
            d="M161.413 96.6924C161.004 100.451 160.96 104.24 161.281 108.007C161.265 108.334 161.348 108.658 161.52 108.937C161.802 109.246 162.191 109.436 162.609 109.468C164.759 109.868 166.942 110.077 169.129 110.092C169.436 110.19 169.761 110.219 170.081 110.178C170.4 110.136 170.706 110.024 170.978 109.85C171.249 109.677 171.479 109.445 171.651 109.172C171.822 108.9 171.932 108.592 171.971 108.273C173.166 103.279 174.348 98.286 175.251 93.2263C175.61 91.1944 175.862 88.9102 174.64 87.2635C172.874 84.8731 168.107 84.6075 165.809 86.3472C163.034 88.4853 161.852 93.4786 161.413 96.6924Z"
            fill="#F3FBFF"
          />
          <path
          className="person"
            d="M198.996 90.3179L202.754 99.3218C202.94 99.6719 203.014 100.07 202.967 100.464C202.871 100.787 202.687 101.077 202.436 101.301C200.6 103.242 198.421 104.827 196.008 105.975C193.784 103.988 191.978 101.577 190.696 98.8836C189.448 95.6831 189.727 92.124 190.099 88.711C190.324 86.5464 190.245 79.5876 193.923 82.2835C196.486 84.1294 197.841 87.5424 198.996 90.3179Z"
            fill="#F3FBFF"
          />
          <path
          className="person"
            d="M180.006 72.6687C179.813 72.7051 179.632 72.7834 179.473 72.8982C179.315 73.013 179.184 73.1614 179.089 73.3327C178.952 73.8294 178.903 74.3462 178.943 74.8599C178.824 76.1879 177.509 77.1308 176.778 78.2862C176.048 79.4416 175.836 81.1547 174.959 82.3897C174.796 82.6375 174.572 82.8389 174.308 82.9741C173.684 83.2397 172.98 82.8944 172.33 82.7749C170.404 82.4429 168.85 84.2357 167.204 85.3246C163.897 87.5026 159.567 86.9448 155.663 86.2941C154.435 86.1508 153.237 85.8099 152.117 85.2848C150.938 84.5886 149.89 83.6894 149.023 82.6288C147.576 81.0352 146.141 79.415 144.72 77.7948C144.192 77.2761 143.772 76.6577 143.485 75.9755C143.333 75.4997 143.292 74.9954 143.366 74.5014C143.985 74.1275 144.628 73.7947 145.291 73.5054C147.327 72.4128 149.707 72.151 151.931 72.775C153.711 73.4655 154.973 75.0459 156.5 76.1747C158.63 77.6659 161.22 78.3511 163.809 78.1078C166.397 77.8645 168.815 76.7086 170.63 74.8467C171.299 73.9649 172.085 73.1786 172.967 72.5094C174.547 71.6462 177.761 71.7789 180.006 72.6687Z"
            fill="url(#paint10_linear)"
          />
          <path
            class="cloud2"
            d="M131.015 174.779C131.017 176.007 130.767 177.222 130.283 178.35C129.799 179.478 129.09 180.495 128.2 181.34C126.665 182.794 124.687 183.692 122.582 183.89C122.189 183.91 121.794 183.91 121.401 183.89L55.4383 182.561C52.9059 182.534 50.4842 181.52 48.6885 179.734C46.8928 177.948 45.8649 175.532 45.8235 173C45.8223 171.772 46.0713 170.558 46.5554 169.43C47.0394 168.302 47.7484 167.284 48.6389 166.439C49.5418 165.571 50.6072 164.89 51.7739 164.434C52.9407 163.978 54.1859 163.757 55.4383 163.783H57.6826C57.2121 162.152 56.9752 160.462 56.9788 158.764C56.9743 156.343 57.4644 153.947 58.4189 151.723C59.3735 149.499 60.7724 147.493 62.5299 145.829C64.0783 144.347 65.8767 143.151 67.8419 142.296C70.386 141.186 73.1411 140.642 75.9162 140.703L81.5204 140.822C84.9852 140.887 88.3702 141.873 91.3275 143.679C94.2847 145.486 96.7074 148.048 98.3463 151.101C99.9665 150.345 101.738 149.968 103.526 149.999H104.973C107.974 150.036 110.843 151.242 112.97 153.359C115.097 155.476 116.316 158.339 116.367 161.34V161.884C116.373 162.914 116.225 163.939 115.929 164.926L121.387 165.045C123.952 165.07 126.402 166.106 128.206 167.93C130.009 169.753 131.019 172.215 131.015 174.779V174.779Z"
            fill="white"
          />
          <path
            class="cloud2"
            d="M122.582 183.89C122.189 183.91 121.794 183.91 121.401 183.89L55.4383 182.561C52.9059 182.534 50.4842 181.52 48.6885 179.734C46.8928 177.948 45.8649 175.532 45.8235 173C45.8223 171.772 46.0713 170.558 46.5554 169.43C47.0394 168.302 47.7484 167.284 48.6389 166.439C46.0493 182.721 63.0478 180.397 63.0478 180.397H105.903L122.582 183.89Z"
            fill="url(#paint11_linear)"
          />
          <path
            class="cloud2"
            d="M62.4635 165.749L57.6826 163.93C57.2122 162.298 56.9752 160.608 56.9788 158.91C56.9743 156.489 57.4644 154.093 58.4189 151.869C59.3735 149.645 60.7724 147.639 62.5299 145.975C64.0783 144.493 65.8767 143.297 67.8419 142.442C54.6017 153.81 62.4635 165.749 62.4635 165.749Z"
            fill="url(#paint12_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="2294.76"
              y1="2543.55"
              x2="3217.07"
              y2="659.296"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.01" />
              <stop offset="0.13" stop-opacity="0.69" />
              <stop offset="0.25" stop-opacity="0.32" />
              <stop offset="1" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="7840.46"
              y1="40512"
              x2="-32.1576"
              y2="-16373.2"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.01" />
              <stop offset="0.13" stop-opacity="0.69" />
              <stop offset="0.25" stop-opacity="0.32" />
              <stop offset="1" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear"
              x1="14425.9"
              y1="29257.8"
              x2="10942.7"
              y2="-12820.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.01" />
              <stop offset="0.13" stop-opacity="0.69" />
              <stop offset="0.25" stop-opacity="0.32" />
              <stop offset="1" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear"
              x1="2283.6"
              y1="2413.82"
              x2="3205.91"
              y2="529.565"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.01" />
              <stop offset="0.13" stop-opacity="0.69" />
              <stop offset="0.25" stop-opacity="0.32" />
              <stop offset="1" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint4_linear"
              x1="523.18"
              y1="3167.83"
              x2="1168.53"
              y2="3027.96"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.01" />
              <stop offset="0.13" stop-opacity="0.69" />
              <stop offset="0.25" stop-opacity="0.32" />
              <stop offset="1" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint5_linear"
              x1="-14186"
              y1="1973.63"
              x2="-14458"
              y2="2151.45"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.01" />
              <stop offset="0.13" stop-opacity="0.69" />
              <stop offset="0.25" stop-opacity="0.32" />
              <stop offset="1" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint6_linear"
              x1="-20044.8"
              y1="2225.49"
              x2="-20123.6"
              y2="1886.82"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.01" />
              <stop offset="0.13" stop-opacity="0.69" />
              <stop offset="0.25" stop-opacity="0.32" />
              <stop offset="1" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint7_linear"
              x1="-57372.9"
              y1="4883.17"
              x2="-61109.8"
              y2="10664.8"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.01" />
              <stop offset="0.13" stop-opacity="0.69" />
              <stop offset="0.25" stop-opacity="0.32" />
              <stop offset="1" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint8_linear"
              x1="4879.96"
              y1="1532.31"
              x2="4266.88"
              y2="3001.59"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.01" />
              <stop offset="0.13" stop-opacity="0.69" />
              <stop offset="0.25" stop-opacity="0.32" />
              <stop offset="1" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint9_linear"
              x1="-5211.54"
              y1="722.911"
              x2="-5347.29"
              y2="893.978"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.01" />
              <stop offset="0.13" stop-opacity="0.69" />
              <stop offset="0.25" stop-opacity="0.32" />
              <stop offset="1" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint10_linear"
              x1="5786.91"
              y1="1273.66"
              x2="5025.08"
              y2="-151.403"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.01" />
              <stop offset="0.13" stop-opacity="0.69" />
              <stop offset="0.25" stop-opacity="0.32" />
              <stop offset="1" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint11_linear"
              x1="2110.64"
              y1="2491.4"
              x2="3032.92"
              y2="606.572"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.01" />
              <stop offset="0.13" stop-opacity="0.69" />
              <stop offset="0.25" stop-opacity="0.32" />
              <stop offset="1" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint12_linear"
              x1="349.198"
              y1="3245.01"
              x2="994.546"
              y2="3105.14"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.01" />
              <stop offset="0.13" stop-opacity="0.69" />
              <stop offset="0.25" stop-opacity="0.32" />
              <stop offset="1" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <section>
        <p className="quote1">“The secret of getting ahead is getting started.” – Mark Twain</p>
        <p className="quote2">“All our dreams can come true, if we have the courage to pursue them.” – Walt Disney</p>
        <p className="quote3">“The best time to plant a tree was 20 years ago. The second best time is now.” – Chinese Proverb</p>
        <p className="quote4">“Whatever you are, be a good one.” ― Abraham Lincoln</p>
        <h2 className="name">Be Totally Awesome</h2>
        <h3 className="name">By: Nikhil Patel</h3>
      </section>
    </div>
  );
}

export default App;
