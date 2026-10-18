"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Wrench,
  Bike,
  ShieldCheck,
  Calendar,
  Clock,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Plus,
  FileText,
  MapPin,
  Phone,
  ArrowLeft,
  LogOut,
  ChevronRight,
  Gauge
} from "lucide-react";
import BookingModal from "@/components/BookingModal";

export default function CustomerDashboardPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"regular" | "emergency">("regular");

  const openBooking = (type: "regular" | "emergency") => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col font-sans">
      {/* Top Header */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition flex items-center gap-1.5 text-xs"
              title="Kembali ke Beranda"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Web Publik</span>
            </Link>

            <div className="h-6 w-px bg-slate-800 hidden sm:block"></div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center font-bold text-white shadow-lg shadow-orange-600/30">
                <Bike className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-sm text-white">BengkelMotor.com</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-orange-500/20 text-orange-400 border border-orange-500/30 uppercase">
                    Customer Area
                  </span>
                </div>
                <div className="text-[11px] text-slate-400">Garasi Digital & Buku Servis</div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/admin"
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white"
            >
              <Wrench className="w-3.5 h-3.5 text-orange-400" />
              Portal Admin
            </Link>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs">
              <div className="w-7 h-7 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold">
                A
              </div>
              <div className="hidden sm:block text-left">
                <div className="text-white font-bold leading-tight">Ahmad Fauzi</div>
                <div className="text-[10px] text-slate-400">0812-9876-5432</div>
              </div>
              <Link href="/auth" className="ml-2 text-slate-500 hover:text-slate-300" title="Keluar">
                <LogOut className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Welcome Banner & Quick Action */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-orange-950/30 border border-orange-500/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              Akun Terverifikasi • Member Gold
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Garasi & Buku Servis: Ahmad Fauzi
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Pantau jadwal perawatan motor, riwayat penggantian suku cadang, dan panggil montir darurat langsung ke alamat Anda.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => openBooking("regular")}
              className="px-5 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-lg shadow-orange-500/25 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Booking Servis Baru
            </button>
            <button
              onClick={() => openBooking("emergency")}
              className="px-5 py-3 rounded-xl font-bold text-xs text-white bg-rose-600 hover:bg-rose-500 shadow-lg shadow-rose-600/30 flex items-center gap-2"
            >
              <AlertTriangle className="w-4 h-4" />
              Montir Panggilan SOS
            </button>
          </div>
        </div>

        {/* Kendaraan Terdaftar Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Motorcycle Detail (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold">
                    <Bike className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-white">Honda Vario 160 CBS</h3>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                        2023
                      </span>
                    </div>
                    <div className="text-xs font-mono text-orange-400 font-semibold tracking-wider">
                      Plat: B 4821 SOX • Jakarta Selatan
                    </div>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold">
                  Garansi Aktif
                </span>
              </div>

              {/* Status Odometer & Condition */}
              <div className="grid grid-cols-3 gap-3 text-center text-xs">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block text-[11px]">Odometer Terakhir</span>
                  <span className="text-base font-bold text-white mt-1 block">14.820 KM</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block text-[11px]">Servis Berikutnya</span>
                  <span className="text-base font-bold text-amber-400 mt-1 block">16.500 KM</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block text-[11px]">Kondisi Oli Mesin</span>
                  <span className="text-base font-bold text-emerald-400 mt-1 block">Optimal (68%)</span>
                </div>
              </div>

              {/* Riwayat Servis Digital */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between text-xs font-bold text-white">
                  <span>Buku Servis Digital (Riwayat Pengerjaan)</span>
                  <span className="text-slate-500 font-normal">3 Riwayat Tercatat</span>
                </div>

                <div className="space-y-2.5">
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-bold text-white text-xs">Servis Injeksi + Ganti Oli Motul Scooter Expert</div>
                        <div className="text-[11px] text-slate-400">12 Oktober 2026 • Montir: Mas Tri (Home Service)</div>
                      </div>
                      <span className="text-xs font-bold text-orange-400">Rp 150.000</span>
                    </div>
                    <div className="text-[10px] text-emerald-400 flex items-center gap-1 pt-1">
                      <ShieldCheck className="w-3 h-3" /> Garansi Servis berlaku s/d 11 November 2026
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-bold text-white text-xs">Servis CVT Matic + Ganti Busi NGK Iridium</div>
                        <div className="text-[11px] text-slate-400">28 Agustus 2026 • Bengkel Cabang Fatmawati</div>
                      </div>
                      <span className="text-xs font-bold text-orange-400">Rp 215.000</span>
                    </div>
                    <div className="text-[10px] text-slate-500">
                      Pengerjaan: Bersihkan mangkok kopling ganda, pelumasan grease tahan panas.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Reminders & Active Booking (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Active Schedule Notification */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
                <Clock className="w-4 h-4 text-orange-400" />
                <h3 className="font-bold text-sm text-white">Jadwal & Pengingat Servis Terdekat</h3>
              </div>

              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 space-y-2">
                <div className="flex items-center justify-between font-bold">
                  <span>Waktunya Ganti Oli Mesin</span>
                  <span className="text-[10px] bg-amber-500/20 px-2 py-0.5 rounded text-amber-300">
                    2 Minggu Lagi
                  </span>
                </div>
                <p className="text-[11px] text-amber-300/80 leading-relaxed">
                  Berdasarkan pemakaian harian Anda, oli mesin diperkirakan mencapai 2.000 KM pada akhir bulan ini. Booking lebih awal untuk mendapatkan slot montir pilihan.
                </p>
                <button
                  onClick={() => openBooking("regular")}
                  className="w-full mt-2 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition"
                >
                  Jadwalkan Ganti Oli Sekarang
                </button>
              </div>

              {/* Promo Member */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-2">
                <div className="flex justify-between items-center text-slate-300 font-semibold">
                  <span>Voucher Diskon Member Anda:</span>
                  <span className="text-emerald-400 font-bold">Aktif</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900 border border-dashed border-orange-500/50 flex justify-between items-center font-mono text-orange-400 font-bold">
                  <span>MEMBERBARU15</span>
                  <span className="text-xs font-sans text-slate-400 font-normal">Diskon 15%</span>
                </div>
                <p className="text-[10px] text-slate-500">
                  Gunakan kode ini saat konfirmasi WhatsApp dengan customer service kami.
                </p>
              </div>
            </div>

            {/* Quick Contacts */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 text-xs text-slate-400 space-y-3">
              <span className="font-bold text-white block">Pusat Bantuan & Customer Service:</span>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-orange-400" />
                <span>Hotline: (021) 555-0199</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span>Bengkel Rekanan Terdekat: Cabang Fatmawati (1.8 KM)</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Booking Modal */}
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialType={modalType}
      />
    </div>
  );
}
