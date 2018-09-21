
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const middleware = [thunk];

/* ... - оператор расширения
 * - позволяет расширять выражения в тех местах, где
 * - предусмотрено использование нескольких аргументов ( при выозовах функций ) или
 * - ожидается несколько элементов ( для массивов )
 */
const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  // подключение расширения для chrome
    )
);

export default store;