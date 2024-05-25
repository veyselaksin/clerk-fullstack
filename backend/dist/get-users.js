"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function getUsers(req, res) {
    const users = await clerkClient.users.list();
    console.log(users);
    res.status(200).json(users);
}
exports.default = getUsers;
//# sourceMappingURL=get-users.js.map