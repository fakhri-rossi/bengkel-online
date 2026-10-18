"use client";

import React, { useState } from "react";
import { 
  Calculator, 
  Bike, 
  Wrench, 
  ShieldCheck, 
  Clock, 
  Check, 
  Plus, 
  ArrowRight, 
  Sparkles,
  MapPin,
  Home,
  Store
} from "lucide-react";

interface MotorType {
  id: string;
  name: string;
  category: string;
  examples: string;
  baseMultiplier: number;
}

const MOTOR_TYPES: MotorType[] = [
  { id: "matic-small", name: "Matic 110 - 125 cc", category: "Matic", examples: "Beat, Scoopy, Vario 125, Mio, Fazzio", baseMultiplier: 1.0 },
  { id: "matic-big", name: "Matic Besar 150 - 250 cc", category: "Maxi Matic", examples: "NMAX, PCX, Aerox, ADV, XMAX", baseMultiplier: 1.35 },
  { id: "bebek", name: "Motor Bebek / Moped", category: "Bebek", examples: "Supra X, Jupiter Z, Revo, Vega", baseMultiplier: 0.95 },
  { id: "sport", name: "Motor Sport / Kopling", category: "Sport", examples: "CBR150/250, R15, MT-25, Ninja", baseMultiplier: 1.5 },
  { id: "ev", name: "Motor Listrik (EV)", category: "Electric", examples: "Polytron Fox, Alva Cervo, Gesits, Volta", baseMultiplier: 1.15 },
];

interface MainService {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  duration: string;
  recommended: boolean;
}

const MAIN_SERVICES: MainService[] = [
  {
    id: "servis-rutin",
    name: "Servis Ringan + Reset Injeksi",
    description: "Tune-up pembersihan throttle body/karburator, cek kelistrikan, stel rem, cek tekanan ban & rantai/cvt.",
    basePrice: 65000,
    duration: "45 Menit",
    recommended: true,
  },
  {
    id: "servis-lengkap",
    name: "Servis Lengkap + Servis CVT / Rantai",
    description: "Semua servis rutin ditambah bongkar & grease CVT matic / kuras rantai, cek kompresi, & cek busi.",
    basePrice: 120000,
    duration: "75 Menit",
    recommended: false,
  },
  {
    id: "ganti-oli-cepat",
    name: "Pit-Stop Ganti Oli + Pengecekan 10 Titik",
    description: "Penggantian pelumas mesin cepat dengan gratis pengecekan kampas rem, lampu, dan tekanan ban.",
    basePrice: 35000,
    duration: "20 Menit",
    recommended: false,
  },
  {
    id: "montir-sos",
    name: "Montir Darurat Panggilan (Mogok di Jalan)",
    description: "Mekanik meluncur ke koordinat Anda dalam 20-30 menit untuk diagnosa dan perbaikan darurat.",
    basePrice: 95000,
    duration: "Respon Cepat 30 Menit",
    recommended: false,
  },
];

interface AddonItem {
  id: string;
  name: string;
  price: number;
  selected: boolean;
  category: string;
}

export default function ServiceEstimator({ onBookNow }: { onBookNow?: (summary: any) => void }) {
  const [selectedMotor, setSelectedMotor] = useState<string>("matic-small");
  const [selectedService, setSelectedService] = useState<string>("servis-rutin");
  const [serviceLocation, setServiceLocation] = useState<"home" | "workshop">("home");
  const [addons, setAddons] = useState<Record<string, boolean>>({
    oli: true,
    oliGardan: true,
    busi: false,
    carbonCleaner: false,
  });

  const ADDONS_LIST: AddonItem[] = [
    { id: "oli", name: "Oli Mesin Fully Synthetic (1L)", price: 65000, selected: addons.oli, category: "Pelumas" },
    { id: "oliGardan", name: "Oli Gardan Gear Matic (120ml)", price: 20000, selected: addons.oliGardan, category: "Pelumas" },
    { id: "busi", name: "Busi Iridium Racing / OEM", price: 45000, selected: addons.busi, category: "Pengapian" },
    { id: "carbonCleaner", name: "Cairan Carbon Cleaner Ruang Bakar", price: 35000, selected: addons.carbonCleaner, category: "Perawatan" },
  ];

  const toggleAddon = (id: string) => {
    setAddons((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const currentMotor = MOTOR_TYPES.find((m) => m.id === selectedMotor) || MOTOR_TYPES[0];
  const currentService = MAIN_SERVICES.find((s) => s.id === selectedService) || MAIN_SERVICES[0];

  // Calculation
  const baseServiceFee = Math.round(currentService.basePrice * currentMotor.baseMultiplier);
  const locationFee = serviceLocation === "home" ? 25000 : 0; // home call dispatch fee
  const workshopDiscount = serviceLocation === "workshop" ? 10000 : 0;

  const addonsTotal = ADDONS_LIST.reduce((sum, item) => {
    return addons[item.id] ? sum + item.price : sum;
  }, 0);

  const grandTotal = baseServiceFee + locationFee - workshopDiscount + addonsTotal;

  const handleBookingClick = () => {
    const summary = {
      motor: currentMotor.name,
      service: currentService.name,
      location: serviceLocation === "home" ? "Montir Panggilan ke Rumah" : "Datang ke Bengkel Rekanan",
      total: grandTotal,
      duration: currentService.duration,
    };
    if (onBookNow) {
      onBookNow(summary);
    } else {
      const text = encodeURIComponent(
        `Halo BengkelMotor.com, saya ingin booking servis:\n• Motor: ${currentMotor.name}\n• Layanan: ${currentService.name}\n• Mode: ${summary.location}\n• Estimasi Biaya: Rp ${grandTotal.toLocaleString("id-ID")}`
      );
      window.open(`https://wa.me/6281234567890?text=${text}`, "_blank");
    }
  };

  return (
    <div id="estimator" className="py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            Transparansi Biaya 100%
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Kalkulator & Estimasi Biaya Servis Motor
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Cek estimasi biaya transparan sebelum montir mulai bekerja. Tidak ada biaya siluman atau penggantian suku cadang tanpa persetujuan Anda.
          </p>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Options Column (8 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* 1. Pilih Tipe Motor */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
              <label className="text-sm font-bold text-white flex items-center justify-between mb-3">
                <span className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 text-xs flex items-center justify-center font-bold">1</span>
                  Pilih Kategori & Tipe Motor Anda
                </span>
                <span className="text-xs text-slate-400 font-normal">Tersedia untuk semua merk</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {MOTOR_TYPES.map((m) => {
                  const isSelected = selectedMotor === m.id;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setSelectedMotor(m.id)}
                      className={`text-left p-3.5 rounded-xl border transition-all ${
                        isSelected
                          ? "bg-orange-500/10 border-orange-500/80 ring-1 ring-orange-500/50"
                          : "bg-slate-950/60 border-slate-800/80 hover:border-slate-700 text-slate-300"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-sm font-semibold ${isSelected ? "text-orange-400" : "text-white"}`}>
                          {m.name}
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-orange-400" />}
                      </div>
                      <p className="text-xs text-slate-400 mt-1 truncate">{m.examples}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Pilih Layanan Utama */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
              <label className="text-sm font-bold text-white flex items-center justify-between mb-3">
                <span className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 text-xs flex items-center justify-center font-bold">2</span>
                  Pilih Paket Servis / Pekerjaan
                </span>
                <span className="text-xs text-slate-400 font-normal">Termasuk pengecekan umum</span>
              </label>

              <div className="space-y-3">
                {MAIN_SERVICES.map((s) => {
                  const isSelected = selectedService === s.id;
                  const calculatedPrice = Math.round(s.basePrice * currentMotor.baseMultiplier);
                  return (
                    <div
                      key={s.id}
                      onClick={() => setSelectedService(s.id)}
                      className={`cursor-pointer p-4 rounded-xl border transition-all ${
                        isSelected
                          ? "bg-orange-500/10 border-orange-500/80 ring-1 ring-orange-500/50"
                          : "bg-slate-950/60 border-slate-800/80 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${isSelected ? "border-orange-500 bg-orange-500 text-white" : "border-slate-600"}`}>
                            {isSelected && <Check className="w-3.5 h-3.5" />}
                          </div>
                          <div>
                            <span className="text-sm font-bold text-white">{s.name}</span>
                            {s.recommended && (
                              <span className="ml-2 px-2 py-0.5 text-[10px] font-bold uppercase rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                                Paling Populer
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="text-right pl-7 sm:pl-0">
                          <span className="text-sm font-black text-orange-400">
                            Rp {calculatedPrice.toLocaleString("id-ID")}
                          </span>
                          <span className="block text-[11px] text-slate-400">± {s.duration}</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-400 mt-2 pl-7 leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. Tempat Pengerjaan */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
              <label className="text-sm font-bold text-white flex items-center justify-between mb-3">
                <span className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 text-xs flex items-center justify-center font-bold">3</span>
                  Pilih Lokasi Pengerjaan
                </span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setServiceLocation("home")}
                  className={`p-4 rounded-xl border text-left transition flex items-start gap-3 ${
                    serviceLocation === "home"
                      ? "bg-orange-500/10 border-orange-500 text-white"
                      : "bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700"
                  }`}
                >
                  <Home className={`w-5 h-5 mt-0.5 shrink-0 ${serviceLocation === "home" ? "text-orange-400" : "text-slate-500"}`} />
                  <div>
                    <div className="font-bold text-sm text-white">Montir Datang ke Rumah/Kantor</div>
                    <p className="text-xs text-slate-400 mt-1">Montir datang membawa peralatan lengkap ke alamat Anda. Biaya transport Rp 25.000.</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setServiceLocation("workshop")}
                  className={`p-4 rounded-xl border text-left transition flex items-start gap-3 ${
                    serviceLocation === "workshop"
                      ? "bg-orange-500/10 border-orange-500 text-white"
                      : "bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700"
                  }`}
                >
                  <Store className={`w-5 h-5 mt-0.5 shrink-0 ${serviceLocation === "workshop" ? "text-orange-400" : "text-slate-500"}`} />
                  <div>
                    <div className="font-bold text-sm text-white">Datang ke Bengkel Rekanan</div>
                    <p className="text-xs text-slate-400 mt-1">Fast-track tanpa antre di bengkel terdekat. Hemat Rp 10.000.</p>
                  </div>
                </button>
              </div>
            </div>

            {/* 4. Tambahan Sparepart / Pelumas Opsi */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
              <label className="text-sm font-bold text-white flex items-center justify-between mb-3">
                <span className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 text-xs flex items-center justify-center font-bold">4</span>
                  Tambah Oli & Komponen Berkala (Opsional)
                </span>
                <span className="text-xs text-slate-400">Sparepart Original</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ADDONS_LIST.map((addon) => {
                  const isChecked = addons[addon.id];
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`cursor-pointer p-3 rounded-xl border flex items-center justify-between transition ${
                        isChecked
                          ? "bg-slate-800/90 border-orange-500/50"
                          : "bg-slate-950/60 border-slate-800/80 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center ${isChecked ? "bg-orange-500 border-orange-500 text-white" : "border-slate-600"}`}>
                          {isChecked && <Check className="w-3 h-3" />}
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-slate-200 block">{addon.name}</span>
                          <span className="text-[10px] text-slate-400">{addon.category}</span>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-slate-300">
                        +Rp {addon.price.toLocaleString("id-ID")}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Summary Sticky Box (5 cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-orange-500/30 rounded-2xl p-6 shadow-2xl shadow-orange-500/10">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
                    <Bike className="w-4 h-4 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Ringkasan Estimasi</h3>
                    <p className="text-xs text-slate-400">Garansi pengerjaan 30 hari</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-md">
                  Harga Pasti
                </span>
              </div>

              {/* Detail Items */}
              <div className="py-4 space-y-3 text-xs text-slate-300 border-b border-slate-800">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Tipe Motor:</span>
                  <span className="font-semibold text-white">{currentMotor.name}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Paket Servis:</span>
                  <span className="font-semibold text-white text-right max-w-[200px] truncate">{currentService.name}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Biaya Jasa:</span>
                  <span className="font-semibold text-white">Rp {baseServiceFee.toLocaleString("id-ID")}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Lokasi Pengerjaan:</span>
                  <span className="font-semibold text-white">
                    {serviceLocation === "home" ? "Montir ke Rumah (+Rp 25.000)" : "Ke Bengkel (-Rp 10.000)"}
                  </span>
                </div>

                {/* List selected addons */}
                {ADDONS_LIST.filter((a) => addons[a.id]).length > 0 && (
                  <div className="pt-2 border-t border-slate-800/80 space-y-1.5">
                    <span className="text-[11px] font-bold text-orange-400 block uppercase tracking-wider">
                      Tambahan Pelumas & Part:
                    </span>
                    {ADDONS_LIST.filter((a) => addons[a.id]).map((a) => (
                      <div key={a.id} className="flex justify-between text-slate-400">
                        <span className="truncate max-w-[180px]">• {a.name}</span>
                        <span>Rp {a.price.toLocaleString("id-ID")}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Total & Guarantee */}
              <div className="py-5">
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-sm font-semibold text-slate-400">Total Estimasi:</span>
                  <div className="text-right">
                    <span className="text-2xl font-black text-orange-400">
                      Rp {grandTotal.toLocaleString("id-ID")}
                    </span>
                    <span className="text-[11px] text-slate-500 block">Termasuk PPN & Jasa Pasang</span>
                  </div>
                </div>

                <div className="bg-slate-950/80 rounded-xl p-3 border border-slate-800 mt-4 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div className="text-[11px] text-slate-300">
                    <span className="font-bold text-white">Garansi 30 Hari:</span> Jika timbul keluhan setelah servis, montir kami cek ulang <strong className="text-orange-400">gratis</strong>.
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="space-y-2.5">
                <button
                  type="button"
                  onClick={handleBookingClick}
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 flex items-center justify-center gap-2 transition active:scale-98"
                >
                  <span>Pesan Servis Sekarang</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-center text-slate-400">
                  Pembayaran fleksibel: Cash ke montir, Transfer Bank, atau QRIS di tempat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
