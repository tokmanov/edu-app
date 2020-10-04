/* user из БД */
const user = {
    name: "Иван",
    lastname: "Иванов",
    email: "ivanov@mail.ru",
    id: "1",
    about: "Тут я рассказываю о себе...",
    avatar: "https://www.pngitem.com/pimgs/m/80-800194_transparent-users-icon-png-flat-user-icon-png.png"
}
const users = {
    0: {name: "Марина", lastname: "Крутелева", id:1},
    1: {name: "Марина", lastname: "Солдатова", id:2},
    2: {name: "Ева", lastname: "Жолдина", id:3},
    3: {name: "Нона", lastname: "Мандрыкина", id:4},
    4: {name: "Ева", lastname: "Мандрыкина", id:5},
    5: {name: "Венедикт", lastname: "Солдатов", id:6},
    6: {name: "Нона", lastname: "Язина", id:7},
    7: {name: "Сигизмунд", lastname: "Моряев", id:8},
    8: {name: "Ульяна", lastname: "Иньшова", id:9},
    9: {name: "Юнона", lastname: "Крутелева", id:10},
    10:{name: "Самсон", lastname: "Мандрыкин", id:11}
}

export function getUser(userId){
    for (let i = 0; i < Object.keys(users).length; i++)
        if (users[i].id == userId) return users[i];
            return user;
}
export function getUsers(){
    return users;
}