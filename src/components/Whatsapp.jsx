import React from "react";

const Whatsapp = () => {
  return (
    <section className="text-center p-2">
      <h1 className="text-2xl md:text-3xl font-bold text-orange mb-5">
        Join the WhatsApp group to coordinate for Shivasis' birthday:
      </h1>

      <a
        href="https://chat.whatsapp.com/CWmx4QGqP6F2VXpUAitwSz"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green text-lg md:text-xl font-semibold  hover:text-green-600 transition-colors"
      >
        Join WhatsApp Group
      </a>
    </section>
  );
};

export default Whatsapp;
