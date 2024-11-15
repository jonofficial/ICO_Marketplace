# ICO Marketplace

An ICO (Initial Coin Offering) Marketplace built with Next.js. This platform allows users to explore and invest in various ICO projects, view detailed information, and interact with smart contracts.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)

---

## Project Overview

The ICO Marketplace is a decentralized application (DApp) built with Next.js that enables users to browse and invest in ICOs. It interacts with Ethereum-based smart contracts to manage ICO projects securely and transparently.

## Features

- Browse ICO projects with detailed descriptions
- Connect wallet to interact with smart contracts
- Invest in ICO projects
- View investment history and balances
- Responsive design with a user-friendly interface

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation
- **Solidity**: Smart contracts for managing ICOs
- **Web3.js or Ethers.js**: Interfacing with the Ethereum blockchain
- **CSS/Styled Components**: Styling for the application
- **Node.js and npm**: Backend environment and package management

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- **Node.js** (version 14 or higher)
- **npm** or **yarn**
- **MetaMask** or any other Ethereum wallet for testing the smart contract interactions

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/jonofficial/ICO_Marketplace.git
   cd ICO_Marketplace
   ```
2. **Install dependencies**:

  ```bash
  npm install
  ```
or if you are using yarn:

  ```bash
  yarn install
  ```

3. **Set up environment variables**:

Create a .env.local file in the root directory to store your environment variables. Here is an example:

  ```bash
  NEXT_PUBLIC_INFURA_PROJECT_ID=your_infura_project_id
  NEXT_PUBLIC_CONTRACT_ADDRESS=your_smart_contract_address
  NEXT_PUBLIC_NETWORK=network_name (e.g., rinkeby, mainnet)
  ```
Replace your_infura_project_id and your_smart_contract_address with your actual values.

### Running the Project
1. Start the development server:

  ```bash
  npm run dev
  ```

or if you are using yarn:

  ```bash
  yarn dev
  ```

2. Open http://localhost:3000 in your browser to view the application.

### Building for Production
To build the project for production, run:

  ```bash
  npm run build
  ```
This will compile the project and optimize it for deployment.

To start the production server:

  ```bash
  npm start
  ```
