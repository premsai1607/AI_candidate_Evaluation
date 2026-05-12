export const getRecommendation = (score) => {
  if (score >= 80) return 'Recommended'
  if (score >= 50) return 'Average Match'

  return 'Rejected'
}