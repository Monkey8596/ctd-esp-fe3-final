export const reducer = (state, action) => {

    switch (action.type) {
        case "TOGGLE_THEME":
            const newTheme = state.theme === "dark" ? "light" : "dark";
            return {...state, theme: newTheme};
        case 'GET_DENTISTS':
            return {...state, dentists: action.payload}
        case "GET_DENTIST":
            return {}
        case "ADD_FAV":
            return {...state, favs: [...state.favs, action.payload]}
        case "REMOVE_FAV":
            const filteredFavs = state.favs.filter((fav) => fav.id !== action.payload.id)
            return {...state, favs:filteredFavs}
    }
}