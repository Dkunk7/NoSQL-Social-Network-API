const router = require(`express`).Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require(`../../controllers/user-controller`);

router
    .route(`/`)
    .get(getAllUsers)
    .post(createUser);

router
    .route(`/:userId`)
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

router
    .route(`/:userId/friends`)
    .post(addFriend);

router
    // does having :friendId on the end mess with adding a friend?
    .route(`/:userId/friends/:friendId`)
    // should this be post or put? The challenges says post, but im not sure
    // .post(addFriend)
    // same concern as above
    .delete(removeFriend);

module.exports = router;