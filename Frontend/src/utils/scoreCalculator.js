export const calculateScore = (skills) => {
  let score = 0

  if (skills.includes('React')) score += 20
  if (skills.includes('NodeJS')) score += 20
  if (skills.includes('MongoDB')) score += 15

  return score
}