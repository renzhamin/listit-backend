import { validateAccessToken, validateRefreshToken } from "../utils/verifyToken"

export const verifyAccessToken = (req, res, next) => {
    const accessToken = req.cookies.accessToken
    if (!accessToken)
        return res.status(401).json({ tokenError: "No access token" })
    const user = validateAccessToken(accessToken)

    if (user.tokenError)
        return res.status(401).json({
            error: "Invalid Access token",
            tokenError: user.tokenError,
        })

    req.user = user
    return next()
}

export const verifyRefreshToken = async (req, res, next) => {
    const refreshToken = req.cookies.refreshToken
    if (!refreshToken)
        return res.status(401).json({ tokenError: "No refresh token" })

    const user = await validateRefreshToken(refreshToken)

    if (!user) {
        res.clearCookie("refreshToken")
        return res.status(401).json({ tokenError: "Invalid Refresh Token" })
    }

    req.user = user
    return next()
}
