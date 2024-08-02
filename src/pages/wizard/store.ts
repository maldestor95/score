import { defineStore } from 'pinia'
import { v4 as uuidv4 } from "uuid"

const SETTINGS_LOCAL_STORAGE_KEY = 'score'
interface State {
    userList: UserInfo[]
    trackBets: boolean
    scoreSteps: number[]
    betSteps: number[]
    targetGame?: string
}

export type UserInfo = {
    userId: string
    name: string
    scorePerRound: number[]
    betPerRound: number[]
    currentRound: number
    currentBet: number

}
const DefaultSettings = () => {
    const newUUID = uuidv4()
    return {
        userList: [{
            userId: newUUID
            , name: createPlayerName(newUUID), scorePerRound: [], betPerRound: [], currentRound: 0, currentBet: 0
        }],
        trackBets: false,
        scoreSteps: [1, 5, 10],
        betSteps: [1, 2, 5, 10],
    }
}

const gameSetup = [
    { game: 'Uno', steps: [-20, -10, -5, -2, -1, 1, 2, 5, 10, 20], betSteps: [] },
    { game: 'Wizard', steps: [-20, -10, 10, 20], betSteps: [-1, 1] },
]

const preDefinedGames = gameSetup.map(game => game.game)

const updateLocalStorage = (state: State) => {
    localStorage.setItem(SETTINGS_LOCAL_STORAGE_KEY, JSON.stringify(state))
}
const getSettings = () => {
    const settings = localStorage.getItem(SETTINGS_LOCAL_STORAGE_KEY)

    return settings ? JSON.parse(settings) : DefaultSettings()
}

const createPlayerName = (uuidString: string): string => {
    return `player-${uuidString.split('-')[0]}`

}
export const useScoreStore = defineStore('scores', {
    state: (): State => { return getSettings() }
    ,
    getters: {
        getUsers: (state) => { return state.userList },
        getRoundNumber: (state) => {
            if (state.userList.length == 0) return 0
            if (!state.userList[0].scorePerRound) return 0
            return state.userList[0].scorePerRound.length
        },
        totalScore: (state) => {
            return state.userList.map(user => {
                if (user.scorePerRound.length == 0) return 0
                return user.scorePerRound.reduce((a, b) => a + b)
            })
        },
        cumulativeScore: (state) => {
            return state.userList.map(user => {
                if (user.scorePerRound.length == 0) return 0
                let cumul: number[] = []
                for (let index = 0; index < user.scorePerRound.length; index++) {
                    if (index == 0) { cumul.push(user.scorePerRound[index]) } else {

                        cumul.push(user.scorePerRound[index] + cumul[index - 1])
                    }

                }
                return cumul
            })
        },
        isGameStarted: (state) => {
            return state.userList[0].scorePerRound.length > 0
        },
        preDefinedGames: () => {
            return preDefinedGames
        }

    },
    actions: {
        setGame(gameName: string) {
            if (preDefinedGames.includes(gameName)) {
                const targetGame = gameSetup.filter(game => game.game == gameName)[0]
                this.scoreSteps = targetGame.steps
                this.betSteps = targetGame.betSteps
                this.trackBets = targetGame.betSteps.length > 0
                this.targetGame = gameName
            }
        },
        addUser() {
            const newUUID = uuidv4()
            const username = createPlayerName(newUUID)
            this.userList.push({ userId: newUUID, name: username, betPerRound: [], scorePerRound: [], currentBet: 0, currentRound: 0 })
        },
        deleteUser(userId: number) {
            console.log(userId + 'delete')
            this.userList.splice(userId - 1, 1)
        },
        updateUserName(userId: number, username: string) {
            this.userList[userId - 1].name = username

        },
        newRound() {
            // if (this.trackBets)
            this.userList.forEach(user => {
                user.betPerRound.push(user.currentBet)
                user.currentBet = 0
            })
            this.userList.forEach(user => {
                user.scorePerRound.push(user.currentRound)
                user.currentRound = 0
            })
            updateLocalStorage(this.$state)
        },
        editRoundOfPlayer(userId: number, scoreForTheRound: number, roundId?: number) {
            if (roundId) {
                this.userList[userId].scorePerRound[roundId] = scoreForTheRound
            }
            else
                this.userList[userId].scorePerRound.splice(-1, 1, scoreForTheRound)
        },
        editBetOfPlayer(userId: number, scoreForTheRound: number, roundId?: number) {
            if (roundId) {
                this.userList[userId].betPerRound[roundId - 1] = scoreForTheRound
            }
            else
                this.userList[userId].betPerRound.splice(-1, 1, scoreForTheRound)
        },
        newGame() {
            this.userList.forEach(user => {
                user.scorePerRound = []
                user.betPerRound = []
            })
            updateLocalStorage(this.$state)
        },
        getScore(userId: number) {
            return this.totalScore[userId]
        },

        editCurrentRound(userId: number, newValue: number) {
            this.userList[userId].currentRound = newValue
        },
        editCurrentBet(userId: number, newValue: number) {
            this.userList[userId].currentBet = newValue
        }
        ,
        getCumulativeScore(userId: number): number | number[] {
            return this.cumulativeScore[userId]
        }

    }
})


