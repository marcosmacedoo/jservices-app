export function Api() {
    return {
        makeApiRequest: async (url, method = 'GET', data = {}) => {
            const response = await fetch(url, {
                method,
                body: JSON.stringify(data),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            const responseData = await response.json()

            return responseData
        },
    }
}
