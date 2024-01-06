import { defineStore } from 'pinia'

interface State {
    userList: UserInfo[]
    trackBets: boolean
    scoreSteps: number[]
    betSteps: number[]
}

export type UserInfo = {
    name: string
    scorePerRound: number[]
    betPerRound: number[]
    currentRound: number
    currentBet: number
}
export const useScoreStore = defineStore('scores', {
    state: (): State => {
        return {
            userList: [{ name: 'player1', scorePerRound: [], betPerRound: [], currentRound: 0, currentBet: 0 }],
            trackBets: false,
            scoreSteps: [1, 5, 10],
            betSteps: [1, 2, 5, 10],
        }
    },
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
        isGameStarted: (state) => {
            return state.userList[0].scorePerRound.length > 0
        }
    },
    actions: {

        addUser() {
            const username = `player${this.userList.length + 1}`
            this.userList.push({ name: username, betPerRound: [], scorePerRound: [], currentBet: 0, currentRound: 0 })
        },
        deleteUser(userId: number) {
            console.log(userId + 'delete')
            this.userList.splice(userId - 1, 1)
        },
        updateUserName(userId: number, username: string) {
            this.userList[userId - 1].name = username
        },
        newRound() {
            if (this.trackBets)
                this.userList.forEach(user => {
                    user.betPerRound.push(user.currentBet)
                    user.currentBet = 0
                })
            this.userList.forEach(user => {
                user.scorePerRound.push(user.currentRound)
                user.currentRound = 0
            })
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
        },
        getScore(userId: number) {
            return this.totalScore[userId]
        }


    }
})


