import { configureStore, createSlice, type PayloadAction } from '@reduxjs/toolkit';

const userInitialState = {
    userId: '',
    firstname: '',
    lastName: '',
    birthday: '',
    gender: '',
    email: '',
};

interface Book {
    title: string;
    author: string;
    publishedYear: number;
    coverURL: string;
}

const initialBooksState = {
    books: [], // Start with an empty array of books
    searchTerm: '',
    isLoading: false,
    error: null,
};

const bookDetailsInitialState: Book = {
    title: '',
    author: '',
    publishedYear: 0,
    coverURL: '',
}

const userDataSlice = createSlice({
    name: 'userData',
    initialState: userInitialState,
    reducers: {
        login(state, action) {
            console.log('Logging user info... pls wait')
            state.userId = action.payload.userId;
            state.firstname = action.payload.firstname;
            state.lastName = action.payload.lastName;
            state.birthday = action.payload.birthday;
            state.gender = action.payload.gender;
            state.email = action.payload.email;
            //jwt token
        },
        logout(state) {
            state.userId = '';
            state.firstname = '';
            state.lastName = '';
            state.birthday = '';
            state.gender = '';
            state.email = '';
        }
    }
});

const bookSearchSlice = createSlice({
    name: 'bookSearch',
    initialState: initialBooksState,
    reducers: {
        setSearchTerm(state, action: PayloadAction<string>) {
            state.searchTerm = action.payload;
        },
        setSearchResults(state, action: PayloadAction<Book[]>) {
            state.books = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        setStartSearch(state) {
            state.isLoading = true;
            state.error = null;
        },
    }
});

const bookDetailsSlice = createSlice({
    name: 'bookDetails',
    initialState: bookDetailsInitialState,
    reducers: {
        setBookDetails(state, action: PayloadAction<Book>) {
            // Redux Toolkit automatically handles the immutability here
            state.author = action.payload.author;
            state.title = action.payload.title;
            state.coverURL = action.payload.coverURL;
            state.publishedYear = action.payload.publishedYear;
        },
        resetBookDetails(state) {
            state.author = '';
            state.title = '';
            state.coverURL = '';
            state.publishedYear = 0;
        },
    }
})

const store = configureStore({
    reducer: {
        userData: userDataSlice.reducer,
        bookSearch: bookSearchSlice.reducer,
        bookDetails: bookDetailsSlice.reducer
    }
});

export const { login, logout } = userDataSlice.actions;
export const { setSearchTerm, setSearchResults, setStartSearch } = bookSearchSlice.actions;
export const { setBookDetails, resetBookDetails } = bookDetailsSlice.actions;

export default store;
