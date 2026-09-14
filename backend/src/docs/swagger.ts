export const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "Riverside Connect API",
    version: "1.0.0",
    description: "Church resource booking system API",
  },

  servers: [
    {
      url: "http://localhost:5000",
    },
  ],

  paths: {
    "/api/bookings": {
      get: {
        summary: "Get all bookings",
      },

      post: {
        summary: "Create booking",
      },
    },

    "/api/bookings/{id}": {
      get: {
        summary: "Get booking by ID",
      },

      patch: {
        summary: "Update booking status",
      },

      delete: {
        summary: "Delete booking",
      },
    },
  },
};