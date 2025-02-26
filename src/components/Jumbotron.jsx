import PropTypes from "prop-types";

const Jumbotron = ({ title, description, buttonText, buttonLink, bgImage }) => {
  return (
    <section
      className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh]"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start gap-6 px-6 sm:px-12 lg:px-24">
        <h1 className="text-2xl font-extrabold text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="text-gray-300 text-sm sm:text-lg lg:text-xl max-w-full sm:max-w-[70%]">
          {description}
        </p>
        {buttonText && buttonLink && (
          <a
            href={buttonLink}
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-primary-base rounded-lg "
          >
            {buttonText}
            <svg
              className="w-4 h-4 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        )}
      </div>
    </section>
  );
};

Jumbotron.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  bgImage: PropTypes.string.isRequired,
};

Jumbotron.defaultProps = {
  buttonText: null,
  buttonLink: null,
};

export default Jumbotron;
