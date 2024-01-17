import { defineStore } from 'pinia'
const SETTINGS_LOCAL_STORAGE_KEY = 'score'
interface State {
    userList: UserInfo[]
    trackBets: boolean
    scoreSteps: number[]
    betSteps: number[]
}

export type UserInfo = {
    userId: number
    name: string
    scorePerRound: number[]
    betPerRound: number[]
    currentRound: number
    currentBet: number
}
const DefaultSettings = () => {
    return {
        userList: [{ userId: 0, name: 'player1', scorePerRound: [], betPerRound: [], currentRound: 0, currentBet: 0 }],
        trackBets: false,
        scoreSteps: [1, 5, 10],
        betSteps: [1, 2, 5, 10],
    }
}
const updateLocalStorage = (state: State) => {
    localStorage.setItem(SETTINGS_LOCAL_STORAGE_KEY, JSON.stringify(state))
}
const getSettings = () => {
    const settings = localStorage.getItem(SETTINGS_LOCAL_STORAGE_KEY)

    return settings ? JSON.parse(settings) : DefaultSettings()
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
        }
    },
    actions: {

        addUser() {
            const username = `player${this.userList.length + 1}`
            this.userList.push({ userId: this.userList.length + 1, name: username, betPerRound: [], scorePerRound: [], currentBet: 0, currentRound: 0 })
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
        getCumulativeScore(userId: number) {
            return this.cumulativeScore[userId]
        }

    }
})


