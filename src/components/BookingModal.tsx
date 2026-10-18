"use client";

import React, { useState } from "react";
import { 
  X, 
  Bike, 
  MapPin, 
  Phone, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle,
  Send
} from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: "regular" | "emergency";
  initialSummary?: any;
}

export default function BookingModal({
  isOpen,
  onClose,
  initialType = "regular",
  initialSummary = null,
}: BookingModalProps) {
  const [isEmergency, setIsEmergency] = useState(initialType === "emergency");
  const [motorBrand, setMotorBrand] = useState("");
  const [plateNumber, setPlateNumber] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              {isEmergency ? "🚨 Montir Siap Meluncur!" : "✓ Booking Servis Berhasil!"}
            </h3>
            <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
              {isEmergency
                ? `Montir terdekat telah dialokasikan untuk ${motorBrand || "motor Anda"}. Anda akan dihubungi via WhatsApp dalam 3 menit untuk konfirmasi titik lokasi penjemputan.`
                : `Jadwal servis untuk motor ${plateNumber ? `[${plateNumber}]` : ""} telah tercatat. Tim BengkelMotor.com akan mengirim detail konfirmasi dan estimasi kedatangan montir.`}
            </p>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-left space-y-2 mt-4 text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">Nama Pelanggan:</span>
                <span className="font-semibold text-white">{customerName || "Customer Bengkel"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">No. WhatsApp:</span>
                <span className="font-semibold text-white">{phone || "0812xxxx"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Status Penugasan:</span>
                <span className="font-semibold text-amber-400">Sedang Dispatch Montir Terdekat</span>
              </div>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="w-full py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm transition mt-4"
            >
              Selesai & Tutup
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-1">
                {isEmergency ? (
                  <span className="px-2.5 py-0.5 rounded bg-rose-500/20 text-rose-400 border border-rose-500/30 text-[11px] font-bold uppercase flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" /> Panggilan Darurat 24 Jam
                  </span>
                ) : (
                  <span className="px-2.5 py-0.5 rounded bg-orange-500/20 text-orange-400 border border-orange-500/30 text-[11px] font-bold uppercase">
                    Formulir Booking Servis
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-white">
                {isEmergency ? "Panggil Montir Darurat Cepat" : "Jadwalkan Servis BengkelMotor.com"}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {isEmergency 
                  ? "Montir akan segera datang ke titik lokasi mogok Anda dengan peralatan darurat." 
                  : "Pilih tanggal dan alamat pengerjaan di rumah atau bengkel rekanan."}
              </p>
            </div>

            {/* Emergency Toggle Pill */}
            <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-semibold mb-4">
              <button
                type="button"
                onClick={() => setIsEmergency(false)}
                className={`flex-1 py-2 rounded-lg transition ${!isEmergency ? "bg-orange-600 text-white" : "text-slate-400 hover:text-white"}`}
              >
                Servis Rutin / Terjadwal
              </button>
              <button
                type="button"
                onClick={() => setIsEmergency(true)}
                className={`flex-1 py-2 rounded-lg transition ${isEmergency ? "bg-rose-600 text-white" : "text-slate-400 hover:text-rose-400"}`}
              >
                🚨 Darurat Mogok (SOS)
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-300 font-medium mb-1 block">Nama Lengkap *</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Rian Pratama"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="text-slate-300 font-medium mb-1 block">No. WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="0812-xxxx-xxxx"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-300 font-medium mb-1 block">Merk & Tipe Motor *</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Honda Vario 160"
                    value={motorBrand}
                    onChange={(e) => setMotorBrand(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="text-slate-300 font-medium mb-1 block">Nomor Plat (Opsional)</label>
                  <input
                    type="text"
                    placeholder="B 1234 XYZ"
                    value={plateNumber}
                    onChange={(e) => setPlateNumber(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 uppercase"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-300 font-medium mb-1 block">
                  {isEmergency ? "Titik Lokasi Mogok / Patokan Jalan *" : "Alamat Rumah / Lokasi Servis *"}
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder={
                    isEmergency 
                      ? "Contoh: Depan SPBU Shell Margonda, seberang halte UI..."
                      : "Contoh: Jl. Kemang Timur No. 12, Jakarta Selatan..."
                  }
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                ></textarea>
              </div>

              <div>
                <label className="text-slate-300 font-medium mb-1 block">Keluhan Motor / Catatan Tambahan</label>
                <input
                  type="text"
                  placeholder="Contoh: Bunyi gredek saat digas, starter mati, ganti oli"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className={`w-full py-3 rounded-xl font-bold text-white flex items-center justify-center gap-2 shadow-lg transition active:scale-98 ${
                    isEmergency
                      ? "bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 shadow-rose-600/30"
                      : "bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-orange-500/30"
                  }`}
                >
                  <Send className="w-4 h-4" />
                  {isEmergency ? "KIRIM MONTIR DARURAT SEKARANG" : "Konfirmasi Booking Servis"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
