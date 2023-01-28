export const Hero = () => {
  return (
    <>
      <section className="h-[90vh] grid grid-cols-1 md:grid-cols-8">
        <div className="md:col-span-3">Imagen </div>

        <div className="flex items-center md:col-span-5 md:w-2/3 px-8">
          <div>
            <p className="font-bodyFont">Hola, soy John</p>
            <h2 className="font-headerFont">
              Desarrollador Frontend / Emprendedor
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};
