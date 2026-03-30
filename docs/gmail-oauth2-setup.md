# Setup Gmail OAuth 2.0 untuk Nodemailer

## Prasyarat
- Akun Google `articanalytica@gmail.com`
- Akses ke [console.cloud.google.com](https://console.cloud.google.com)

---

## Step 1 — Buat Project

1. Klik **"Select a project"** (pojok kiri atas)
2. Klik **"New Project"** (pojok kanan atas popup)
3. Isi nama: `Artic Analytica`
4. Klik **"Create"**

---

## Step 2 — Enable Gmail API

1. Di search bar atas, ketik **"Gmail API"**
2. Klik hasil **"Gmail API"**
3. Klik tombol **"Enable"**

---

## Step 3 — Buat OAuth Consent Screen

> Wajib dilakukan sebelum membuat credentials.

1. Di menu kiri → **"APIs & Services"** → **"OAuth consent screen"**
2. Pilih **"External"** → klik **"Create"**
3. Isi form:
   - **App name:** `Artic Analytica`
   - **User support email:** `articanalytica@gmail.com`
   - **Developer contact email:** `articanalytica@gmail.com`
4. Klik **"Save and Continue"** sampai selesai (skip bagian Scopes dan Test users)

---

## Step 4 — Buat OAuth 2.0 Client ID

1. Di menu kiri → **"APIs & Services"** → **"Credentials"**
2. Klik **"+ Create Credentials"** → **"OAuth client ID"**
3. **Application type:** pilih `Web application`
4. **Name:** `Artic Contact Form`
5. Di bagian **"Authorized redirect URIs"** → klik **"Add URI"** → masukkan:
   ```
   https://developers.google.com/oauthplayground
   ```
   > ⚠️ Jangan isi bagian "Authorized JavaScript origins"
6. Klik **"Create"**
7. Copy **Client ID** dan **Client Secret** — simpan sementara

---

## Step 5 — Dapat Refresh Token

1. Buka [developers.google.com/oauthplayground](https://developers.google.com/oauthplayground)
2. Klik ikon **gear ⚙️** di kanan atas
3. Centang **"Use your own OAuth credentials"**
4. Masukkan **Client ID** dan **Client Secret** dari Step 4
5. Di kolom kiri, cari **"Gmail API v1"** → centang:
   ```
   https://mail.google.com/
   ```
6. Klik **"Authorize APIs"** → login dengan `articanalytica@gmail.com`
7. Klik **"Exchange authorization code for tokens"**
8. Copy nilai **`refresh_token`**

---

## Step 6 — Isi `.env.local`

```env
GMAIL_USER=articanalytica@gmail.com
GMAIL_CLIENT_ID=your-client-id.apps.googleusercontent.com
GMAIL_CLIENT_SECRET=your-client-secret
GMAIL_REFRESH_TOKEN=your-refresh-token
```

---

## Referensi

- [Google Cloud Console](https://console.cloud.google.com)
- [OAuth Playground](https://developers.google.com/oauthplayground)
- [Nodemailer OAuth2 Docs](https://nodemailer.com/smtp/oauth2/)
