import React from "react";
export function Footer({}) {
  return (
    <section className="grid items-center justify-center text-center h-16 bg-slate-800 text-white">
      <p>
        Feito com ❤️ por{" "}
        <a
          className="text-green-500 hover:border-b-2 hover:border-green-500"
          href="http://llxd.ml/"
        >
          LL
        </a>
      </p>
    </section>
  );
}
