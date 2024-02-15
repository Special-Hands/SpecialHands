
export const quickFetch = async(url: string, method: string, body: object) => {
    try {
        const res = await fetch(url, {
            method: method.toUpperCase(),
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        });
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