import React from "react";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
export default function Service() {
  return (
    <section className="section-selling-home  tf-spacing-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center mb-48">
              <h2 className="title split-text effect-right">
                <SplitTextAnimation text="Selling Your Home With Realty" />
              </h2>
              <p className="text-1 split-text split-lines-transform">
                We'll get to know you to understand your selling goals, and
                explain the selling process so <br />
                you know what to expect.
              </p>
            </div>
            <div className="tf-grid-layout lg-col-4 sm-col-2">
              <div
                className="icons-box style-4 effec-icon wow animate__zoomIn animate__animated"
                data-wow-duration="1s"
                data-wow-delay="0s"
              >
                <div className="tf-icon">
                  <svg
                    width={60}
                    height={60}
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.0375 38.925C19.5457 40.0915 18.3393 41.5826 17.5098 43.2849C16.6802 44.9873 16.2494 46.8563 16.25 48.75V52.5H8.75C6.675 52.5 5 50.825 5 48.75V46.25C5 41.4125 8.9125 37.5 13.75 37.5H16.25C18.025 37.5 19.6625 38.025 21.0375 38.925Z"
                      fill="#7695FF"
                    />
                    <path
                      d="M45 37.5C48.1066 37.5 50.625 34.9816 50.625 31.875C50.625 28.7684 48.1066 26.25 45 26.25C41.8934 26.25 39.375 28.7684 39.375 31.875C39.375 34.9816 41.8934 37.5 45 37.5Z"
                      fill="#7695FF"
                    />
                    <path
                      d="M15 37.5C18.1066 37.5 20.625 34.9816 20.625 31.875C20.625 28.7684 18.1066 26.25 15 26.25C11.8934 26.25 9.375 28.7684 9.375 31.875C9.375 34.9816 11.8934 37.5 15 37.5Z"
                      fill="#7695FF"
                    />
                    <path
                      d="M54.9999 46.25V48.75C54.9999 50.825 53.3249 52.5 51.2499 52.5H43.7499V48.75C43.7499 44.7625 41.8749 41.2125 38.9624 38.925C40.3374 38.025 41.9749 37.5 43.7499 37.5H46.2499C51.0874 37.5 54.9999 41.4125 54.9999 46.25Z"
                      fill="#7695FF"
                    />
                    <path
                      d="M30 38.75C33.797 38.75 36.875 35.672 36.875 31.875C36.875 28.078 33.797 25 30 25C26.203 25 23.125 28.078 23.125 31.875C23.125 35.672 26.203 38.75 30 38.75Z"
                      fill="#7695FF"
                    />
                    <path
                      d="M31.25 38.75H28.75C23.2363 38.75 18.75 43.2363 18.75 48.75V52.5C18.75 54.5675 20.4325 56.25 22.5 56.25H37.5C39.5675 56.25 41.25 54.5675 41.25 52.5V48.75C41.25 43.2363 36.7638 38.75 31.25 38.75Z"
                      fill="#7695FF"
                    />
                    <path
                      d="M48.125 20.855L45.1088 21.9275C44.9109 21.9979 44.6989 22.0189 44.491 21.9889C44.2832 21.9589 44.0858 21.8787 43.9159 21.7552C43.746 21.6317 43.6088 21.4687 43.5161 21.2803C43.4234 21.0919 43.378 20.8837 43.3838 20.6737L43.4713 17.4738L41.5188 14.9362C41.3909 14.7697 41.3054 14.5746 41.2697 14.3677C41.2341 14.1607 41.2494 13.9482 41.3142 13.7485C41.3791 13.5488 41.4916 13.3678 41.642 13.2213C41.7924 13.0748 41.9762 12.9671 42.1775 12.9075L45.2488 12.0025L47.0588 9.36125C47.1775 9.188 47.3366 9.04629 47.5224 8.94837C47.7082 8.85045 47.915 8.79927 48.125 8.79927C48.3351 8.79927 48.5419 8.85045 48.7277 8.94837C48.9135 9.04629 49.0726 9.188 49.1913 9.36125L51.0013 12.0025L54.0725 12.9075C54.9438 13.1637 55.285 14.2162 54.7313 14.9362L52.7788 17.4738L52.8663 20.6737C52.8718 20.8836 52.8262 21.0916 52.7334 21.2799C52.6406 21.4682 52.5034 21.631 52.3336 21.7544C52.1638 21.8778 51.9666 21.9581 51.7588 21.9882C51.5511 22.0184 51.3392 21.9975 51.1413 21.9275L48.125 20.855ZM11.875 20.855L8.8588 21.9275C8.66092 21.9979 8.44889 22.0189 8.24104 21.9889C8.03318 21.9589 7.83578 21.8787 7.6659 21.7552C7.49602 21.6317 7.35879 21.4687 7.26607 21.2803C7.17336 21.0919 7.12796 20.8837 7.1338 20.6737L7.2213 17.4738L5.2688 14.9362C5.14087 14.7697 5.05539 14.5746 5.01975 14.3677C4.98411 14.1607 4.99937 13.9482 5.06422 13.7485C5.12907 13.5488 5.24156 13.3678 5.39197 13.2213C5.54238 13.0748 5.7262 12.9671 5.92755 12.9075L8.9988 12.0025L10.8088 9.36125C10.9275 9.188 11.0866 9.04629 11.2724 8.94837C11.4582 8.85045 11.665 8.79927 11.875 8.79927C12.0851 8.79927 12.2919 8.85045 12.4777 8.94837C12.6635 9.04629 12.8226 9.188 12.9413 9.36125L14.7513 12.0025L17.8225 12.9075C18.6938 13.1637 19.035 14.2162 18.4813 14.9362L16.5288 17.4738L16.6163 20.6737C16.6218 20.8836 16.5762 21.0916 16.4834 21.2799C16.3906 21.4682 16.2534 21.631 16.0836 21.7544C15.9138 21.8778 15.7166 21.9581 15.5088 21.9882C15.3011 22.0184 15.0892 21.9975 14.8913 21.9275L11.875 20.855ZM30 18.0425L26.4238 19.3138C26.1892 19.3971 25.9379 19.422 25.6915 19.3864C25.4451 19.3508 25.2111 19.2557 25.0097 19.1094C24.8084 18.963 24.6457 18.7698 24.5357 18.5465C24.4258 18.3231 24.3719 18.0763 24.3788 17.8275L24.4825 14.0337L22.1675 11.025C22.0159 10.8276 21.9146 10.5962 21.8724 10.3509C21.8302 10.1056 21.8483 9.85364 21.9252 9.61688C22.0021 9.38012 22.1355 9.16564 22.3138 8.99196C22.4922 8.81828 22.7101 8.69062 22.9488 8.62L26.59 7.54625L28.7363 4.415C28.877 4.20953 29.0657 4.04145 29.286 3.92531C29.5063 3.80917 29.7516 3.74847 30.0007 3.74847C30.2497 3.74847 30.495 3.80917 30.7153 3.92531C30.9356 4.04145 31.1243 4.20953 31.265 4.415L33.4113 7.54625L37.0525 8.62C37.2913 8.69062 37.5092 8.81828 37.6875 8.99196C37.8659 9.16564 37.9992 9.38012 38.0761 9.61688C38.1531 9.85364 38.1712 10.1056 38.129 10.3509C38.0867 10.5962 37.9854 10.8276 37.8338 11.025L35.5188 14.0337L35.6225 17.8275C35.6294 18.0763 35.5755 18.3231 35.4656 18.5465C35.3557 18.7698 35.193 18.963 34.9916 19.1094C34.7902 19.2557 34.5562 19.3508 34.3098 19.3864C34.0635 19.422 33.8121 19.3971 33.5775 19.3138L30 18.0425Z"
                      fill="#2C2E33"
                    />
                  </svg>
                </div>
                <h5 className="title text-center">
                  <a href="#">Local Expertise</a>
                </h5>
                <span className="line" />
                <p className="text-1 text-center">
                  We are not loud, noisy and full of our own self-importance. As
                  your agent we know we work for you.
                </p>
              </div>
              <div
                className="icons-box style-4 effec-icon wow animate__zoomIn animate__animated"
                data-wow-duration="1s"
                data-wow-delay="0s"
              >
                <div className="tf-icon">
                  <svg
                    width={60}
                    height={60}
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M43.125 18.75C41.1359 18.75 39.2282 17.9598 37.8217 16.5533C36.4152 15.1468 35.625 13.2391 35.625 11.25V3.75H18.75C16.2636 3.75 13.879 4.73772 12.1209 6.49587C10.3627 8.25403 9.375 10.6386 9.375 13.125V46.875C9.375 49.3614 10.3627 51.746 12.1209 53.5041C13.879 55.2623 16.2636 56.25 18.75 56.25H34.0481C32.463 55.3092 31.1138 54.0187 30.1036 52.4769C29.0934 50.9351 28.4489 49.1829 28.2192 47.354C27.9896 45.5251 28.1809 43.6679 28.7786 41.9242C29.3763 40.1806 30.3645 38.5965 31.6678 37.2931C32.9711 35.9896 34.555 35.0012 36.2986 34.4033C38.0422 33.8055 39.8994 33.6139 41.7283 33.8434C43.5573 34.0728 45.3096 34.7172 46.8515 35.7272C48.3934 36.7372 49.6841 38.0863 50.625 39.6713V18.75H43.125ZM18.75 15H30C30.4973 15 30.9742 15.1975 31.3258 15.5492C31.6775 15.9008 31.875 16.3777 31.875 16.875C31.875 17.3723 31.6775 17.8492 31.3258 18.2008C30.9742 18.5525 30.4973 18.75 30 18.75H18.75C18.2527 18.75 17.7758 18.5525 17.4242 18.2008C17.0725 17.8492 16.875 17.3723 16.875 16.875C16.875 16.3777 17.0725 15.9008 17.4242 15.5492C17.7758 15.1975 18.2527 15 18.75 15ZM24.375 33.75H18.75C18.2527 33.75 17.7758 33.5525 17.4242 33.2008C17.0725 32.8492 16.875 32.3723 16.875 31.875C16.875 31.3777 17.0725 30.9008 17.4242 30.5492C17.7758 30.1975 18.2527 30 18.75 30H24.375C24.8723 30 25.3492 30.1975 25.7008 30.5492C26.0525 30.9008 26.25 31.3777 26.25 31.875C26.25 32.3723 26.0525 32.8492 25.7008 33.2008C25.3492 33.5525 24.8723 33.75 24.375 33.75ZM37.5 26.25H18.75C18.2527 26.25 17.7758 26.0525 17.4242 25.7008C17.0725 25.3492 16.875 24.8723 16.875 24.375C16.875 23.8777 17.0725 23.4008 17.4242 23.0492C17.7758 22.6975 18.2527 22.5 18.75 22.5H37.5C37.9973 22.5 38.4742 22.6975 38.8258 23.0492C39.1775 23.4008 39.375 23.8777 39.375 24.375C39.375 24.8723 39.1775 25.3492 38.8258 25.7008C38.4742 26.0525 37.9973 26.25 37.5 26.25Z"
                      fill="white"
                    />
                    <path
                      d="M50.3794 15C50.1245 14.0862 49.642 13.2521 48.9769 12.5756L41.7994 5.39814C41.1229 4.73305 40.2888 4.25049 39.375 3.99564V11.25C39.375 12.2446 39.7701 13.1984 40.4734 13.9017C41.1766 14.6049 42.1304 15 43.125 15H50.3794Z"
                      fill="white"
                    />
                    <path
                      d="M48.7502 56.25C48.253 56.2499 47.7761 56.0523 47.4246 55.7006L44.6683 52.9444C42.9261 54.0352 40.8433 54.4464 38.8173 54.0997C36.7912 53.753 34.9637 52.6725 33.6834 51.0644C32.4031 49.4563 31.7596 47.4331 31.8757 45.3809C31.9917 43.3287 32.8593 41.391 34.3127 39.9375C35.7662 38.484 37.7039 37.6165 39.7561 37.5004C41.8084 37.3844 43.8315 38.0279 45.4396 39.3082C47.0477 40.5885 48.1282 42.416 48.4749 44.4421C48.8217 46.4681 48.4104 48.5509 47.3196 50.2931L50.0758 53.0494C50.338 53.3116 50.5165 53.6456 50.5888 54.0093C50.6611 54.373 50.624 54.7499 50.4821 55.0925C50.3402 55.435 50.1 55.7278 49.7917 55.9339C49.4834 56.1399 49.121 56.2499 48.7502 56.25ZM40.234 41.25C39.322 41.25 38.4305 41.5205 37.6722 42.0272C36.914 42.5339 36.323 43.2541 35.9741 44.0966C35.6252 44.9392 35.534 45.8664 35.7121 46.7608C35.8901 47.6552 36.3294 48.4768 36.9744 49.1215C37.6194 49.7662 38.4411 50.2052 39.3356 50.3829C40.2301 50.5606 41.1572 50.469 41.9997 50.1197C42.8421 49.7705 43.5621 49.1792 44.0685 48.4208C44.5749 47.6623 44.845 46.7707 44.8446 45.8587C44.8431 44.6366 44.3568 43.4649 43.4924 42.6008C42.628 41.7368 41.4561 41.251 40.234 41.25Z"
                      fill="#2C2E33"
                    />
                  </svg>
                </div>
                <h5 className="title text-center">
                  <a href="#">Intuitive search</a>
                </h5>
                <span className="line" />
                <p className="text-1 text-center">
                  We are not loud, noisy and full of our own self-importance. As
                  your agent we know we work for you.
                </p>
              </div>
              <div
                className="icons-box style-4 effec-icon wow animate__zoomIn animate__animated"
                data-wow-duration="1s"
                data-wow-delay="0s"
              >
                <div className="tf-icon style-2">
                  <svg
                    width={60}
                    height={60}
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M52.5001 26.25C51.7453 26.2502 51.0082 26.0214 50.3863 25.5937L28.7501 10.7937L7.11756 25.5937C6.29671 26.1553 5.2864 26.3679 4.30886 26.1845C3.33133 26.0012 2.46666 25.4371 1.90506 24.6162C1.34346 23.7954 1.13095 22.7851 1.31427 21.8075C1.49758 20.83 2.06171 19.9653 2.88256 19.4037L26.6326 3.15374C27.2563 2.72702 27.9943 2.49869 28.7501 2.49869C29.5058 2.49869 30.2439 2.72702 30.8676 3.15374L54.6176 19.4037C55.2792 19.8558 55.7786 20.508 56.0426 21.2646C56.3066 22.0212 56.3213 22.8425 56.0845 23.6081C55.8477 24.3736 55.3719 25.0432 54.7269 25.5186C54.0818 25.9941 53.3014 26.2504 52.5001 26.25Z"
                      fill="#7695FF"
                    />
                    <path
                      d="M35 36.25V36.78C35.7874 36.4313 36.6389 36.2508 37.5 36.25H38.9088C39.1868 35.1772 39.813 34.2271 40.6891 33.5484C41.5653 32.8698 42.6418 32.501 43.75 32.5H48.75V27.5125L28.75 13.825L8.75 27.5125V47.5C8.75 49.1576 9.40848 50.7473 10.5806 51.9194C11.7527 53.0915 13.3424 53.75 15 53.75H22.5V36.25C22.502 35.5875 22.766 34.9528 23.2344 34.4844C23.7028 34.016 24.3376 33.752 25 33.75H32.5C33.1624 33.752 33.7972 34.016 34.2656 34.4844C34.734 34.9528 34.998 35.5875 35 36.25Z"
                      fill="#7695FF"
                    />
                    <path
                      d="M57.5 47.5875V53.75C57.497 54.7436 57.101 55.6957 56.3984 56.3984C55.6958 57.101 54.7437 57.497 53.75 57.5H38.75C37.7564 57.497 36.8042 57.101 36.1016 56.3984C35.399 55.6957 35.003 54.7436 35 53.75V47.5875L35.1625 47.625L44.3625 49.675C44.9826 49.8095 45.6155 49.8765 46.25 49.875C46.8886 49.8759 47.5256 49.8088 48.15 49.675L57.3375 47.625L57.5 47.5875Z"
                      fill="#2C2E33"
                    />
                    <path
                      d="M55 38.75H51.25V37.5C51.25 36.837 50.9866 36.2011 50.5178 35.7322C50.0489 35.2634 49.413 35 48.75 35H43.75C43.087 35 42.4511 35.2634 41.9822 35.7322C41.5134 36.2011 41.25 36.837 41.25 37.5V38.75H37.5C36.5054 38.75 35.5516 39.1451 34.8483 39.8483C34.1451 40.5516 33.75 41.5054 33.75 42.5V42.75C33.7501 43.3187 33.9441 43.8704 34.3 44.314C34.6559 44.7576 35.1523 45.0666 35.7075 45.19L44.8938 47.2325C45.787 47.4308 46.713 47.4308 47.6062 47.2325L56.7925 45.19C57.3477 45.0666 57.8441 44.7576 58.2 44.314C58.5559 43.8704 58.7499 43.3187 58.75 42.75V42.5C58.75 41.5054 58.3549 40.5516 57.6517 39.8483C56.9484 39.1451 55.9946 38.75 55 38.75ZM43.75 38.75V37.5H48.75V38.75H43.75Z"
                      fill="#2C2E33"
                    />
                  </svg>
                </div>
                <h5 className="title text-center">
                  <a href="#">We Get Results</a>
                </h5>
                <span className="line" />
                <p className="text-1 text-center">
                  We are not loud, noisy and full of our own self-importance. As
                  your agent we know we work for you.
                </p>
              </div>
              <div
                className="icons-box style-4 effec-icon wow animate__zoomIn animate__animated"
                data-wow-duration="1s"
                data-wow-delay="0s"
              >
                <div className="tf-icon">
                  <svg
                    width={60}
                    height={60}
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M42.5 5H10C6.55375 5 3.75 7.80375 3.75 11.25V33.75C3.75 37.1963 6.55375 40 10 40H13.75V44.9975C13.7488 45.3264 13.8128 45.6523 13.9382 45.9563C14.0635 46.2604 14.2478 46.5367 14.4805 46.7692C14.7131 47.0017 14.9894 47.1859 15.2936 47.3111C15.5977 47.4363 15.9236 47.5001 16.2525 47.4987C16.9025 47.4987 17.5375 47.2437 18.0175 46.765L24.7825 40H42.5C45.9463 40 48.75 37.1963 48.75 33.75V11.25C48.75 7.80375 45.9463 5 42.5 5ZM18.75 21.2638V32.5H16.25C15.587 32.5 14.9511 32.2366 14.4822 31.7678C14.0134 31.2989 13.75 30.663 13.75 30V22.5C13.75 21.837 14.0134 21.2011 14.4822 20.7322C14.9511 20.2634 15.587 20 16.25 20H18.8675C18.7926 20.4172 18.7533 20.8399 18.75 21.2638ZM38.7113 23.0462L37.5362 30.13C37.4267 30.7921 37.0855 31.3938 36.5736 31.8279C36.0618 32.2619 35.4124 32.5001 34.7412 32.5H21.25V21.2638C21.25 20.2765 21.5423 19.3114 22.09 18.49L26.0763 12.5112C26.3349 12.1231 26.6855 11.8048 27.0967 11.5848C27.508 11.3648 27.9673 11.2498 28.4338 11.25C28.7701 11.2499 29.1023 11.3232 29.4075 11.4646C29.7126 11.606 29.9832 11.8121 30.2006 12.0688C30.418 12.3254 30.5768 12.6263 30.6661 12.9505C30.7553 13.2747 30.7729 13.6145 30.7175 13.9462L29.75 19.75H35.9162C37.6662 19.75 38.9975 21.32 38.7113 23.0462Z"
                      fill="#7695FF"
                    />
                    <path
                      d="M51.2499 12.6263V33.75C51.2499 38.575 47.3236 42.5 42.4999 42.5H25.8174L20.8174 47.5H35.2174L41.9824 54.265C42.3315 54.6157 42.777 54.8549 43.2623 54.952C43.7476 55.0491 44.2508 54.9998 44.7081 54.8104C45.1653 54.6211 45.556 54.3001 45.8305 53.8883C46.105 53.4765 46.251 52.9924 46.2499 52.4975V47.5H49.9999C53.4461 47.5 56.2499 44.6963 56.2499 41.25V18.75C56.2475 17.31 55.749 15.9148 54.8383 14.7994C53.9276 13.684 52.6603 12.9165 51.2499 12.6263Z"
                      fill="#2C2E33"
                    />
                  </svg>
                </div>
                <h5 className="title text-center">
                  <a href="#">Happy Clients</a>
                </h5>
                <span className="line" />
                <p className="text-1 text-center">
                  We are not loud, noisy and full of our own self-importance. As
                  your agent we know we work for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
