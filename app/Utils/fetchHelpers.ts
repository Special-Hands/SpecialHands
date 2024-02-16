
export const quickFetch = async(url: string, method: string, body = {}, headers = {}) => {
    try {
        const options : RequestInit = {
            method: method.toUpperCase(),
            headers: {
                ...headers,
                'Content-type': 'application/json'
            },
        }
        if (Object.entries(body).length !== 0) options.body = JSON.stringify(body)
        const res = await fetch(url, options );
        if (!res.ok) throw new Error('Server-side Error')
        const jsonRes = res.json()
        return jsonRes
    } catch(err) {
        if (err instanceof Error) {
            console.warn(err.message)
            return null
        }
    }

}