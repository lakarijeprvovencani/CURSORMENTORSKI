# 📧 Vodič za Email Setup na Domenu

## Preporuka: Zoho Mail (Besplatno)

### Zašto Zoho Mail?
- ✅ Besplatno do 5 korisnika
- ✅ SMTP za slanje emailova (možeš koristiti Outlook, Apple Mail, Gmail app)
- ✅ IMAP/POP3 za primanje
- ✅ 5GB storage po korisniku
- ✅ Do 250 emailova/dan za slanje (dovoljno za ~1000/mesec)
- ✅ Odlično za MailerLite integraciju

---

## Korak 1: Kupi domen (npr. vajbkoding.com)

Kupi domen kod bilo kog registrara:
- Namecheap
- GoDaddy
- Cloudflare (najjeftiniji, ~$10/god)
- Google Domains

---

## Korak 2: Poveži domen sa Netlify

1. Idi u Netlify Dashboard → Tvoj Site → **Domain settings**
2. Klikni **Add custom domain**
3. Unesi `vajbkoding.com` i `www.vajbkoding.com`
4. Netlify će ti dati DNS zapise koje treba da dodaš kod registrara domena
5. Dodaj DNS zapise kod svog registrara (može potrajati do 24h)

---

## Korak 3: Podesi Zoho Mail

### 3.1. Kreiraj Zoho nalog
1. Idi na https://www.zoho.com/mail/
2. Klikni **Sign Up Now**
3. Izaberi **Mail** plan
4. Izaberi **Free Plan** (do 5 korisnika)

### 3.2. Dodaj svoj domen
1. U Zoho Mail dashboardu, idi na **Domain Setup**
2. Unesi svoj domen: `vajbkoding.com`
3. Zoho će ti dati **MX zapise** koje treba da dodaš u DNS

### 3.3. Dodaj MX zapise u DNS
Idi kod svog registrara domena i dodaj ove MX zapise:

```
Type: MX
Name: @
Value: mx.zoho.com
Priority: 10

Type: MX
Name: @
Value: mx2.zoho.com
Priority: 20
```

**Takođe dodaj TXT zapis za verifikaciju:**
```
Type: TXT
Name: @
Value: [Zoho će ti dati ovu vrednost]
```

### 3.4. Kreiraj email adresu
1. U Zoho Mail dashboardu, idi na **Users**
2. Klikni **Add User**
3. Kreiraj email: `info@vajbkoding.com` ili `hello@vajbkoding.com`
4. Postavi lozinku

---

## Korak 4: Podesi za slanje emailova (SMTP)

### Za Outlook:
1. Otvori Outlook
2. File → Account Settings → Account Settings
3. Klikni **New**
4. Unesi:
   - **Email**: info@vajbkoding.com
   - **Password**: [tvoja Zoho lozinka]
   - **Account Type**: IMAP
   - **Incoming mail server**: imap.zoho.com
   - **Port**: 993 (SSL)
   - **Outgoing mail server**: smtp.zoho.com
   - **Port**: 587 (TLS)

### Za Apple Mail:
1. System Preferences → Internet Accounts
2. Klikni **Add Other Account** → **Mail Account**
3. Unesi:
   - **Email**: info@vajbkoding.com
   - **Password**: [tvoja Zoho lozinka]
   - **Incoming**: imap.zoho.com (Port 993, SSL)
   - **Outgoing**: smtp.zoho.com (Port 587, TLS)

### Za Gmail app:
1. Otvori Gmail app
2. Settings → Add account → Other
3. Unesi email i lozinku
4. Izaberi **IMAP**
5. Unesi:
   - **IMAP server**: imap.zoho.com (Port 993)
   - **SMTP server**: smtp.zoho.com (Port 587)

---

## Korak 5: Poveži sa MailerLite

1. Idi u MailerLite → Settings → **Email Verification**
2. Unesi email: `info@vajbkoding.com`
3. MailerLite će poslati verifikacioni email
4. Proveri inbox u Zoho Mail-u i klikni na link
5. Gotovo! 🎉

---

## Alternativa: Google Workspace ($6/mesec)

Ako želiš profesionalnije rešenje:

1. Idi na https://workspace.google.com/
2. Izaberi **Business Starter** plan ($6/mesec)
3. Dodaj domen `vajbkoding.com`
4. Dodaj MX zapise koje Google Workspace daje
5. Kreiraj email adresu
6. Podesi SMTP u Outlook/Apple Mail:
   - **SMTP**: smtp.gmail.com
   - **Port**: 587 (TLS)
   - **Username**: info@vajbkoding.com
   - **Password**: [tvoja Google Workspace lozinka]

---

## Testiranje

Nakon setup-a, testiraj:
1. ✅ Pošalji test email sa `info@vajbkoding.com` na svoj lični email
2. ✅ Proveri da li stiže u inbox
3. ✅ Odgovori na email da vidiš da li slanje radi

---

## Pomoć

Ako zapneš negde:
- Zoho Mail Support: https://help.zoho.com/
- Netlify DNS Help: https://docs.netlify.com/domains-https/custom-domains/
- MailerLite Support: https://www.mailerlite.com/support

---

**Napomena**: DNS promene mogu potrajati do 24-48 sati. Budi strpljiv! 😊
