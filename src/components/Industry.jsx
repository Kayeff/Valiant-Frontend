export default function Industry({ industry }) {
  return (
    <div className="border border-night/20 flex flex-col-reverse tablet-p:grid tablet-p:grid-cols-4 desktop:gap-10">
      <div className="col-span-2 w-full flex flex-col gap-2 p-4">
        <h1 className="text-3xl tablet-p:text-5xl tracking-tighter desktop:text-7xl">
          {industry.id}. {industry.name}
        </h1>
        <p className="tracking-tight text-sm tablet-p:text-lg text-night/80 desktop:text-xl">
          {industry.description}
        </p>
      </div>
      <img
        className="h-96 w-full object-cover col-span-2"
        src={industry.img}
        alt={industry.name}
        loading="lazy"
      />
    </div>
  );
}
