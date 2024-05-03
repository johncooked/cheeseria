const request = require("supertest");
const app = require("../src/app");

// Test suite for the findCheese endpoint
describe("GET /api/cheeses", () => {
    it("should return a list of cheeses", async () => {
        const response = await request(app).get("/api/cheeses");

        expect(response.status).toBe(200);

        expect(Array.isArray(response.body)).toBe(true);

        response.body.forEach((cheese) => {
            expect(cheese).toHaveProperty("id");
            expect(cheese).toHaveProperty("name");
            expect(cheese).toHaveProperty("image");
            expect(cheese).toHaveProperty("pricePerKilo");
            expect(cheese).toHaveProperty("colour");
        });
    });

    // Send a GET request to the findCheese endpoint with custom pagination parameters
    it("should paginate the list of cheeses", async () => {
        const response = await request(app)
            .get("/api/cheeses")
            .query({ offset: 0, limit: 5 });

        expect(response.status).toBe(200);

        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBe(5); // Should have the first 5 cheeses
    });

    // Send a GET request to the findCheese endpoint with invalid query parameters
    it("should handle invalid query parameters gracefully", async () => {
        const response = await request(app)
            .get("/api/cheeses")
            .query({ offset: -1, limit: "abc" });

        expect(response.status).toBe(400);

        expect(response.body).toHaveProperty("error");
    });
});
