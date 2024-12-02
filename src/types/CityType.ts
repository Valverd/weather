export interface PropsCity {
    current: {
        cloud_cover: number
        icon: string
        icon_num: number
        precipitation: {
            total: number
            type: string
        }
        summary: string
        temperature: number
        wind: {
            angle: number
            dir: string
            speed: number
        }
    }
    daily: null
    lat: string
    lon: string
    place_id: string
    timezone: string
    units: string
}