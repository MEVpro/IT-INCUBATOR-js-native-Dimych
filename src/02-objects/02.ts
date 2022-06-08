// Objects training
type cityType = {
    title: string
    country: string
}
type officeType = {
    id: number
    roomsCount: number
    rooms:
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