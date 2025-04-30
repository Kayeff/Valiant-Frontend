import Button from "./Button";

function Section({
  number,
  title,
  subtitle,
  description,
  buttonText,
  children,
}) {
  return (
    <section className="w-full min-h-screen flex items-center justify-center desktop:px-10">
      <div className="w-full flex flex-col items-center justify-center gap-5 desktop:gap-10 p-5">
        <div className="flex flex-col items-center">
          {number && (
            <p className="text-xl small-laptop:text-5xl tracking-tighter text-night/10 leading-5 font-semibold">
              {number}
            </p>
          )}
          {title && (
            <h1 className="text-5xl desktop:text-8xl tracking-tighter text-center uppercase">
              {title}
            </h1>
          )}
          {subtitle && <p className="tracking-tight text-center">{subtitle}</p>}
        </div>
        {description && (
          <p
            className="tracking-tight text-center text-xl desktop:text-4xl"
            // style={{ wordSpacing: 1 }}
          >
            {description}
          </p>
        )}
        {children}
        {buttonText && (
          <div className="flex items-center justify-center">
            <Button>{buttonText}</Button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Section;
