const router = require(`express`).Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require(`../../controllers/thought-controller`);

router
    .route(`/`)
    .get(getAllThoughts)

router
    .route(`/:userId`)
    .post(createThought);

router
    .route(`/:thoughtId`)
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

router
    // concerned with layout here, just like in user routes
    .route(`/:thoughtId/reactions`)
    .post(addReaction)

router
    .route(`/:thoughtId/reactions/:reactionId`)
    .delete(removeReaction);

module.exports = router;