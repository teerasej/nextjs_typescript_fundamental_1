
import type { NextApiRequest, NextApiResponse} from "next"
import type { AuthResult } from '../types/auth-result'

export default function handler( 
    req: NextApiRequest,
    res: NextApiResponse<AuthResult>
) {
    const { username, password } = req.body

    res.status(200).json({ 
        result: true, 
        message: `Hello ${username}`
    })
}