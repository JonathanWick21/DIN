function InterpretePeli10({ foto, nombre, esNota10, children }) {
  return (
    <article
      tabIndex="0"
      aria-label={`Intérprete ${nombre}${esNota10 ? ', destacado' : ''}`} 
      className="flex flex-col items-center gap-3 p-4 rounded-lg shadow-md bg-white max-w-[320px] mx-auto"
    >
      <figure className="w-full aspect-square rounded-lg bg-gray-100 overflow-hidden">
        <img
          src={foto}
          alt={`Foto de ${nombre}`}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <figcaption className="sr-only">{children}</figcaption>
      </figure>

      <div className="pt-5 text-center">
        <header>
          <h2>
            <strong>{nombre}</strong>
            {esNota10 && <em> – Intérprete destacado</em>}
          </h2>
        </header>
        <p className="text-sm text-gray-600">{children}</p>
      </div>
    </article>
  );
}

export default InterpretePeli10;
