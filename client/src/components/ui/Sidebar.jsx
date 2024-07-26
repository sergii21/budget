export default function Sidebar({ onSelectMenuItem }) {
  return (
    <aside className="w-1/5 max-w-96 min-w-28 py-6 px-3 bg-slate-800 ml-auto">
      <menu>
        <li onClick={onSelectMenuItem}>Monthly</li>
      </menu>
    </aside>
  );
}
