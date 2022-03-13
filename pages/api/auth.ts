
import type { NextApiRequest, NextApiResponse} from "next"
import type { AuthResult } from '../types/auth-result'


export default function handler( 
    req: NextApiRequest,
    res: NextApiResponse<AuthResult>
) {
    res.status(200).json({ 
        result: true, 
        message: 'Hello World' 
    })
}