import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Header / Hero Section */}
      <header className="bg-white border-b border-slate-200 py-16 px-6 sm:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Portafolio Profesional
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Desarrollador Full-Stack Jr.
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Apasionado por el desarrollo de software, la creación de interfaces web limpias y funcionales, y la ciberseguridad (DevSecOps).
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#proyectos"
              className="bg-[#5E7C64] hover:bg-[#4d6652] text-white font-medium px-6 py-3 rounded-lg shadow transition"
            >
              Ver Proyectos
            </a>
            <a
              href="https://github.com/javrstudent-sys"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-medium px-6 py-3 rounded-lg transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      {/* Main Content / Proyectos */}
      <main id="proyectos" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b pb-3">
          Mis Proyectos Destacados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Proyecto 1: Boupetique */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-md transition">
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-slate-900">Boupetique</h3>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  E-commerce
                </span>
              </div>
              <p className="text-slate-600 text-sm mb-4">
                Panel de administración y gestión de productos para tienda de mascotas. Incluye validación de formularios en tiempo real, manejo de localStorage y vistas dinámicas.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded">HTML5</span>
                <span className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded">Bootstrap 5</span>
                <span className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded">JavaScript (ES6+)</span>
              </div>
            </div>
            <div className="px-6 pb-6 pt-0">
              <a
                href="#"
                className="text-emerald-700 hover:text-emerald-800 font-semibold text-sm inline-flex items-center gap-1"
              >
                Ver detalles &rarr;
              </a>
            </div>
          </div>

          {/* Proyecto 2: Módulo de Registro y Autenticación */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-md transition">
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-slate-900">Sistema de Registro</h3>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Seguridad y Usuarios
                </span>
              </div>
              <p className="text-slate-600 text-sm mb-4">
                Módulo completo de registro de cuentas y perfiles de mascotas con validaciones estrictas de seguridad, control de contraseñas y alertas interactivas.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded">JavaScript</span>
                <span className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded">SweetAlert2</span>
                <span className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded">CSS Custom</span>
              </div>
            </div>
            <div className="px-6 pb-6 pt-0">
              <a
                href="#"
                className="text-emerald-700 hover:text-emerald-800 font-semibold text-sm inline-flex items-center gap-1"
              >
                Ver detalles &rarr;
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} • Creado con Next.js y desplegado en Vercel.</p>
      </footer>
    </div>
  );
}
