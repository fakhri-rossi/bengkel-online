"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Wrench,
  Bike,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Mail,
  User,
  Phone,
  ArrowRight,
  Eye,
  EyeOff,
  Sparkles,
  ArrowLeft
} from "lucide-react";

export default function AuthPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"login" | "register">("register");
  const [showPassword, setShowPassword] = useState(false);

  // Register Form States
  const [fullName, setFullName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [motorBrand, setMotorBrand] = useState("");
  const [plateNumber, setPlateNumber] = useState("");
  const [motorCategory, setMotorCategory] = useState("Matic");
  const [motorYear, setMotorYear] = useState("2023");

  // Login Form States
  const [loginIdentifier, setLoginIdentifier] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  // Submission Feedback
  const [successMessage, setSuccessMessage] = useState("");

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage(`Selamat datang ${fullName || "Customer"}! Akun motor [${plateNumber || motorBrand}] berhasil didaftarkan. Mengalihkan ke Buku Servis Digital...`);
    setTimeout(() => {
      router.push("/customer");
    }, 1500);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage(`Login berhasil! Selamat datang kembali. Mengalihkan...`);
    setTimeout(() => {
      router.push("/customer");
    }, 1200);
  };

  const handleDemoCustomerLogin = () => {
    setLoginIdentifier("ahmad@bengkelmotor.com");
    setLoginPassword("********");
    setSuccessMessage("Login otomatis sebagai Demo Customer (Ahmad - Honda Vario 160)...");
    setTimeout(() => {
      router.push("/customer");
    }, 1000);
  };

  const handleDemoAdminLogin = () => {
    setSuccessMessage("Mengalihkan ke Portal Admin Bengkel...");
    setTimeout(() => {
      router.push("/admin");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col justify-between selection:bg-orange-500 selection:text-white">
      {/* Top Simple Header */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 text-xs text-slate-400 hover:text-white transition">
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Beranda BengkelMotor.com</span>
        </Link>

        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-orange-600 flex items-center justify-center font-bold text-white shadow-md shadow-orange-600/30">
            <Wrench className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="font-extrabold text-sm text-white">
            Bengkel<span className="text-orange-500">Motor</span>.com
          </span>
        </div>
      </div>

      {/* Main Center Container */}
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 flex items-center justify-center flex-grow">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Benefits & Value Proposition (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 via-slate-900/90 to-orange-950/20 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold">
                <Bike className="w-3.5 h-3.5" />
                Portal Khusus Customer Motor
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                  Satu Akun untuk Semua Kebutuhan Motor Anda
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">
                  Gabung dengan ribuan pemilik motor yang telah meninggalkan cara lama servis motor yang rumit dan tidak transparan.
                </p>
              </div>

              {/* Benefit List */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Buku Servis Digital Real-time</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Riwayat ganti oli, part mesin, dan bon tersimpan rapi selamanya.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Garansi 30 Hari Tanpa Struk Fisik</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Klaim garansi mudah terhubung langsung ke plat nomor motor Anda.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Pengingat Servis WhatsApp Otomatis</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Dapatkan notifikasi sebelum mesin motor kehabisan oli atau aus.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Diskon Member 15% Booking Perdana</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Potongan jasa servis langsung saat melakukan pemesanan pertama.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Demo Access Bar */}
            <div className="pt-6 mt-6 border-t border-slate-800 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                Tombol Akses Cepat Prototipe:
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handleDemoCustomerLogin}
                  className="py-2 px-3 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-700 text-[11px] font-semibold text-slate-200 transition"
                >
                  ⚡ Demo Customer
                </button>
                <button
                  type="button"
                  onClick={handleDemoAdminLogin}
                  className="py-2 px-3 rounded-xl bg-orange-950/40 hover:bg-orange-900/50 border border-orange-500/40 text-[11px] font-semibold text-orange-300 transition"
                >
                  🔧 Demo Admin
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Auth Form (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl flex flex-col justify-between">
            <div>
              {/* Tab Selector */}
              <div className="flex bg-slate-950 p-1.5 rounded-2xl border border-slate-800 mb-6 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("register");
                    setSuccessMessage("");
                  }}
                  className={`flex-1 py-2.5 rounded-xl transition ${
                    activeTab === "register"
                      ? "bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg shadow-orange-500/20"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Daftar Akun Baru (Customer)
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("login");
                    setSuccessMessage("");
                  }}
                  className={`flex-1 py-2.5 rounded-xl transition ${
                    activeTab === "login"
                      ? "bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg shadow-orange-500/20"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Masuk (Login)
                </button>
              </div>

              {/* Alert Notification */}
              {successMessage && (
                <div className="mb-5 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium flex items-center gap-2 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{successMessage}</span>
                </div>
              )}

              {/* REGISTER TAB */}
              {activeTab === "register" && (
                <form onSubmit={handleRegisterSubmit} className="space-y-4 text-xs">
                  <div>
                    <h3 className="text-base font-bold text-white">Registrasi Customer & Motor</h3>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Daftarkan nomor WhatsApp dan data motor Anda untuk aktivasi Buku Servis Digital.
                    </p>
                  </div>

                  {/* Section 1: Data Diri */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div>
                      <label className="text-slate-300 font-semibold mb-1 block">Nama Lengkap *</label>
                      <div className="relative">
                        <User className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3" />
                        <input
                          type="text"
                          required
                          placeholder="Contoh: Rian Anggara"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-orange-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-slate-300 font-semibold mb-1 block">No. WhatsApp Aktif *</label>
                      <div className="relative">
                        <Phone className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3" />
                        <input
                          type="tel"
                          required
                          placeholder="0812-xxxx-xxxx"
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-orange-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-slate-300 font-semibold mb-1 block">Email *</label>
                      <div className="relative">
                        <Mail className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3" />
                        <input
                          type="email"
                          required
                          placeholder="email@domain.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-orange-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-slate-300 font-semibold mb-1 block">Password *</label>
                      <div className="relative">
                        <Lock className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3" />
                        <input
                          type={showPassword ? "text" : "password"}
                          required
                          placeholder="Minimal 6 karakter"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-10 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-orange-500"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-slate-500 hover:text-slate-300"
                        >
                          {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Data Motor Pertama */}
                  <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800/80 space-y-3 pt-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-orange-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Bike className="w-3.5 h-3.5" /> Data Motor Pertama Anda
                      </span>
                      <span className="text-[10px] text-slate-500">Bisa tambah motor lain nanti</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-slate-300 font-medium mb-1 block">Merk & Model Motor *</label>
                        <input
                          type="text"
                          required
                          placeholder="Misal: Honda Vario 160 / NMAX"
                          value={motorBrand}
                          onChange={(e) => setMotorBrand(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white placeholder-slate-600 focus:outline-none focus:border-orange-500"
                        />
                      </div>

                      <div>
                        <label className="text-slate-300 font-medium mb-1 block">Plat Nomor (NoPol) *</label>
                        <input
                          type="text"
                          required
                          placeholder="B 1234 XYZ"
                          value={plateNumber}
                          onChange={(e) => setPlateNumber(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white placeholder-slate-600 focus:outline-none focus:border-orange-500 uppercase font-mono"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-slate-300 font-medium mb-1 block">Kategori Motor</label>
                        <select
                          value={motorCategory}
                          onChange={(e) => setMotorCategory(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-orange-500"
                        >
                          <option value="Matic">Matic (Scooter)</option>
                          <option value="Bebek">Bebek (Moped)</option>
                          <option value="Sport">Sport / Kopling</option>
                          <option value="EV">Motor Listrik (EV)</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-slate-300 font-medium mb-1 block">Tahun Pembuatan</label>
                        <input
                          type="number"
                          placeholder="2023"
                          value={motorYear}
                          onChange={(e) => setMotorYear(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white placeholder-slate-600 focus:outline-none focus:border-orange-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-xl shadow-orange-500/25 flex items-center justify-center gap-2 transition active:scale-98"
                    >
                      <span>Daftar Akun & Dapatkan Diskon 15%</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}

              {/* LOGIN TAB */}
              {activeTab === "login" && (
                <form onSubmit={handleLoginSubmit} className="space-y-4 text-xs">
                  <div>
                    <h3 className="text-base font-bold text-white">Masuk ke Akun Customer</h3>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Akses jadwal servis, riwayat pengerjaan, dan status montir panggilan Anda.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div>
                      <label className="text-slate-300 font-semibold mb-1 block">Email atau No. WhatsApp *</label>
                      <div className="relative">
                        <User className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3" />
                        <input
                          type="text"
                          required
                          placeholder="email@domain.com atau 0812xxxxxxxx"
                          value={loginIdentifier}
                          onChange={(e) => setLoginIdentifier(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-orange-500"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <label className="text-slate-300 font-semibold">Password *</label>
                        <span className="text-[11px] text-orange-400 hover:underline cursor-pointer">
                          Lupa password?
                        </span>
                      </div>
                      <div className="relative">
                        <Lock className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3" />
                        <input
                          type={showPassword ? "text" : "password"}
                          required
                          placeholder="Masukkan password Anda"
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-10 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-orange-500"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-slate-500 hover:text-slate-300"
                        >
                          {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <label className="flex items-center gap-2 cursor-pointer text-slate-400">
                        <input
                          type="checkbox"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                          className="rounded border-slate-800 text-orange-600 focus:ring-0 bg-slate-950"
                        />
                        <span>Ingat saya di perangkat ini</span>
                      </label>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-xl shadow-orange-500/25 flex items-center justify-center gap-2 transition active:scale-98"
                    >
                      <span>Masuk ke Akun Saya</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            <p className="text-[11px] text-center text-slate-500 pt-6">
              Dengan masuk atau mendaftar, Anda menyetujui Kebijakan Layanan & Garansi BengkelMotor.com
            </p>
          </div>
        </div>
      </div>

      {/* Footer Minimal */}
      <div className="max-w-7xl w-full mx-auto px-4 py-4 text-center text-xs text-slate-600">
        © 2026 BengkelMotor.com • Platform Servis Motor Online & Montir Panggilan
      </div>
    </div>
  );
}
