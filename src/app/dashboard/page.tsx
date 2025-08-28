"use client";
import React, { useMemo, useState } from "react";

type User = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "editor" | "viewer";
};

const mockUsers: User[] = [
  { id: "1", name: "Alice Johnson", email: "alice@example.com", role: "admin" },
  { id: "2", name: "Bob Lee", email: "bob@example.com", role: "editor" },
  { id: "3", name: "Cara Smith", email: "cara@example.com", role: "viewer" },
  { id: "4", name: "Derek Young", email: "derek@example.com", role: "viewer" },
];

type SortKey = "name" | "email" | "role";

type ModalUser = {
  id?: string;
  name: string;
  email: string;
  role: "admin" | "editor" | "viewer";
};

export default function Dashboard() {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [query, setQuery] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("name");
  const [sortAsc, setSortAsc] = useState(true);
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<ModalUser | null>(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return users.filter(u =>
      !q || u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q) || u.role.toLowerCase().includes(q)
    );
  }, [users, query]);

  const sorted = useMemo(() => {
    const copy = [...filtered];
    copy.sort((a, b) => {
      const aValue = a[sortKey];
      const bValue = b[sortKey];
      const compareResult = String(aValue).localeCompare(String(bValue));
      return sortAsc ? compareResult : -compareResult;
    });
    return copy;
  }, [filtered, sortKey, sortAsc]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const paged = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return sorted.slice(start, start + pageSize);
  }, [sorted, currentPage]);

  const openCreate = () => {
    setEditing({ name: "", email: "", role: "viewer" });
    setModalOpen(true);
  };
  const openEdit = (id: string) => {
    const u = users.find(x => x.id === id);
    if (!u) return;
    setEditing({ id: u.id, name: u.name, email: u.email, role: u.role });
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setEditing(null);
  };
  const saveUser = () => {
    if (!editing) return;
    if (!editing.name.trim() || !editing.email.trim()) return;
    if (editing.id) {
      setUsers(prev => prev.map(u => (u.id === editing.id ? { ...u, name: editing.name, email: editing.email, role: editing.role } : u)));
    } else {
      setUsers(prev => [{ id: String(Date.now()), name: editing.name, email: editing.email, role: editing.role }, ...prev]);
    }
    closeModal();
  };
  const deleteUser = (id: string) => {
    const ok = confirm("Delete this user?");
    if (!ok) return;
    setUsers(prev => prev.filter(u => u.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-xl md:text-2xl font-bold tracking-tight">Dashboard</h1>
            <nav className="hidden md:block text-sm text-gray-500">/ Overview</nav>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">🔎</span>
              <input value={query} onChange={e => { setQuery(e.target.value); setPage(1); }} placeholder="Search..." className="rounded-md border border-gray-300 pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/20" />
            </div>
            <button onClick={openCreate} className="rounded-md bg-black px-3 py-2 text-white hover:bg-sky-700 shadow-sm">New</button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sidebar */}
        <aside className="lg:col-span-3">
          <nav className="rounded-xl border bg-white p-4">
            <ul className="space-y-1 text-sm">
              <li><a className="block rounded-md px-3 py-2 bg-gray-100" href="#">Overview</a></li>
              <li><a className="block rounded-md px-3 py-2 hover:bg-gray-50" href="#">Users</a></li>
              <li><a className="block rounded-md px-3 py-2 hover:bg-gray-50" href="#">Settings</a></li>
              <li><a className="block rounded-md px-3 py-2 hover:bg-gray-50" href="#">Billing</a></li>
            </ul>
          </nav>
          <div className="mt-6 rounded-xl border bg-white p-4">
            <h3 className="text-sm font-semibold">Quick tips</h3>
            <p className="mt-2 text-sm text-gray-600">Invite team members and assign roles to collaborate efficiently.</p>
          </div>
        </aside>

        {/* Main */}
        <main className="lg:col-span-9 space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-xl border bg-white p-4 shadow-sm">
              <p className="text-xs text-gray-500">Total Users</p>
              <p className="mt-2 text-2xl font-bold">1,248</p>
              <p className="text-xs text-green-600 mt-1">+4.1% this week</p>
            </div>
            <div className="rounded-xl border bg-white p-4 shadow-sm">
              <p className="text-xs text-gray-500">Active Sessions</p>
              <p className="mt-2 text-2xl font-bold">312</p>
              <p className="text-xs text-green-600 mt-1">+2.4%</p>
            </div>
            <div className="rounded-xl border bg-white p-4 shadow-sm">
              <p className="text-xs text-gray-500">Conversion</p>
              <p className="mt-2 text-2xl font-bold">3.8%</p>
              <p className="text-xs text-red-600 mt-1">-0.3%</p>
            </div>
            <div className="rounded-xl border bg-white p-4 shadow-sm">
              <p className="text-xs text-gray-500">Revenue</p>
              <p className="mt-2 text-2xl font-bold">$12.4k</p>
              <p className="text-xs text-green-600 mt-1">+8.7%</p>
            </div>
          </div>

          {/* Users table */}
          <div className="rounded-xl border bg-white shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 py-3 border-b">
              <h2 className="text-sm font-semibold">Users</h2>
              <div className="flex items-center gap-2">
                <label className="text-xs text-gray-500">Sort</label>
                <select value={sortKey} onChange={e => { setSortKey(e.target.value as SortKey); setPage(1); }} className="rounded-md border border-gray-300 px-2 py-1 text-sm">
                  <option value="name">Name</option>
                  <option value="email">Email</option>
                  <option value="role">Role</option>
                </select>
                <button onClick={() => setSortAsc(s => !s)} className="rounded-md border px-2 py-1 text-sm">{sortAsc ? "Asc" : "Desc"}</button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 sticky top-0 z-10">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                    <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {paged.map((u) => (
                    <tr key={u.id} className="hover:bg-gray-50">
                      <td className="px-4 py-2 text-sm text-gray-900">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-600">
                            {u.name.split(" ").map(n => n[0]).slice(0,2).join("")}
                          </div>
                          <span>{u.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-600">{u.email}</td>
                      <td className="px-4 py-2 text-sm">
                        <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium 
                          ${u.role === 'admin' ? 'bg-red-50 text-red-700' : u.role === 'editor' ? 'bg-blue-50 text-blue-700' : 'bg-gray-100 text-gray-800'}`}>
                          {u.role}
                        </span>
                      </td>
                      <td className="px-4 py-2 text-right text-sm">
                        <div className="inline-flex gap-2">
                          <button onClick={() => openEdit(u.id)} className="rounded-md border px-3 py-1 text-gray-700 hover:bg-gray-50">Edit</button>
                          <button onClick={() => deleteUser(u.id)} className="rounded-md bg-red-600 px-3 py-1 text-white hover:bg-red-700">Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {paged.length === 0 && (
                    <tr>
                      <td colSpan={4} className="px-4 py-8 text-center text-sm text-gray-500">No users found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-between px-4 py-3 border-t text-sm">
              <span className="text-gray-500">Page {currentPage} of {totalPages}</span>
              <div className="space-x-2">
                <button onClick={() => setPage(p => Math.max(1, p - 1))} className="rounded-md border px-3 py-1 disabled:opacity-50" disabled={currentPage === 1}>Prev</button>
                <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} className="rounded-md border px-3 py-1 disabled:opacity-50" disabled={currentPage === totalPages}>Next</button>
              </div>
            </div>
          </div>
        </main>
      </div>
      {modalOpen && (
        <div className="fixed inset-0 z-20 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/30" onClick={closeModal} />
          <div className="relative z-30 w-full max-w-md rounded-xl border bg-white p-5 shadow-xl">
            <h3 className="text-lg font-semibold mb-3">{editing?.id ? "Edit user" : "Create user"}</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input value={editing?.name || ""} onChange={e => setEditing(prev => ({ ...(prev as ModalUser), name: e.target.value }))} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/20" />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input type="email" value={editing?.email || ""} onChange={e => setEditing(prev => ({ ...(prev as ModalUser), email: e.target.value }))} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/20" />
              </div>
              <div>
                <label className="block text-sm font-medium">Role</label>
                <select value={editing?.role || "viewer"} onChange={e => setEditing(prev => ({ ...(prev as ModalUser), role: e.target.value as ModalUser["role"] }))} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/20">
                  <option value="admin">Admin</option>
                  <option value="editor">Editor</option>
                  <option value="viewer">Viewer</option>
                </select>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-end gap-2">
              <button onClick={closeModal} className="rounded-md border px-4 py-2 hover:bg-gray-50">Cancel</button>
              <button onClick={saveUser} className="rounded-md bg-black px-4 py-2 text-white hover:bg-sky-700 shadow-sm">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


