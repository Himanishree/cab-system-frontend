# cab-system frontend

This is a cab booking system that allows users to book cabs and track their bookings. It is built with JavaScript, CSS, and MongoDB for the backend.

This project is live on

https://cab.himanishree.site/

## Requirements

The system has the following requirements:

- The system should be able to manage cab booking.

- The user should be able to book a cab by providing the user's email, source, and destination.

- The system should be able to calculate the shortest possible time from source to destination. E.g. There are multiple ways from A to D, but the shortest route will be via C.

- There are a total of 5 cabs with different pricing. (Price/minute)

- No cab should have an overlapping start and end time.

- The system should provide the estimated cost depending on the cab chosen and the time taken to reach the destination.

- The system should be able to track the cab booking.

- Users should be able to view and edit the cabs and their pricing.

## Installation

To install and run the project, follow these steps:

Clone the repository:
https://github.com/Himanishree/cab-system-frontend.git

Install the dependencies:
```
npm install
```

Start the server:
```
npm run dev
```
Open the application in your browser at http://localhost:3000

## Usage

To use the Cab System, follow these steps:

- Register as a new user or log in if you already have an account.

- Select the cab type you want to book and provide the source and destination details.

- The system will calculate the estimated cost and shortest possible time for the trip.

- Confirm the booking and track the cab status.

- View and edit the available cabs and their pricing from the admin dashboard.
