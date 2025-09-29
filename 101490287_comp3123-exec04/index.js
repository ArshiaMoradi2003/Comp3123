const path = require("path");
const express = require("express");
const app = express();

// Parse JSON bodies
app.use(express.json());

// Serve static files from /public (e.g., /instruction.html)
app.use(express.static(path.join(__dirname, "public")));

// Optional: make "/" open instruction.html for convenience
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "instruction.html"));
});

// GET /hello  -> plain text
app.get("/hello", (req, res) => {
    res.type("text/plain").send("Hello Express JS");
});

// GET /user?firstname=&lastname=  -> defaults if missing
app.get("/user", (req, res) => {
    const firstname = req.query.firstname || "Pritesh";
    const lastname = req.query.lastname || "Patel";
    res.json({ firstname, lastname });
});

// POST /user/:firstname/:lastname  -> path params
app.post("/user/:firstname/:lastname", (req, res) => {
    const { firstname, lastname } = req.params;
    res.json({ firstname, lastname });
});

// POST /users  -> expects an array of { firstname, lastname }
app.post("/users", (req, res) => {
    if (!Array.isArray(req.body)) {
        return res.status(400).json({
            error: "Request body must be a JSON array of users",
            example: [
                { firstname: "Pritesh", lastname: "Patel" },
                { firstname: "John", lastname: "Doe" }
            ]
        });
    }
    res.json(req.body);
});

// (Optional) simple 404 for unknown routes (after all the above)
app.use((req, res) => {
    res.status(404).json({ error: "Not found" });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`ℹ️  Open /instruction.html or just /`);
});
