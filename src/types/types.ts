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
    elevation: number
    hourly: {
        data: hour[]
    }
    lat: string
    lon: string
    place_id: string
    name: string
    state: string
    timezone: string
    units: string
}

export interface hour {
    cloud_cover: {
        total: number
    }
    date: string
    icon: number
    precipitation: {
        total: number
        type: string
    }
    summary: string
    temperature: number
    weather: string
    wind: {
        speed: number
        dir: string
        angle: number
    }
}