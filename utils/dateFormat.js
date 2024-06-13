// Utility function to format date
module.exports = (timestamp) => {
    return new Date(timestamp).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
};
