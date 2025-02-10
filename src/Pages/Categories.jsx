import BigHeader from "../Components/Headers/BigHeader";

export default function Categories(props) {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-dvh px-12 lg:px-24 py-24 gap-y-10"
      id={props.name}
    >
      <BigHeader>ÖDÜL KATEGORİLERİ</BigHeader>

      {/* KATEGORİLER */}
      <div className="flex flex-wrap w-full text-center">
        
        {/* KÜLTÜR - SANAT */}
        <div className="flex flex-col w-full md:w-1/3 p-2 justify-center">
          <h2 className="sponsor-title text-3xl mb-2">Kültür - Sanat</h2>
          <div className="text-base bg-black bg-opacity-40 w-full rounded-xl font-bold shadow-2xl py-3 px-4 tracking-wide text-white leading-relaxed">
            <p>Albüm</p>
            <p>Çıkış Yapan Oyuncu (K/E)</p>
            <p>Çıkış Yapan Müzisyen (K/E)</p>
            <p>Dijital Dizi Projesi</p>
            <p>Dijital Film Projesi</p>
            <p>Dijital Platform</p>
            <p>Erkek Oyuncu</p>
            <p>Film</p>
            <p>Influencer</p>
            <p>İçerik</p>
            <p>İçerik Üreticisi</p>
            <p>Kadın Oyuncu</p>
            <p>Komedyen</p>
            <p>Müzik Grubu</p>
            <p>Müzisyen</p>
            <p>Rap Şarkıcısı</p>
            <p>Sahne Sanatları</p>
            <p>Single</p>
            <p>TV & Dijital Program</p>
            <p>TV Dizi Projesi</p>
            <p>TV Kanalı</p>
            <p>Unutulmayan Dizi Projesi</p>
            <p>Yayıncı – Streamer</p>
            <p>Youtuber</p>
          </div>
        </div>

        {/* MÜHENDİSLİK, SPOR, BİLİM */}
        <div className="flex flex-col w-full md:w-1/3 p-2 gap-y-2 justify-between">

          {/* MÜHENDİSLİK */}
          <div>
            <h2 className="sponsor-title text-3xl mb-2">Mühendislik</h2>
            <div className="text-base bg-black bg-opacity-40 w-full rounded-xl font-bold shadow-2xl py-3 px-4 tracking-wide text-white leading-relaxed">
              <p>Elektronik</p>
              <p>Enerji</p>
              <p>Gıda</p>
              <p>İlaç</p>
              <p>İnşaat</p>
              <p>Kimya</p>
              <p>Maden</p>
              <p>Makine</p>
              <p>Otomotiv</p>
              <p>Oyun</p>
              <p>Savunma Sanayi</p>
              <p>Yazılım</p>
            </div>
          </div>

          {/* SPOR */}
          <div>
            <h2 className="sponsor-title text-3xl mb-2">Spor</h2>
            <div className="text-base bg-black bg-opacity-40 w-full rounded-xl font-bold shadow-2xl py-3 px-4 tracking-wide text-white leading-relaxed">
              <p>Onur Ödülleri</p>
            </div>
          </div>

          {/* BİLİM */}
          <div>
            <h2 className="sponsor-title text-3xl mb-2">Bilim</h2>
            <div className="text-base bg-black bg-opacity-40 w-full rounded-xl font-bold shadow-2xl py-3 px-4 tracking-wide text-white leading-relaxed">
              <p>Onur Ödülleri</p>
            </div>
          </div>
        </div>

        {/* YÖNETİM - FİNANS */}
        <div className="flex flex-col w-full md:w-1/3 p-2 justify-center min-h-max">
          <h2 className="sponsor-title text-3xl mb-2">Yönetim - Finans</h2>
          <div className="flex text-base bg-black bg-opacity-40 w-full rounded-xl font-bold shadow-2xl py-3 px-4 tracking-wide text-white leading-relaxed h-full flex-col items-center justify-center">
            <p>Bankacılık</p>
            <p>Çevreci Şirket</p>
            <p>Dayanıklı Tüketim</p>
            <p>Denetim</p>
            <p>Danışmanlık</p>
            <p>E-ticaret</p>
            <p>En Çalışılmak İstenen Firma</p>
            <p>Girişimcilik</p>
            <p>Giyim Markası</p>
            <p>Grup Şirketler</p>
            <p>Hızlı Tüketim</p>
            <p>İnovatif Program</p>
            <p>İnovatif Şirket</p>
            <p>Kozmetik ve Kişisel Bakım</p>
            <p>Restoran Zinciri</p>
            <p>Sosyal Sorumluluk</p>
            <p>Sürdürülebilir Şirket</p>
            <p>Telekomünikasyon</p>
            <p>Ulaşım</p>
            <p>Yetenek (Staj) Programı</p>
          </div>
        </div>
      </div>
    </div>
  );
}
