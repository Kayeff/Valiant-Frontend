export default function Industry({ industry }) {
  return (
    <div className="border border-night/20 grid grid-cols-4 gap-4">
      <div className="col-span-2 w-full flex flex-col gap-5 p-10">
        <h1 className="text-8xl tracking-tighter leading-20">
          {industry.id}. {industry.name}
        </h1>
        <p className="tracking-tight text-lg">{industry.description}</p>
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
