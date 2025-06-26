"use client";
import { useEffect, useState } from "react";

interface Usuario {
  id: number;
  nome: string;
  email: string;
  fone: string;
  data_nascimento: string;
}

export default function TestApiSection() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [form, setForm] = useState({
    nome: "",
    email: "",
    fone: "",
    data_nascimento: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [searchId, setSearchId] = useState("");
  const [userById, setUserById] = useState<Usuario | null>(null);
  const [errorById, setErrorById] = useState("");

  // Buscar todos os usuários
  const fetchUsuarios = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${apiUrl}/`);
      const data = await res.json();
      setUsuarios(Array.isArray(data) ? data : []);
    } catch (err) {
      setError("Erro ao buscar usuários");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsuarios();
    // eslint-disable-next-line
  }, []);

  // Criar usuário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const res = await fetch(`${apiUrl}/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.status === 200) {
        setSuccess("Usuário criado com sucesso!");
        setForm({ nome: "", email: "", fone: "", data_nascimento: "" });
        fetchUsuarios();
      } else {
        setError(typeof data === "string" ? data : "Erro ao criar usuário");
      }
    } catch (err) {
      setError("Erro ao criar usuário");
    }
  };

  // Deletar usuário
  const handleDelete = async (id: number) => {
    setError("");
    setSuccess("");
    try {
      const res = await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (res.status === 200) {
        setSuccess("Usuário deletado!");
        fetchUsuarios();
      } else {
        setError(typeof data === "string" ? data : "Erro ao deletar usuário");
      }
    } catch (err) {
      setError("Erro ao deletar usuário");
    }
  };

  const handleSearchById = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorById("");
    setUserById(null);
    if (!searchId) return;
    try {
      const res = await fetch(`${apiUrl}/${searchId}`);
      const data = await res.json();
      if (res.status === 200 && data) {
        setUserById(data);
      } else {
        setErrorById(typeof data === "string" ? data : "User not found");
      }
    } catch (err) {
      setErrorById("Error searching user by ID");
    }
  };

  return (
    <section id="test-api" className="py-20 px-4 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-3xl mx-auto flex flex-col gap-8 items-center">
        <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300">Testar API do Backend (CRUD Usuários)</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full max-w-md bg-white dark:bg-gray-900 p-6 rounded shadow">
          <input
            type="text"
            placeholder="Nome"
            value={form.nome}
            onChange={e => setForm({ ...form, nome: e.target.value })}
            className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
            required
          />
          <input
            type="text"
            placeholder="Fone"
            value={form.fone}
            onChange={e => setForm({ ...form, fone: e.target.value })}
            className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
            required
          />
          <input
            type="date"
            placeholder="Data de Nascimento"
            value={form.data_nascimento}
            onChange={e => setForm({ ...form, data_nascimento: e.target.value })}
            className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
            required
          />
          <button
            type="submit"
            className="mt-2 px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all text-base"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Criar Usuário"}
          </button>
        </form>
        {error && <div className="text-red-500 font-semibold">{error}</div>}
        {success && <div className="text-green-600 font-semibold">{success}</div>}
        <div className="w-full">
          <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-100">Usuários cadastrados</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-900 rounded shadow text-sm">
              <thead>
                <tr>
                  <th className="px-2 py-1">ID</th>
                  <th className="px-2 py-1">Nome</th>
                  <th className="px-2 py-1">Email</th>
                  <th className="px-2 py-1">Fone</th>
                  <th className="px-2 py-1">Nascimento</th>
                  <th className="px-2 py-1">Ações</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.length === 0 && (
                  <tr>
                    <td colSpan={6} className="text-center py-4 text-gray-500">Nenhum usuário cadastrado.</td>
                  </tr>
                )}
                {usuarios.map((u) => (
                  <tr key={u.id} className="border-t border-gray-200 dark:border-gray-700">
                    <td className="px-2 py-1">{u.id}</td>
                    <td className="px-2 py-1">{u.nome}</td>
                    <td className="px-2 py-1">{u.email}</td>
                    <td className="px-2 py-1">{u.fone}</td>
                    <td className="px-2 py-1">{u.data_nascimento}</td>
                    <td className="px-2 py-1">
                      <button
                        onClick={() => handleDelete(u.id)}
                        className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 transition"
                      >
                        Deletar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Seção: Buscar usuário por ID */}
        <div className="w-full max-w-md bg-white dark:bg-gray-900 p-6 rounded shadow flex flex-col gap-2 mt-8">
          <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-100">Search User by ID</h3>
          <form onSubmit={handleSearchById} className="flex gap-2 mb-2">
            <input
              type="number"
              placeholder="User ID"
              value={searchId}
              onChange={e => setSearchId(e.target.value)}
              className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 w-full"
              required
            />
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Search</button>
          </form>
          {errorById && <div className="text-red-500 font-semibold">{errorById}</div>}
          {userById && (
            <div className="bg-gray-50 dark:bg-gray-800 rounded p-4 mt-2">
              <div><b>ID:</b> {userById.id}</div>
              <div><b>Name:</b> {userById.nome}</div>
              <div><b>Email:</b> {userById.email}</div>
              <div><b>Phone:</b> {userById.fone}</div>
              <div><b>Birthdate:</b> {userById.data_nascimento}</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 