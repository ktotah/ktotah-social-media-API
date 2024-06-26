const { Thought, User } = require('../models');

module.exports = {
    // Get all thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Get a single thought by ID
    async getThoughtById(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId });

            if (!thought) {
                res.status(404).json({ message: "No thought found with this ID" });
                return;
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Create a new thought
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $addToSet: { thoughts: thought._id } }
            );
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Update a thought by ID
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId }, 
                {$set: req.body},
                { runValidators: true, new: true }
            );

            if (!thought) {
                res.status(404).json({ message: "No thought found with this ID" });
                return;
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Delete a thought by ID
    async deleteThought(req, res) {
        try {
          console.log("Request to delete thought with ID:", req.params.thoughtId);
          const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
      
          if (!thought) {
            console.log("No thought found with this ID");
            return res.status(404).json({ message: "No thought found with this ID" });
          }
      
          console.log("Thought found:", thought);
      
          await User.findOneAndUpdate(
            { _id: thought.userId },
            { $pull: { thoughts: req.params.thoughtId } },
            { new: true }
          );
      
          console.log("Associated thought removed from user");
      
          res.json({ message: "Thought deleted!" });
        } catch (err) {
          console.error("Error deleting thought:", err);
          res.status(500).json(err);
        }
      },
    // Add a reaction to a thought
    async addReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: req.body } },
                {new: true}
            );

            if (!thought) {
                res.status(404).json({ message: "No thought found with this ID" });
                return;
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Remove a reaction from a thought
    async removeReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { new: true }
            );

            if (!thought) {
                res.status(404).json({ message: "No thought found with this ID" });
                return;
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};
