import React from "react";
import Link from "next/link";
import { 
  Wrench, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Heart
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm">
      {/* Pre-Footer Highlight */}
      <div className="border-b border-slate-800/80 py-10 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h4 className="text-white font-bold">Garansi Servis 30 Hari</h4>
                <p className="text-xs text-slate-400 mt-0.5">Klaim mudah jika pengerjaan belum memuaskan tanpa biaya tambahan.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h4 className="text-white font-bold">100% Sparepart Original</h4>
                <p className="text-xs text-slate-400 mt-0.5">Suku cadang resmi langsung dari distributor ATPM (AHM, YGP, Suzuki, Shell, Motul).</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-sky-400" />
              </div>
              <div>
                <h4 className="text-white font-bold">Montir Siap 24 Jam</h4>
                <p className="text-xs text-slate-400 mt-0.5">Layanan bantuan darurat di jalan & panggilan ke rumah kapan saja.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-orange-500 flex items-center justify-center text-slate-950 font-bold">
                <Wrench className="w-5 h-5 text-slate-950" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                Bengkel<span className="text-orange-500">Motor</span>.com
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed pr-6">
              Platform layanan servis motor modern berbasis digital di Indonesia. Kami menghubungkan pemilik motor dengan jaringan bengkel terpercaya dan mekanik profesional bersertifikasi untuk servis datang ke tempat maupun di bengkel.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="px-3 py-1 rounded-full bg-slate-800 text-xs text-slate-300 border border-slate-700">
                ⭐ 4.9/5 Rating Kepuasan
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs">
                ✓ 18.400+ Motor Tertangani
              </span>
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="text-white font-bold mb-4 tracking-wide text-sm uppercase">Layanan Populer</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#layanan" className="hover:text-orange-400 transition">Montir Panggilan ke Rumah</a></li>
              <li><a href="#layanan" className="hover:text-orange-400 transition">Bantuan Darurat Mogok (SOS)</a></li>
              <li><a href="#layanan" className="hover:text-orange-400 transition">Servis Berkala & Injeksi</a></li>
              <li><a href="#layanan" className="hover:text-orange-400 transition">Fast Pit-stop Ganti Oli</a></li>
              <li><a href="#layanan" className="hover:text-orange-400 transition">Servis CVT & Busi Iridium</a></li>
              <li><a href="#layanan" className="hover:text-orange-400 transition">Towing Motor 24 Jam</a></li>
            </ul>
          </div>

          {/* Menu Navigasi / Role */}
          <div>
            <h4 className="text-white font-bold mb-4 tracking-wide text-sm uppercase">Akses & Akun</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="hover:text-orange-400 transition">Tampilan Pengunjung (Guest)</Link></li>
              <li><Link href="/auth" className="hover:text-orange-400 transition">Daftar Akun Customer Baru</Link></li>
              <li><Link href="/auth" className="hover:text-orange-400 transition">Login Pemilik Motor</Link></li>
              <li><Link href="/customer" className="hover:text-orange-400 transition">Buku Servis Digital Motor</Link></li>
              <li><Link href="/admin" className="text-orange-400 hover:text-orange-300 font-semibold transition">Portal Admin Bengkel →</Link></li>
              <li><a href="#estimator" className="hover:text-orange-400 transition">Simulasi Biaya Servis</a></li>
            </ul>
          </div>

          {/* Hubungi Kami */}
          <div>
            <h4 className="text-white font-bold mb-4 tracking-wide text-sm uppercase">Kontak & Workshop</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>Jl. Otomotif Raya No. 88, Kebayoran Baru, Jakarta Selatan</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Hotline: (021) 555-0199</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Bantuan Jalan: 24 Jam Setiap Hari</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <span>support@bengkelmotor.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 BengkelMotor.com - Platform Bengkel Motor & Montir Panggilan Online Indonesia.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Syarat & Ketentuan</span>
            <span className="hover:text-slate-400 cursor-pointer">Kebijakan Privasi</span>
            <span className="hover:text-slate-400 cursor-pointer">Standar Garansi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
