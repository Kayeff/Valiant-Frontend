const ContactMap = () => {
  return (
    <div className="w-full border border-night/20 rounded-2xl flex items-center justify-center">
      <div className="w-full flex items-center justify-center flex-col rounded-t-2xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.0571553161526!2d72.98685030000001!3d21.150123600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be05b5dd3d7f1c3%3A0xda6a330fdd9c601!2sStreet%20No%208%2C%20Tantithaiya%2C%20Gujarat%20394305!5e0!3m2!1sen!2sin!4v1745513198622!5m2!1sen!2sin"
          className="w-full h-96 border-0 object-cover rounded-t-2xl"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
          loading="lazy"
        />
        <div className="w-full flex items-center justify-center bg-night text-whitesmoke p-5 rounded-b-2xl">
          <h1 className="tracking-tight">
            Street No 8, Tantithaiya, Gujarat 394305
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
