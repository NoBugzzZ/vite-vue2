export async function GetInfo(params) {
    const res = await fetch('http://localhost:7777')
    const data = await res.json()
    return data
}