# PPA Flight Search

PPA (Punto de Pago Air) is a Colombian airline that plans to launch operations with a fixed weekly flight schedule connecting 8 Colombian airports. As part of the initial launch, not all airports will have direct flights to each other. The goal of this project is to implement a flight search functionality that helps users find both direct and connecting flights based on a specific departure date.

## Project Overview

The PPA Flight Search app allows users to search for flight itineraries between any pair of airports within the PPA network. The system is designed to support the following features:

- **Direct Flights**: Find direct flights between two airports on a specific day.
- **Connecting Flights**: If no direct flight exists, the app can find connecting flights involving one or more layovers.

The system is built using **React**, **TypeScript**, and **Vite** for fast and modern development.

## Features

- **Search for flights**: Search for direct or connecting flights between any two airports in the PPA network.
- **Handle date-based queries**: Accepts a date and filters flights based on availability for that day or suggests the next available day.
- **Display results**: Show flight details.

## Technologies Used

- **React** - For building the user interface.
- **TypeScript** - For type safety and development scalability.
- **Vite** - For fast build times and development experience.

## Installation

To get started with the project, you need to install the required dependencies and run the development server.

### Prerequisites

Make sure you have **Node.js** and **npm** installed on your machine.

## Environments and Deployment

For development and deployment, two environments were used: **Production** and **Development**.

- **Production Environment**: The `main` branch is set up as the production environment. Once changes are merged into `main`, they are deployed to the production environment on Vercel.

- **Development Environment**: The `dev` branch is used for development. When changes are pushed to the `dev` branch, an automatic deployment is triggered on Vercel, allowing developers to test the latest changes before merging them into the `main` branch for production deployment.

This setup simulates real-world workflows, ensuring that new features are tested in a staging environment (development) before being released to production.

### Deployed Links:

- **Production**: [https://flight-itinerary.vercel.app/](https://flight-itinerary.vercel.app/)
- **Development**: [https://flight-itinerary-dev.vercel.app/](https://flight-itinerary-dev.vercel.app/)

These links provide access to the live versions of the project in both environments. The production link hosts the stable version of the app, while the development link provides a testing environment for new features and changes.

