export type authJWT = {
    company_id: string
    company_name: string
    exp: number
    iat: number
    is_admin: boolean
    jti: string
    name: string
    roles: []
    team_member_ids: []
    token_type: string
    user_id: number
}

export type Tcontext = {
    authToken: string
    refreshToken: string
    user: {
        id: number
        name: string
    }
    admin: boolean
    roles: string[]
    company: {
        id: string
        name: string
    }
}

interface ContextProps {
    sideMenuOpen: boolean,
    openSideMenu: () => void,
    closeSideMenu: () => void,
}

interface UIState {
    sideMenuOpen: boolean
}

export type UIActionType =
    | {
          type: 'OPEN_SIDENAV'
      }
    | { type: 'CLOSE_SIDENAV' }
