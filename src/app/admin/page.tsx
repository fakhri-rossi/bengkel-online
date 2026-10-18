"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Wrench,
  Bike,
  LayoutDashboard,
  Users,
  Package,
  Calendar,
  Receipt,
  TrendingUp,
  MessageSquare,
  Sparkles,
  CheckCircle,
  Clock,
  AlertCircle,
  HelpCircle,
  ChevronRight,
  ArrowLeft,
  Bell,
  Search,
  Filter,
  Layers,
  ShieldCheck,
  Smartphone
} from "lucide-react";

interface FeatureSuggestion {
  id: string;
  category: string;
  title: string;
  priority: "P0 (Wajib - MVP)" | "P1 (Penting)" | "P2 (Skalabilitas)";
  priorityColor: string;
  description: string;
  benefits: string[];
  suggestedFields: string[];
  integration: string;
}

const FEATURE_ROADMAP: FeatureSuggestion[] = [
  {
    id: "antrean-dispatch",
    category: "Operasional Servis",
    title: "Live Queue & Montir Dispatching System",
    priority: "P0 (Wajib - MVP)",
    priorityColor: "bg-red-500/10 text-red-400 border-red-500/30",
    description: "Sistem papan kendali (Kanban) untuk memantau motor yang sedang diservis di bengkel maupun montir yang sedang jalan ke rumah pelanggan.",
    benefits: [
      "Pelanggan tidak menumpuk tanpa kejelasan estimasi selesai",
      "Admin dapat menugaskan montir terdekat dengan 1 klik",
      "Status real-time: Menunggu, Dikerjakan, Quality Check, Selesai, Diambil"
    ],
    suggestedFields: ["booking_id", "motor_plate", "service_type", "assigned_mechanic_id", "status", "estimated_completion_time"],
    integration: "Websocket / Supabase Realtime + Geolocation API"
  },
  {
    id: "pos-kasir",
    category: "Keuangan & Kasir",
    title: "POS Kasir & Invoice WhatsApp Otomatis",
    priority: "P0 (Wajib - MVP)",
    priorityColor: "bg-red-500/10 text-red-400 border-red-500/30",
    description: "Pencatatan nota servis yang menggabungkan biaya jasa mekanik dan sparepart yang diganti, serta cetak struk thermal & nota digital PDF otomatis ke WhatsApp.",
    benefits: [
      "Mencegah kebocoran uang kas bengkel",
      "Dukungan split payment: Uang Muka (DP) + Pelunasan di tempat",
      "Pelanggan senang menerima nota digital resmi tanpa takut kertas hilang"
    ],
    suggestedFields: ["invoice_no", "service_items", "parts_used", "mechanic_fee", "total_amount", "payment_method", "payment_status"],
    integration: "Midtrans / Xendit QRIS + WhatsApp Cloud API / Fonnte"
  },
  {
    id: "inventori-sparepart",
    category: "Gudang & Logistik",
    title: "Manajemen Inventori & Smart Low-Stock Alert",
    priority: "P0 (Wajib - MVP)",
    priorityColor: "bg-red-500/10 text-red-400 border-red-500/30",
    description: "Pencatatan stok oli, ban, busi, aki, dan sparepart lain secara otomatis berkurang ketika digunakan dalam order servis pelanggan.",
    benefits: [
      "Notifikasi otomatis saat stok oli atau kampas rem mencapai batas minimum (misal tersisa < 5 pcs)",
      "Pencatatan harga modal (HPP) vs harga jual untuk menghitung margin laba bersih",
      "Mendukung scan barcode langsung menggunakan kamera HP mekanik"
    ],
    suggestedFields: ["sku_code", "part_name", "category", "stock_qty", "min_stock_alert", "buy_price", "sell_price", "supplier_name"],
    integration: "HTML5 Barcode / QR Scanner"
  },
  {
    id: "crm-buku-servis",
    category: "Pelanggan & CRM",
    title: "Database Pelanggan & Buku Servis Digital",
    priority: "P1 (Penting)",
    priorityColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    description: "Database terpusat yang menyimpan riwayat servis setiap motor berdasarkan Plat Nomor (NoPol), termasuk foto kondisi sebelum dan sesudah pengerjaan.",
    benefits: [
      "Mekanik tahu riwayat ganti oli terakhir saat motor kembali ke bengkel",
      "Klaim garansi mudah diverifikasi tanpa perlu nota fisik",
      "Data pelanggan aman dan tidak hilang jika ganti admin"
    ],
    suggestedFields: ["customer_id", "motor_plate", "brand_model", "current_odometer", "service_history", "customer_notes"],
    integration: "Cloudinary / S3 Storage (foto kondisi part bekas)"
  },
  {
    id: "auto-reminder",
    category: "Pemasaran & Retensi",
    title: "Automated WhatsApp Service Reminder",
    priority: "P1 (Penting)",
    priorityColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    description: "Sistem cerdas yang mengirim pesan WhatsApp otomatis kepada pelanggan saat motor sudah memasuki 2-3 bulan sejak servis terakhir atau estimasi 2.000 KM.",
    benefits: [
      "Meningkatkan frekuensi kunjungan ulang (repeat order) hingga 40%",
      "Memberikan kesan bengkel profesional dan peduli terhadap keselamatan pelanggan",
      "Bisa disisipkan kupon diskon servis berkala"
    ],
    suggestedFields: ["reminder_id", "target_date", "customer_phone", "template_message", "status_sent"],
    integration: "Cron Job (Upstash / QStash) + WhatsApp Business API"
  },
  {
    id: "mekanik-insentif",
    category: "SDM & Kinerja",
    title: "Manajemen Kinerja & Skema Komisi Mekanik",
    priority: "P1 (Penting)",
    priorityColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    description: "Kalkulasi otomatis komisi dan bagi hasil mekanik berdasarkan jumlah motor yang diservis dan rating kepuasan yang diberikan customer.",
    benefits: [
      "Mekanik lebih termotivasi memberikan pelayanan terbaik",
      "Transparansi perhitungan upah dan bonus tanpa perhitungan manual di buku",
      "Memonitor mekanik yang paling produktif dan yang paling banyak komplain"
    ],
    suggestedFields: ["mechanic_id", "name", "total_jobs_done", "total_commission", "average_rating", "active_status"],
    integration: "Automated Payroll Calculation Report"
  },
  {
    id: "laporan-omzet",
    category: "Laporan & Analitik",
    title: "Dashboard Omzet, Profit & Analisis Motor Populer",
    priority: "P2 (Skalabilitas)",
    priorityColor: "bg-sky-500/10 text-sky-400 border-sky-500/30",
    description: "Visualisasi grafik performa bisnis bengkel harian, mingguan, dan bulanan: omzet jasa servis vs omzet penjualan sparepart.",
    benefits: [
      "Mengetahui hari-hari tersibuk untuk penjadwalan shift montir",
      "Mengetahui jenis motor yang paling sering masuk (contoh: 60% Vario/Beat, 25% NMAX/PCX)",
      "Ekspor laporan keuangan ke format Excel atau PDF untuk pemilik bengkel"
    ],
    suggestedFields: ["period", "gross_revenue", "cogs_parts", "net_profit", "top_selling_parts", "total_vehicles_served"],
    integration: "Chart.js / Recharts + Excel Exporter"
  },
  {
    id: "multi-cabang",
    category: "Ekspansi Bisnis",
    title: "Multi-Branch & Franchise Fleet Control",
    priority: "P2 (Skalabilitas)",
    priorityColor: "bg-sky-500/10 text-sky-400 border-sky-500/30",
    description: "Memungkinkan pemilik bengkel untuk mengawasi 2 hingga 10 cabang bengkel dalam satu dashboard terpusat.",
    benefits: [
      "Transfer stok antar cabang jika stok di cabang tertentu habis",
      "Perbandingan omzet antar cabang",
      "Hak akses berjenjang (Owner, Kepala Bengkel Cabang, Kasir, Montir)"
    ],
    suggestedFields: ["branch_id", "branch_name", "location_address", "branch_manager", "daily_turnover"],
    integration: "Role-Based Access Control (RBAC)"
  }
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<"suggestions" | "preview">("suggestions");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Operasional Servis", "Keuangan & Kasir", "Gudang & Logistik", "Pelanggan & CRM", "Pemasaran & Retensi", "SDM & Kinerja", "Laporan & Analitik", "Ekspansi Bisnis"];

  const filteredFeatures = selectedCategory === "All" 
    ? FEATURE_ROADMAP 
    : FEATURE_ROADMAP.filter(f => f.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#090d14] text-slate-100 flex flex-col font-sans">
      {/* Top Admin Header */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition flex items-center gap-1.5 text-xs"
              title="Kembali ke Beranda Guest"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Kembali ke Web Publik</span>
            </Link>

            <div className="h-6 w-px bg-slate-800 hidden sm:block"></div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center font-bold text-white shadow-lg shadow-orange-600/30">
                <Wrench className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-sm text-white">BengkelMotor.com</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-orange-500/20 text-orange-400 border border-orange-500/30 uppercase">
                    Admin Portal
                  </span>
                </div>
                <div className="text-[11px] text-slate-400">Pusat Manajemen & Operasional Bengkel</div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/customer"
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white"
            >
              <Bike className="w-3.5 h-3.5 text-orange-400" />
              Preview Customer View
            </Link>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs">
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              <span className="text-slate-300 font-medium">Budi Santoso (Admin Bengkel)</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Intro / Page Status Notice */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-orange-950/30 border border-orange-500/30 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                Admin Prototype & Feature Blueprint
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Halaman Admin Bengkel Motor
              </h1>
              <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
                Halaman ini disiapkan khusus untuk tim manajemen bengkel. Sesuai instruksi Anda, halaman ini menyajikan <strong>saran fitur komprehensif</strong> yang dirancang secara detail untuk operasional bengkel motor digital modern, lengkap dengan mockup visual.
              </p>
            </div>

            {/* Tab Switcher */}
            <div className="flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 shrink-0 text-xs font-bold">
              <button
                onClick={() => setActiveTab("suggestions")}
                className={`px-4 py-2 rounded-lg transition ${
                  activeTab === "suggestions"
                    ? "bg-orange-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                📋 Saran & Roadmap Fitur
              </button>
              <button
                onClick={() => setActiveTab("preview")}
                className={`px-4 py-2 rounded-lg transition ${
                  activeTab === "preview"
                    ? "bg-orange-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                🖥️ Mockup Layar Admin
              </button>
            </div>
          </div>
        </div>

        {/* TAB 1: SARAN FITUR ROADMAP */}
        {activeTab === "suggestions" && (
          <div className="space-y-6">
            {/* Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
              <span className="text-slate-500 flex items-center gap-1 font-semibold pl-1">
                <Filter className="w-3 h-3" /> Filter Kategori:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition border ${
                    selectedCategory === cat
                      ? "bg-orange-500/20 text-orange-400 border-orange-500/40 font-bold"
                      : "bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredFeatures.map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-900/70 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 flex flex-col justify-between transition-all"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                          {item.category}
                        </span>
                        <h3 className="text-base font-bold text-white mt-1">{item.title}</h3>
                      </div>
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-md border shrink-0 ${item.priorityColor}`}>
                        {item.priority}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Manfaat */}
                    <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80 space-y-1.5">
                      <span className="text-[11px] font-bold text-slate-400 block uppercase tracking-wider">
                        Keuntungan Untuk Bengkel:
                      </span>
                      {item.benefits.map((b, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>

                    {/* Skema Data Fields */}
                    <div>
                      <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block mb-1.5">
                        Rekomendasi Field Database:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.suggestedFields.map((field) => (
                          <code
                            key={field}
                            className="text-[10px] bg-slate-950 text-slate-400 px-2 py-0.5 rounded border border-slate-800"
                          >
                            {field}
                          </code>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Integration footer */}
                  <div className="pt-4 mt-5 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span className="text-[11px]">Integrasi: <strong className="text-slate-300">{item.integration}</strong></span>
                    <span className="text-orange-400 hover:text-orange-300 text-[11px] font-semibold cursor-pointer">
                      Detail Schema →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: PREVIEW MOCKUP DASHBOARD ADMIN */}
        {activeTab === "preview" && (
          <div className="space-y-6">
            <div className="bg-amber-500/10 border border-amber-500/20 text-amber-300 p-4 rounded-xl text-xs flex items-center gap-3">
              <Sparkles className="w-5 h-5 shrink-0" />
              <span>
                <strong>Mode Pratinjau (Preview Layout):</strong> Ini adalah simulasi visual bagaimana tampilan dashboard admin bengkel setelah fitur-fitur di atas aktif dan terhubung ke backend.
              </span>
            </div>

            {/* Quick KPI Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                <div className="flex items-center justify-between text-slate-400 text-xs">
                  <span>Antrean Servis Aktif</span>
                  <Bike className="w-4 h-4 text-orange-400" />
                </div>
                <div className="text-2xl font-black text-white mt-2">12 Motor</div>
                <div className="text-[11px] text-emerald-400 mt-1">4 Menunggu • 6 Dikerjakan • 2 Siap</div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                <div className="flex items-center justify-between text-slate-400 text-xs">
                  <span>Montir Siaga (On-Duty)</span>
                  <Users className="w-4 h-4 text-sky-400" />
                </div>
                <div className="text-2xl font-black text-white mt-2">8 / 10</div>
                <div className="text-[11px] text-slate-400 mt-1">2 sedang dispatch darurat di jalan</div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                <div className="flex items-center justify-between text-slate-400 text-xs">
                  <span>Omzet Hari Ini</span>
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-2xl font-black text-emerald-400 mt-2">Rp 3.840.000</div>
                <div className="text-[11px] text-slate-400 mt-1">Jasa: Rp 1.6jt | Sparepart: Rp 2.24jt</div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                <div className="flex items-center justify-between text-slate-400 text-xs">
                  <span>Peringatan Stok Tipis</span>
                  <AlertCircle className="w-4 h-4 text-rose-400" />
                </div>
                <div className="text-2xl font-black text-rose-400 mt-2">3 Part</div>
                <div className="text-[11px] text-slate-400 mt-1">Oli Motul (sisa 2), Aki Beat (sisa 1)</div>
              </div>
            </div>

            {/* Live Queue Kanban Preview */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white">Live Service Queue (Papan Antrean Montir)</h3>
                  <p className="text-xs text-slate-400">Monitoring pergerakan motor di pit servis bengkel</p>
                </div>
                <span className="px-3 py-1 rounded-lg bg-orange-600 text-white font-bold text-xs">
                  + Input Order Manual
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                {/* Column 1: Menunggu */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-300 pb-2 border-b border-slate-800">
                    <span>MENUNGGU ANTRIAN (2)</span>
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  </div>

                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 text-xs space-y-1.5">
                    <div className="flex justify-between font-bold text-white">
                      <span>B 3910 SKL</span>
                      <span className="text-orange-400">Yamaha NMAX</span>
                    </div>
                    <div className="text-[11px] text-slate-400">Keluhan: Servis Rutin + Ganti Oli Mesin</div>
                    <div className="text-[10px] text-slate-500">Masuk: 13:10 WIB • Customer: Bpk. Dani</div>
                  </div>

                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 text-xs space-y-1.5">
                    <div className="flex justify-between font-bold text-white">
                      <span>B 4820 ZYX</span>
                      <span className="text-orange-400">Honda Beat 2022</span>
                    </div>
                    <div className="text-[11px] text-slate-400">Keluhan: Rem depan bunyi & gredek CVT</div>
                    <div className="text-[10px] text-slate-500">Masuk: 13:25 WIB • Customer: Ibu Rina</div>
                  </div>
                </div>

                {/* Column 2: Sedang Dikerjakan */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-300 pb-2 border-b border-slate-800">
                    <span>SEDANG DIKERJAKAN (2)</span>
                    <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                  </div>

                  <div className="bg-slate-900 p-3 rounded-lg border border-sky-500/30 text-xs space-y-1.5">
                    <div className="flex justify-between font-bold text-white">
                      <span>B 6621 TRQ</span>
                      <span className="text-sky-400">Honda Vario 160</span>
                    </div>
                    <div className="text-[11px] text-slate-300">Pekerjaan: Reset Injeksi & Ganti Busi</div>
                    <div className="text-[11px] text-sky-400 font-semibold">Mekanik: Mas Tri (Pit 2)</div>
                  </div>

                  <div className="bg-slate-900 p-3 rounded-lg border border-sky-500/30 text-xs space-y-1.5">
                    <div className="flex justify-between font-bold text-white">
                      <span>D 1829 BB</span>
                      <span className="text-sky-400">Vespa Sprint 150</span>
                    </div>
                    <div className="text-[11px] text-slate-300">Pekerjaan: Ganti Kampas Ganda CVT</div>
                    <div className="text-[11px] text-sky-400 font-semibold">Mekanik: Mas Agus (Pit 4)</div>
                  </div>
                </div>

                {/* Column 3: Selesai / Siap Diambil */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-300 pb-2 border-b border-slate-800">
                    <span>SELESAI & LUNAS (2)</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  </div>

                  <div className="bg-slate-900 p-3 rounded-lg border border-emerald-500/30 text-xs space-y-1.5">
                    <div className="flex justify-between font-bold text-white">
                      <span>B 5501 KAA</span>
                      <span className="text-emerald-400">Yamaha Aerox</span>
                    </div>
                    <div className="text-[11px] text-slate-300">Total Nota: Rp 280.000 (Lunas QRIS)</div>
                    <div className="text-[10px] text-emerald-400 font-bold">✓ WhatsApp Nota Terkirim</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
