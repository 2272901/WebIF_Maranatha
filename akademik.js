var tabs1 = document.querySelector('.tabs1');
var tabs2 = document.querySelector('.tabs2');
// var tabs3 = document.querySelector('.tabs3');
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
        <p id="highlight-news">“Make IT Smarter”</p>
        <br>
        <p id="normal-news">
            Sigap menjawab tantangan global<br><br>
            <img src="ak1.jpg"><br><br>
            <img src="ak3.jpg"><br><br>
            <img src="ak2.jpg"><br><br>
            Perkembangan teknologi informasi menuntut tenaga ahli yang cerdas dan andal di bidangnya. Program Studi S-1 Teknik Informatika mempersiapkan lulusan yang sigap menjawab tantangan global ini. Mahasiswa Program Studi S-1 Teknik Informatika (S-1 IT) akan mempelajari konsep ilmu computer science serta implementasi praktis software engineering.<br><br>
        </p><br>
        <p id="highlight-news">Konsep & Praktik yang Seimbang</p>
        <br>
        <p id="normal-news">
            Proses pembelajaran seimbang antara konseptual dan praktik di laboratorium, menyiapkan mahasiswa agar siap berkarya secara maksimal di dunia kerja/usaha setelah menyelesaikan kuliah. Lulusan akan memiliki keahlian pengembangan aplikasi mobile/desktop application, berbasis intelligent computing & network security. Keahlian pengembangan software (Software Methods and Technologies) menjadi fokus utama perkuliahan, berikut ragam keahlian yang dipelajari selama perkuliahan:<br><br>
            <img src="statistik-s1-teknik-informatika-01.png"><br><br>
        </p><br>
        <p id="highlight-news">Kualitas Internasional</p>
        <br>
        <p id="normal-news">
            Program Studi S-1 IT menjalin hubungan kerja sama dengan berbagai institusi serta vendor di tingkat nasional maupun internasional, seperti Cisco Academy, IBM Academic Initiative, dan EC-Council Academia. Kerja sama ini menjadi peluang bagi mahasiswa untuk mendapatkan keahlian praktis yang sesuai dengan perkembangan IT terkini.
            <br><br>
            Dosen-dosen yang mengajar di S-1 IT adalah lulusan perguruan tinggi ternama dalam dan luar negeri. Prestasi-prestasi mahasiswa S-1 IT bukan hanya diakui di tingkat nasional tapi juga sudah dikenal di ajang internasional, melalui sejumlah prestasi di berbagai kompetisi IT seperti ACM ICPC, CompFest, dan Gemastik.
            <br><br>
            Dengan pengalaman dan semangat mengajar yang dimiliki, para dosen bukan hanya menjadi pendidik, tapi menjadi sahabat bagi para mahasiswa.
            <br><br>
            Lulusan S-1 IT sudah banyak yang berhasil menjadi wirausahawan, maupun bekerja di berbagai perusahaan di tingkat nasional, multinasional, bahkan skala internasional. Masa tunggu lulusan untuk memperoleh pekerjaan atau menjadi wirausahawan juga terhitung relatif singkat.
        </p>
    `;
});
// tabs3.addEventListener("click", () => {
//     tabs1.classList.remove('highlighted');
//     tabs2.classList.remove('highlighted');
//     tabs3.classList.add('highlighted');
//     tabs4.classList.remove('highlighted');
//     tabs5.classList.remove('highlighted');

//     newsContainer.innerHTML = `
//         <p id="highlight-news">Visi</p>
//         <br>
//         <p id="normal-news">
//             Menjadi fakultas yang berdaya cipta mengembangkan teknologi informasi melalui inovasi penelitian, pendidikan, dan abdimas berdasarkan kasih dan keteladanan Yesus Kristus pada tahun 2030.
//         </p>
//         <br>
//         <p id="highlight-news">Misi</p>
//         <br>
//         <p id="normal-news">
//             1. Inspirator : Melahirkan inspirasi melalui inovasi di bidang penelitian, pendidikan dan abdimas. <br>
//             2. Creator : Mengembangkan & memanfaatkan penelitian teknologi informasi untuk inovasi pendidikan dan abdimas. <br>
//             3. Transformator : Menjadi agen perubahan melalui pemberdayaan teknologi informasi tepat guna bagi industri dan masyarakat. <br>
//         </p>
//         <br>
//         <p id="highlight-news">Tujuan</p>
//         <br>
//         <p id="normal-news">
//             1. Mewujudkan Manusia Maranatha yang berkarakter unggul serta mampu menginspirasi kehidupan akademis dan bermasyarakat melalui penerapan nilai-nilai hidup Kristiani. <br>
//             2. Mewujudkan keunggulan akademis melalui pendirian pusat-pusat studi, kepakaran dan inovasi berbasis teknologi informasi. <br>
//             3. Mewujudkan solusi-solusi keilmuan yang dapat menghasilkan kontribusi nyata bagi industri dan masyarakat. <br>
//         </ 
tabs2.addEventListener("click", () => {
    tabs1.classList.remove('highlighted');
    tabs2.classList.add('highlighted');
    tabs3.classList.remove('highlighted');
    tabs4.classList.remove('highlighted');
    tabs5.classList.remove('highlighted');

    newsContainer.innerHTML = `
        <img src="FAKULTAS-TEKNOLOGI-INFORMASI-1.jpg">
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
