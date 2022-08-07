// React
import { createContext, FC, PropsWithChildren, useReducer } from 'react'
// Types
import { ContextProps, UIState, UIActionType } from './types'

export const UIContext = createContext({} as ContextProps)

// Initial State
const UI_INITIAL_STATE: UIState = {
    sideMenuOpen: false
}

// Reducer
const UIReducer = (state: UIState, action: UIActionType) => {
    switch (action.type) {
        case 'OPEN_SIDENAV':
            return { ...state, sideMenuOpen: true }
        case 'CLOSE_SIDENAV':
            return { ...state, sideMenuOpen: false }
        default:
            return state
    }
}

export const UIContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE)

    const openSideMenu = () => {
        dispatch({ type: 'OPEN_SIDENAV' })
    }

    const closeSideMenu = () => {
        dispatch({ type: 'CLOSE_SIDENAV' })
    }

    return (
        <UIContext.Provider
            value={{
                ...state,
                openSideMenu,
                closeSideMenu
            }}
        >
            {children}
        </UIContext.Provider>
    )
}
