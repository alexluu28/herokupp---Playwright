# Playwright POM & Data-Driven Testing Framework

This is a robust test automation framework built with **Playwright (TypeScript)**. It utilizes the **Page Object Model (POM)** design pattern and implements **Data-Driven Testing** using JSON files to test the Login functionality of `the-internet.herokuapp.com`.

## 🚀 Features

* **Page Object Model (POM):** UI logic is separated from test logic for better maintenance.
* **Data-Driven Testing (DDT):** Test data is decoupled from test scripts using `data/users.json`.
* **TypeScript:** Type safety and better IDE support.
* **Reporting:** Built-in Playwright HTML reporting.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
* [Node.js](https://nodejs.org/) (Version 14 or higher)
* A code editor like [VS Code](https://code.visualstudio.com/)

## 🛠️ Installation

1.  **Clone the repository** (if applicable) or navigate to your project folder.
2.  **Install dependencies:**
    ```bash
    npm install
    npx playwright install
    ```

## ⚙️ Configuration (Important)

To support importing JSON files directly into TypeScript tests (which is required for the Data-Driven approach), ensure your `tsconfig.json` contains these compiler options:

```json
{
  "compilerOptions": {
    "esModuleInterop": true,
    "resolveJsonModule": true,
    // ... other settings
  }
}