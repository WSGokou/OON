export default function ProductLayout({ children, params }) {
  return (
    <section className="pt-10 pb-12 px-40 flex flex-col border-5 border-green-400">
      <h1 className="mb-4 text-4xl font-bold uppercase">{params.category}</h1>
      {children}
    </section>
  );
}
