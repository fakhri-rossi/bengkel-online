"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceEstimator from "@/components/ServiceEstimator";
import BookingModal from "@/components/BookingModal";
import {
  Wrench,
  Bike,
  ShieldAlert,
  ShieldCheck,
  Clock,
  Sparkles,
  MapPin,
  CheckCircle2,
  PhoneCall,
  ArrowRight,
  Star,
  Settings,
  BatteryCharging,
  Zap,
  Gauge,
  HelpCircle,
  ChevronDown,
  FileText,
  UserCheck
} from "lucide-react";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"regular" | "emergency">("regular");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const openBooking = (type: "regular" | "emergency") => {
    setModalType(type);
    setModalOpen(true);
  };

  const FAQS = [
    {
      q: "Bagaimana cara kerja Montir Panggilan ke rumah atau saat mogok di jalan?",
      a: "Anda cukup klik tombol 'Panggil Montir' atau hubungi WhatsApp kami. Sebutkan merk motor, keluhan, dan titik lokasi Anda. Sistem kami akan menugaskan montir terdekat yang siap membawa peralatan lengkap dan suku cadang yang dibutuhkan dalam 20-30 menit.",
    },
    {
      q: "Apakah suku cadang (sparepart) dan oli yang digunakan dijamin asli?",
      a: "100% Asli dan Bergaransi Resmi. BengkelMotor.com bermitra langsung dengan distributor resmi ATPM seperti AHM Honda, Yamaha Genuine Parts, Motul, Shell, Bendix, dan GS Astra. Botol oli selalu dibuka di depan Anda.",
    },
    {
      q: "Bagaimana dengan garansi setelah servis pengerjaan?",
      a: "Semua pengerjaan servis berkala dan perbaikan mekanik mendapatkan Garansi Servis 30 Hari. Jika kendala yang sama berulang, teknisi kami akan memeriksa kembali tanpa biaya jasa tambahan.",
    },
    {
      q: "Metode pembayaran apa saja yang diterima?",
      a: "Kami menerima pembayaran tunai (cash) langsung ke montir, transfer bank via Virtual Account, serta scan QRIS (GoPay, OVO, Dana, ShopeePay, Mobile Banking) saat pekerjaan selesai di tempat.",
    },
    {
      q: "Apa keuntungan mendaftar akun Customer di BengkelMotor.com?",
      a: "Dengan mendaftar, Anda memiliki Buku Servis Digital motor Anda. Sistem otomatis mencatat riwayat servis, penggantian sparepart, jadwal ganti oli berkala, serta memudahkan klaim garansi cukup dengan menyebutkan nomor plat motor.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative pt-12 pb-20 overflow-hidden border-b border-slate-800/60 bg-gradient-to-b from-slate-950 via-[#0d131f] to-[#0b0f17]">
          {/* Subtle background glow effects */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-orange-600/10 blur-[130px] rounded-full pointer-events-none"></div>
          <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Guest Welcome Banner */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs text-slate-300 mb-6 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-orange-500"></span>
              <span>Portal Bengkel Motor Digital #1 di Indonesia</span>
              <span className="text-slate-500">|</span>
              <span className="text-orange-400 font-semibold">Tampilan Pengunjung (Guest)</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Headline & Action */}
              <div className="lg:col-span-7 space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
                  Servis Motor Nyaman, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">
                    Transparan & Montir Siap ke Lokasi
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                  Selamat datang di <strong>BengkelMotor.com</strong>. Ganti oli, servis berkala, hingga perbaikan darurat saat mogok di jalan. Cek estimasi biaya di awal tanpa biaya siluman, bergaransi 30 hari.
                </p>

                {/* Primary CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <button
                    onClick={() => openBooking("regular")}
                    className="px-7 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 flex items-center justify-center gap-2.5 transition active:scale-95 cursor-pointer"
                  >
                    <Wrench className="w-5 h-5" />
                    Booking Servis Terjadwal
                  </button>

                  <button
                    onClick={() => openBooking("emergency")}
                    className="px-6 py-4 rounded-xl text-base font-bold text-white bg-rose-600/90 hover:bg-rose-600 border border-rose-500/50 shadow-xl shadow-rose-600/20 flex items-center justify-center gap-2.5 transition active:scale-95 cursor-pointer"
                  >
                    <ShieldAlert className="w-5 h-5 text-rose-300 animate-pulse" />
                    Montir Darurat 24 Jam (SOS)
                  </button>
                </div>

                {/* Quick Trust Badges */}
                <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Garansi 30 Hari</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Sparepart 100% Asli</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Montir Bersertifikasi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Buku Servis Digital</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Feature Box */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl p-1 bg-gradient-to-b from-orange-500/40 via-slate-800 to-slate-900 shadow-2xl">
                  <div className="bg-slate-950/90 rounded-2xl p-6 space-y-5 backdrop-blur-xl">
                    <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold">
                          <Bike className="w-5 h-5" />
                        </div>
                        <div>
                          <h2 className="text-sm font-bold text-white">Status Layanan Hari Ini</h2>
                          <p className="text-xs text-slate-400">Pembaruan sistem real-time</p>
                        </div>
                      </div>
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                        Operasional Normal
                      </span>
                    </div>

                    {/* Stats Metric */}
                    <div className="grid grid-cols-2 gap-3 text-left">
                      <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                        <div className="text-2xl font-black text-white">32</div>
                        <div className="text-xs text-slate-400 mt-0.5">Montir Siaga Aktif</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                        <div className="text-2xl font-black text-orange-400">&lt; 28 mnt</div>
                        <div className="text-xs text-slate-400 mt-0.5">Rata-rata Respon SOS</div>
                      </div>
                    </div>

                    {/* Highlight Card for Customer Digital Book */}
                    <div className="p-4 rounded-xl bg-gradient-to-r from-slate-900 to-slate-900/60 border border-orange-500/30 space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20">
                            Fitur Baru Pelanggan
                          </span>
                          <h3 className="text-sm font-bold text-white mt-1.5">Buku Servis Digital Terintegrasi</h3>
                          <p className="text-xs text-slate-400 mt-0.5">
                            Daftar akun sekarang dan dapatkan riwayat servis terhubung langsung dengan nomor plat motor Anda.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xs text-slate-300 font-medium">Gratis untuk semua pemilik motor</span>
                        <Link
                          href="/auth"
                          className="text-xs font-bold text-orange-400 hover:text-orange-300 flex items-center gap-1"
                        >
                          Daftar Akun <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                    {/* Admin Portal Teaser Link */}
                    <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-slate-300">
                        <Settings className="w-4 h-4 text-slate-400" />
                        <span>Pemilik / Pengelola Bengkel?</span>
                      </div>
                      <Link
                        href="/admin"
                        className="text-orange-400 hover:underline font-semibold"
                      >
                        Lihat Portal Admin →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EMERGENCY ROADSIDE ASSISTANCE STRIP (SOS) */}
        <section id="montir-panggilan" className="py-12 bg-gradient-to-r from-red-950/40 via-slate-900 to-orange-950/40 border-b border-red-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-red-900/30 via-slate-900 to-orange-900/30 border border-red-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-300 text-xs font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                    Layanan Darurat Jalanan 24 Jam
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                    Motor Tiba-tiba Mogok di Jalan? <br className="hidden sm:inline" />
                    <span className="text-red-400">Jangan Panik, Montir Kami Segera Tiba!</span>
                  </h2>
                  <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                    Tim Rescue BengkelMotor.com siaga 24 jam untuk menangani kendala darurat: Aki drop / mati total, ban bocor tubeless, putus v-belt matic, rantai putus, kehabisan bensin, hingga derek towing ke bengkel.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-300 pt-2">
                    <div className="bg-slate-950/70 p-2.5 rounded-xl border border-red-900/50">
                      <span className="font-bold text-white block">Aki & Jumper</span>
                      <span className="text-slate-400 text-[11px]">Siap antar pasang</span>
                    </div>
                    <div className="bg-slate-950/70 p-2.5 rounded-xl border border-red-900/50">
                      <span className="font-bold text-white block">Tambal Tubeless</span>
                      <span className="text-slate-400 text-[11px]">Metode press kuat</span>
                    </div>
                    <div className="bg-slate-950/70 p-2.5 rounded-xl border border-red-900/50">
                      <span className="font-bold text-white block">V-Belt & Pulley</span>
                      <span className="text-slate-400 text-[11px]">Suku cadang ready</span>
                    </div>
                    <div className="bg-slate-950/70 p-2.5 rounded-xl border border-red-900/50">
                      <span className="font-bold text-white block">Towing 24 Jam</span>
                      <span className="text-slate-400 text-[11px]">Pick up aman</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-3">
                  <button
                    onClick={() => openBooking("emergency")}
                    className="w-full py-4 px-6 rounded-2xl font-black text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 shadow-2xl shadow-red-600/40 flex items-center justify-center gap-3 transition active:scale-95 cursor-pointer text-center text-sm"
                  >
                    <PhoneCall className="w-5 h-5 animate-bounce" />
                    PANGGIL MONTIR SEKARANG
                  </button>

                  <a
                    href="https://wa.me/6281234567890?text=Halo%20BengkelMotor.com,%20saya%20butuh%20bantuan%20darurat%20motor%20mogok"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3.5 px-6 rounded-2xl font-bold text-white bg-slate-950 hover:bg-slate-900 border border-slate-700 flex items-center justify-center gap-2 transition text-xs"
                  >
                    <span>Hubungi Hotline WhatsApp 24 Jam</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LAYANAN UTAMA SECTION */}
        <section id="layanan" className="py-20 border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-bold tracking-widest text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                Layanan Komprehensif
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
                Layanan Servis & Perawatan Motor Modern
              </h2>
              <p className="mt-3 text-slate-400 text-sm sm:text-base">
                Pilih kemudahan servis motor sesuai kebutuhan Anda. Teknisi handal dengan SOP ketat dan diagnosa komputer presisi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="glass-panel glass-panel-hover rounded-2xl p-7 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
                    <Bike className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Montir Panggilan (Home Service)</h3>
                    <p className="text-xs text-slate-400 mt-1">Servis berkala atau perbaikan langsung di teras rumah atau kantor Anda.</p>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-center gap-2">• Montir bawa peralatan lengkap & suku cadang</li>
                    <li className="flex items-center gap-2">• Anda bisa tetap bekerja atau istirahat santai</li>
                    <li className="flex items-center gap-2">• Bebas antre di bengkel yang panas</li>
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 block">Biaya Jasa Mulai:</span>
                    <span className="text-base font-black text-orange-400">Rp 65.000</span>
                  </div>
                  <button
                    onClick={() => openBooking("regular")}
                    className="px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs transition"
                  >
                    Booking
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="glass-panel glass-panel-hover rounded-2xl p-7 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Servis Injeksi & Reset ECU</h3>
                    <p className="text-xs text-slate-400 mt-1">Kalibrasi sistem bahan bakar dan diagnosa elektrikal komputer scanner.</p>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-center gap-2">• Pembersihan ultrasonic injector nozzle</li>
                    <li className="flex items-center gap-2">• Cek sensor TPS, O2 sensor & throttle body</li>
                    <li className="flex items-center gap-2">• Tarikan motor kembali responsif & irit bensin</li>
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 block">Biaya Jasa Mulai:</span>
                    <span className="text-base font-black text-amber-400">Rp 55.000</span>
                  </div>
                  <button
                    onClick={() => openBooking("regular")}
                    className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition border border-slate-700"
                  >
                    Booking
                  </button>
                </div>
              </div>

              {/* Card 3 */}
              <div className="glass-panel glass-panel-hover rounded-2xl p-7 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                    <Gauge className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Servis CVT Matic Bebas Gredek</h3>
                    <p className="text-xs text-slate-400 mt-1">Pembersihan mangkok ganda, roller, pulley, dan pemberian grease tahan panas.</p>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-center gap-2">• Hilangkan getaran 'gredek' pada tarikan awal</li>
                    <li className="flex items-center gap-2">• Pemeriksaan ketebalan kampas ganda & v-belt</li>
                    <li className="flex items-center gap-2">• Pelumasan khusus CVT standar pabrikan</li>
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 block">Biaya Jasa Mulai:</span>
                    <span className="text-base font-black text-sky-400">Rp 50.000</span>
                  </div>
                  <button
                    onClick={() => openBooking("regular")}
                    className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition border border-slate-700"
                  >
                    Booking
                  </button>
                </div>
              </div>

              {/* Card 4 */}
              <div className="glass-panel glass-panel-hover rounded-2xl p-7 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <BatteryCharging className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Servis Motor Listrik (EV Diagnostic)</h3>
                    <p className="text-xs text-slate-400 mt-1">Spesialis perawatan battery health, controller, motor BLDC & kabel body.</p>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-center gap-2">• Diagnosa cell balance baterai lithium</li>
                    <li className="flex items-center gap-2">• Pengecekan rem regeneratif & sensor throttle</li>
                    <li className="flex items-center gap-2">• Siap untuk Polytron, Alva, Gesits, Volta, Smoot</li>
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 block">Biaya Jasa Mulai:</span>
                    <span className="text-base font-black text-emerald-400">Rp 80.000</span>
                  </div>
                  <button
                    onClick={() => openBooking("regular")}
                    className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition border border-slate-700"
                  >
                    Booking
                  </button>
                </div>
              </div>

              {/* Card 5 */}
              <div className="glass-panel glass-panel-hover rounded-2xl p-7 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Fast Pit-Stop Ganti Oli & Aki</h3>
                    <p className="text-xs text-slate-400 mt-1">Layanan cepat 15 menit dengan cek 10 titik vital keselamatan berkendara.</p>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-center gap-2">• Pilihan oli lengkap original (AHM, Motul, Shell)</li>
                    <li className="flex items-center gap-2">• Gratis cek kampas rem & tekanan angin ban</li>
                    <li className="flex items-center gap-2">• Tes voltase alternator pengisian aki</li>
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 block">Biaya Jasa Mulai:</span>
                    <span className="text-base font-black text-indigo-400">Rp 20.000</span>
                  </div>
                  <button
                    onClick={() => openBooking("regular")}
                    className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition border border-slate-700"
                  >
                    Booking
                  </button>
                </div>
              </div>

              {/* Card 6 */}
              <div className="glass-panel glass-panel-hover rounded-2xl p-7 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Towing & Storing Motor 24 Jam</h3>
                    <p className="text-xs text-slate-400 mt-1">Armada towing hidrolik aman khusus sepeda motor saat mogok parah atau kecelakaan.</p>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-center gap-2">• Perlengkapan pengikat (strapping) anti lecet</li>
                    <li className="flex items-center gap-2">• Antar langsung ke rumah atau bengkel rujukan</li>
                    <li className="flex items-center gap-2">• Siaga di jalan protokol & jalur luar kota</li>
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 block">Tarif Mulai:</span>
                    <span className="text-base font-black text-rose-400">Rp 150.000</span>
                  </div>
                  <button
                    onClick={() => openBooking("emergency")}
                    className="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs transition"
                  >
                    Panggil Derek
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EMBEDDED SERVICE ESTIMATOR */}
        <ServiceEstimator
          onBookNow={(summary) => {
            setModalType("regular");
            setModalOpen(true);
          }}
        />

        {/* KATALOG SPAREPART POPULER */}
        <section id="sparepart" className="py-20 bg-slate-950/60 border-y border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                  Jaminan Asli 100%
                </span>
                <h2 className="text-3xl font-extrabold text-white tracking-tight mt-3">
                  Suku Cadang & Pelumas Terverifikasi
                </h2>
                <p className="text-slate-400 text-sm mt-1">
                  Beli sparepart sekalian dipasang oleh montir langsung di rumah Anda tanpa repot.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                  Semua Produk OEM & Aftermarket Resmi
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  name: "Motul Scooter Expert LE 10W-30 (1L)",
                  brand: "Motul Genuine",
                  type: "Pelumas Matic Semi-Synthetic",
                  price: "Rp 85.000",
                  tag: "Terlaris",
                },
                {
                  name: "AHM Oil SPX2 Full Synthetic (0.8L)",
                  brand: "Honda OEM",
                  type: "Pelumas Matic Honda",
                  price: "Rp 68.000",
                  tag: "Original AHM",
                },
                {
                  name: "Yamalube Power Matic Oil (0.8L)",
                  brand: "Yamaha OEM",
                  type: "Pelumas Mesin NMAX/Aerox",
                  price: "Rp 65.000",
                  tag: "Original YGP",
                },
                {
                  name: "Aki Kering GS Astra GTZ5S",
                  brand: "GS Astra",
                  type: "Aki Motor Beat, Vario, Mio",
                  price: "Rp 245.000",
                  tag: "Garansi 6 Bulan",
                },
                {
                  name: "Kampas Rem Depan Bendix Ceramic",
                  brand: "Bendix",
                  type: "Brake Pad Tahan Panas",
                  price: "Rp 65.000",
                  tag: "High Performance",
                },
                {
                  name: "Busi NGK Laser Iridium CR7HIX",
                  brand: "NGK Japan",
                  type: "Pengapian Presisi Tinggi",
                  price: "Rp 95.000",
                  tag: "Awet 50.000 KM",
                },
                {
                  name: "Vanbelt Kit + Roller Daytona Ultra Drive",
                  brand: "Daytona Racing",
                  type: "Kevlar Reinforced CVT",
                  price: "Rp 175.000",
                  tag: "Anti Putus",
                },
                {
                  name: "Ban Michelin Pilot Street 90/80-14",
                  brand: "Michelin",
                  type: "Ban Tubeless Cengkeram Basah",
                  price: "Rp 320.000",
                  tag: "Free Pasang",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:border-orange-500/50 transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20">
                        {item.tag}
                      </span>
                      <span className="text-[10px] text-slate-500 uppercase">{item.brand}</span>
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-orange-400 transition leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">{item.type}</p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-500 block">Harga Pasang:</span>
                      <span className="text-sm font-black text-white">{item.price}</span>
                    </div>
                    <button
                      onClick={() => openBooking("regular")}
                      className="p-2 rounded-lg bg-slate-800 hover:bg-orange-600 text-slate-300 hover:text-white transition"
                      title="Pesan suku cadang ini"
                    >
                      <Wrench className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CARA KERJA (HOW IT WORKS) */}
        <section className="py-20 border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase font-bold tracking-widest text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                Langkah Praktis
              </span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight mt-3">
                Cara Servis Motor di BengkelMotor.com
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                Hanya butuh 4 langkah mudah untuk merawat motor kesayangan Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Pilih Servis & Motor",
                  desc: "Pilih jenis motor dan kebutuhan servis (rutin, ganti oli, atau montir darurat) di website.",
                },
                {
                  step: "02",
                  title: "Tentukan Lokasi",
                  desc: "Pilih apakah montir datang ke rumah/kantor Anda, atau pilih booking ke bengkel rekanan terdekat.",
                },
                {
                  step: "03",
                  title: "Pengerjaan Transparan",
                  desc: "Montir melakukan pemeriksaan & pengerjaan profesional di depan mata Anda. Sparepart dibuka segel bersama.",
                },
                {
                  step: "04",
                  title: "Bayar & Garansi Digital",
                  desc: "Bayar via Cash/QRIS setelah motor dicoba (test ride). Bukti servis & garansi 30 hari langsung aktif.",
                },
              ].map((s, i) => (
                <div key={i} className="relative bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6">
                  <div className="text-3xl font-black text-orange-500/30 mb-3">{s.step}</div>
                  <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: BUKU SERVIS DIGITAL & BENEFIT CUSTOMER */}
        <section className="py-20 bg-gradient-to-r from-orange-950/20 via-slate-900 to-amber-950/20 border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-5">
                <span className="text-xs uppercase font-bold tracking-widest text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                  Fitur Eksklusif Member
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Tingkatkan Nilai Jual Motor dengan <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                    Buku Servis Digital Terintegrasi
                  </span>
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Semua catatan pergantian oli, kampas rem, servis CVT, hingga pergantian part tersimpan aman di akun Anda. Motor yang memiliki rekam jejak servis rapi terbukti memiliki harga jual bekas lebih tinggi hingga 15%.
                </p>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Pengingat WhatsApp otomatis saat motor waktunya ganti oli atau servis berkala.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Garansi perbaikan langsung terikat ke nomor plat motor tanpa butuh nota fisik hilang.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Diskon potongan servis 15% untuk pengerjaan servis pertama setelah mendaftar.</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/auth"
                    className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-orange-600/30 transition"
                  >
                    <UserCheck className="w-4 h-4" />
                    Daftar Akun Customer Gratis
                  </Link>

                  <Link
                    href="/customer"
                    className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white font-semibold text-xs flex items-center gap-2 transition"
                  >
                    <span>Simulasi Buku Servis Customer →</span>
                  </Link>
                </div>
              </div>

              {/* Mockup Card */}
              <div className="lg:col-span-6">
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-2xl relative">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Buku Servis Digital #BM-8821</div>
                        <div className="text-[11px] text-slate-400">Honda Vario 160 CBS (B 4821 SOX)</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                      Kondisi Prima
                    </span>
                  </div>

                  <div className="py-4 space-y-3">
                    <div className="text-xs font-semibold text-slate-300">Riwayat Terakhir:</div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="font-bold text-white">Servis Injeksi + Ganti Oli Motul</span>
                        <span className="text-orange-400 font-bold">Rp 150.000</span>
                      </div>
                      <div className="text-[11px] text-slate-400">12 Oktober 2026 • Montir: Mas Tri (Bengkel Cab. Fatmawati)</div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="font-bold text-white">Ganti V-Belt & Bersih CVT Matic</span>
                        <span className="text-orange-400 font-bold">Rp 210.000</span>
                      </div>
                      <div className="text-[11px] text-slate-400">28 Agustus 2026 • Odo: 14.200 KM</div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
                    <span>Jadwal Servis Berikutnya:</span>
                    <span className="font-bold text-amber-400">12 Desember 2026 / 16.500 KM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONI PELANGGAN */}
        <section id="testimoni" className="py-20 border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase font-bold tracking-widest text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                Dipercaya Ribuan Rider
              </span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight mt-3">
                Ulasan Jujur Pemilik Motor
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                Simak pengalaman mereka yang sudah mencoba kemudahan servis online dan montir panggilan kami.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Bambang Kurniawan",
                  role: "Pengguna Yamaha NMAX 155",
                  location: "Jakarta Barat",
                  comment:
                    "Motor mogok jam 9 malam sepulang kantor di Slipi karena vanbelt putus. Telepon BengkelMotor.com, 25 menit montirnya datang bawa vanbelt baru dan kunci CVT. Bener-bener penyelamat!",
                  rating: 5,
                },
                {
                  name: "Dian Safitri",
                  role: "Pengguna Honda Scoopy",
                  location: "Tangerang Selatan",
                  comment:
                    "Sebagai cewek sering takut ditipu kalau ke bengkel konvensional disuruh ganti ini itu. Di sini estimasi harganya jelas di website, montirnya ramah dan sopan servis di rumah.",
                  rating: 5,
                },
                {
                  name: "Rizky Fauzi",
                  role: "Driver Ojol (Honda Beat)",
                  location: "Bekasi Timur",
                  comment:
                    "Rutinitas ganti oli dan servis rutin jadi ga buang waktu narik penumpang. Montirnya janjian di basecamp ojol pas jam makan siang. Harga transparan dan oli dijamin asli.",
                  rating: 5,
                },
              ].map((t, idx) => (
                <div key={idx} className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed italic">
                      "{t.comment}"
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">{t.name}</div>
                      <div className="text-[11px] text-slate-400">{t.role}</div>
                    </div>
                    <span className="text-[10px] text-slate-500">{t.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION */}
        <section className="py-20 bg-slate-950/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs uppercase font-bold tracking-widest text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                Bantuan & Informasi
              </span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight mt-3">
                Pertanyaan yang Sering Diajukan
              </h2>
            </div>

            <div className="space-y-3">
              {FAQS.map((item, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900/60 transition"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : index)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between text-sm font-bold text-white hover:text-orange-400 transition"
                    >
                      <span>{item.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ml-2 ${
                          isOpen ? "rotate-180 text-orange-400" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Booking Modal */}
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialType={modalType}
      />
    </div>
  );
}
