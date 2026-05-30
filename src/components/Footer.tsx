export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-outline-variant py-12 px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div>
        <div className="font-bold text-primary mb-2 tracking-wider">NEXATECH</div>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Layanan pembuatan website premium dengan presisi tinggi.
        </p>
      </div>
      <div className="text-[10px] text-on-surface-variant font-semibold">
        © {currentYear} NEXATECH. All rights reserved.
      </div>
    </footer>
  );
}
