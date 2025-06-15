# 🌤️ Weather Widget App

A simple React weather widget that displays the **current weather** of any searched city in a clean, compact format. It fetches real-time data from [WeatherAPI](https://www.weatherapi.com/) and presents it in an elegant card layout.

Now live at: **[https://2018csb1082.github.io/Weather-App/](https://2018csb1082.github.io/Weather-App/)**

![screenshot](./src/assets/final_product/screenshot.PNG)

---

## 📦 Features

The widget shows:

- 🔍 **Search support** for any location
- 🏙️ City name
- 🌡️ Temperature (°C)
- 🌤️ Weather condition (text + icon)
- 🌬️ Wind speed
- 🧪 Air Quality Index (AQI)
- 💧 Humidity

---

## 🛠️ Tech Stack

- JavaScript
- React
- HTML
- CSS
- Vite
- Axios
- react-icons
- **GitHub Pages** (for deployment)

---

## 📥 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/2018csb1082/Weather-App.git
cd Weather-App
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Get your API key

- Sign up at [https://www.weatherapi.com](https://www.weatherapi.com)
- Copy your API key from the dashboard

### 4. Create `.env` file

```env
VITE_WEATHER_API_KEY=your_api_key_here
```

> ⚠️ Make sure the `.env` file is at the root of your project (same level as `package.json`)

### 5. Run the app locally

```bash
npm run dev
# or
yarn dev
```

### 6. Deploy to GitHub Pages

```bash
npm run deploy
```

---

## 🔌 API Used

```http
GET https://api.weatherapi.com/v1/current.json
```

---

## 📁 Folder Structure

```
src/
├── App.css
├── App.jsx
├── index.css
├── main.jsx
├── assets/
│   ├── dummy_data.json
│   └── final_product/
│       ├── error.PNG
│       ├── loading.PNG
│       └── screenshot.PNG
├── components/
│   ├── SearchBar/
│   │   ├── SearchBar.css
│   │   └── SearchBar.jsx
│   ├── WeatherApp/
│   │   ├── WeatherApp.css
│   │   └── WeatherApp.jsx
│   ├── WeatherContainer/
│   │   ├── WeatherContainer.css
│   │   └── WeatherContainer.jsx
│   └── WeatherDetails/
│       ├── GeneralObject.jsx
│       ├── IconObject.jsx
│       ├── LocationObject.jsx
│       ├── TempObject.jsx
│       └── WeatherDetails.css
```

---

## ✨ Possible Future Enhancements

- Auto-location detection via geolocation API  
- Extended forecast (5-day / hourly)  
- Dark mode toggle  

---

## 📄 License

MIT License © [Daksh Sharma] 2025

---

🔗 GitHub Repo: [https://github.com/2018csb1082/Weather-App](https://github.com/2018csb1082/Weather-App)  
🌐 Live Site: [https://2018csb1082.github.io/Weather-App/](https://2018csb1082.github.io/Weather-App/)
