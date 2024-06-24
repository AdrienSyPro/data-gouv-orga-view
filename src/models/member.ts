import type User from "./user";

export default interface Member {
    role: string,
    since: Date,
    user: User,
}