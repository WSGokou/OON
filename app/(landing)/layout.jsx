export default function Layout({ children }) {
  return (
    <section className="border border-green-400">
      <h1>Top section</h1>
      {children}
    </section>
  );
}
