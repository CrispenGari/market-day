## 🌽 Mzansi Mart

### Built by **AgroPath Pioneers** 🚜

> 🏆 **Winning App of the UFH Hackathon 2025**

<p align="center"> <img src="/images/icon.png" alt="Icon" width="100"/></p>

---

<p align="center">
   <a href="https://github.com/crispengari/Mzansi-mart/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License: MIT">
  </a>
  <a href="https://typescriptlang.org/">
    <img src="https://img.shields.io/badge/language-typescript-blue.svg" alt="Language: TypeScript">
  </a>
  <a href="https://www.python.org/">
    <img src="https://img.shields.io/badge/language-python-blue.svg" alt="Language: Python">
  </a>
</p>

---

## 🧠 Project Overview

**Mzansi Mart** is a native mobile marketplace designed to connect **rural South African farmers** with **urban buyers** through a seamless digital platform. By decentralizing the traditional market structure, we enable farmers to sell fresh produce, poultry, and perishables 📦 anytime, anywhere — reducing costs, saving time, and boosting visibility.

---

## 🚨 Problem Statement

🧺 Rural and smallholder farmers struggle with limited access to centralized markets, often traveling long distances at high cost.  
🛒 On the other hand, buyers find it difficult to consistently access fresh, affordable produce.

Mzansi Mart bridges this gap with technology!

---

## ✅ Our Solution

📱 A mobile-first platform that allows:

- Farmers to list and sell produce
- Buyers to discover and purchase based on location or freshness
- Real-time chat between users
- Push notifications for quick updates

---

## ⚙️ Key Features

- 🥬 **Sell Products** – List fresh produce, poultry, and perishables
- 🛍 **Buy Online** – Browse listings by proximity and freshness
- 💬 **Real-Time Chat** – Instant buyer-seller communication
- ❤️ **Wishlist** – Save and track favorite products
- 🔔 **Push Notifications** – Get alerts for new items
- 🌐 **Social Login** – Quick access via Google & Facebook (powered by Clerk)
- 🌍 **Multilingual Support** – Planned for local languages
- 📍 **Location-Based Listings** – Geo-tagged seller discovery

---

## 🏗 Technical Architecture

- 💡 **Frontend**: React Native with Expo
- 🔧 **Backend & Database**: Convex (real-time sync & API routes)
- 🔐 **Authentication**: Clerk (Google & Facebook)
- 📬 **Push Notifications**: Expo Push API
- 📡 **Location Services**: For local listing filtering
- 💻 **Collaboration**: GitHub for version control

---

## 💡 Proposed Future Work

- 📊 **Demographic Filtering**: Recommend items based on user profile trends
- 🧬 **Content-Based Filtering**: Suggest similar items using metadata (e.g., location, product type)
- 🧠 **Collaborative Filtering**: Recommend based on behavior of users with similar interests

These AI-driven enhancements aim to personalize the experience and improve marketplace efficiency.

---

## 🌍 Expected Impact

Mzansi Mart empowers farmers by removing middlemen, reducing travel costs, and increasing digital market access. Consumers get access to fresh, locally sourced produce with full transparency.

---

## 🌟 What Makes Us Unique?

- 📶 **Designed for low-connectivity regions**
- 🐔 **Supports perishable goods and poultry**
- 🔐 **Fast, secure onboarding with social login**
- 🧠 **Planned AI integrations for smart recommendations**
- 📱 **Truly native app with a mobile-first experience**

---

## 👨‍👩‍👧‍👦 Team: AgroPath Pioneers

- `Mncwili Adumodwa`
- `Garidzira Tinashe Crispen`
- `Sobetwa Siwaphiwe`
- `Masangwana Siphelo`
- `Boneka Ntanjana`

---

### 🚀 Getting Started Locally

To run the project locally, follow these steps:

---

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/CrispenGari/mzansi-mart
cd mzansi-mart
```

---

#### 2️⃣ Set Up Environment Variables

Make sure you have the following environment files in the root directory:

🔹 `.env` – for public environment variables:

```env
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
GOOGLE_MAPS_APIKEY=your_google_maps_api_key
```

🔹 `.env.local` – for deployment and Convex variables:

```env
CONVEX_DEPLOYMENT=dev:something            # team: crispengari, project: marketday
EXPO_PUBLIC_CONVEX_URL=https://something.convex.cloud
EXPO_PUBLIC_CONVEX_SITE=https://something.convex.site
```

---

#### 3️⃣ Install Dependencies

```bash
yarn
```

---

#### 4️⃣ Start the Development Server

```bash
yarn start
```

The Expo server will launch and you can scan the QR code using your Expo Go app (or run on an emulator/simulator).

## 📚 References

- 🔐 [Clerk.dev](https://clerk.dev) – Social Authentication
- 🔄 [Convex.dev](https://convex.dev) – Real-time Backend
- 🌱 [GSMA AgriTech 2020 Report](https://www.gsma.com/solutions-and-impact/connectivity-for-good/mobile-for-development/uncategorized/introducing-digital-agriculture-maps-a-2020-state-of-the-sector-report/)
- 🌍 [GSMA Mobile Economy 2022](https://www.gsma.com)
- ⚛️ [React Native Docs](https://reactnative.dev)
- 🏦 [World Bank - Enabling Agriculture](https://eba.worldbank.org/en/eba)

---

## 📢 Call to Action

**“Let’s decentralize the market and empower local producers.”**  
Join us in transforming agriculture with technology.  
Mzansi Mart is more than an app — it's a **movement for change**. 🚀

---

🏆 _Mzansi Mart – Proud winner of the **UFH Hackathon 2025**_ 🎉

### 📍 License

This project is licensed under the [MIT](/LICENSE) License.
