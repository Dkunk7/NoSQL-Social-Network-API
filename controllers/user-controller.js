const { User } =  require(`../models`);

const userController = {
    // get all users
    getAllUsers: function(req, res) {
        User.find({})
            .populate({
                path: `thoughts`,
                select: `-__v`
            })
            .populate({
                path: `friends`,
                select: `-__v`
            })
            .select(`-__v`)
            .sort({ _id: -1 })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    // get single user
    getUserById: function({ params }, res) {
        User.findOne({ _id: params.userId })
            .populate({
                path: `thoughts`,
                select: `-__v`
            })
            .populate({
                path: `friends`,
                select: `-__v`
            })
            .select(`-__v`)
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: `No user found with this id :(` });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    // create user
    createUser: function({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err));
    },
    // update user by id
    updateUser: function({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.userId }, body, { new: true, runValidators: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: `No user found with this id :(` });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },
    // delete user
    deleteUser: function({ params }, res) {
        User.findOneAndDelete({ _id: params.userId })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: `No user found with this id :(` });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },
    // add new friend to friends list
    addFriend: function({ params, body }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $push: { friends: body } },
            { new: true, runValidators: true }
        )
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: `No user found with this id :(` });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },
    // remove friend from friends list
    removeFriend: function({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            // not sure if I have to change something else to friendId for this
            { $pull: { friends: { friendId: params.friendId } } },
            { new: true }
        )
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));
    }
};

module.exports = userController;