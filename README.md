# Riverside Connect

Church Resource Booking System

## Overview

Riverside Connect is a full-stack application that allows church administrators and members to manage resources and create bookings while preventing scheduling conflicts.

Built with:

- React
- TypeScript
- Express
- Supabase
- Swagger

---

## Features

### Resource Management
- Create resources
- View resources
- Update resources
- Delete resources

### Booking Management
- Create bookings
- View bookings
- Update booking status
- Delete bookings

### Validation
- Input validation using Zod
- Booking conflict detection
- Error handling

### Statistics
- Booking statistics endpoint
- Resource usage tracking

### API Documentation
- Swagger UI documentation

---

## API Endpoints

### Resources

```http
GET /api/resources
POST /api/resources
PUT /api/resources/:id
DELETE /api/resources/:id
```

### Bookings

```http
GET /api/bookings
POST /api/bookings
GET /api/bookings/:id
PATCH /api/bookings/:id
DELETE /api/bookings/:id
GET /api/bookings/stats
```

---

## Local Setup

### Backend

```bash
cd backend
npm install
npm run dev
```

Runs on:

```text
http://localhost:5000
```

Swagger:

```text
http://localhost:5000/api/docs
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on:

```text
http://localhost:5173
```

---

## Environment Variables

Create a `.env` file in the backend directory:

```env
SUPABASE_URL=your_url
SUPABASE_ANON_KEY=your_key
```

---

## Author

Bao M.
