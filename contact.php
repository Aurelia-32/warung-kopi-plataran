<style>
    /* ── Contact Section ── */
    #contact {
        padding: 70px 0 80px;
        background: var(--bg, #faf7f4);
    }
    #contact h1 {
        text-align: center;
        color: var(--coffee, #6b2e00);
        font-size: 2rem;
        margin-bottom: 8px;
    }
    #contact .section-sub {
        text-align: center;
        color: var(--muted, #8a7a6a);
        font-size: .97rem;
        margin-bottom: 48px;
    }
    #contact .contact-container {
        max-width: 1100px;
        margin: 0 auto;
        padding: 0 32px;
    }

    /* ── Grid ── */
    .contact-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 28px;
        align-items: start;
    }

    /* ── Panel ── */
    .panel {
        background: #fff;
        border: 1px solid var(--line, #ede3d6);
        border-radius: 20px;
        padding: 32px 28px;
        box-shadow: 0 8px 28px rgba(107, 46, 0, .06);
    }
    .panel + .panel { margin-top: 24px; }
    .panel h2 {
        color: var(--coffee, #6b2e00);
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 4px;
    }
    .panel .lead {
        color: var(--muted, #8a7a6a);
        margin-bottom: 22px;
        font-size: .9rem;
        line-height: 1.55;
    }

    /* ── Contact list ── */
    .contact-list { display: flex; flex-direction: column; gap: 12px; }
    .contact-item {
        display: flex; align-items: center; gap: 14px;
        text-decoration: none;
        padding: 14px 16px;
        border: 1px solid var(--line, #ede3d6);
        border-radius: 14px;
        color: var(--ink, #2b1d12);
        transition: border-color .2s, background .2s, transform .2s, box-shadow .2s;
    }
    .contact-item:hover {
        border-color: var(--amber, #d28c28);
        background: #fffaf2;
        transform: translateY(-2px);
        box-shadow: 0 6px 18px rgba(107,46,0,.08);
    }
    .contact-item .ico {
        width: 44px; height: 44px; flex: 0 0 44px;
        border-radius: 11px; display: flex;
        align-items: center; justify-content: center;
        background: #fff; border: 1px solid var(--line, #ede3d6);
    }
    .contact-item .ico img {
        width: 28px; height: 28px;
        object-fit: contain; display: block;
    }
    .contact-item .t b  { display: block; font-size: .97rem; }
    .contact-item .t span { color: var(--muted, #8a7a6a); font-size: .85rem; }

    /* ── Status badge ── */
    .status-badge {
        display: inline-flex; align-items: center; gap: 8px;
        font-weight: 600; padding: 7px 14px;
        border-radius: 999px; font-size: .88rem; margin-bottom: 16px;
    }
    .status-badge .dot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; }
    .status-open   { background: #e7f7ec; color: #1b8a4b; }
    .status-open   .dot { background: #1b8a4b; }
    .status-closed { background: #fdeaea; color: #c0392b; }
    .status-closed .dot { background: #c0392b; }

    /* ── Hours table ── */
    .hours-table { width: 100%; border-collapse: collapse; }
    .hours-table td {
        padding: 10px 4px;
        border-bottom: 1px solid var(--line, #ede3d6);
        font-size: .92rem;
    }
    .hours-table tr:last-child td { border-bottom: none; }
    .hours-table tr.today td  { font-weight: 700; color: var(--coffee, #6b2e00); }
    .hours-table .day         { text-align: left; }
    .hours-table .time        { text-align: right; color: var(--muted, #8a7a6a); }
    .hours-table tr.today .time { color: var(--coffee, #6b2e00); }
    .closed-text              { color: #c0392b; }

    /* ── Reservation form ── */
    .form-row { margin-bottom: 16px; }
    .form-row.two { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
    #contact label {
        display: block; font-weight: 600;
        margin-bottom: 6px; font-size: .88rem;
        color: var(--ink, #2b1d12);
    }
    #contact input,
    #contact textarea {
        width: 100%; padding: 11px 14px;
        border: 1.5px solid var(--line, #ede3d6);
        border-radius: 10px; font-size: .95rem;
        background: #fdfaf7; color: var(--ink, #2b1d12);
        box-sizing: border-box;
        font-family: inherit;
        transition: border-color .2s, box-shadow .2s;
    }
    #contact input:focus,
    #contact textarea:focus {
        outline: none;
        border-color: var(--amber, #d28c28);
        box-shadow: 0 0 0 3px rgba(210,140,40,.12);
        background: #fff;
    }
    #contact textarea { resize: vertical; min-height: 74px; }

    /* ── Reservation button ── */
    #btnReservasi {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 14px 20px;
        line-height: 1;
        border: none;
        border-radius: 14px;
        font-size: 1rem;
        font-weight: 700;
        cursor: pointer;
        background: linear-gradient(135deg, #25D366 0%, #1ead53 100%);
        color: #fff;
        box-shadow: 0 6px 20px rgba(37, 211, 102, .35);
        transition: transform .2s, box-shadow .2s, filter .2s;
        letter-spacing: .01em;
        overflow: visible;
    }
    #btnReservasi:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 28px rgba(37, 211, 102, .45);
        filter: brightness(1.06);
    }
    #btnReservasi:active {
        transform: translateY(0);
        box-shadow: 0 4px 12px rgba(37, 211, 102, .3);
    }
    #btnReservasi svg { flex-shrink: 0; }

    .form-note {
        color: var(--muted, #8a7a6a); font-size: .82rem;
        margin-top: 10px; text-align: center;
        line-height: 1.5;
    }

    /* ── Map ── */
    .map-wrap {
        margin-top: 12px; border-radius: 14px;
        overflow: hidden; border: 1px solid var(--line, #ede3d6);
    }
    .map-wrap iframe { width: 100%; height: 340px; border: 0; display: block; }

    /* ── Responsive ── */
    @media (max-width: 768px) {
        #contact .contact-container { padding: 0 18px; }
        .contact-grid { grid-template-columns: 1fr; }
        .form-row.two { grid-template-columns: 1fr; }
    }
</style>


<!-- ── PASTE INI DI DALAM <body> ── -->
<section id="contact">
    <h1 style="font-weight: bold;">Contact Us</h1>

    <div class="contact-container">
        <p class="section-sub">Hubungi Kami, Cek Jam Buka, atau Buat Reservasi langsung Via WhatsApp.</p>

        <div class="contact-grid">

            <!-- LEFT: Contact + Hours -->
            <div>
                <div class="panel">
                    <h2>Hubungi Kami</h2>
                    <p class="lead">Anda dapat menghubungi Warung Kopi Plataran melalui beberapa saluran berikut.</p>
                    <div class="contact-list">

                        <a class="contact-item"
                           href="https://wa.me/6285737034083?text=Halo%20Warung%20Kopi%20Plataran%2C%20saya%20ingin%20bertanya."
                           target="_blank" rel="noopener">
                            <span class="ico">
                                <img src="images/logo_wa.png" alt="WhatsApp">
                            </span>
                            <span class="t">
                                <b>WhatsApp</b>
                                <span>+6285737034083</span>
                            </span>
                        </a>

                        <a class="contact-item"
                           href="https://instagram.com/warungkopiplataran"
                           target="_blank" rel="noopener">
                            <span class="ico">
                                <img src="images/logo_ig.png" alt="Instagram">
                            </span>
                            <span class="t">
                                <b>Instagram</b>
                                <span>@warungkopiplataran</span>
                            </span>
                        </a>

                        <a class="contact-item"
                           href="https://maps.app.goo.gl/UeebqTgkRGHq2DZu6"
                           target="_blank" rel="noopener">
                            <span class="ico">
                                <img src="images/logo_map.png" alt="Maps">
                            </span>
                            <span class="t">
                                <b>Alamat</b>
                                <span>Jl. Ketintang Baru IV No.2, Ketintang, Kec. Gayungan, Surabaya, Jawa Timur 60231</span>
                            </span>
                        </a>

                    </div>
                </div>

                <div class="panel">
                    <h2>Jam Operasional</h2>
                    <p class="lead">Status di bawah mengikuti waktu pada perangkat Anda.</p>
                    <div id="contactStatusBadge" class="status-badge status-closed">
                        <span class="dot"></span>
                        <span id="contactStatusText">Memeriksa…</span>
                    </div>
                    <table class="hours-table">
                        <tr data-day="1"><td class="day">Senin</td>  <td class="time">06:00 – 22:00</td></tr>
                        <tr data-day="2"><td class="day">Selasa</td> <td class="time">06:00 – 22:00</td></tr>
                        <tr data-day="3"><td class="day">Rabu</td>   <td class="time">06:00 – 22:00</td></tr>
                        <tr data-day="4"><td class="day">Kamis</td>  <td class="time">06:00 – 22:00</td></tr>
                        <tr data-day="5"><td class="day">Jumat</td>  <td class="time">06:00 – 22:00</td></tr>
                        <tr data-day="6"><td class="day">Sabtu</td>  <td class="time">06:00 – 22:00</td></tr>
                        <tr data-day="0"><td class="day">Minggu</td> <td class="time">06:00 – 22:00</td></tr>
                    </table>
                </div>
            </div>

            <!-- RIGHT: Reservation -->
            <div>
                <div class="panel">
                    <h2>Reservasi Meja</h2>
                    <p class="lead">Isi form berikut, lalu tekan tombol untuk mengirim reservasi via WhatsApp.</p>

                    <div class="form-row">
                        <label for="resNama">Nama</label>
                        <input type="text" id="resNama" placeholder="Nama Anda">
                    </div>
                    <div class="form-row two">
                        <div>
                            <label for="resTanggal">Tanggal</label>
                            <input type="date" id="resTanggal">
                        </div>
                        <div>
                            <label for="resJam">Jam</label>
                            <input type="time" id="resJam">
                        </div>
                    </div>
                    <div class="form-row">
                        <label for="resOrang">Jumlah Orang</label>
                        <input type="number" id="resOrang" min="1" value="2">
                    </div>
                    <div class="form-row">
                        <label for="resCatatan">Catatan (opsional)</label>
                        <textarea id="resCatatan" placeholder="Mis. dekat jendela, ada perayaan ulang tahun, dll."></textarea>
                    </div>

                    <button type="button" id="btnReservasi">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill="#fff" d="M2 22 3.67 16.05A9.5 9.5 0 1 1 7.95 20.3L2 22Z"/>
                            <path fill="#25D366" d="M9.1 7.5c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.2 2.4 1 2.9.8 3.4.7.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.1.1-1.3-.1-.1-.3-.2-.6-.3l-1.9-.9c-.3-.1-.5-.2-.7.1l-.9 1.1c-.1.2-.3.2-.6.1-1.6-.8-2.6-1.4-3.6-3.1-.1-.3 0-.4.1-.5l.6-.7c.1-.2.2-.4.1-.6L9.1 7.5Z"/>
                        </svg>
                        Kirim Reservasi via WhatsApp
                    </button>
                    <p class="form-note">
                        Tombol akan membuka WhatsApp dengan pesan reservasi yang sudah terisi otomatis.
                    </p>
                </div>
            </div>
        </div>

        <!-- Google Maps -->
        <div style="margin-top: 28px;">
            <div class="panel">
                <h2>Lokasi Kami</h2>
                <p class="lead">Jl. Ketintang Baru IV No.2, Ketintang, Kec. Gayungan, Surabaya, Jawa Timur 60231</p>
                <div class="map-wrap">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.3622130877716!2d112.7341946!3d-7.3131441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb1d3a902b43%3A0x2653f6c856c9dccc!2sWarung%20Plataran%20Sambelan!5e0!3m2!1sen!2sid!4v1780927804167!5m2!1sen!2sid"
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        </div>
    </div>

    <script>
        const CONTACT_HOURS = {
            0: { label: 'Minggu', open: '06:00', close: '22:00' },
            1: { label: 'Senin',  open: '06:00', close: '22:00' },
            2: { label: 'Selasa', open: '06:00', close: '22:00' },
            3: { label: 'Rabu',   open: '06:00', close: '22:00' },
            4: { label: 'Kamis',  open: '06:00', close: '22:00' },
            5: { label: 'Jumat',  open: '06:00', close: '22:00' },
            6: { label: 'Sabtu',  open: '06:00', close: '22:00' }
        };
        const CONTACT_WA_BASE = 'https://wa.me/6285737034083';

        (function () {
            const now   = new Date();
            const day   = now.getDay();
            const cur   = now.getHours() * 60 + now.getMinutes();
            const badge = document.getElementById('contactStatusBadge');
            const text  = document.getElementById('contactStatusText');
            const today = CONTACT_HOURS[day];
            const toMin = s => { const [h, m] = s.split(':').map(Number); return h * 60 + m; };

            let isOpen = false;
            if (today && !today.closed) {
                const o = toMin(today.open), c = toMin(today.close);
                isOpen = (c > o) ? (cur >= o && cur < c) : (cur >= o || cur < c);
            }

            badge.classList.remove('status-open', 'status-closed');
            badge.classList.add(isOpen ? 'status-open' : 'status-closed');
            text.textContent = isOpen
                ? 'Buka sekarang · Tutup Pukul ' + today.close
                : (today && !today.closed ? 'Tutup · Buka Pukul ' + today.open : 'Tutup hari ini');

            const row = document.querySelector('.hours-table tr[data-day="' + day + '"]');
            if (row) row.classList.add('today');
        })();

        document.getElementById('btnReservasi').addEventListener('click', function () {
            const nama    = document.getElementById('resNama').value.trim();
            const tanggal = document.getElementById('resTanggal').value;
            const jam     = document.getElementById('resJam').value;
            const orang   = document.getElementById('resOrang').value;
            const catatan = document.getElementById('resCatatan').value.trim();

            if (!nama || !tanggal || !jam) {
                alert('Mohon isi Nama, Tanggal, dan Jam terlebih dahulu.');
                return;
            }

            let pesan =
                '*Reservasi Warung Kopi Plataran*\n' +
                'Nama: '         + nama    + '\n' +
                'Tanggal: '      + tanggal + '\n' +
                'Jam: '          + jam     + '\n' +
                'Jumlah orang: ' + (orang || '-');
            if (catatan) pesan += '\nCatatan: ' + catatan;

            window.open(CONTACT_WA_BASE + '?text=' + encodeURIComponent(pesan), '_blank');
        });
    </script>
</section>
