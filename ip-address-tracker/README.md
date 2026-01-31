# 🌍 IP Address Tracker

A professional React application that allows users to track any IP address or domain and visualize its location on an interactive map.

## 🚀 Features

- **Real-time IP Tracking:** Automatically detects the user's current IP address on initial load.
- **Detailed Information:** Displays IP address, city, region, and ISP.
- **Interactive Map:** Powered by Leaflet.js to dynamically mark and show locations.
- **Smart UX:**
  - **Keyboard Friendly:** Full support for "Enter" key submission.
  - **Smooth Navigation:** Map uses fly-to animations to focus on new locations.

## 🛠️ Tech Stack

- **React** (Vite)
- **CSS3** (Responsive Layout)
- **Leaflet & React-Leaflet** (Map integration)
- **IP Geolocation API** (Data source)
- **Custom Hooks** (For clean architecture and logic separation)

## 🏗️ Architectural Notes

This project follows **Clean Code** principles:

- **Separation of Concerns:** API fetching and state management are isolated within the `useIpAddress` custom hook.
- **Component-Based Architecture:** Broken down into manageable components like Header, MapComponent, and InfoBar.
- **DOM Access:** Utilizes `useRef` for standard React DOM manipulations (Focus/Blur management).

## 💻 Installation & Setup

To run this project locally:

1. Clone the repository:
   ```bash
   git clone [https://github.com/tolgahan-cali/ip-address-tracker.git](https://github.com/tolgahan-cali/ip-address-tracker.git)
   ```
