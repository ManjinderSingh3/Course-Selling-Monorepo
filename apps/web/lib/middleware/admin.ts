import { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";


export default async function AdminMiddleware(req: NextRequest) {
    let isAdmin = false;

    const session = (await getToken({
        req,
        secret: "50whtXdNwbdmMPe9EEdt9SEI4ls9A0gS+9fwWjKjzd0="
    }))
} 
