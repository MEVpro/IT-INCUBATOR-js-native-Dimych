// Objects training
type addressType = {
    streetName: string,
    city: Array<cityType>
}
type cityType = {
    title: string
    country: string
}
type roomsType = {
    id: number,
    roomName: string,
    square: number,
    ready: boolean,
    color: string,
    people: Array<string>
}
type officeType = {
    name: number
    roomsCount: number
    address: Array<addressType>
    rooms: Array<roomsType>
}
export const office = {
    name: 1607,
    roomsCount: 5,
    address: {
        streetName: 'Meleja str',
        city: {
            title: "Minsk",
            country: "Belarus"
        }
    },
    rooms: [
        {
            id: 1,
            roomName: "Boss Room",
            square: 30,
            ready: true,
            color: "white",
            people: ["Ян", "Дима"]
        },
        {
            id: 2,
            roomName: "Creators Room",
            square: 30,
            ready: true,
            color: "white",
            people: ["Саша", "Лена", "Таня", "Женя"]
        }
    ]
}