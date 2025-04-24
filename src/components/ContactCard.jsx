export default function ContactCard({ link }) {
  return (
    <div className="border border-night/20 w-full p-4 rounded-xl flex items-center justify-between flex-col gap-10 hover:bg-night/5 duration-300 group cursor-default">
      <div className="w-full flex items-center justify-start">
        <div className="border border-night/20 p-1.5 w-max rounded-md">
          <img className="size-7" src={link.icon} alt={link.id} />
        </div>
      </div>
      <div className="w-full flex flex-col gap-4">
        <div className="flex flex-col">
          <h1 className="text-xl tracking-tight font-medium">{link.type}</h1>
          <p className="tracking-tight text-night/70">{link.desc}</p>
        </div>
        <a
          href={link.href}
          target="_blank"
          className="p-2 px-3 rounded-md border border-night/20 w-max group-hover:border-night duration-300 hover:bg-night hover:text-whitesmoke"
        >
          <span className="tracking-tight">{link.typeID}</span>
        </a>
      </div>
    </div>
  );
}
