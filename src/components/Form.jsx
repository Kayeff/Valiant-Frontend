import Button from "./Button";

export default function Form() {
  return (
    <form className="w-full p-4 flex items-start justify-between flex-col bg-whitesmoke border border-night/20 rounded-2xl gap-4">
      <div className="w-full flex flex-col desktop:grid desktop:grid-cols-2 gap-3">
        <div className="w-full flex flex-col gap-0.5">
          <label
            htmlFor="userName"
            className="tracking-tight text-sm tablet-p:text-base desktop:text-lg"
          >
            Name
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            placeholder="Enter your name"
            className="tracking-tight border border-night/20 outline-none p-2 rounded-md text-sm tablet-p:text-base"
          />
        </div>
        <div className="w-full flex flex-col gap-0.5">
          <label
            htmlFor="phoneNumber"
            className="tracking-tight text-sm tablet-p:text-base desktop:text-lg"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="+91 1234567890"
            className="tracking-tight border border-night/20 outline-none p-2 rounded-md text-sm tablet-p:text-base"
          />
        </div>
        <div className="flex flex-col gap-0.5 desktop:col-span-2">
          <label
            htmlFor="userEmail"
            className="tracking-tight text-sm tablet-p:text-base desktop:text-lg"
          >
            Email
          </label>
          <input
            type="email"
            id="userEmail"
            name="userEmail"
            placeholder="someone@example.com"
            className="tracking-tight border border-night/20 outline-none p-2 rounded-md text-sm tablet-p:text-base"
          />
        </div>
        <div className="flex flex-col gap-0.5 desktop:col-span-2">
          <label
            htmlFor="message"
            className="tracking-tight text-sm tablet-p:text-base desktop:text-lg"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Type your message here.."
            className="tracking-tight border border-night/20 outline-none p-2 rounded-md h-32 resize-none text-sm tablet-p:text-base"
          />
        </div>
      </div>
      <div className="col-span-2 w-full flex items-center justify-end">
        <Button className="px-10">Submit</Button>
      </div>
    </form>
  );
}
