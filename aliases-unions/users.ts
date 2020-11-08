// accountInfo
// charInfo
// PlayerInfor

type AccountInfo = {
  id: number,
  name: string,
  email?: string,  // "?" indicates that the item is optional, so it is not mandatory in the declaration
}

const account: AccountInfo = {
  id: 123,
  name: "Willy"
}

type CharInfo = {
  nickname: string,
  level: number
}

const char: CharInfo = {
  nickname: "nick",
  level: 100
}

// intersection is "&", an and operator
type PlayerInfo = AccountInfo & CharInfo // this type was defined as an intersection between types AccountInfo and CharInfo, so it will be constituted by both 

const player: PlayerInfo = {
  id: 123,
  name: "will",
  nickname:"nick",
  level: 100
}