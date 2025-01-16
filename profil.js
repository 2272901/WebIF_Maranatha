var tabs1 = document.querySelector('.tabs1');
var tabs2 = document.querySelector('.tabs2');
var tabs3 = document.querySelector('.tabs3');
var tabs4 = document.querySelector('.tabs4');
var tabs5 = document.querySelector('.tabs5');

var newsContainer = document.querySelector('.news-container');

tabs1.addEventListener("click", () => {
    tabs1.classList.add('highlighted');
    tabs2.classList.remove('highlighted');
    tabs3.classList.remove('highlighted');
    tabs4.classList.remove('highlighted');
    tabs5.classList.remove('highlighted');

    newsContainer.innerHTML = `
        <p id="highlight-news">“No Limit, No Boundaries”</p>
        <br>
        <p id="normal-news">Fakultas Teknologi Informasi diresmikan pada tahun 2005, memiliki visi untuk menjadi salah satu fakultas terbaik di Indonesia dan dikenal di kawasan Asia Tenggara dalam pendidikan, penelitian, dan pengabdian kepada masyarakat di bidang teknologi informasi pada tahun 2020. Fakultas Teknologi Informasi menyelenggarakan dua program studi (Teknik Informatika dan Sistem Informasi), dengan kompetensi dan bidang kajiannya masing-masing.
            <br><br>
            Lulusan Fakultas Teknologi Informasi dapat berkarier sebagai profesional di industri teknologi informasi, mengembangkan usaha mandiri sebagai entrepreneur, ataupun siap melanjutkan studi ke jenjang yang lebih tinggi. Berbagai bidang dalam industri IT dapat menjadi pilihan berkarier sesuai dengan kompetensi yang dimiliki.
        </p>
    `;
});
tabs2.addEventListener("click", () => {
    tabs1.classList.remove('highlighted');
    tabs2.classList.add('highlighted');
    tabs3.classList.remove('highlighted');
    tabs4.classList.remove('highlighted');
    tabs5.classList.remove('highlighted');

    newsContainer.innerHTML = `
        <p id="highlight-news">Visi</p>
        <br>
        <p id="normal-news">
            Menjadi fakultas yang berdaya cipta mengembangkan teknologi informasi melalui inovasi penelitian, pendidikan, dan abdimas berdasarkan kasih dan keteladanan Yesus Kristus pada tahun 2030.
        </p>
        <br>
        <p id="highlight-news">Misi</p>
        <br>
        <p id="normal-news">
            1. Inspirator : Melahirkan inspirasi melalui inovasi di bidang penelitian, pendidikan dan abdimas. <br>
            2. Creator : Mengembangkan & memanfaatkan penelitian teknologi informasi untuk inovasi pendidikan dan abdimas. <br>
            3. Transformator : Menjadi agen perubahan melalui pemberdayaan teknologi informasi tepat guna bagi industri dan masyarakat. <br>
        </p>
        <br>
        <p id="highlight-news">Tujuan</p>
        <br>
        <p id="normal-news">
            1. Mewujudkan Manusia Maranatha yang berkarakter unggul serta mampu menginspirasi kehidupan akademis dan bermasyarakat melalui penerapan nilai-nilai hidup Kristiani. <br>
            2. Mewujudkan keunggulan akademis melalui pendirian pusat-pusat studi, kepakaran dan inovasi berbasis teknologi informasi. <br>
            3. Mewujudkan solusi-solusi keilmuan yang dapat menghasilkan kontribusi nyata bagi industri dan masyarakat. <br>
        </p>
        
    `;
});
tabs3.addEventListener("click", () => {
    tabs1.classList.remove('highlighted');
    tabs2.classList.remove('highlighted');
    tabs3.classList.add('highlighted');
    tabs4.classList.remove('highlighted');
    tabs5.classList.remove('highlighted');

    newsContainer.innerHTML = `
        <p id="highlight-news">Struktur Organisasi Fakultas IT</p>
        <br>
        <img src="Struktur-Organisasi-FIT-2021.jpg">
        <br>
        <p id="normal-news">
            Ir. Teddy Marcus Zakaria, M.T. – Dekan <br><br>

            Djoni Setiawan Kartawihardja, S.T., M.T. – Wakil Dekan Akademik <br><br>

            Daniel Jahja S., S.Kom., M.T. – Wakil Dekan Sumber Daya Manusia<br><br>

            Oscar Karnalim, S.T., M.T., Ph.D. – Ketua Prodi Magister Ilmu Komputer<br><br>

            Julianti Kasih, S.E., M.Kom. – Ketua Prodi Teknik Informatika<br><br>

            Sendy Ferdian, S.Kom., M.T. – Ketua Prodi Sistem Informasi Bisnis<br><br>

            Tjatur Kandaga, S.Si., M.T. – Kepala Laboratorium IT Divisi Layanan Fakultas<br><br>

            Rossevine Artha Nathasya, S.Kom. – Kepala Laboratorium IT Divisi Staf dan Prasarana<br><br>

            Rossevine Artha Nathasya, S.Kom. – Kepala Laboratorium IT Divisi Operasional Kuliah<br><br>

            Sulaeman Santoso, S.Kom., M.T. – Koordinator Kerja Praktek S1 Teknik Informatika<br><br>

            Adelia, S. Kom., M.T. – Koordinator Kerja Praktek S1 Sistem Informasi<br><br>

            Hendra Bunyamin, S.Si., M.T. – Koordinator Tugas Akhir S1 Teknik Informatika<br><br>

            Gatot Juwarno – Kepala Tata Usaha<br><br>

            Teddy Yusnandar – Tenaga Administrasi<br><br>

            Anita Anggraeni – Manager Operasional Prodi Teknik Informatika<br><br>

            Diana Agatha – Staf MO Prodi Teknik Informatika<br><br>

            Adriani Dewi Hutami – Manager Operasional Prodi Sistem Informasi<br><br>

            Aristia Ariyanti – Staf MO Prodi Sistem Informasi<br><br>

            Kristianto – Manager Operasional Prodi Magister Ilmu Komputer<br><br>

            Diana Agatha – Staf MO Prodi Magister Ilmu Komputer<br><br>

            Wasijan – Tenaga Kerumahtanggaan<br><br>

            Marsaid – Tenaga Kerumahtanggaan
        </p>
    `;
});
tabs4.addEventListener("click", () => {
    tabs1.classList.remove('highlighted');
    tabs2.classList.remove('highlighted');
    tabs3.classList.remove('highlighted');
    tabs4.classList.add('highlighted');
    tabs5.classList.remove('highlighted');
});
tabs5.addEventListener("click", () => {
    tabs1.classList.remove('highlighted');
    tabs2.classList.remove('highlighted');
    tabs3.classList.remove('highlighted');
    tabs4.classList.remove('highlighted');
    tabs5.classList.add('highlighted');
});
