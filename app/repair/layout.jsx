import { RepairContextProvider } from "../(Context)/repair";

export default function OrderLayout({ children }) {
  return (
    <section>
      <RepairContextProvider>
        <div>{children}</div>
      </RepairContextProvider>
    </section>
  );
}
