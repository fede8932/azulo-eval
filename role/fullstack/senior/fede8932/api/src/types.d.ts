export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type Visibility = 'great' | 'good' | 'ok' | 'poor'

export interface  DiaryEntry {
    id: number,
    date: string,
    weather: Weather,
    visibility: Visibility,
    comment: string
}
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

export interface LocationAttributes {
    country: string;
    province_or_state: string;
    latitude: number;
    longitude: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface AirportAttributes {
    name: string;
    airportOperatorId: number;
    airportCode: string;
    locationId: number;
    priorityOrder: number;
    createdAt: Date;
    updatedAt: Date;
}

export type AirportOperatorAttributes = Omit<AirportAttributes, 'airportOperatorId', 'airportCode', 'locationId', 'priorityOrder'>

export interface ResAirportsAttributes extends AirportAttributes {
    id: number
}

export interface ResAirportAttributes extends ResAirportsAttributes {
    airport_operator: object;
    location: object;
}